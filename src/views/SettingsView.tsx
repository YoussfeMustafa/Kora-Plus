import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../store/useThemeStore';
import { setLanguage } from '../i18n/config';
import { soundManager } from '../utils/sound';
import {
  Globe,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Smartphone,
  Sliders,
  Check,
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const [soundOn, setSoundOn] = React.useState(soundManager.enabled);
  const [hapticsOn, setHapticsOn] = React.useState(soundManager.hapticsEnabled);

  const handleLang = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  const handleSoundToggle = () => {
    soundManager.enabled = !soundManager.enabled;
    setSoundOn(soundManager.enabled);
    if (soundManager.enabled) soundManager.playTick();
  };

  const handleHapticsToggle = () => {
    soundManager.hapticsEnabled = !soundManager.hapticsEnabled;
    setHapticsOn(soundManager.hapticsEnabled);
    if (soundManager.hapticsEnabled) soundManager.vibrate(50);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Sliders className="w-3.5 h-3.5" />
          {t('settings.title')}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
          {t('settings.title')}
        </h2>
      </div>

      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col gap-5">
        {/* Language Selection */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2">
            {t('settings.language')}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleLang('ar')}
              className={`p-3.5 rounded-2xl border-2 font-arabic font-bold text-sm flex items-center justify-between transition-all ${
                i18n.language === 'ar'
                  ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <span>العربية (RTL)</span>
              {i18n.language === 'ar' && <Check className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={() => handleLang('en')}
              className={`p-3.5 rounded-2xl border-2 font-bold text-sm flex items-center justify-between transition-all ${
                i18n.language === 'en'
                  ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <span>English (LTR)</span>
              {i18n.language === 'en' && <Check className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Theme Setting */}
        <div className="pt-4 border-t border-slate-800">
          <label className="block text-xs font-bold text-slate-300 mb-2">
            {t('settings.theme')}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => theme === 'light' && toggleTheme()}
              className={`p-3.5 rounded-2xl border-2 font-bold text-xs flex items-center gap-2.5 transition-all ${
                theme === 'dark'
                  ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <Moon className="w-4 h-4 text-emerald-400" />
              <span>{t('settings.nightMode')}</span>
            </button>

            <button
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`p-3.5 rounded-2xl border-2 font-bold text-xs flex items-center gap-2.5 transition-all ${
                theme === 'light'
                  ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>{t('settings.lightMode')}</span>
            </button>
          </div>
        </div>

        {/* Sound Toggle */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white">{t('settings.sound')}</div>
            <div className="text-xs text-slate-400">{t('settings.soundDesc')}</div>
          </div>
          <button
            onClick={handleSoundToggle}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${
              soundOn ? 'bg-emerald-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform ${
                soundOn ? 'ltr:translate-x-6 rtl:-translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Haptics Toggle */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white">{t('settings.vibration')}</div>
            <div className="text-xs text-slate-400">{t('settings.vibrationDesc')}</div>
          </div>
          <button
            onClick={handleHapticsToggle}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${
              hapticsOn ? 'bg-emerald-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform ${
                hapticsOn ? 'ltr:translate-x-6 rtl:-translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

