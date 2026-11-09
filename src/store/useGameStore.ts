import { create } from 'zustand';
import { AnyQuestion, GameModeId, PlayFormat } from '../types/game';
import { generateQuestionPool } from '../data';
import { calculateScore, calculatePenalty } from '../utils/scoring';
import { soundManager } from '../utils/sound';

export interface LocalPlayer {
  id: string;
  name: string;
  score: number;
  streak: number;
  jokerUsed: boolean;
  color: string;
}

export interface GameStoreState {
  format: PlayFormat;
  selectedModes: GameModeId[];
  questions: AnyQuestion[];
  currentQuestionIndex: number;
  
  // Scoring
  score: number;
  streak: number;
  maxStreak: number;
  correctCount: number;
  totalAnswered: number;
  fastestAnswerSeconds: number;

  // Question state
  isAnswered: boolean;
  isCorrect: boolean | null;
  jokerUsed: boolean;
  jokerActive: boolean;
  hintsUsedCount: number;
  selectedTier: 'easy' | 'medium' | 'hard' | null;

  // Steal round state
  stealActive: boolean;
  stealCountdown: number;
  stealSuccessPlayer: string | null;

  // Local Pass and Play
  localPlayers: LocalPlayer[];
  currentPlayerTurnIndex: number;

  // Notification banners
  lastScorerName: string | null;
  lastScoreAmount: number | null;

  // Actions
  setSelectedModes: (modes: GameModeId[]) => void;
  startSoloGame: (modes?: GameModeId[], count?: number) => void;
  startPassAndPlay: (playerNames: string[], modes?: GameModeId[], count?: number) => void;
  selectQuestionTier: (tier: 'easy' | 'medium' | 'hard') => void;
  activateJoker: () => void;
  incrementHintsUsed: () => void;
  submitAnswer: (
    isCorrect: boolean,
    timeLeftSeconds: number,
    totalTimeSeconds: number,
    stealingPlayerName?: string
  ) => void;
  triggerStealWindow: () => void;
  claimSteal: (playerName: string) => void;
  cancelSteal: () => void;
  nextQuestion: () => boolean; // returns false if finished
  resetGame: () => void;
}

const PLAYER_COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#8b5cf6', '#06b6d4'];

const ALL_MODES: GameModeId[] = [
  'career_path',
  'football_auction',
  'historic_lineup',
  'password_link',
  'lightning_round',
  'guess_match',
  'numbers_stats',
  'nicknames_terms',
  'referee_laws',
  'continental_tournaments',
  'joker_double',
  'tiered_risk',
  'steal_round',
];

