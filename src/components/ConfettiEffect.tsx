import confetti from 'canvas-confetti';

export function fireConfetti() {
  if (typeof window === 'undefined') return;

  try {
    // Pitch-green, gold, and white confetti explosion
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#fbbf24', '#f59e0b', '#ffffff'],
    });
  } catch {
    // Fallback if canvas is blocked
  }
}

export function fireVictoryCelebration() {
  if (typeof window === 'undefined') return;

  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#10b981', '#fbbf24', '#ffffff'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#10b981', '#fbbf24', '#ffffff'],
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}

