import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRoom } from '../hooks/useRoom';
import { PlayFormat } from '../types/game';
import { Users, Shield, ArrowRight, ArrowLeft, Trophy } from 'lucide-react';

export const LobbyView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';
  const { createRoom, loading, error } = useRoom();

  const [nickname, setNickname] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('koora_nickname')) || ''
  );
  const [format, setFormat] = useState<PlayFormat>('multiplayer_ffa');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    try {
      const res = await createRoom(nickname, format);
      navigate(`/room/${res.roomCode}`);
    } catch {
      // Error handled by hook
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Trophy className="w-3.5 h-3.5" />
          {t('room.lobbyTitle')}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
          Create Online Room
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Play with your friends anywhere over the internet. Share code, battle for points!
        </p>
      </div>

      <form onSubmit={handleCreate} className="p-6 rounded-3xl bg-slate-900 border border-emerald-800/50 shadow-xl flex flex-col gap-5">
        {/* Nickname Input */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5">
            {t('room.nickname')}
          </label>
          <input
            type="text"
            maxLength={18}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="e.g. Captain Majid, CR7_Fan"
            required
            className="w-full bg-slate-800 border-2 border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none shadow-inner"
          />
        </div>

        {/* Format Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2">
            {t('room.format')}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormat('multiplayer_ffa')}
              className={`p-3.5 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all ${
                format === 'multiplayer_ffa'
                  ? 'bg-cyan-950/80 border-cyan-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-black">{t('room.ffa')}</span>
              <span className="text-[10px] text-slate-400">2 - 8 Players</span>
            </button>

            <button
              type="button"
              onClick={() => setFormat('multiplayer_team')}
              className={`p-3.5 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all ${
                format === 'multiplayer_team'
                  ? 'bg-amber-950/80 border-amber-500 text-white shadow-md'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}
            >
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-black">{t('room.teams')}</span>
              <span className="text-[10px] text-slate-400">Green vs Gold</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-950 border border-red-500 text-red-200 text-xs font-bold">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !nickname.trim()}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-xl active:scale-95 disabled:opacity-50 transition-all mt-2"
        >
          <span>{loading ? 'Creating Locker Room...' : 'Enter Locker Room'}</span>
          {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
        </button>
      </form>
    </div>
  );
};

