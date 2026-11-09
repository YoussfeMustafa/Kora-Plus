import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../store/useGameStore';
import { Users, Plus, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

export const PassAndPlaySetupView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';
  const { startPassAndPlay, selectedModes } = useGameStore();

  const [players, setPlayers] = useState<string[]>([
    'Player 1',
    'Player 2',
  ]);
  const [questionCount, setQuestionCount] = useState<number>(10);

  const addPlayer = () => {
    if (players.length < 6) {
      setPlayers([...players, `Player ${players.length + 1}`]);
    }
  };

  const removePlayer = (index: number) => {
    if (players.length > 2) {
      setPlayers(players.filter((_, idx) => idx !== index));
    }
  };

  const updatePlayerName = (index: number, val: string) => {
    const updated = [...players];
    updated[index] = val;
    setPlayers(updated);
  };

  const handleStart = () => {
    startPassAndPlay(players, selectedModes, questionCount);
    navigate('/game');
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Users className="w-3.5 h-3.5" />
          {t('home.passAndPlay')}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
          Pass & Play Match Setup
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Play together on this device! Players take turns answering questions and stealing rival points.
        </p>
      </div>

      {/* Players Input List */}
      <div className="p-5 rounded-3xl bg-slate-900 border border-emerald-800/50 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-300">
          <span>Contestants (2 - 6 Players)</span>
          <span className="text-emerald-400 font-mono">{players.length} / 6</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {players.map((name, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-xs font-black text-emerald-300 shrink-0">
                P{idx + 1}
              </div>
              <input
                type="text"
                value={name}
                maxLength={20}
                onChange={(e) => updatePlayerName(idx, e.target.value)}
                placeholder={`Player ${idx + 1} Name`}
                className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-500"
              />
              {players.length > 2 && (
                <button
                  type="button"
                  onClick={() => removePlayer(idx)}
                  className="p-2 rounded-xl bg-red-950/60 border border-red-800/50 text-red-400 hover:bg-red-900/60 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {players.length < 6 && (
          <button
            type="button"
            onClick={addPlayer}
            className="w-full py-2.5 rounded-xl border border-dashed border-emerald-600/60 text-emerald-400 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-950/40 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Player</span>
          </button>
        )}
      </div>

      {/* Question Count Selector */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-300">Match Length</span>
        <div className="flex items-center gap-1.5">
          {[5, 10, 15, 20].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setQuestionCount(num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                questionCount === num
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {num} Qs
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStart}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
      >
        <span>Kick Off Pass & Play</span>
        {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
      </button>
    </div>
  );
};

