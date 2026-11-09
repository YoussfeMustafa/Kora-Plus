import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { StealRoundQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { soundManager } from '../utils/sound';
import { Zap, Skull, ShieldAlert, Check, X } from 'lucide-react';

interface StealRoundModeProps {
  question: StealRoundQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number, stealingPlayer?: string) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onStealClaim?: (playerName: string) => void;
}

export const StealRoundMode: React.FC<StealRoundModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [stealWindowOpen, setStealWindowOpen] = useState(false);
  const [stealTimerSeconds, setStealTimerSeconds] = useState(5);
  const [stealingPlayerName, setStealingPlayerName] = useState('');

  const TOTAL_TIME = 35;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered && !stealWindowOpen) {
        triggerSteal();
      }
    },
    autoStart: !isAnswered && !stealWindowOpen,
  });

  // Steal Countdown ticker
  useEffect(() => {
    if (!stealWindowOpen) return;
    const interval = setInterval(() => {
      setStealTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStealWindowOpen(false);
          onAnswer(false, 0, TOTAL_TIME);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stealWindowOpen]);

  const triggerSteal = () => {
    timer.pause();
    soundManager.playSteal();
    setStealWindowOpen(true);
    setStealTimerSeconds(5);
  };

  const handlePick = (opt: BilingualText) => {
    if (isAnswered) return;
    timer.pause();
    setChosenAnswer(opt[lang]);

    const isMatch =
      opt.en.toLowerCase() === question.answer.en.toLowerCase() ||
      opt.ar === question.answer.ar;

    if (isMatch) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME, stealWindowOpen ? stealingPlayerName || 'Rival Team' : undefined);
      setStealWindowOpen(false);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);

      // If wrong and steal window was not open yet, open steal window!
      if (!stealWindowOpen) {
        triggerSteal();
      } else {
        setStealWindowOpen(false);
        onAnswer(false, timer.secondsLeft, TOTAL_TIME);
      }
    }
  };

  const handleClaimSteal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stealingPlayerName.trim()) return;
    soundManager.playTick();
  };

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Timer Bar */}
      {!stealWindowOpen ? (
        <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />
      ) : (
        /* Dramatic Steal Countdown Timer */
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="w-full p-3 rounded-2xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white font-black flex items-center justify-between shadow-2xl border-2 border-red-300"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
            <span className="text-sm uppercase tracking-wider">{t('game.stealWindow')}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-2xl text-amber-300">
            <span>{stealTimerSeconds}s</span>
          </div>
        </motion.div>
      )}

      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Zap className="w-3.5 h-3.5" />
          {t('modes.steal_round.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Steal Prompt Overlay */}
      <AnimatePresence>
        {stealWindowOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-2xl bg-slate-900 border-2 border-red-500 text-center flex flex-col gap-2 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-2 text-rose-400 font-extrabold text-sm">
              <Skull className="w-5 h-5 animate-bounce" />
              <span>Team 1 Answered Wrong! Rival Team Can STEAL Now!</span>
            </div>
            <div className="text-xs text-slate-300">
              Tap the correct answer below within <span className="font-mono font-bold text-amber-400">{stealTimerSeconds}s</span> to steal the points!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

            if (stealWindowOpen) {
              btnClass =
                'bg-slate-900 border-red-500/80 text-white hover:bg-red-950/80 hover:border-red-400 animate-pulse-fast';
            }

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

