import { describe, it, expect } from 'vitest';
import { calculateScore, calculatePenalty } from '../scoring';

describe('Scoring Logic', () => {
  it('calculates easy tier points correctly', () => {
    const result = calculateScore({
      tier: 'easy',
      timeLeftSeconds: 0,
      totalTimeSeconds: 30,
      currentStreak: 0,
      jokerActive: false,
    });
    expect(result.basePoints).toBe(100);
    expect(result.jokerMultiplier).toBe(1);
    expect(result.totalPoints).toBe(100);
  });

  it('awards speed bonus when answered quickly', () => {
    const result = calculateScore({
      tier: 'medium',
      timeLeftSeconds: 30,
      totalTimeSeconds: 30,
      currentStreak: 0,
      jokerActive: false,
    });
    expect(result.basePoints).toBe(200);
    expect(result.speedBonus).toBe(50);
    expect(result.totalPoints).toBe(250);
  });

  it('doubles total points when Joker is active', () => {
    const result = calculateScore({
      tier: 'medium',
      timeLeftSeconds: 0,
      totalTimeSeconds: 30,
      currentStreak: 0,
      jokerActive: true,
    });
    expect(result.jokerMultiplier).toBe(2);
    expect(result.totalPoints).toBe(400); // 200 * 2
  });

  it('awards streak bonus for consecutive correct answers', () => {
    const result = calculateScore({
      tier: 'easy',
      timeLeftSeconds: 0,
      totalTimeSeconds: 30,
      currentStreak: 4,
      jokerActive: false,
    });
    // 4 * 15 = 60
    expect(result.streakBonus).toBe(60);
    expect(result.totalPoints).toBe(160);
  });

  it('calculates correct penalties by tier', () => {
    expect(calculatePenalty('hard')).toBe(-150);
    expect(calculatePenalty('medium')).toBe(-50);
    expect(calculatePenalty('easy')).toBe(0);
  });
});

