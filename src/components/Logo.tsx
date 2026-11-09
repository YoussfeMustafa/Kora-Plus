import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const pixelMap = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  };

  const px = pixelMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* ORIGINAL Logo: Stylized football with "+" sign in pitch-green and gold */}
      <div className={`relative ${sizeMap[size]} flex items-center justify-center shrink-0`}>
        <svg
          width={px}
          height={px}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:rotate-12"
          role="img"
          aria-label="Koora Plus Logo"
        >
          <defs>
            <linearGradient id="pitchGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Stadium/Pitch Border with golden dash */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#pitchGreen)"
            strokeWidth="4"
            className="dark:stroke-emerald-400 stroke-emerald-600"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="#064e3b"
            className="dark:fill-emerald-950 fill-emerald-800"
          />

          {/* Football Polygon Seams */}
          <polygon
            points="50,32 63,41 58,57 42,57 37,41"
            fill="url(#pitchGreen)"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
          />
          <line x1="50" y1="32" x2="50" y2="16" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <line x1="63" y1="41" x2="79" y2="36" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <line x1="58" y1="57" x2="71" y2="72" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <line x1="42" y1="57" x2="29" y2="72" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <line x1="37" y1="41" x2="21" y2="36" stroke="url(#goldGradient)" strokeWidth="1.5" />

          {/* Central Golden Plus (+) Badge */}
          <g filter="url(#softGlow)">
            {/* Horizontal Bar */}
            <rect
              x="42"
              y="46.5"
              width="16"
              height="7"
              rx="2"
              fill="url(#goldGradient)"
              stroke="#78350f"
              strokeWidth="0.5"
            />
            {/* Vertical Bar */}
            <rect
              x="46.5"
              y="42"
              width="7"
              height="16"
              rx="2"
              fill="url(#goldGradient)"
              stroke="#78350f"
              strokeWidth="0.5"
            />
            {/* Core highlight dot */}
            <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
          </g>

          {/* Corner accent stars/dots */}
          <circle cx="14" cy="50" r="2" fill="url(#goldGradient)" />
          <circle cx="86" cy="50" r="2" fill="url(#goldGradient)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-black text-xl tracking-tight leading-none">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
              Koora
            </span>
            <span className="text-amber-400 font-extrabold flex items-center">
              Plus
              <span className="ml-0.5 text-xs text-amber-300 font-black">+</span>
            </span>
          </div>
          <span className="text-[10px] text-emerald-300/80 font-arabic tracking-wide">
            كورة بلس
          </span>
        </div>
      )}
    </div>
  );
};

