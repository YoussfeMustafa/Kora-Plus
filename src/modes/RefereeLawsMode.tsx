import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RefereeLawsQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { soundManager } from '../utils/sound';
import { Scale, Check, X, BookOpen } from 'lucide-react';

interface RefereeLawsModeProps {
  question: RefereeLawsQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const RefereeLawsMode: React.FC<RefereeLawsModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = 40;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: !isAnswered,
  });

  const handlePick = (opt: BilingualText) => {
    if (isAnswered) return;
    timer.pause();
    setChosenAnswer(opt[lang]);

    const isMatch =
      opt.en.toLowerCase() === question.answer.en.toLowerCase() ||
      opt.ar === question.answer.ar;

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
      {/* Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

      {/* Mode & IFAB Law Citation Badge */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit">
          <Scale className="w-3.5 h-3.5" />
          {t('modes.referee_laws.title')}
        </span>
        <span className="text-[11px] font-mono text-emerald-400 font-bold">
          {question.ifabLaw}
        </span>
      </div>

      {/* Scenario Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 shadow-xl text-center">
        <h3 className="text-base sm:text-lg font-black text-white leading-relaxed">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Referee Ruling Choices */}
      <WrongShake trigger={shake}>
        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt, idx) => {
            const isChosen = chosenAnswer === opt[lang];
            const isTheCorrect =
              opt.en.toLowerCase() === question.answer.en.toLowerCase() ||
              opt.ar === question.answer.ar;

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
                onClick={() => handlePick(opt)}
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

      {/* IFAB Rule Official Explanation */}
      {isAnswered && question.ruleExplanation && (
        <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/80 text-xs sm:text-sm text-emerald-200 shadow-xl flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-amber-400 uppercase text-[10px] tracking-wider">
              Official IFAB Law Ruling:
            </span>
            <p className="leading-relaxed font-semibold">{question.ruleExplanation[lang]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

