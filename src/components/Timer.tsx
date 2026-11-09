import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimerProps {
  secondsLeft: number;
  totalSeconds: number;
  isUrgent?: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  secondsLeft,
  totalSeconds,
  isUrgent = false,
}) => {
  const percentage = Math.max(0, Math.min(100, (secondsLeft / totalSeconds) * 100));
  const isCritical = secondsLeft <= 5 || isUrgent;

  // Determine bar color
  let barGradient = 'from-emerald-500 to-emerald-400';
  let badgeColor = 'bg-emerald-950 border-emerald-700/60 text-emerald-300';

  if (secondsLeft <= 5) {
    barGradient = 'from-red-600 via-rose-500 to-red-600';
    badgeColor = 'bg-red-950 border-red-600 text-red-200 animate-pulse';
  } else if (secondsLeft <= 12) {
    barGradient = 'from-amber-500 to-orange-400';
    badgeColor = 'bg-amber-950 border-amber-700/60 text-amber-300';
  }

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs font-bold">
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${badgeColor}`}>
          <Clock className={`w-3.5 h-3.5 ${isCritical ? 'animate-spin-slow' : ''}`} />
          <span className="font-mono text-sm font-black">{secondsLeft}s</span>
        </div>
        <span className="text-slate-400 font-mono text-[11px]">
          {secondsLeft} / {totalSeconds}s
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
          initial={false}
          animate={{
            width: `${percentage}%`,
            scale: isCritical ? [1, 1.02, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

