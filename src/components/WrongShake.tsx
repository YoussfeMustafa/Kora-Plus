import React from 'react';
import { motion } from 'framer-motion';

export const WrongShake: React.FC<{
  trigger: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ trigger, children, className = '' }) => {
  return (
    <motion.div
      animate={
        trigger
          ? {
              x: [0, -10, 10, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

