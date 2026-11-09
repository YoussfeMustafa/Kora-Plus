import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';
import { ShieldCheck, Sparkles, Trophy, Users, Heart } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { t, i18n } = useTranslation();

  const modesList = [
    { num: 1, key: 'career_path' },
    { num: 2, key: 'football_auction' },
    { num: 3, key: 'historic_lineup' },
    { num: 4, key: 'password_link' },
    { num: 5, key: 'lightning_round' },
    { num: 6, key: 'guess_match' },
    { num: 7, key: 'numbers_stats' },
    { num: 8, key: 'nicknames_terms' },
    { num: 9, key: 'referee_laws' },
    { num: 10, key: 'continental_tournaments' },
    { num: 11, key: 'joker_double' },
    { num: 12, key: 'tiered_risk' },
    { num: 13, key: 'steal_round' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col items-center gap-8">
      {/* Brand Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <Logo size="xl" showText={false} />
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-2">
            <span>Koora</span>
            <span className="text-amber-400">Plus</span>
            <span className="text-emerald-400 font-black">+</span>
          </h2>
          <div className="text-xl font-bold font-arabic text-emerald-300">
            كورة بلس
          </div>
          <p className="text-sm font-bold text-amber-300/90 mt-1">
            {t('app.tagline')}
          </p>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed mt-1">
          {t('about.intro')}
        </p>
      </div>

      {/* Feature Pillars */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white">13 Authentic Modes</h4>
            <p className="text-xs text-slate-400 mt-0.5">{t('about.f1')}</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white">Online Multiplayer</h4>
            <p className="text-xs text-slate-400 mt-0.5">{t('about.f2')}</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-950 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white">Full Bilingual (العربية & EN)</h4>
            <p className="text-xs text-slate-400 mt-0.5">{t('about.f3')}</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white">100% Free Forever</h4>
            <p className="text-xs text-slate-400 mt-0.5">{t('about.f4')}</p>
          </div>
        </div>
      </div>

      {/* Complete Modes Directory */}
      <div className="w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col gap-4">
        <h3 className="text-lg font-black text-white">
          All 13 Game Modes in Koora Plus
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modesList.map((m) => (
            <div
              key={m.key}
              className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-2.5"
            >
              <div className="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-black flex items-center justify-center shrink-0">
                {m.num}
              </div>
              <div className="min-w-0">
                <div className="font-extrabold text-xs text-white truncate">
                  {t(`modes.${m.key}.title`)}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                  {t(`modes.${m.key}.desc`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer credits */}
      <div className="text-center text-xs text-slate-500 flex items-center gap-1.5">
        <span>Koora Plus (كورة بلس) v1.0.0 • Free-to-play Football Trivia</span>
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
      </div>
    </div>
  );
};

