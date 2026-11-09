export interface ScoreCalculationParams {
  tier?: 'easy' | 'medium' | 'hard';
  timeLeftSeconds?: number;
  totalTimeSeconds?: number;
  currentStreak: number;
  jokerActive?: boolean;
  difficulty?: number; // 1 to 10
  hintsUsedCount?: number; // Career path hints used
}

export interface ScoreResult {
  basePoints: number;
  speedBonus: number;
  streakBonus: number;
  jokerMultiplier: number;
  hintPenalty: number;
  totalPoints: number;
}

/**
 * Calculates points awarded for a correct answer.
 */
export function calculateScore(params: ScoreCalculationParams): ScoreResult {
  const {
    tier = 'medium',
    timeLeftSeconds = 0,
    totalTimeSeconds = 30,
    currentStreak = 0,
    jokerActive = false,
    difficulty = 5,
    hintsUsedCount = 0,
  } = params;

  // Base points by tier or difficulty
  let basePoints = 150;
  if (tier === 'easy') basePoints = 100;
  else if (tier === 'medium') basePoints = 200;
  else if (tier === 'hard') basePoints = 350;
  else if (difficulty) {
    basePoints = 100 + difficulty * 15;
  }

  // Speed bonus: up to 50 additional points if answered very quickly
  let speedBonus = 0;
  if (totalTimeSeconds > 0 && timeLeftSeconds > 0) {
    const fractionRemaining = Math.min(1, Math.max(0, timeLeftSeconds / totalTimeSeconds));
    speedBonus = Math.round(fractionRemaining * 50);
  }

  // Streak bonus: 15 points per current streak (capped at 75 points)
  const streakBonus = Math.min(75, currentStreak * 15);

  // Hint deduction: each hint takes 25% of base points
  const hintPenalty = Math.round(hintsUsedCount * (basePoints * 0.25));

  // Subtotal before joker
  const subtotal = Math.max(25, basePoints + speedBonus + streakBonus - hintPenalty);

  // Joker doubles total
  const jokerMultiplier = jokerActive ? 2 : 1;
  const totalPoints = subtotal * jokerMultiplier;

  return {
    basePoints,
    speedBonus,
    streakBonus,
    jokerMultiplier,
    hintPenalty,
    totalPoints,
  };
}

/**
 * Calculates penalty for wrong answers (e.g. for hard tiered questions).
 */
export function calculatePenalty(tier?: 'easy' | 'medium' | 'hard'): number {
  if (tier === 'hard') return -150;
  if (tier === 'medium') return -50;
  return 0; // easy has no penalty
}

