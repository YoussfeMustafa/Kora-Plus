export type GameModeId =
  | 'career_path'
  | 'football_auction'
  | 'historic_lineup'
  | 'password_link'
  | 'lightning_round'
  | 'guess_match'
  | 'numbers_stats'
  | 'nicknames_terms'
  | 'referee_laws'
  | 'continental_tournaments'
  | 'joker_double'
  | 'tiered_risk'
  | 'steal_round';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface ClubCareerStep {
  years: string;
  club: BilingualText;
  appearances?: number;
  goals?: number;
}

export interface LineupPlayer {
  id: string;
  position: string; // GK, RB, CB, LB, CM, RW, ST, etc.
  x: number; // Percentage 0-100 on pitch
  y: number; // Percentage 0-100 on pitch
  name: BilingualText;
  number?: number;
  isHidden: boolean;
  options?: BilingualText[]; // Multiple choice options when guessing
}

export interface MatchScorer {
  player: BilingualText;
  minute: string;
  team: 'home' | 'away';
}

export interface QuestionBase {
  id: string;
  mode: GameModeId;
  difficulty: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  tier?: DifficultyLevel;
  category: string;
  prompt: BilingualText;
  explanation?: BilingualText;
  tags?: string[];
}

export interface CareerPathQuestion extends QuestionBase {
  mode: 'career_path';
  career: ClubCareerStep[];
  answer: BilingualText;
  aliases: string[];
  hints: {
    nationality: BilingualText;
    position: BilingualText;
    shirtNumber: number;
  };
}

export interface FootballAuctionQuestion extends QuestionBase {
  mode: 'football_auction';
  validAnswers: Array<{
    name: BilingualText;
    aliases: string[];
    detail?: string;
  }>;
  targetCount?: number;
  timeLimitSeconds?: number;
}

export interface HistoricLineupQuestion extends QuestionBase {
  mode: 'historic_lineup';
  matchTitle: BilingualText;
  formation: string; // e.g. "4-3-3", "4-2-3-1"
  lineup: LineupPlayer[];
}

export interface PasswordLinkQuestion extends QuestionBase {
  mode: 'password_link';
  items: BilingualText[]; // The 3 players/managers
  answer: BilingualText; // The common link
  options: BilingualText[]; // 4 choices
  aliases: string[];
  hint?: BilingualText;
}

export interface LightningQuestion extends QuestionBase {
  mode: 'lightning_round';
  options: BilingualText[];
  correctAnswer: BilingualText;
}

export interface GuessMatchQuestion extends QuestionBase {
  mode: 'guess_match';
  homeTeam: BilingualText;
  awayTeam: BilingualText;
  score: string;
  scorers: MatchScorer[];
  competition: BilingualText;
  year: number;
  optionsTeams?: BilingualText[];
  optionsComp?: BilingualText[];
}

export interface NumbersStatsQuestion extends QuestionBase {
  mode: 'numbers_stats';
  subType: 'higher_lower' | 'quiz';
  statSubject?: BilingualText;
  statTargetValue?: number;
  referenceValue?: number;
  unit?: BilingualText;
  isHigher?: boolean;
  options?: BilingualText[];
  answer: BilingualText;
  explanation?: BilingualText;
}

export interface NicknamesTermsQuestion extends QuestionBase {
  mode: 'nicknames_terms';
  options: BilingualText[];
  answer: BilingualText;
  aliases?: string[];
  origin?: BilingualText;
}

export interface RefereeLawsQuestion extends QuestionBase {
  mode: 'referee_laws';
  scenario?: BilingualText;
  options: BilingualText[];
  answer: BilingualText;
  ifabLaw: string;
  ruleExplanation: BilingualText;
}

export interface ContinentalTournamentsQuestion extends QuestionBase {
  mode: 'continental_tournaments';
  tournamentName: BilingualText;
  options: BilingualText[];
  answer: BilingualText;
}

export interface JokerDoubleQuestion extends QuestionBase {
  mode: 'joker_double';
  options: BilingualText[];
  answer: BilingualText;
}

export interface TieredRiskQuestion extends QuestionBase {
  mode: 'tiered_risk';
  tierOptions: {
    easy: {
      question: BilingualText;
      options: BilingualText[];
      answer: BilingualText;
      points: number;
      penalty: number;
    };
    medium: {
      question: BilingualText;
      options: BilingualText[];
      answer: BilingualText;
      points: number;
      penalty: number;
    };
    hard: {
      question: BilingualText;
      options: BilingualText[];
      answer: BilingualText;
      points: number;
      penalty: number;
    };
  };
}

export interface StealRoundQuestion extends QuestionBase {
  mode: 'steal_round';
  options: BilingualText[];
  answer: BilingualText;
}

export type AnyQuestion =
  | CareerPathQuestion
  | FootballAuctionQuestion
  | HistoricLineupQuestion
  | PasswordLinkQuestion
  | LightningQuestion
  | GuessMatchQuestion
  | NumbersStatsQuestion
  | NicknamesTermsQuestion
  | RefereeLawsQuestion
  | ContinentalTournamentsQuestion
  | JokerDoubleQuestion
  | TieredRiskQuestion
  | StealRoundQuestion;

export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
  maxStreak: number;
  correctAnswers: number;
  totalAnswers: number;
  jokerUsed: boolean;
  team?: 'A' | 'B';
  isHost?: boolean;
  isReady?: boolean;
  connected?: boolean;
  lastSeen?: number;
}

export type PlayFormat = 'solo' | 'local_pass_play' | 'multiplayer_ffa' | 'multiplayer_team';

export interface RoomState {
  code: string;
  hostId: string;
  format: PlayFormat;
  status: 'lobby' | 'playing' | 'results';
  currentQuestionIndex: number;
  selectedModes: GameModeId[];
  questions: AnyQuestion[];
  players: Record<string, Player>;
  teams?: {
    A: { name: string; score: number; color: string; jokerUsed: boolean };
    B: { name: string; score: number; color: string; jokerUsed: boolean };
  };
  serverStartTime?: number;
  currentTurnPlayerId?: string; // For pass and play or steal
  activeJoker?: {
    playerId: string;
    team?: 'A' | 'B';
    activated: boolean;
  };
  stealWindowActive?: boolean;
  stealEligiblePlayerId?: string;
  lastScorerName?: string;
  lastScoreAmount?: number;
  reactions: Array<{
    id: string;
    playerId: string;
    playerName: string;
    emoji: string;
    timestamp: number;
  }>;
  chatNotifications: Array<{
    id: string;
    type: 'join' | 'leave' | 'score' | 'steal' | 'joker' | 'system';
    text: string;
    timestamp: number;
  }>;
}

export interface GameSettings {
  language: 'en' | 'ar';
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  theme: 'dark' | 'light';
  timerSeconds: number;
  selectedModes: GameModeId[];
}
