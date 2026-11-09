import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContinentalTournamentsQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { Globe2, Check, X } from 'lucide-react';

interface ContinentalTournamentsModeProps {
  question: ContinentalTournamentsQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const ContinentalTournamentsMode: React.FC<ContinentalTournamentsModeProps> = ({
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

      {/* Tournament Badge */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Globe2 className="w-3.5 h-3.5" />
          {question.tournamentName[lang]}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Choices Grid */}
      <WrongShake trigger={shake}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
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
    </div>
  );
};

