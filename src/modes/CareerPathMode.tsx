import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerPathQuestion } from '../types/game';
import { isFuzzyMatch } from '../utils/fuzzyMatch';
import { WrongShake } from '../components/WrongShake';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { fireConfetti } from '../components/ConfettiEffect';
import { ArrowRight, ArrowLeft, Shield, Hash, MapPin, Check, X, HelpCircle, Send } from 'lucide-react';

interface CareerPathModeProps {
  question: CareerPathQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onUseHint?: () => void;
  hintsUsedCount?: number;
}

export const CareerPathMode: React.FC<CareerPathModeProps> = ({
  question,
  onAnswer,
  isAnswered,
  isCorrect,
  onUseHint,
  hintsUsedCount = 0,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';
  const isRtl = i18n.language === 'ar';

  const [inputVal, setInputVal] = useState('');
  const [shake, setShake] = useState(false);
  const [revealedHints, setRevealedHints] = useState<{
    nationality: boolean;
    position: boolean;
    shirtNumber: boolean;
  }>({
    nationality: false,
    position: false,
    shirtNumber: false,
  });

  const TOTAL_TIME = 45;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: !isAnswered,
  });

  const handleRevealHint = (type: 'nationality' | 'position' | 'shirtNumber') => {
    if (revealedHints[type] || isAnswered) return;
    setRevealedHints((prev) => ({ ...prev, [type]: true }));
    if (onUseHint) onUseHint();
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isAnswered || !inputVal.trim()) return;

    timer.pause();
    const target = question.answer[lang];
    const match = isFuzzyMatch(inputVal, target, question.aliases, 0.38);

    if (match.isMatch) {
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

      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40">
          {t('modes.career_path.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Career Steps Timeline */}
      <div className="bg-slate-900/90 border border-emerald-800/50 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md">
        <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center justify-between">
          <span>Club Journey Timeline</span>
          <span className="text-emerald-400">{question.career.length} Clubs</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {question.career.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isRtl ? 15 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/50 flex items-center justify-center font-bold text-xs text-emerald-300 shrink-0">
                {idx + 1}
              </div>

              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-extrabold text-white text-sm sm:text-base">
                  {step.club[lang]}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 w-fit">
                  {step.years}
                </span>
              </div>

              {idx < question.career.length - 1 && (
                <div className="hidden sm:block text-slate-600">
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hint System */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2.5 text-xs font-bold">
          <span className="text-slate-300 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Hints System {hintsUsedCount > 0 && `(${hintsUsedCount} Used)`}
          </span>
          <span className="text-amber-400 text-[11px]">{t('game.hintPenalty')}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Nationality Hint */}
          <button
            type="button"
            disabled={revealedHints.nationality || isAnswered}
            onClick={() => handleRevealHint('nationality')}
            className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-bold border transition-all ${
              revealedHints.nationality
                ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 active:scale-95'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {t('game.nationality')}
            </span>
            <span className="font-extrabold text-white">
              {revealedHints.nationality ? question.hints.nationality[lang] : t('game.showHint')}
            </span>
          </button>

          {/* Position Hint */}
          <button
            type="button"
            disabled={revealedHints.position || isAnswered}
            onClick={() => handleRevealHint('position')}
            className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-bold border transition-all ${
              revealedHints.position
                ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 active:scale-95'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              {t('game.position')}
            </span>
            <span className="font-extrabold text-white">
              {revealedHints.position ? question.hints.position[lang] : t('game.showHint')}
            </span>
          </button>

          {/* Shirt Number Hint */}
          <button
            type="button"
            disabled={revealedHints.shirtNumber || isAnswered}
            onClick={() => handleRevealHint('shirtNumber')}
            className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-bold border transition-all ${
              revealedHints.shirtNumber
                ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 active:scale-95'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              {t('game.shirtNumber')}
            </span>
            <span className="font-extrabold text-white">
              {revealedHints.shirtNumber ? `#${question.hints.shirtNumber}` : t('game.showHint')}
            </span>
          </button>
        </div>
      </div>

      {/* Answer Input or Result Feedback */}
      <WrongShake trigger={shake}>
        {!isAnswered ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t('game.typeAnswer')}
              autoFocus
              className="flex-1 bg-slate-900 border-2 border-emerald-600/60 focus:border-emerald-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 font-bold text-base focus:outline-none shadow-lg"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-sm flex items-center gap-1.5 shadow-lg active:scale-95 disabled:opacity-50 transition-all shrink-0"
            >
              <span>{t('game.submit')}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-4 rounded-2xl flex items-center justify-between border-2 shadow-xl ${
              isCorrect
                ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200'
                : 'bg-red-950/90 border-red-500 text-red-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                  isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                }`}
              >
                {isCorrect ? <Check className="w-6 h-6 stroke-[3]" /> : <X className="w-6 h-6 stroke-[3]" />}
              </div>
              <div>
                <div className="font-extrabold text-base">
                  {isCorrect ? t('game.correct') : t('game.wrong')}
                </div>
                <div className="text-sm font-bold text-white">
                  Answer: <span className="text-amber-400">{question.answer[lang]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </WrongShake>
    </div>
  );
};

