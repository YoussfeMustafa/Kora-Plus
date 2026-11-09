import { database, isFirebaseConfigured } from './firebase';
import { ref, set, update, onValue, onDisconnect } from 'firebase/database';
import { RoomState, Player, PlayFormat, GameModeId, AnyQuestion } from '../types/game';
import { generateQuestionPool } from '../data';

// Local multi-tab channel fallback
const channel = typeof window !== 'undefined' && 'BroadcastChannel' in window
  ? new BroadcastChannel('koora_plus_multiplayer')
  : null;

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

const mockRoomsStore: Record<string, RoomState> = {};

export async function createRoom(
  hostName: string,
  format: PlayFormat = 'multiplayer_ffa',
  selectedModes: GameModeId[] = []
): Promise<{ roomCode: string; playerId: string }> {
  const roomCode = generateRoomCode();
  const playerId = 'host_' + Math.random().toString(36).substring(2, 9);

  const initialHost: Player = {
    id: playerId,
    name: hostName.trim() || 'Host',
    avatar: '👑',
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    jokerUsed: false,
    team: format === 'multiplayer_team' ? 'A' : undefined,
    isHost: true,
    isReady: true,
    connected: true,
    lastSeen: Date.now(),
  };

  const initialRoom: RoomState = {
    code: roomCode,
    hostId: playerId,
    format,
    status: 'lobby',
    currentQuestionIndex: 0,
    selectedModes,
    questions: generateQuestionPool(selectedModes, 10),
    players: {
      [playerId]: initialHost,
    },
    teams: format === 'multiplayer_team' ? {
      A: { name: 'Team Green', score: 0, color: '#10b981', jokerUsed: false },
      B: { name: 'Team Gold', score: 0, color: '#f59e0b', jokerUsed: false },
    } : undefined,
    reactions: [],
    chatNotifications: [
      {
        id: 'msg_init',
        type: 'join',
        text: `${initialHost.name} created room ${roomCode}`,
        timestamp: Date.now(),
      },
    ],
  };

  if (isFirebaseConfigured && database) {
    try {
      const roomRef = ref(database, `rooms/${roomCode}`);
      await set(roomRef, initialRoom);
      const playerPresenceRef = ref(database, `rooms/${roomCode}/players/${playerId}/connected`);
      onDisconnect(playerPresenceRef).set(false);
    } catch (e) {
      console.warn('Firebase set room error, using fallback:', e);
    }
  }

  // Local fallback
  mockRoomsStore[roomCode] = initialRoom;
  if (channel) {
    channel.postMessage({ type: 'ROOM_UPDATE', room: initialRoom });
  }

  return { roomCode, playerId };
}

export async function joinRoom(
  roomCode: string,
  playerName: string
): Promise<{ success: boolean; playerId: string; message?: string }> {
  const cleanCode = roomCode.trim().toUpperCase();
  const playerId = 'p_' + Math.random().toString(36).substring(2, 9);

  if (isFirebaseConfigured && database) {
    try {
      // In Firebase, push player to room
      const playerRef = ref(database, `rooms/${cleanCode}/players/${playerId}`);
      const newPlayer: Player = {
        id: playerId,
        name: playerName.trim() || 'Player',
        avatar: '⚽',
        score: 0,
        streak: 0,
        maxStreak: 0,
        correctAnswers: 0,
        totalAnswers: 0,
        jokerUsed: false,
        isHost: false,
        isReady: true,
        connected: true,
        lastSeen: Date.now(),
      };

      await set(playerRef, newPlayer);
      const notifRef = ref(database, `rooms/${cleanCode}/chatNotifications/${Date.now()}`);
      await set(notifRef, {
        id: 'notif_' + Date.now(),
        type: 'join',
        text: `${newPlayer.name} joined the locker room`,
        timestamp: Date.now(),
      });

      onDisconnect(ref(database, `rooms/${cleanCode}/players/${playerId}/connected`)).set(false);
      return { success: true, playerId };
    } catch (err: unknown) {
      console.warn('Firebase join room failed, falling back:', err);
    }
  }

  // Fallback
  let room = mockRoomsStore[cleanCode];
  if (!room) {
    // Check if we can build or find room
    room = {
      code: cleanCode,
      hostId: 'host_fallback',
      format: 'multiplayer_ffa',
      status: 'lobby',
      currentQuestionIndex: 0,
      selectedModes: [],
      questions: generateQuestionPool([], 10),
      players: {},
      reactions: [],
      chatNotifications: [],
    };
    mockRoomsStore[cleanCode] = room;
  }

  const teamChoice = room.format === 'multiplayer_team'
    ? Object.values(room.players).filter((p) => p.team === 'A').length <= Object.values(room.players).filter((p) => p.team === 'B').length
      ? 'A'
      : 'B'
    : undefined;

  const playerObj: Player = {
    id: playerId,
    name: playerName.trim() || `Player ${Object.keys(room.players).length + 1}`,
    avatar: '⚽',
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    jokerUsed: false,
    team: teamChoice,
    isHost: Object.keys(room.players).length === 0,
    isReady: true,
    connected: true,
    lastSeen: Date.now(),
  };

  room.players[playerId] = playerObj;
  room.chatNotifications.push({
    id: 'notif_' + Date.now(),
    type: 'join',
    text: `${playerObj.name} joined the locker room`,
    timestamp: Date.now(),
  });

  if (channel) {
    channel.postMessage({ type: 'ROOM_UPDATE', room });
  }

  return { success: true, playerId };
}

