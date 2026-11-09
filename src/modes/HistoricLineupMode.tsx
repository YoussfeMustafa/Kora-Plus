import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoricLineupQuestion, BilingualText } from '../types/game';
import { PitchDiagram } from '../components/PitchDiagram';
import { Timer } from '../components/Timer';
import { useTimer } from '../hooks/useTimer';
import { fireConfetti } from '../components/ConfettiEffect';
import { soundManager } from '../utils/sound';
import { Trophy, CheckCircle2 } from 'lucide-react';

interface HistoricLineupModeProps {
  question: HistoricLineupQuestion;
  onAnswer: (isCorrect: boolean, timeLeft: number, totalTime: number) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const HistoricLineupMode: React.FC<HistoricLineupModeProps> = ({
  question,
  onAnswer,
  isAnswered,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ar' ? 'ar' : 'en';

  const hiddenPlayers = question.lineup.filter((p) => p.isHidden);
  const [guessedPlayers, setGuessedPlayers] = useState<
    Record<string, { isCorrect: boolean; chosenName: string }>
  >({});

  const TOTAL_TIME = 60;
  const timer = useTimer({
    initialSeconds: TOTAL_TIME,
    onExpire: () => {
      finishLineup();
    },
    autoStart: !isAnswered,
  });

  const finishLineup = () => {
    timer.pause();
    const correctCount = Object.values(guessedPlayers).filter((g) => g.isCorrect).length;
    const isOverallSuccess = correctCount >= Math.ceil(hiddenPlayers.length / 2);

    if (isOverallSuccess) {
      fireConfetti();
    }
    onAnswer(isOverallSuccess, timer.secondsLeft, TOTAL_TIME);
  };

  const handleGuessPlayer = (playerId: string, chosen: BilingualText) => {
    const targetPlayer = question.lineup.find((p) => p.id === playerId);
    if (!targetPlayer) return;

    const isMatch =
      chosen.en.toLowerCase() === targetPlayer.name.en.toLowerCase() ||
      chosen.ar === targetPlayer.name.ar;

    if (isMatch) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }

    const updated = {
      ...guessedPlayers,
      [playerId]: { isCorrect: isMatch, chosenName: chosen[lang] },
    };
    setGuessedPlayers(updated);

    // If all hidden players guessed, complete round
    if (Object.keys(updated).length >= hiddenPlayers.length) {
      setTimeout(() => {
        timer.pause();
        const totalCorrect = Object.values(updated).filter((g) => g.isCorrect).length;
        const success = totalCorrect >= Math.ceil(hiddenPlayers.length / 2);
        if (success) fireConfetti();
        onAnswer(success, timer.secondsLeft, TOTAL_TIME);
      }, 700);
    }
  };

  const answeredCount = Object.keys(guessedPlayers).length;

  return (
    <div className="w-full flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Timer Bar */}
      <Timer secondsLeft={timer.secondsLeft} totalSeconds={TOTAL_TIME} />

      {/* Header Info */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5 w-fit mx-auto">
          <Trophy className="w-3.5 h-3.5" />
          {t('modes.historic_lineup.title')}
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white mt-1">
          {question.matchTitle[lang]}
        </h3>
        <p className="text-xs text-slate-400">
          Find the {hiddenPlayers.length} hidden starters ({answeredCount}/{hiddenPlayers.length} revealed)
        </p>
      </div>

      {/* Pitch Diagram */}
      <PitchDiagram
        formation={question.formation}
        lineup={question.lineup}
        onGuessPlayer={handleGuessPlayer}
        guessedPlayers={guessedPlayers}
        isReadOnly={isAnswered}
      />

      {/* Completion Banner */}
      {isAnswered && (
        <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500 text-center flex items-center justify-center gap-2 text-emerald-300 font-bold">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>
            Lineup Complete! Correct Starters: {Object.values(guessedPlayers).filter((g) => g.isCorrect).length} / {hiddenPlayers.length}
          </span>
        </div>
      )}
    </div>
  );
};

