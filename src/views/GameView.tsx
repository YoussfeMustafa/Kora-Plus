import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';
import { Scoreboard } from '../components/Scoreboard';
import { ReportModal } from '../components/ReportModal';
import { CareerPathMode } from '../modes/CareerPathMode';
import { FootballAuctionMode } from '../modes/FootballAuctionMode';
import { HistoricLineupMode } from '../modes/HistoricLineupMode';
import { PasswordLinkMode } from '../modes/PasswordLinkMode';
import { LightningRoundMode } from '../modes/LightningRoundMode';
import { GuessMatchMode } from '../modes/GuessMatchMode';
import { NumbersStatsMode } from '../modes/NumbersStatsMode';
import { NicknamesTermsMode } from '../modes/NicknamesTermsMode';
import { RefereeLawsMode } from '../modes/RefereeLawsMode';
import { ContinentalTournamentsMode } from '../modes/ContinentalTournamentsMode';
import { JokerDoubleMode } from '../modes/JokerDoubleMode';
import { TieredRiskMode } from '../modes/TieredRiskMode';
import { StealRoundMode } from '../modes/StealRoundMode';
import {
  CareerPathQuestion,
  FootballAuctionQuestion,
  HistoricLineupQuestion,
  PasswordLinkQuestion,
  LightningQuestion,
  GuessMatchQuestion,
  NumbersStatsQuestion,
  NicknamesTermsQuestion,
  RefereeLawsQuestion,
  ContinentalTournamentsQuestion,
  JokerDoubleQuestion,
  TieredRiskQuestion,
  StealRoundQuestion,
} from '../types/game';
import { ArrowRight, ArrowLeft, Flag, CheckCircle } from 'lucide-react';

export const GameView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  const {
    questions,
    currentQuestionIndex,
    isAnswered,
    isCorrect,
    submitAnswer,
    nextQuestion,
    incrementHintsUsed,
    hintsUsedCount,
    selectQuestionTier,
    selectedTier,
    streak,
  } = useGameStore();

  const [reportModalOpen, setReportModalOpen] = useState(false);

  // If no questions in store, redirect to home
  useEffect(() => {
    if (!questions || questions.length === 0) {
      navigate('/');
    }
  }, [questions, navigate]);

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const handleModeAnswer = (
    success: boolean,
    timeLeft: number,
    totalTime: number,
    stealingPlayer?: string
  ) => {
    submitAnswer(success, timeLeft, totalTime, stealingPlayer);
  };

  const handleNext = () => {
    const hasMore = nextQuestion();
    if (!hasMore) {
      navigate('/results');
    }
  };

  const renderActiveMode = () => {
    switch (currentQuestion.mode) {
      case 'career_path':
        return (
          <CareerPathMode
            question={currentQuestion as CareerPathQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onUseHint={incrementHintsUsed}
            hintsUsedCount={hintsUsedCount}
          />
        );
      case 'football_auction':
        return (
          <FootballAuctionMode
            question={currentQuestion as FootballAuctionQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'historic_lineup':
        return (
          <HistoricLineupMode
            question={currentQuestion as HistoricLineupQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'password_link':
        return (
          <PasswordLinkMode
            question={currentQuestion as PasswordLinkQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'lightning_round':
        return (
          <LightningRoundMode
            question={currentQuestion as LightningQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            streakCount={streak}
          />
        );
      case 'guess_match':
        return (
          <GuessMatchMode
            question={currentQuestion as GuessMatchQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'numbers_stats':
        return (
          <NumbersStatsMode
            question={currentQuestion as NumbersStatsQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'nicknames_terms':
        return (
          <NicknamesTermsMode
            question={currentQuestion as NicknamesTermsQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'referee_laws':
        return (
          <RefereeLawsMode
            question={currentQuestion as RefereeLawsQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'continental_tournaments':
        return (
          <ContinentalTournamentsMode
            question={currentQuestion as ContinentalTournamentsQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'joker_double':
        return (
          <JokerDoubleMode
            question={currentQuestion as JokerDoubleQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      case 'tiered_risk':
        return (
          <TieredRiskMode
            question={currentQuestion as TieredRiskQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onSelectTier={selectQuestionTier}
            selectedTier={selectedTier}
          />
        );
      case 'steal_round':
        return (
          <StealRoundMode
            question={currentQuestion as StealRoundQuestion}
            onAnswer={handleModeAnswer}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />
        );
      default:
        return null;
    }
  };

  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-6 flex flex-col gap-6">
      {/* Live Scoreboard */}
      <Scoreboard />

      {/* Dynamic Mode Screen with smooth Framer Motion transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="w-full"
        >
          {renderActiveMode()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Controls / Next Question Button & Report Button */}
      <div className="w-full flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={() => setReportModalOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
        >
          <Flag className="w-3.5 h-3.5" />
          <span>{t('game.reportQuestion')}</span>
        </button>

        {isAnswered && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={handleNext}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl active:scale-95 transition-all"
          >
            <span>{isLastQuestion ? t('game.finishGame') : t('game.nextQuestion')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </motion.button>
        )}
      </div>

      {/* Report Modal */}
      <ReportModal
        questionId={currentQuestion.id}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  );
};