export const useGameStore = create<GameStoreState>((set, get) => ({
  format: 'solo',
  selectedModes: ALL_MODES,
  questions: [],
  currentQuestionIndex: 0,
  
  score: 0,
  streak: 0,
  maxStreak: 0,
  correctCount: 0,
  totalAnswered: 0,
  fastestAnswerSeconds: 999,

  isAnswered: false,
  isCorrect: null,
  jokerUsed: false,
  jokerActive: false,
  hintsUsedCount: 0,
  selectedTier: null,

  stealActive: false,
  stealCountdown: 5,
  stealSuccessPlayer: null,

  localPlayers: [],
  currentPlayerTurnIndex: 0,

  lastScorerName: null,
  lastScoreAmount: null,

  setSelectedModes: (modes) => set({ selectedModes: modes }),

  startSoloGame: (modes, count = 10) => {
    const modesToUse = modes && modes.length > 0 ? modes : get().selectedModes;
    const questions = generateQuestionPool(modesToUse, count);
    
    set({
      format: 'solo',
      questions,
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      totalAnswered: 0,
      fastestAnswerSeconds: 999,
      isAnswered: false,
      isCorrect: null,
      jokerUsed: false,
      jokerActive: false,
      hintsUsedCount: 0,
      selectedTier: null,
      stealActive: false,
      lastScorerName: null,
      lastScoreAmount: null,
    });
    soundManager.playWhistle();
  },

  startPassAndPlay: (playerNames, modes, count = 10) => {
    const modesToUse = modes && modes.length > 0 ? modes : get().selectedModes;
    const questions = generateQuestionPool(modesToUse, count);
    
    const players: LocalPlayer[] = playerNames.map((name, index) => ({
      id: `p_${index}`,
      name: name.trim() || `Player ${index + 1}`,
      score: 0,
      streak: 0,
      jokerUsed: false,
      color: PLAYER_COLORS[index % PLAYER_COLORS.length],
    }));

    set({
      format: 'local_pass_play',
      localPlayers: players,
      currentPlayerTurnIndex: 0,
      questions,
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      totalAnswered: 0,
      fastestAnswerSeconds: 999,
      isAnswered: false,
      isCorrect: null,
      jokerUsed: false,
      jokerActive: false,
      hintsUsedCount: 0,
      selectedTier: null,
      stealActive: false,
      lastScorerName: null,
      lastScoreAmount: null,
    });
    soundManager.playWhistle();
  },

  selectQuestionTier: (tier) => set({ selectedTier: tier }),

  activateJoker: () => {
    const { format, localPlayers, currentPlayerTurnIndex, jokerUsed } = get();
    if (format === 'local_pass_play') {
      const activePlayer = localPlayers[currentPlayerTurnIndex];
      if (activePlayer && !activePlayer.jokerUsed) {
        soundManager.playJoker();
        const updatedPlayers = [...localPlayers];
        updatedPlayers[currentPlayerTurnIndex] = {
          ...activePlayer,
          jokerUsed: true,
        };
        set({
          localPlayers: updatedPlayers,
          jokerActive: true,
          jokerUsed: true,
        });
      }
    } else {
      if (!jokerUsed) {
        soundManager.playJoker();
        set({ jokerActive: true, jokerUsed: true });
      }
    }
  },

  incrementHintsUsed: () => {
    set((state) => ({ hintsUsedCount: state.hintsUsedCount + 1 }));
  },

  submitAnswer: (isCorrect, timeLeftSeconds, totalTimeSeconds, stealingPlayerName) => {
    const state = get();
    if (state.isAnswered) return;

    const timeSpent = Math.max(1, totalTimeSeconds - timeLeftSeconds);
    const newFastest = isCorrect ? Math.min(state.fastestAnswerSeconds, timeSpent) : state.fastestAnswerSeconds;
    const currentQ = state.questions[state.currentQuestionIndex];

    if (isCorrect) {
      soundManager.playCorrect();
      const scoreCalc = calculateScore({
        tier: state.selectedTier || (currentQ?.tier as 'easy' | 'medium' | 'hard') || 'medium',
        timeLeftSeconds,
        totalTimeSeconds,
        currentStreak: state.streak,
        jokerActive: state.jokerActive,
        difficulty: currentQ?.difficulty || 5,
        hintsUsedCount: state.hintsUsedCount,
      });

      const awarded = scoreCalc.totalPoints;
      const newStreak = state.streak + 1;
      const newMaxStreak = Math.max(state.maxStreak, newStreak);

      if (state.format === 'local_pass_play') {
        const updated = [...state.localPlayers];
        const activeIdx = state.currentPlayerTurnIndex;
        if (updated[activeIdx]) {
          updated[activeIdx] = {
            ...updated[activeIdx],
            score: updated[activeIdx].score + awarded,
            streak: updated[activeIdx].streak + 1,
          };
        }
        set({
          localPlayers: updated,
          score: state.score + awarded,
          streak: newStreak,
          maxStreak: newMaxStreak,
          correctCount: state.correctCount + 1,
          totalAnswered: state.totalAnswered + 1,
          fastestAnswerSeconds: newFastest,
          isAnswered: true,
          isCorrect: true,
          stealActive: false,
          lastScorerName: stealingPlayerName || updated[activeIdx]?.name || 'Player',
          lastScoreAmount: awarded,
        });
      } else {
        set({
          score: state.score + awarded,
          streak: newStreak,
          maxStreak: newMaxStreak,
          correctCount: state.correctCount + 1,
          totalAnswered: state.totalAnswered + 1,
          fastestAnswerSeconds: newFastest,
          isAnswered: true,
          isCorrect: true,
          stealActive: false,
          lastScorerName: 'You',
          lastScoreAmount: awarded,
        });
      }
    } else {
      soundManager.playWrong();
      // Apply penalty if hard tier
      const penalty = calculatePenalty(state.selectedTier || (currentQ?.tier as 'easy' | 'medium' | 'hard'));

      if (state.format === 'local_pass_play') {
        const updated = [...state.localPlayers];
        const activeIdx = state.currentPlayerTurnIndex;
        if (updated[activeIdx]) {
          updated[activeIdx] = {
            ...updated[activeIdx],
            score: Math.max(0, updated[activeIdx].score + penalty),
            streak: 0,
          };
        }
        set({
          localPlayers: updated,
          score: Math.max(0, state.score + penalty),
          streak: 0,
          totalAnswered: state.totalAnswered + 1,
          isAnswered: true,
          isCorrect: false,
        });
      } else {
        set({
          score: Math.max(0, state.score + penalty),
          streak: 0,
          totalAnswered: state.totalAnswered + 1,
          isAnswered: true,
          isCorrect: false,
        });
      }

      // If in Steal Round mode or Pass & Play, trigger steal window!
      if (currentQ?.mode === 'steal_round' || state.format === 'local_pass_play') {
        get().triggerStealWindow();
      }
    }
  },

  triggerStealWindow: () => {
    soundManager.playSteal();
    set({
      stealActive: true,
      stealCountdown: 5,
      stealSuccessPlayer: null,
    });
  },

  claimSteal: (playerName) => {
    const state = get();
    soundManager.playCorrect();
    const currentQ = state.questions[state.currentQuestionIndex];
    const points = 150 + (currentQ?.difficulty || 5) * 10;

    if (state.format === 'local_pass_play') {
      const updated = state.localPlayers.map((p) => {
        if (p.name === playerName) {
          return { ...p, score: p.score + points };
        }
        return p;
      });
      set({
        localPlayers: updated,
        stealActive: false,
        stealSuccessPlayer: playerName,
        lastScorerName: playerName,
        lastScoreAmount: points,
      });
    } else {
      set({
        stealActive: false,
        stealSuccessPlayer: playerName,
        lastScorerName: playerName,
        lastScoreAmount: points,
      });
    }
  },

  cancelSteal: () => {
    set({ stealActive: false });
  },

  nextQuestion: () => {
    const state = get();
    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex < state.questions.length) {
      // In local pass & play, rotate player turn
      let nextPlayerIdx = 0;
      if (state.format === 'local_pass_play' && state.localPlayers.length > 0) {
        nextPlayerIdx = (state.currentPlayerTurnIndex + 1) % state.localPlayers.length;
      }

      set({
        currentQuestionIndex: nextIndex,
        currentPlayerTurnIndex: nextPlayerIdx,
        isAnswered: false,
        isCorrect: null,
        jokerActive: false,
        hintsUsedCount: 0,
        selectedTier: null,
        stealActive: false,
        stealSuccessPlayer: null,
      });
      return true;
    }

    // Finished game
    soundManager.playVictory();
    return false;
  },

  resetGame: () => {
    set({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      totalAnswered: 0,
      isAnswered: false,
      isCorrect: null,
      jokerUsed: false,
      jokerActive: false,
      hintsUsedCount: 0,
      selectedTier: null,
      stealActive: false,
      stealSuccessPlayer: null,
      lastScorerName: null,
      lastScoreAmount: null,
    });
  },
}));

