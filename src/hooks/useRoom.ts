import { useState, useEffect, useCallback } from 'react';
import { RoomState } from '../types/game';
import {
  createRoom,
  joinRoom,
  subscribeToRoom,
  updateRoomStatus,
  sendReaction,
  submitMultiplayerScore
} from '../services/multiplayer';

export function useRoom(roomCode?: string) {
  const [room, setRoom] = useState<RoomState | null>(null);
  const [playerId, setPlayerId] = useState<string>(() => {
    return (typeof window !== 'undefined' && localStorage.getItem('koora_player_id')) || '';
  });
  const [playerName, setPlayerName] = useState<string>(() => {
    return (typeof window !== 'undefined' && localStorage.getItem('koora_nickname')) || 'Player';
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!roomCode) return;

    setLoading(true);
    const unsubscribe = subscribeToRoom(roomCode, (updatedRoom) => {
      setRoom(updatedRoom);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [roomCode]);

  const handleCreate = useCallback(
    async (name: string, format = 'multiplayer_ffa') => {
      setLoading(true);
      setError(null);
      try {
        const res = await createRoom(name, format as 'multiplayer_ffa' | 'multiplayer_team');
        setPlayerId(res.playerId);
        setPlayerName(name);
        if (typeof window !== 'undefined') {
          localStorage.setItem('koora_player_id', res.playerId);
          localStorage.setItem('koora_nickname', name);
        }
        return res;
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Failed to create room');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleJoin = useCallback(async (code: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await joinRoom(code, name);
      if (res.success) {
        setPlayerId(res.playerId);
        setPlayerName(name);
        if (typeof window !== 'undefined') {
          localStorage.setItem('koora_player_id', res.playerId);
          localStorage.setItem('koora_nickname', name);
        }
      }
      return res;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleStartGame = useCallback(async () => {
    if (!roomCode || !room) return;
    await updateRoomStatus(roomCode, {
      status: 'playing',
      currentQuestionIndex: 0,
      serverStartTime: Date.now(),
    });
  }, [roomCode, room]);

  const handleReaction = useCallback(
    async (emoji: string) => {
      if (!roomCode || !playerId) return;
      await sendReaction(roomCode, playerId, playerName, emoji);
    },
    [roomCode, playerId, playerName]
  );

  const handleScore = useCallback(
    async (points: number, isCorrect: boolean) => {
      if (!roomCode || !playerId) return;
      await submitMultiplayerScore(roomCode, playerId, points, isCorrect);
    },
    [roomCode, playerId]
  );

  return {
    room,
    playerId,
    playerName,
    loading,
    error,
    createRoom: handleCreate,
    joinRoom: handleJoin,
    startGame: handleStartGame,
    sendReaction: handleReaction,
    submitScore: handleScore,
  };
}