export function subscribeToRoom(
  roomCode: string,
  onUpdate: (room: RoomState | null) => void
): () => void {
  const cleanCode = roomCode.trim().toUpperCase();

  let unsubscribeFirebase: (() => void) | null = null;

  if (isFirebaseConfigured && database) {
    try {
      const roomRef = ref(database, `rooms/${cleanCode}`);
      const unsub = onValue(roomRef, (snapshot) => {
        const val = snapshot.val();
        if (val) {
          onUpdate(val as RoomState);
        }
      });
      unsubscribeFirebase = unsub;
    } catch (e) {
      console.warn('Firebase subscribe fallback:', e);
    }
  }

  // Initial local state delivery
  if (mockRoomsStore[cleanCode]) {
    onUpdate(mockRoomsStore[cleanCode]);
  }

  // Multi-tab listener
  const messageHandler = (e: MessageEvent) => {
    if (e.data && e.data.type === 'ROOM_UPDATE' && e.data.room?.code === cleanCode) {
      mockRoomsStore[cleanCode] = e.data.room;
      onUpdate(e.data.room);
    }
  };

  if (channel) {
    channel.addEventListener('message', messageHandler);
  }

  return () => {
    if (unsubscribeFirebase) unsubscribeFirebase();
    if (channel) {
      channel.removeEventListener('message', messageHandler);
    }
  };
}

export async function updateRoomStatus(
  roomCode: string,
  updates: Partial<RoomState>
) {
  const cleanCode = roomCode.trim().toUpperCase();

  if (isFirebaseConfigured && database) {
    try {
      const roomRef = ref(database, `rooms/${cleanCode}`);
      await update(roomRef, updates);
      return;
    } catch (e) {
      console.warn('Firebase update failed, using fallback:', e);
    }
  }

  if (mockRoomsStore[cleanCode]) {
    Object.assign(mockRoomsStore[cleanCode], updates);
    if (channel) {
      channel.postMessage({ type: 'ROOM_UPDATE', room: mockRoomsStore[cleanCode] });
    }
  }
}

export async function sendReaction(
  roomCode: string,
  playerId: string,
  playerName: string,
  emoji: string
) {
  const cleanCode = roomCode.trim().toUpperCase();
  const reaction = {
    id: 'rx_' + Date.now() + Math.random().toString(36).substring(2, 6),
    playerId,
    playerName,
    emoji,
    timestamp: Date.now(),
  };

  if (isFirebaseConfigured && database) {
    try {
      const rxRef = ref(database, `rooms/${cleanCode}/reactions/${reaction.id}`);
      await set(rxRef, reaction);
      return;
    } catch (e) {
      console.warn('Reaction error:', e);
    }
  }

  if (mockRoomsStore[cleanCode]) {
    if (!mockRoomsStore[cleanCode].reactions) mockRoomsStore[cleanCode].reactions = [];
    mockRoomsStore[cleanCode].reactions.push(reaction);
    // Keep last 15
    if (mockRoomsStore[cleanCode].reactions.length > 15) {
      mockRoomsStore[cleanCode].reactions.shift();
    }
    if (channel) {
      channel.postMessage({ type: 'ROOM_UPDATE', room: mockRoomsStore[cleanCode] });
    }
  }
}

export async function submitMultiplayerScore(
  roomCode: string,
  playerId: string,
  points: number,
  isCorrect: boolean
) {
  const cleanCode = roomCode.trim().toUpperCase();
  const room = mockRoomsStore[cleanCode];
  const player = room?.players?.[playerId];
  const playerName = player?.name || 'Player';

  const updates: Partial<RoomState> = {
    lastScorerName: isCorrect ? playerName : undefined,
    lastScoreAmount: isCorrect ? points : undefined,
  };

  if (room && player) {
    player.totalAnswers += 1;
    if (isCorrect) {
      player.correctAnswers += 1;
      player.score += points;
      player.streak += 1;
      player.maxStreak = Math.max(player.maxStreak, player.streak);
    } else {
      player.streak = 0;
      player.score = Math.max(0, player.score - 50);
    }

    if (player.team && room.teams) {
      const teamKey = player.team;
      room.teams[teamKey].score = Object.values(room.players)
        .filter((p) => p.team === teamKey)
        .reduce((sum, p) => sum + p.score, 0);
    }

    if (channel) {
      channel.postMessage({ type: 'ROOM_UPDATE', room });
    }
  }

  await updateRoomStatus(cleanCode, updates);
}

