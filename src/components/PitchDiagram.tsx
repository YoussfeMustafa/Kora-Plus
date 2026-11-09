import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LineupPlayer, BilingualText } from '../types/game';
import { HelpCircle, Check, X } from 'lucide-react';

interface PitchDiagramProps {
  formation: string;
  lineup: LineupPlayer[];
  onGuessPlayer: (playerId: string, chosenName: BilingualText) => void;
  guessedPlayers: Record<string, { isCorrect: boolean; chosenName: string }>;
  isReadOnly?: boolean;
}

export const PitchDiagram: React.FC<PitchDiagramProps> = ({
  formation,
  lineup,
  onGuessPlayer,
  guessedPlayers,
  isReadOnly = false,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [activeModalPlayer, setActiveModalPlayer] = useState<LineupPlayer | null>(null);

  const handlePlayerPinClick = (player: LineupPlayer) => {
    if (isReadOnly) return;
    if (!player.isHidden) return;
    if (guessedPlayers[player.id]) return; // already answered
    setActiveModalPlayer(player);
  };

  const handleSelectOption = (option: BilingualText) => {
    if (activeModalPlayer) {
      onGuessPlayer(activeModalPlayer.id, option);
      setActiveModalPlayer(null);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Pitch Header Badge */}
      <div className="mb-2 flex items-center justify-between w-full px-2 text-xs font-bold text-emerald-300">
        <span className="bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-700/50">
          Formation: {formation}
        </span>
        <span className="text-slate-400">
          Click any <span className="text-amber-400 font-extrabold">?</span> to reveal
        </span>
      </div>

      {/* Football Pitch Graphic Container */}
      <div className="relative w-full aspect-[4/5] bg-emerald-800 rounded-2xl overflow-hidden border-4 border-emerald-600 shadow-2xl select-none">
        {/* Grass Pattern stripes */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3) 10%,
              transparent 10%,
              transparent 20%
            )`,
          }}
        />

        {/* Pitch Lines SVG */}
        <svg
          viewBox="0 0 100 125"
          className="absolute inset-0 w-full h-full stroke-emerald-200/50 fill-none"
          strokeWidth="0.8"
        >
          {/* Outer Boundary */}
          <rect x="4" y="4" width="92" height="117" rx="2" />
          {/* Halfway Line */}
          <line x1="4" y1="62.5" x2="96" y2="62.5" />
          {/* Center Circle */}
          <circle cx="50" cy="62.5" r="14" />
          <circle cx="50" cy="62.5" r="0.8" fill="rgba(167, 243, 208, 0.6)" />

          {/* Top Penalty Area (Opponent Box) */}
          <rect x="22" y="4" width="56" height="22" />
          <rect x="34" y="4" width="32" height="8" />
          <path d="M 38 26 A 12 12 0 0 0 62 26" />

          {/* Bottom Penalty Area (Our Box) */}
          <rect x="22" y="99" width="56" height="22" />
          <rect x="34" y="113" width="32" height="8" />
          <path d="M 38 99 A 12 12 0 0 1 62 99" />
          <circle cx="50" cy="107" r="0.8" fill="rgba(167, 243, 208, 0.6)" />
        </svg>

        {/* Player Pins */}
        {lineup.map((player) => {
          const guess = guessedPlayers[player.id];
          const isGuessed = Boolean(guess);
          const isCorrect = guess?.isCorrect;

          return (
            <div
              key={player.id}
              onClick={() => handlePlayerPinClick(player)}
              style={{
                left: `${player.x}%`,
                top: `${player.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute flex flex-col items-center cursor-pointer transition-transform duration-200 ${
                player.isHidden && !isGuessed ? 'hover:scale-110 active:scale-95' : ''
              }`}
            >
              {/* Player Icon/Jersey */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-xs shadow-lg transition-all border-2 ${
                  !player.isHidden
                    ? 'bg-slate-900 border-emerald-400 text-emerald-300'
                    : isGuessed
                    ? isCorrect
                      ? 'bg-emerald-600 border-white text-white'
                      : 'bg-red-600 border-white text-white'
                    : 'bg-amber-500 border-white text-slate-950 animate-pulse ring-4 ring-amber-400/40'
                }`}
              >
                {!player.isHidden ? (
                  <span>{player.position}</span>
                ) : isGuessed ? (
                  isCorrect ? (
                    <Check className="w-5 h-5 stroke-[3]" />
                  ) : (
                    <X className="w-5 h-5 stroke-[3]" />
                  )
                ) : (
                  <HelpCircle className="w-5 h-5 stroke-[2.5]" />
                )}
              </div>

              {/* Player Name Pill */}
              <div
                className={`mt-1 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-md max-w-[90px] sm:max-w-[110px] truncate text-center ${
                  !player.isHidden
                    ? 'bg-slate-950/90 text-white border border-slate-700'
                    : isGuessed
                    ? isCorrect
                      ? 'bg-emerald-950 text-emerald-200 border border-emerald-500'
                      : 'bg-red-950 text-red-200 border border-red-500 line-through'
                    : 'bg-amber-950/90 text-amber-300 border border-amber-500/70'
                }`}
              >
                {!player.isHidden
                  ? player.name[lang]
                  : isGuessed
                  ? player.name[lang]
                  : '? ? ?'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Selection Modal for Hidden Players */}
      <AnimatePresence>
        {activeModalPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-slate-900 border border-emerald-500/50 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-center"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Position: {activeModalPlayer.position}
                </span>
                <button
                  onClick={() => setActiveModalPlayer(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h4 className="text-base font-black text-white">
                Who started at <span className="text-emerald-400">{activeModalPlayer.position}</span>?
              </h4>

              {/* Options */}
              <div className="flex flex-col gap-2">
                {activeModalPlayer.options?.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 border border-emerald-600/40 text-white font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                  >
                    {opt[lang]}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

