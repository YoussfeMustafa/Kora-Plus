import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GuessMatchQuestion, BilingualText } from '../types/game';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { WrongShake } from '../components/WrongShake';
import { fireConfetti } from '../components/ConfettiEffect';
import { Trophy, Clock, Check, X } from 'lucide-react';

interface GuessMatchModeProps {
  question: GuessMatchQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const GuessMatchMode: React.FC<GuessMatchModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const TOTAL_TIME = 45;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      if (!isAnswered) {
        onAnswer(false, 0, TOTAL_TIME);
      }
    },
    autoStart: !isAnswered,
  });

  const handlePick = (option: BilingualText) => {
    if (isAnswered) return;
    timer.pause();
    setSelectedOpt(option[lang]);

    const isMatch =
      option.en.toLowerCase().includes(question.homeTeam.en.toLowerCase()) &&
      option.en.toLowerCase().includes(question.awayTeam.en.toLowerCase());

    if (isMatch) {
      fireConfetti();
      onAnswer(true, timer.secondsLeft, TOTAL_TIME);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onAnswer(false, timer.secondsLeft, TOTAL_TIME);
    }
  };

  const homeScorers = question.scorers.filter((s) => s.team === 'home');
  const awayScorers = question.scorers.filter((s) => s.team === 'away');

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

      {/* Mode Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Trophy className="w-3.5 h-3.5" />
          {t('modes.guess_match.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-1">
          {question.prompt[lang]}
        </h3>
      </div>

      {/* Stadium Match Scoreboard Board */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-600/60 rounded-3xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Top Header line: Competition Year */}
        <div className="text-center mb-3">
          <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
            {question.competition[lang]} • {question.year}
          </span>
        </div>

        {/* Giant Score Display */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 my-2">
          <div className="text-right flex-1 font-bold text-slate-300 text-sm sm:text-base truncate">
            {isAnswered ? question.homeTeam[lang] : 'Team A'}
          </div>

          <div className="px-5 py-2.5 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-amber-300 font-black text-3xl sm:text-5xl font-mono tracking-wider shadow-inner">
            {question.score}
          </div>

          <div className="text-left flex-1 font-bold text-slate-300 text-sm sm:text-base truncate">
            {isAnswered ? question.awayTeam[lang] : 'Team B'}
          </div>
        </div>

        {/* Goal Scorers Breakdown */}
        <div className="grid grid-cols-2 gap-4 mt-5 pt-4 border-t border-slate-800 text-xs">
          {/* Home Scorers */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-slate-500 uppercase tracking-wider text-[10px]">
              Home Scorers
            </span>
            {homeScorers.map((s, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <span className="text-amber-400 font-mono text-[11px] font-bold">⚽ {s.minute}</span>
                <span className="truncate">{s.player[lang]}</span>
              </div>
            ))}
          </div>

          {/* Away Scorers */}
          <div className="flex flex-col gap-1.5 text-right">
            <span className="font-mono text-slate-500 uppercase tracking-wider text-[10px]">
              Away Scorers
            </span>
            {awayScorers.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center justify-end gap-1.5 text-emerald-300 font-semibold"
              >
                <span className="truncate">{s.player[lang]}</span>
                <span className="text-amber-400 font-mono text-[11px] font-bold">⚽ {s.minute}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Options Selection */}
      <WrongShake trigger={shake}>
        <div className="grid grid-cols-1 gap-2.5 mt-1">
          {question.optionsTeams?.map((opt, idx) => {
            const isChosen = selectedOpt === opt[lang];
            const isTheCorrectOption =
              opt.en.toLowerCase().includes(question.homeTeam.en.toLowerCase()) &&
              opt.en.toLowerCase().includes(question.awayTeam.en.toLowerCase());

            let btnClass =
              'bg-slate-900 border-slate-800 text-white hover:bg-slate-800 hover:border-emerald-500/60';

            if (isAnswered) {
              if (isTheCorrectOption) {
                btnClass = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-black shadow-lg';
              } else if (isChosen && !isTheCorrectOption) {
                btnClass = 'bg-red-950 border-red-500 text-red-200 line-through';
              } else {
                btnClass = 'opacity-30 bg-slate-900 border-slate-800 text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handlePick(opt)}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 text-start font-bold text-sm sm:text-base flex items-center justify-between gap-3 transition-all active:scale-[0.98] ${btnClass}`}
              >
                <span>{opt[lang]}</span>
                {isAnswered && isTheCorrectOption && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                {isAnswered && isChosen && !isTheCorrectOption && <X className="w-5 h-5 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </WrongShake>
    </div>
  );
};

