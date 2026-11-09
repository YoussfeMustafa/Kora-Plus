import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle, Lock } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';

export const JokerCard: React.FC<{ disabled?: boolean }> = ({ disabled = false }) => {
  const { t } = useTranslation();
  const { jokerUsed, jokerActive, activateJoker, isAnswered } = useGameStore();

  const handleActivate = () => {
    if (!jokerUsed && !disabled && !isAnswered) {
      activateJoker();
    }
  };

  return (
    <div className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-md">
      <div className="flex items-center gap-3">
        <motion.div
          animate={
            jokerActive
              ? { rotateY: [0, 180, 360], scale: [1, 1.1, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 2, repeat: jokerActive ? Infinity : 0 }}
          className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-xl shadow-lg border ${
            jokerActive
              ? 'bg-gradient-to-tr from-amber-400 to-amber-200 border-amber-300 text-slate-950 ring-4 ring-amber-400/30'
              : jokerUsed
              ? 'bg-slate-800 border-slate-700 text-slate-500'
              : 'bg-gradient-to-tr from-emerald-600 to-emerald-400 border-emerald-300 text-white'
          }`}
        >
          {jokerUsed ? <Lock className="w-5 h-5" /> : <Shield className="w-6 h-6 fill-current" />}
        </motion.div>

        <div>
          <div className="flex items-center gap-1.5 font-black text-sm">
            <span className={jokerActive ? 'text-amber-400' : jokerUsed ? 'text-slate-400' : 'text-emerald-400'}>
              {t('modes.joker_double.title')}
            </span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded-full font-bold">
              2X
            </span>
          </div>
          <p className="text-xs text-slate-400">
            {jokerActive
              ? t('game.jokerActive')
              : jokerUsed
              ? t('game.jokerUsed')
              : t('modes.joker_double.desc')}
          </p>
        </div>
      </div>

      <div>
        {jokerActive ? (
          <div className="flex items-center gap-1 text-xs font-black text-amber-400 bg-amber-950/80 border border-amber-500/60 px-3 py-1.5 rounded-xl">
            <Sparkles className="w-4 h-4 fill-amber-400 animate-spin-slow" />
            <span>ACTIVE 2X</span>
          </div>
        ) : jokerUsed ? (
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-800/80 px-3 py-1.5 rounded-xl">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>USED</span>
          </div>
        ) : (
          <button
            onClick={handleActivate}
            disabled={disabled || isAnswered}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>{t('game.useJoker')}</span>
          </button>
        )}
      </div>
    </div>
  );
};

