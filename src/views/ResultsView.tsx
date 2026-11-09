import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';
import { fireVictoryCelebration } from '../components/ConfettiEffect';
import { soundManager } from '../utils/sound';
import {
  Trophy,
  Flame,
  Zap,
  RotateCcw,
  Share2,
  Home,
  CheckCircle2,
  Award,
  Copy,
  Check,
} from 'lucide-react';

export const ResultsView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    format,
    score,
    maxStreak,
    correctCount,
    totalAnswered,
    fastestAnswerSeconds,
    localPlayers,
    startSoloGame,
    selectedModes,
  } = useGameStore();

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fireVictoryCelebration();
    soundManager.playVictory();

    // Save to local high score
    if (score > 0) {
      const currentHigh = parseInt(localStorage.getItem('koora_high_score') || '0', 10);
      if (score > currentHigh) {
        localStorage.setItem('koora_high_score', score.toString());
      }
    }
  }, [score]);

  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const fastestTime = fastestAnswerSeconds < 900 ? `${fastestAnswerSeconds}s` : '-';

  const shareText = t('app.shareText', {
    score,
    link: window.location.origin,
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Koora Plus Match Result',
          text: shareText,
          url: window.location.origin,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRematch = () => {
    startSoloGame(selectedModes, 10);
    navigate('/game');
  };

  // Determine sorted standings for local pass & play
  const sortedPlayers = [...localPlayers].sort((a, b) => b.score - a.score);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6 text-center">
      {/* Trophy Celebration Graphic */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12 }}
        className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 border-4 border-amber-300 flex items-center justify-center text-slate-950 shadow-2xl relative"
      >
        <Trophy className="w-14 h-14 fill-slate-950" />
        <div className="absolute -inset-3 bg-amber-400/25 blur-xl -z-10 rounded-full" />
      </motion.div>

      <div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          {t('results.title')}
        </h2>
        <p className="text-sm font-bold text-amber-400 mt-1">
          {format === 'local_pass_play'
            ? `${sortedPlayers[0]?.name || 'Player 1'} wins the match!`
            : t('results.soloTitle')}
        </p>
      </div>

      {/* Final Score Hero Box */}
      <div className="w-full p-6 rounded-3xl bg-slate-900/90 border-2 border-emerald-500/50 shadow-2xl backdrop-blur-md flex flex-col items-center">
        <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-widest mb-1">
          {t('results.finalScore')}
        </span>
        <div className="text-5xl sm:text-6xl font-black font-mono text-white flex items-baseline gap-2">
          <span>{score}</span>
          <span className="text-base text-amber-400 font-bold uppercase">
            {t('game.points')}
          </span>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="w-full grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-slate-800">
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 font-bold">{t('results.accuracy')}</span>
            <span className="text-xl font-black text-emerald-400 mt-0.5">{accuracy}%</span>
          </div>

          <div className="flex flex-col items-center border-x border-slate-800">
            <span className="text-xs text-slate-400 font-bold">{t('results.bestStreak')}</span>
            <div className="flex items-center gap-1 text-xl font-black text-orange-400 mt-0.5">
              <Flame className="w-4 h-4 fill-orange-400" />
              <span>{maxStreak}x</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 font-bold">{t('results.speed')}</span>
            <div className="flex items-center gap-1 text-xl font-black text-cyan-400 mt-0.5">
              <Zap className="w-4 h-4 fill-cyan-400" />
              <span>{fastestTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pass & Play Standings Table */}
      {format === 'local_pass_play' && sortedPlayers.length > 0 && (
        <div className="w-full p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-start">
            {t('results.standings')}
          </span>
          <div className="flex flex-col gap-2">
            {sortedPlayers.map((player, idx) => (
              <div
                key={player.id}
                className={`p-3 rounded-2xl flex items-center justify-between font-bold text-sm ${
                  idx === 0
                    ? 'bg-amber-950/80 border border-amber-500/60 text-amber-200'
                    : 'bg-slate-800/80 border border-slate-700/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                      idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span>{player.name}</span>
                </div>
                <span className="font-mono text-base font-black text-white">
                  {player.score} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={handleRematch}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          <span>{t('results.playAgain')}</span>
        </button>

        <button
          onClick={handleShare}
          className="w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 font-bold text-sm flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? t('results.copied') : t('results.shareResult')}</span>
        </button>

        <button
          onClick={() => navigate('/')}
          className="w-full py-3 rounded-2xl text-slate-400 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>{t('results.home')}</span>
        </button>
      </div>
    </div>
  );
};

