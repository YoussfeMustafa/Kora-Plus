import React from 'react';
import { motion } from 'framer-motion';

export const StadiumBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-100 flex flex-col transition-colors duration-500">
      {/* Stadium Pitch Green Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-600/30 blur-3xl animate-pulse-fast" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl" />
      </div>

      {/* Stadium Pitch Grass Stripes (Perspective Lines) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 bg-repeat"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 48px,
            rgba(16, 185, 129, 0.4) 48px,
            rgba(16, 185, 129, 0.4) 96px
          )`,
        }}
      />

      {/* Floating Football Orbs */}
      <motion.div
        className="absolute top-16 left-12 w-6 h-6 opacity-20 pointer-events-none text-emerald-400"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⚽
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 w-8 h-8 opacity-15 pointer-events-none text-amber-400 text-xl"
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⚽
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-1/4 w-5 h-5 opacity-20 pointer-events-none text-emerald-300"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>

      {/* Subtle Stadium Floodlight Beams at Top */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-emerald-500/15 to-transparent blur-xl pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>
    </div>
  );
};

