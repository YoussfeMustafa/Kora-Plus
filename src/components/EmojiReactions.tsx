import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMOJIS = ['⚽', '🔥', '👏', '🏆', '😱', '🧤', '🟡', '🔴'];

interface EmojiReactionsProps {
  onReact: (emoji: string) => void;
  externalReactions?: Array<{
    id: string;
    playerName: string;
    emoji: string;
  }>;
}

export const EmojiReactions: React.FC<EmojiReactionsProps> = ({
  onReact,
  externalReactions = [],
}) => {
  const [floatingList, setFloatingList] = useState<
    Array<{ id: number; emoji: string; left: number }>
  >([]);

  const handleSend = (emoji: string) => {
    onReact(emoji);
    const newId = Date.now() + Math.random();
    const left = Math.floor(Math.random() * 80) + 10;
    setFloatingList((prev) => [...prev, { id: newId, emoji, left }]);
    setTimeout(() => {
      setFloatingList((prev) => prev.filter((item) => item.id !== newId));
    }, 2000);
  };

  return (
    <div className="relative w-full">
      {/* Floating Emojis Animation Area */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {floatingList.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, y: '90vh', scale: 0.6 }}
              animate={{ opacity: 0, y: '20vh', scale: 1.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              style={{ left: `${item.left}%` }}
              className="absolute text-4xl select-none"
            >
              {item.emoji}
            </motion.div>
          ))}
          {/* External reactions from other players */}
          {externalReactions.slice(-4).map((rx) => (
            <motion.div
              key={rx.id}
              initial={{ opacity: 1, y: '85vh', scale: 0.8 }}
              animate={{ opacity: 0, y: '30vh', scale: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute right-10 flex items-center gap-1.5 bg-slate-900/90 border border-emerald-500 px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-xl"
            >
              <span>{rx.playerName}:</span>
              <span className="text-xl">{rx.emoji}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Emoji Picker Bar */}
      <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2 p-2 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-emerald-900/40">
        {EMOJIS.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleSend(emoji)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 hover:bg-emerald-600/40 hover:scale-110 active:scale-90 flex items-center justify-center text-lg sm:text-xl transition-all shadow-sm"
            title={`Send ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

