import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TieredRiskQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { AlertTriangle, ShieldCheck, Flame, Skull, Check, X } from 'lucide-react';

interface TieredRiskModeProps {
  question: TieredRiskQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onSelectTier?: (tier: 'easy' | 'medium' | 'hard') => void;
  selectedTier?: 'easy' | 'medium' | 'hard' | null;
}

export const TieredRiskMode: React.FC<TieredRiskModeProps> = ({
  question,
  onAnswer,
  isAnswered,
  onSelectTier,
  selectedTier: externalSelectedTier,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [activeTier, setActiveTier] = useState<'easy' | 'medium' | 'hard' | null>(
    externalSelectedTier || null
  );
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = 35;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered && activeTier) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: Boolean(activeTier) && !isAnswered,
  });

  const handlePickTier = (tier: 'easy' | 'medium' | 'hard') => {
    setActiveTier(tier);
    if (onSelectTier) onSelectTier(tier);
    timer.reset(TOTAL_TIME);
  };

  const currentTierData = activeTier ? question.tierOptions[activeTier] : null;

  const handlePickAnswer = (opt: BilingualText) => {
    if (!currentTierData || isAnswered) return;
    timer.pause();
    setChosenAnswer(opt[lang]);

    const isMatch =
      opt.en.toLowerCase() === currentTierData.answer.en.toLowerCase() ||
      opt.ar === currentTierData.answer.ar;

    if (isMatch) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onAnswer(false, timer.secondsLeft, TOTAL_TIME);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <AlertTriangle className="w-3.5 h-3.5" />
          {t('modes.tiered_risk.title')}
        </span>
      </div>

      {/* Step 1: Select Tier if not chosen yet */}
      {!activeTier ? (
        <div className="flex flex-col gap-3">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-black text-white">
              {t('game.selectTier')}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Higher tiers offer massive points, but beware of the penalty on wrong answers!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {/* EASY TIER */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePickTier('easy')}
              className="p-4 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 border-2 border-emerald-500 text-center flex flex-col items-center gap-2 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-black text-base text-white">{t('game.easy')}</span>
              <div className="flex flex-col text-xs font-bold">
                <span className="text-emerald-300">+100 {t('game.points')}</span>
                <span className="text-slate-400">0 {t('game.penalty')}</span>
              </div>
            </motion.button>

            {/* MEDIUM TIER */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePickTier('medium')}
              className="p-4 rounded-2xl bg-amber-950/80 hover:bg-amber-900 border-2 border-amber-500 text-center flex flex-col items-center gap-2 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-black text-base text-white">{t('game.medium')}</span>
              <div className="flex flex-col text-xs font-bold">
                <span className="text-amber-300">+200 {t('game.points')}</span>
                <span className="text-red-400">-50 {t('game.penalty')}</span>
              </div>
            </motion.button>

            {/* HARD TIER */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePickTier('hard')}
              className="p-4 rounded-2xl bg-red-950/80 hover:bg-red-900 border-2 border-red-500 text-center flex flex-col items-center gap-2 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-red-300">
                <Skull className="w-6 h-6" />
              </div>
              <span className="font-black text-base text-white">{t('game.hard')}</span>
              <div className="flex flex-col text-xs font-bold">
                <span className="text-rose-300">+350 {t('game.points')}</span>
                <span className="text-rose-400 font-black">-150 {t('game.penalty')}</span>
              </div>
            </motion.button>
          </div>
        </div>
      ) : (
        /* Step 2: Question for Selected Tier */
        <div className="flex flex-col gap-4">
          <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

          {/* Tier Confirmation Badge */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-bold text-slate-400">
              Active Tier: <span className="uppercase text-amber-400 font-extrabold">{activeTier}</span>
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              +{currentTierData?.points} pts (Penalty: {currentTierData?.penalty} pts)
            </span>
          </div>

          {/* Question Box */}
          <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 text-center shadow-xl">
            <h3 className="text-lg sm:text-xl font-black text-white">
              {currentTierData?.question[lang]}
            </h3>
          </div>

          {/* Choices */}
          <WrongShake trigger={shake}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentTierData?.options.map((opt, idx) => {
                const isChosen = chosenAnswer === opt[lang];
                const isTheCorrect =
                  opt.en.toLowerCase() === currentTierData.answer.en.toLowerCase() ||
                  opt.ar === currentTierData.answer.ar;

                let btnClass =
                  'bg-slate-900 border-slate-800 text-white hover:bg-slate-800 hover:border-emerald-500/60';

                if (isAnswered) {
                  if (isTheCorrect) {
                    btnClass = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-black shadow-lg';
                  } else if (isChosen && !isTheCorrect) {
                    btnClass = 'bg-red-950 border-red-500 text-red-200 line-through';
                  } else {
                    btnClass = 'opacity-30 bg-slate-900 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handlePickAnswer(opt)}
                    className={`p-4 rounded-2xl border-2 text-start font-bold text-sm sm:text-base flex items-center justify-between gap-3 transition-all active:scale-[0.98] ${btnClass}`}
                  >
                    <span>{opt[lang]}</span>
                    {isAnswered && isTheCorrect && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {isAnswered && isChosen && !isTheCorrect && <X className="w-5 h-5 text-red-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </WrongShake>
        </div>
      )}
    </div>
  );
};

