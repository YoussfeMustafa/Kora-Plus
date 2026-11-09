import { AnyQuestion, GameModeId } from '../types/game';
import { careerPathQuestions } from './careerPathQuestions';
import { footballAuctionQuestions } from './footballAuctionQuestions';
import { historicLineupQuestions } from './historicLineupQuestions';
import { passwordLinkQuestions } from './passwordLinkQuestions';
import { lightningQuestions } from './lightningQuestions';
import { guessMatchQuestions } from './guessMatchQuestions';
import { numbersStatsQuestions } from './numbersStatsQuestions';
import { nicknamesTermsQuestions } from './nicknamesTermsQuestions';
import { refereeLawsQuestions } from './refereeLawsQuestions';
import { continentalQuestions } from './continentalQuestions';
import { jokerDoubleQuestions } from './jokerDoubleQuestions';
import { tieredRiskQuestions } from './tieredRiskQuestions';
import { stealRoundQuestions } from './stealRoundQuestions';

export const allQuestionsByMode: Record<GameModeId, AnyQuestion[]> = {
  career_path: careerPathQuestions,
  football_auction: footballAuctionQuestions,
  historic_lineup: historicLineupQuestions,
  password_link: passwordLinkQuestions,
  lightning_round: lightningQuestions,
  guess_match: guessMatchQuestions,
  numbers_stats: numbersStatsQuestions,
  nicknames_terms: nicknamesTermsQuestions,
  referee_laws: refereeLawsQuestions,
  continental_tournaments: continentalQuestions,
  joker_double: jokerDoubleQuestions,
  tiered_risk: tieredRiskQuestions,
  steal_round: stealRoundQuestions,
};

export const allQuestions: AnyQuestion[] = [
  ...careerPathQuestions,
  ...footballAuctionQuestions,
  ...historicLineupQuestions,
  ...passwordLinkQuestions,
  ...lightningQuestions,
  ...guessMatchQuestions,
  ...numbersStatsQuestions,
  ...nicknamesTermsQuestions,
  ...refereeLawsQuestions,
  ...continentalQuestions,
  ...jokerDoubleQuestions,
  ...tieredRiskQuestions,
  ...stealRoundQuestions,
];

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns a randomized playlist of questions matching the selected modes with progressive difficulty curve.
 */
export function generateQuestionPool(
  selectedModes: GameModeId[] = [],
  count: number = 10
): AnyQuestion[] {
  const modesToUse = selectedModes.length > 0 ? selectedModes : (Object.keys(allQuestionsByMode) as GameModeId[]);
  const pool: AnyQuestion[] = [];

  modesToUse.forEach((mode) => {
    const modeQuestions = allQuestionsByMode[mode] || [];
    pool.push(...modeQuestions);
  });

  const shuffled = shuffleArray(pool);

  // Sort with progressive difficulty curve (difficulty 1 -> 10)
  const sorted = shuffled.sort((a, b) => a.difficulty - b.difficulty);

  return sorted.slice(0, count);
}

export {
  careerPathQuestions,
  footballAuctionQuestions,
  historicLineupQuestions,
  passwordLinkQuestions,
  lightningQuestions,
  guessMatchQuestions,
  numbersStatsQuestions,
  nicknamesTermsQuestions,
  refereeLawsQuestions,
  continentalQuestions,
  jokerDoubleQuestions,
  tieredRiskQuestions,
  stealRoundQuestions,
};

