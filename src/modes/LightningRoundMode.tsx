import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LightningQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { Zap, Flame, Check, X } from 'lucide-react';

interface LightningRoundModeProps {
  question: LightningQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  streakCount?: number;
}

export const LightningRoundMode: React.FC<LightningRoundModeProps> = ({
  question,
  onAnswer,
  isAnswered,
  streakCount = 0,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = 30;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: !isAnswered,
    playTickSound: true,
  });

  const handlePick = (option: BilingualText) => {
    if (isAnswered) return;
    timer.pause();
    setSelectedOpt(option[lang]);

    const isMatch =
      option.en.toLowerCase() === question.correctAnswer.en.toLowerCase() ||
      option.ar === question.correctAnswer.ar;

    if (isMatch) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onAnswer(false, timer.secondsLeft, TOTAL_TIME);
    }
  };

  const streakMultiplier = 1 + Math.min(4, streakCount) * 0.5; // up to 3x multiplier

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* High-tension Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} isUrgent={true} />

      {/* Lightning Mode Header with Active Multiplier */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3 py-1.5 rounded-full border border-amber-500/50 flex items-center gap-1.5 shadow-md">
          <Zap className="w-4 h-4 fill-amber-300 animate-pulse" />
          {t('modes.lightning_round.title')}
        </span>

        <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-md">
          <Flame className="w-3.5 h-3.5 fill-slate-950 animate-bounce-short" />
          <span>{streakMultiplier}X MULTIPLIER</span>
        </div>
      </div>

      {/* Rapid Fire Prompt */}
      <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/40 text-center shadow-xl">
        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Quick Tap Answer Grid */}
      <WrongShake trigger={shake}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((opt, idx) => {
            const isChosen = selectedOpt === opt[lang];
            const isCorrectAnswer =
              opt.en.toLowerCase() === question.correctAnswer.en.toLowerCase() ||
              opt.ar === question.correctAnswer.ar;

            let btnClass =
              'bg-slate-900/90 border-slate-700/80 text-white hover:bg-emerald-950/90 hover:border-emerald-500';

            if (isAnswered) {
              if (isCorrectAnswer) {
                btnClass = 'bg-emerald-600 border-emerald-400 text-white font-black shadow-lg';
              } else if (isChosen && !isCorrectAnswer) {
                btnClass = 'bg-red-600 border-red-400 text-white line-through';
              } else {
                btnClass = 'opacity-30 bg-slate-900 border-slate-800 text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handlePick(opt)}
                className={`py-4 px-5 rounded-2xl border-2 text-center font-black text-base transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 ${btnClass}`}
              >
                <span>{opt[lang]}</span>
                {isAnswered && isCorrectAnswer && <Check className="w-5 h-5 stroke-[3]" />}
                {isAnswered && isChosen && !isCorrectAnswer && <X className="w-5 h-5 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </WrongShake>
    </div>
  );
};

