import { useState, useEffect, useRef, useCallback } from 'react';
import { soundManager } from '../utils/sound';

export interface UseTimerOptions {
  initialSeconds: number;
  onExpire?: () => void;
  autoStart?: boolean;
  playTickSound?: boolean;
}

export function useTimer({
  initialSeconds,
  onExpire,
  autoStart = true,
  playTickSound = true,
}: UseTimerOptions) {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(autoStart);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    setSecondsLeft(initialSeconds);
    setIsActive(autoStart);
  }, [initialSeconds, autoStart]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsActive(false);
          if (onExpireRef.current) {
            onExpireRef.current();
          }
          return 0;
        }

        // Tick sound during last 5 seconds
        if (prev <= 6 && playTickSound) {
          soundManager.playTick();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, playTickSound]);

  const pause = useCallback(() => setIsActive(false), []);
  const resume = useCallback(() => setIsActive(true), []);
  const reset = useCallback(
    (newSeconds = initialSeconds) => {
      setSecondsLeft(newSeconds);
      setIsActive(true);
    },
    [initialSeconds]
  );

  const percentage = Math.max(0, Math.min(100, (secondsLeft / initialSeconds) * 100));

  return {
    secondsLeft,
    isActive,
    percentage,
    pause,
    resume,
    reset,
  };
}

