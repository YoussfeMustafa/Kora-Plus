import Fuse from 'fuse.js';
import { normalizeAnswer } from './normalizeArabic';

export interface MatchResult {
  isMatch: boolean;
  matchedAlias?: string;
  score?: number;
}

/**
 * Checks if a user's input matches a target answer or any of its accepted aliases.
 * Supports bilingual Arabic and English, typos, and partial names (e.g., "Messi" for "Lionel Messi").
 */
export function isFuzzyMatch(
  input: string,
  targetAnswer: string,
  aliases: string[] = [],
  threshold: number = 0.35
): MatchResult {
  if (!input || !targetAnswer) {
    return { isMatch: false };
  }

  const normInput = normalizeAnswer(input);
  if (!normInput) return { isMatch: false };

  const allTargets = [targetAnswer, ...aliases].map((a) => a.trim()).filter(Boolean);

  // 1. Exact normalized check
  for (const t of allTargets) {
    const normT = normalizeAnswer(t);
    if (normInput === normT) {
      return { isMatch: true, matchedAlias: t, score: 0 };
    }
  }

  // 2. Substring / Part-of-name check (e.g. "Ronaldo" in "Cristiano Ronaldo" or "ميسي" in "ليونيل ميسي")
  for (const t of allTargets) {
    const normT = normalizeAnswer(t);
    // Only check substring if length is at least 3 characters to avoid false matches
    if (normInput.length >= 3 && normT.length >= 3) {
      // Check if candidate words match
      const inputWords = normInput.split(' ');
      const targetWords = normT.split(' ');

      // If user typed the surname and it matches the last name exactly
      if (inputWords.some((w) => targetWords.includes(w) && w.length >= 3)) {
        return { isMatch: true, matchedAlias: t, score: 0.1 };
      }

      if (normT.includes(normInput) || normInput.includes(normT)) {
        return { isMatch: true, matchedAlias: t, score: 0.15 };
      }
    }
  }

  // 3. Fuse.js fuzzy matching across targets
  const items = allTargets.map((name) => ({
    original: name,
    normalized: normalizeAnswer(name),
  }));

  const fuse = new Fuse(items, {
    keys: ['normalized'],
    threshold: threshold,
    includeScore: true,
    ignoreLocation: true,
  });

  const results = fuse.search(normInput);
  if (results.length > 0 && results[0].score !== undefined && results[0].score <= threshold) {
    return {
      isMatch: true,
      matchedAlias: results[0].item.original,
      score: results[0].score,
    };
  }

  return { isMatch: false };
}

