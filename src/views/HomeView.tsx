import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Logo } from '../components/Logo';
import { useGameStore } from '../store/useGameStore';
import { GameModeId } from '../types/game';
import {
  Play,
  Users,
  Wifi,
  Sparkles,
  Trophy,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Gavel,
  ShieldAlert,
  Flame,
  Globe2,
  BookOpen,
  Scale,
  BarChart3,
  Link2,
} from 'lucide-react';

const MODE_ICON_MAP: Record<GameModeId, React.ReactNode> = {
  career_path: <HelpCircle className="w-5 h-5 text-emerald-400" />,
  football_auction: <Gavel className="w-5 h-5 text-amber-400" />,
  historic_lineup: <Trophy className="w-5 h-5 text-blue-400" />,
  password_link: <Link2 className="w-5 h-5 text-purple-400" />,
  lightning_round: <Flame className="w-5 h-5 text-orange-400" />,
  guess_match: <Trophy className="w-5 h-5 text-yellow-400" />,
  numbers_stats: <BarChart3 className="w-5 h-5 text-cyan-400" />,
  nicknames_terms: <BookOpen className="w-5 h-5 text-pink-400" />,
  referee_laws: <Scale className="w-5 h-5 text-emerald-300" />,
  continental_tournaments: <Globe2 className="w-5 h-5 text-indigo-400" />,
  joker_double: <Sparkles className="w-5 h-5 text-amber-300" />,
  tiered_risk: <ShieldAlert className="w-5 h-5 text-rose-400" />,
  steal_round: <Users className="w-5 h-5 text-red-400" />,
};

export const HomeView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  const { startSoloGame, selectedModes, setSelectedModes } = useGameStore();

  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [showModeModal, setShowModeModal] = useState(false);

  const highScore = typeof window !== 'undefined'
    ? parseInt(localStorage.getItem('koora_high_score') || '0', 10)
    : 0;

  const handleStartSolo = () => {
    startSoloGame(selectedModes, 10);
    navigate('/game');
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCodeInput.trim()) return;
    navigate(`/room/${roomCodeInput.trim().toUpperCase()}`);
  };

  const toggleMode = (mode: GameModeId) => {
    if (selectedModes.includes(mode)) {
      if (selectedModes.length > 1) {
        setSelectedModes(selectedModes.filter((m) => m !== mode));
      }
    } else {
      setSelectedModes([...selectedModes, mode]);
    }
  };

  const allModesList: GameModeId[] = [
    'career_path',
    'football_auction',
    'historic_lineup',
    'password_link',
    'lightning_round',
    'guess_match',
    'numbers_stats',
    'nicknames_terms',
    'referee_laws',
    'continental_tournaments',
    'joker_double',
    'tiered_risk',
    'steal_round',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center gap-8 sm:gap-12">
      {/* Hero Branding Section */}
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Logo size="xl" showText={false} />
          <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full -z-10" />
        </motion.div>

        <div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-2">
            <span>Koora</span>
            <span className="text-amber-400">Plus</span>
            <span className="text-emerald-400 text-3xl sm:text-5xl font-black">+</span>
          </h1>
          <div className="text-lg sm:text-2xl font-bold font-arabic text-emerald-300 mt-1">
            كورة بلس
          </div>
          <p className="text-base sm:text-lg font-extrabold text-amber-300/90 mt-2 tracking-wide">
            {t('app.tagline')}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
        </div>

        {/* Free Badge & High Score */}
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300">
            {t('home.freeToPlay')}
          </span>
          {highScore > 0 && (
            <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              {t('home.highScore')}: {highScore} pts
            </span>
          )}
        </div>
      </div>

      {/* Main Play Action Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Card 1: Solo Mode */}
        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/60 border-2 border-emerald-600/40 hover:border-emerald-500 shadow-xl flex flex-col justify-between gap-6 transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-md">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-900/60 text-emerald-300 px-2.5 py-1 rounded-full">
              Single Player
            </span>
          </div>

          <div>
            <h3 className="text-xl font-black text-white">{t('home.playSolo')}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Test your football memory against a progressive difficulty curve across your chosen game modes.
            </p>
          </div>

          <button
            onClick={handleStartSolo}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <span>{t('home.playSolo')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Card 2: Local Pass & Play */}
        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-600/40 hover:border-amber-500 shadow-xl flex flex-col justify-between gap-6 transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-950 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-amber-900/60 text-amber-300 px-2.5 py-1 rounded-full">
              1 Device
            </span>
          </div>

          <div>
            <h3 className="text-xl font-black text-white">{t('home.passAndPlay')}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Gather with friends on a single phone or screen. Take turns, steal answers, and crown the match champion!
            </p>
          </div>

          <button
            onClick={() => navigate('/pass-and-play')}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <span>{t('home.passAndPlay')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Card 3: Online Multiplayer Room */}
        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/50 border-2 border-cyan-600/40 hover:border-cyan-500 shadow-xl flex flex-col justify-between gap-6 transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-md">
              <Wifi className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-cyan-900/60 text-cyan-300 px-2.5 py-1 rounded-full">
              Online
            </span>
          </div>

          <div>
            <h3 className="text-xl font-black text-white">{t('home.createRoom')}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Play with friends over the internet in real-time. Share room code, pick teams, and view live scoreboards!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate('/lobby')}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <span>{t('home.createRoom')}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            {/* Quick Join Code Form */}
            <form onSubmit={handleJoinRoom} className="flex gap-1.5">
              <input
                type="text"
                maxLength={6}
                value={roomCodeInput}
                onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                placeholder="Code (e.g. KPLUS7)"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono font-bold text-center text-white placeholder-slate-500 uppercase focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={!roomCodeInput.trim()}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-slate-700 disabled:opacity-40"
              >
                {t('home.join')}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Modes Customization Drawer / Trigger */}
      <div className="w-full max-w-2xl bg-slate-900/80 border border-emerald-900/50 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm font-black text-white flex items-center gap-2">
            <span>{t('home.selectModes')}</span>
            <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-600/60 px-2 py-0.5 rounded-full font-bold">
              {selectedModes.length} / {allModesList.length} Active
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Customize which of the 13 game modes appear in your question playlist.
          </p>
        </div>

        <button
          onClick={() => setShowModeModal(!showModeModal)}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-emerald-400 text-xs font-bold shrink-0 transition-colors"
        >
          {showModeModal ? 'Hide Modes' : t('home.customizeModes')}
        </button>
      </div>

      {/* 13 Modes Selector Grid */}
      {showModeModal && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {allModesList.map((mode) => {
            const isSelected = selectedModes.includes(mode);
            return (
              <button
                key={mode}
                type="button"
                onClick={() => toggleMode(mode)}
                className={`p-3.5 rounded-2xl border-2 text-start flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/80 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-500 opacity-60'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  {MODE_ICON_MAP[mode]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-xs truncate">
                    {t(`modes.${mode}.title`)}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {t(`modes.${mode}.desc`)}
                  </div>
                </div>
                <div className="shrink-0">
                  <CheckCircle
                    className={`w-4 h-4 ${
                      isSelected ? 'text-emerald-400 fill-emerald-950' : 'text-slate-700'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

