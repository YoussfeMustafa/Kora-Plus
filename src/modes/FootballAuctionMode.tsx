import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FootballAuctionQuestion } from '../types/game';
import { isFuzzyMatch } from '../utils/fuzzyMatch';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { soundManager } from '../utils/sound';
import { Gavel, Check, Plus, AlertCircle } from 'lucide-react';

interface FootballAuctionModeProps {
  question: FootballAuctionQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const FootballAuctionMode: React.FC<FootballAuctionModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [inputVal, setInputVal] = useState('');
  const [foundAnswers, setFoundAnswers] = useState<string[]>([]);
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'duplicate' | 'success' } | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = question.timeLimitSeconds || 45;
  const TARGET_COUNT = question.targetCount || 5;

  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      finishAuction();
    },
    autoStart: !isAnswered,
  });

  const finishAuction = () => {
    timer.pause();
    const meetsTarget = foundAnswers.length >= Math.min(TARGET_COUNT, 3);
    if (meetsTarget) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME);
    } else {
      onAnswer(foundAnswers.length > 0, timer.secondsLeft, TOTAL_TIME);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isAnswered) return;

    const query = inputVal.trim();
    setInputVal('');

    // Check if already found
    const alreadyFound = foundAnswers.some((ans) => {
      return ans.toLowerCase() === query.toLowerCase();
    });

    if (alreadyFound) {
      setMessage({ text: t('game.alreadyEntered'), type: 'duplicate' });
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setMessage(null);
      }, 1500);
      return;
    }

    // Match against valid answers
    let matchedItem: (typeof question.validAnswers)[0] | null = null;
    for (const item of question.validAnswers) {
      const match = isFuzzyMatch(query, item.name[lang], item.aliases, 0.35);
      if (match.isMatch) {
        // Also ensure not already in found list by target name
        const alreadyIn = foundAnswers.includes(item.name[lang]);
        if (!alreadyIn) {
          matchedItem = item;
          break;
        }
      }
    }

    if (matchedItem) {
      soundManager.playCorrect();
      const updated = [...foundAnswers, matchedItem.name[lang]];
      setFoundAnswers(updated);
      setMessage({ text: `+1 ${matchedItem.name[lang]}!`, type: 'success' });
      setTimeout(() => setMessage(null), 1200);

      // Check if user hit the target count
      if (updated.length >= TARGET_COUNT) {
        finishAuction();
      }
    } else {
      soundManager.playWrong();
      setMessage({ text: t('game.invalidAnswer'), type: 'error' });
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setMessage(null);
      }, 1500);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Gavel className="w-3.5 h-3.5" />
          {t('modes.football_auction.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-2">
          {question.prompt[lang]}
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Target: <span className="font-extrabold text-emerald-400">{TARGET_COUNT} answers</span> • Name as many as you can before the gavel falls!
        </p>
      </div>

      {/* Score / Discovered Count Indicator */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
        <span className="text-xs font-bold text-slate-300">
          {t('game.auctionRemaining', { count: foundAnswers.length })}
        </span>
        <div className="flex items-center gap-1 text-sm font-black text-amber-400">
          <span>{foundAnswers.length}</span>
          <span className="text-slate-500">/</span>
          <span>{TARGET_COUNT}</span>
        </div>
      </div>

      {/* Discovered Pills List */}
      <div className="min-h-[100px] p-4 rounded-2xl bg-slate-900/90 border border-emerald-800/40 flex flex-wrap gap-2 content-start shadow-inner">
        {foundAnswers.length === 0 ? (
          <div className="w-full h-20 flex items-center justify-center text-xs text-slate-500 font-semibold italic">
            Type an answer below to start the bidding...
          </div>
        ) : (
          foundAnswers.map((ans, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-slate-950 font-black text-xs shadow-md border border-emerald-300"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>{ans}</span>
            </motion.div>
          ))
        )}
      </div>

      {/* Feedback Alert Toast */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-xs font-black text-center py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 ${
              message.type === 'success'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50'
                : 'bg-red-950 text-red-300 border border-red-500/50'
            }`}
          >
            {message.type !== 'success' && <AlertCircle className="w-3.5 h-3.5" />}
            <span>{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input or End Buttons */}
      <WrongShake trigger={shake}>
        {!isAnswered ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t('game.auctionPlaceholder')}
              autoFocus
              className="flex-1 bg-slate-900 border-2 border-emerald-600/60 focus:border-emerald-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 font-bold text-base focus:outline-none shadow-lg"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 text-white font-black text-sm flex items-center gap-1 shadow-md active:scale-95 disabled:opacity-50 shrink-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add</span>
            </button>
            <button
              type="button"
              onClick={finishAuction}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 shrink-0"
            >
              I'm Done
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-center flex flex-col gap-2">
            <div className="font-extrabold text-base text-emerald-300">
              Auction Complete! You named {foundAnswers.length} correct answers!
            </div>
            <div className="text-xs text-slate-400">
              Valid sample answers: {question.validAnswers.slice(0, 6).map((a) => a.name[lang]).join(' • ')}
            </div>
          </div>
        )}
      </WrongShake>
    </div>
  );
};

