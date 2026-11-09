import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, Zap, Shield, User } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';

export const Scoreboard: React.FC = () => {
  const { t } = useTranslation();
  const {
    format,
    score,
    streak,
    currentQuestionIndex,
    questions,
    lastScorerName,
    lastScoreAmount,
    localPlayers,
    currentPlayerTurnIndex,
    jokerActive,
  } = useGameStore();

  const totalQuestions = questions.length || 10;
  const progressPercent = Math.min(100, Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100));

  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Prominent Scorer Highlight Banner at top of screen whenever a player scores */}
      <AnimatePresence>
        {lastScorerName && lastScoreAmount && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 text-slate-950 font-black text-center py-2 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 border border-amber-300"
          >
            <Zap className="w-5 h-5 fill-slate-950 animate-bounce" />
            <span className="text-sm sm:text-base">
              {t('game.lastScorer', { name: lastScorerName, points: lastScoreAmount })}
            </span>
            <Zap className="w-5 h-5 fill-slate-950 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Score & Streak Container */}
      <div className="w-full bg-slate-900/80 backdrop-blur-md border border-emerald-800/40 rounded-2xl p-3 sm:p-4 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          {/* Score Display */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
              <Trophy className="w-6 h-6 fill-slate-950" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                {t('game.score')}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-1">
                <span>{score}</span>
                <span className="text-xs font-semibold text-emerald-300 uppercase">
                  {t('game.points')}
                </span>
              </div>
            </div>
          </div>

          {/* Current Turn (for Pass and Play) or Joker Status */}
          {format === 'local_pass_play' && localPlayers.length > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-600/50">
              <User className="w-4 h-4 text-emerald-400" />
              <div className="text-xs sm:text-sm font-bold text-emerald-200">
                {t('game.passPhoneTo')}{' '}
                <span className="text-amber-400 font-black underline">
                  {localPlayers[currentPlayerTurnIndex]?.name}
                </span>
              </div>
            </div>
          )}

          {jokerActive && (
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-3 py-1.5 rounded-xl font-black text-xs shadow-md border border-amber-300"
            >
              <Shield className="w-4 h-4 fill-slate-950" />
              <span>{t('game.jokerActive')}</span>
            </motion.div>
          )}

          {/* Streak Counter */}
          <div className="flex items-center gap-2.5">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                streak > 0
                  ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              <Flame className={`w-5 h-5 ${streak > 0 ? 'fill-white animate-bounce-short' : ''}`} />
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {t('game.streak')}
              </div>
              <div className="text-xl sm:text-2xl font-black text-orange-400">
                {streak}
                <span className="text-xs font-bold text-slate-400">x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Level / Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-1">
            <span>
              {t('game.question')} {currentQuestionIndex + 1} {t('game.of')} {totalQuestions}
            </span>
            <span className="text-emerald-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Local Pass & Play Mini-Scoreboard */}
        {format === 'local_pass_play' && localPlayers.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
            {localPlayers.map((p, idx) => (
              <div
                key={p.id}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs shrink-0 transition-colors ${
                  idx === currentPlayerTurnIndex
                    ? 'bg-emerald-600/30 border border-emerald-500 font-bold text-white'
                    : 'bg-slate-800/60 text-slate-300'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <span>{p.name}:</span>
                <span className="font-extrabold text-amber-400">{p.score} pts</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

