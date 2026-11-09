import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PasswordLinkQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { Link2, Users, Check, X, HelpCircle } from 'lucide-react';

interface PasswordLinkModeProps {
  question: PasswordLinkQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const PasswordLinkMode: React.FC<PasswordLinkModeProps> = ({
  question,
  onAnswer,
  isAnswered,
  isCorrect,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
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

  const handleSelect = (option: BilingualText) => {
    if (isAnswered) return;
    timer.pause();
    setSelectedOpt(option[lang]);

    const isMatch =
      option.en.toLowerCase().includes(question.answer.en.toLowerCase().substring(0, 10)) ||
      option.ar.includes(question.answer.ar.substring(0, 8));

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

      {/* Header Info */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Link2 className="w-3.5 h-3.5" />
          {t('modes.password_link.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* 3 Linked Superstar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {question.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-emerald-500/40 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group hover:border-emerald-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs text-amber-400/90 font-bold uppercase tracking-wider mb-0.5">
              Subject #{idx + 1}
            </span>
            <span className="font-black text-white text-base sm:text-lg leading-tight">
              {item[lang]}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Hint Accordion */}
      {question.hint && (
        <div className="flex justify-center">
          {!showHint ? (
            <button
              onClick={() => setShowHint(true)}
              disabled={isAnswered}
              className="text-xs font-bold text-slate-400 hover:text-amber-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Need a clue? Show hint</span>
            </button>
          ) : (
            <div className="text-xs text-amber-300 font-semibold bg-amber-950/60 border border-amber-600/40 px-3 py-2 rounded-xl text-center">
              💡 {question.hint[lang]}
            </div>
          )}
        </div>
      )}

      {/* 4 Choices */}
      <WrongShake trigger={shake}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {question.options.map((option, idx) => {
            const isChosen = selectedOpt === option[lang];
            const isTheCorrectOption =
              option.en.toLowerCase().includes(question.answer.en.toLowerCase().substring(0, 10)) ||
              option.ar.includes(question.answer.ar.substring(0, 8));

            let btnStyle = 'bg-slate-900/90 border-slate-800 text-slate-100 hover:bg-slate-800/90 hover:border-emerald-500/50';

            if (isAnswered) {
              if (isTheCorrectOption) {
                btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-black';
              } else if (isChosen && !isTheCorrectOption) {
                btnStyle = 'bg-red-950/90 border-red-500 text-red-200 line-through';
              } else {
                btnStyle = 'opacity-40 bg-slate-900 border-slate-800 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelect(option)}
                className={`p-4 rounded-2xl border-2 text-start font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-between gap-2 ${btnStyle}`}
              >
                <span>{option[lang]}</span>
                {isAnswered && isTheCorrectOption && (
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {isAnswered && isChosen && !isTheCorrectOption && (
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </WrongShake>
    </div>
  );
};

