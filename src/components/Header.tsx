import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Volume2, VolumeX, Globe, Info, Flame, Trophy } from 'lucide-react';
import { Logo } from './Logo';
import { useThemeStore } from '../store/useThemeStore';
import { setLanguage } from '../i18n/config';
import { soundManager } from '../utils/sound';
import { useGameStore } from '../store/useGameStore';

export const Header: React.FC<{ onOpenAbout?: () => void }> = ({ onOpenAbout }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const [soundEnabled, setSoundEnabled] = React.useState(soundManager.enabled);
  const { score, streak } = useGameStore();

  const toggleSound = () => {
    soundManager.enabled = !soundManager.enabled;
    setSoundEnabled(soundManager.enabled);
    if (soundManager.enabled) {
      soundManager.playTick();
    }
  };

  const handleLangToggle = () => {
    const nextLang = i18n.language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/70 dark:bg-slate-950/80 border-b border-emerald-900/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform active:scale-95"
          aria-label="Koora Plus Home"
        >
          <Logo size="md" showText={true} />
        </Link>

        {/* Live Score & Streak (Shown if playing) */}
        {score > 0 && (
          <div className="hidden sm:flex items-center gap-3 bg-emerald-950/80 border border-emerald-700/50 rounded-full px-3.5 py-1 text-sm shadow-sm">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <Trophy className="w-4 h-4" />
              <span>{score}</span>
              <span className="text-[10px] text-emerald-300 uppercase">{t('game.points')}</span>
            </div>
            {streak > 1 && (
              <div className="flex items-center gap-1 font-extrabold text-orange-400 border-l border-emerald-800/80 pl-2">
                <Flame className="w-4 h-4 fill-orange-500 animate-bounce-short" />
                <span>{streak}x</span>
              </div>
            )}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-emerald-900/40 text-emerald-400 transition-colors"
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-emerald-900/40 text-amber-400 transition-colors"
            title={theme === 'dark' ? t('settings.lightMode') : t('settings.nightMode')}
            aria-label="Theme Toggle"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900/90 border border-emerald-600/50 text-emerald-300 font-bold text-xs transition-colors"
            title="Switch Language"
            aria-label="Language Switcher"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* About Dialog Trigger */}
          {onOpenAbout && (
            <button
              onClick={onOpenAbout}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-emerald-900/40 text-slate-300 transition-colors"
              title={t('about.title')}
              aria-label="About Koora Plus"
            >
              <Info className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

