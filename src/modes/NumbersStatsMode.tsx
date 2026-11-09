import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NumbersStatsQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { BarChart3, ArrowUpCircle, ArrowDownCircle, Check, X } from 'lucide-react';

interface NumbersStatsModeProps {
  question: NumbersStatsQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const NumbersStatsMode: React.FC<NumbersStatsModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = 35;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: !isAnswered,
  });

  const handlePick = (picked: string, isRight: boolean) => {
    if (isAnswered) return;
    timer.pause();
    setChosenAnswer(picked);

    if (isRight) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onAnswer(false, timer.secondsLeft, TOTAL_TIME);
    }
  };

  const isHigherLower = question.subType === 'higher_lower';

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <BarChart3 className="w-3.5 h-3.5" />
          {t('modes.numbers_stats.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Main Stats Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/40 text-center shadow-xl flex flex-col items-center">
        {isHigherLower ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Benchmark Target:
            </span>
            <div className="text-5xl sm:text-6xl font-black font-mono text-amber-400">
              {question.referenceValue}
            </div>
            <p className="text-sm font-semibold text-emerald-300">
              {question.statSubject?.[lang]}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              {question.category}
            </span>
            <div className="text-base sm:text-lg font-bold text-slate-200">
              {question.prompt[lang]}
            </div>
          </div>
        )}
      </div>

      {/* Higher / Lower Interactive Buttons or 4 Options */}
      <WrongShake trigger={shake}>
        {isHigherLower ? (
          <div className="grid grid-cols-2 gap-4">
            {/* HIGHER BUTTON */}
            <button
              type="button"
              disabled={isAnswered}
              onClick={() => handlePick('Higher', Boolean(question.isHigher))}
              className={`p-5 rounded-2xl border-2 font-black text-lg sm:text-xl flex flex-col items-center gap-2 transition-all active:scale-95 shadow-lg ${
                isAnswered
                  ? question.isHigher
                    ? 'bg-emerald-600 border-emerald-400 text-white'
                    : 'opacity-30 bg-slate-900 border-slate-800 text-slate-500'
                  : 'bg-emerald-950/80 hover:bg-emerald-900 border-emerald-500 text-emerald-300'
              }`}
            >
              <ArrowUpCircle className="w-8 h-8 text-emerald-400" />
              <span>HIGHER</span>
              <span className="text-xs font-normal text-emerald-200/80">أكثر / أعلى</span>
            </button>

            {/* LOWER BUTTON */}
            <button
              type="button"
              disabled={isAnswered}
              onClick={() => handlePick('Lower', !question.isHigher)}
              className={`p-5 rounded-2xl border-2 font-black text-lg sm:text-xl flex flex-col items-center gap-2 transition-all active:scale-95 shadow-lg ${
                isAnswered
                  ? !question.isHigher
                    ? 'bg-emerald-600 border-emerald-400 text-white'
                    : 'opacity-30 bg-slate-900 border-slate-800 text-slate-500'
                  : 'bg-amber-950/80 hover:bg-amber-900 border-amber-500 text-amber-300'
              }`}
            >
              <ArrowDownCircle className="w-8 h-8 text-amber-400" />
              <span>LOWER</span>
              <span className="text-xs font-normal text-amber-200/80">أقل / أدنى</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options?.map((opt, idx) => {
              const isChosen = chosenAnswer === opt[lang];
              const isTheCorrect =
                opt.en.toLowerCase() === question.answer.en.toLowerCase() ||
                opt.ar === question.answer.ar;

              let btnClass =
                'bg-slate-900/90 border-slate-700 text-white hover:bg-emerald-950 hover:border-emerald-500';

              if (isAnswered) {
                if (isTheCorrect) {
                  btnClass = 'bg-emerald-600 border-emerald-400 text-white font-black';
                } else if (isChosen && !isTheCorrect) {
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
                  onClick={() => handlePick(opt[lang], isTheCorrect)}
                  className={`p-4 rounded-2xl border-2 font-black text-base text-center transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 ${btnClass}`}
                >
                  <span>{opt[lang]}</span>
                  {isAnswered && isTheCorrect && <Check className="w-5 h-5 stroke-[3]" />}
                  {isAnswered && isChosen && !isTheCorrect && <X className="w-5 h-5 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        )}
      </WrongShake>

      {/* Explanation Banner */}
      {isAnswered && question.explanation && (
        <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/70 text-xs sm:text-sm text-emerald-200 font-semibold text-center shadow-lg">
          💡 {question.explanation[lang]}
        </div>
      )}
    </div>
  );
};

