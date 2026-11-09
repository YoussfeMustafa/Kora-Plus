import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoom } from '../hooks/useRoom';
import { EmojiReactions } from '../components/EmojiReactions';
import { Scoreboard } from '../components/Scoreboard';
import {
  Copy,
  Check,
  Share2,
  Users,
  Shield,
  Crown,
  Play,
  ArrowRight,
  ArrowLeft,
  Wifi,
  Sparkles,
} from 'lucide-react';
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

export const RoomView: React.FC = () => {
  const { code = '' } = useParams<{ code: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  const {
    room,
    playerId,
    joinRoom,
    startGame,
    sendReaction,
    submitScore,
    loading,
  } = useRoom(code);

  const [joinNickname, setJoinNickname] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const cleanCode = code.toUpperCase();
  const playersList = room ? Object.values(room.players || {}) : [];
  const currentPlayer = room?.players?.[playerId];
  const isHost = currentPlayer?.isHost;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cleanCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyLink = () => {
    const inviteUrl = `${window.location.origin}/room/${cleanCode}`;
    navigator.clipboard.writeText(inviteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShare = async () => {
    const inviteUrl = `${window.location.origin}/room/${cleanCode}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Koora Plus Room Invite',
          text: `Join my football quiz room on Koora Plus! Code: ${cleanCode}`,
          url: inviteUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinNickname.trim()) return;
    await joinRoom(cleanCode, joinNickname);
  };

  const handleQuestionAnswer = (
    success: boolean,
    timeLeft: number,
    totalTime: number
  ) => {
    setHasAnsweredCurrent(true);
    setIsAnswerCorrect(success);
    const awarded = success ? 100 + Math.round((timeLeft / totalTime) * 50) : 0;
    submitScore(awarded, success);
  };

  const handleNextQuestion = () => {
    if (!room) return;
    if (currentQIndex < room.questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setHasAnsweredCurrent(false);
      setIsAnswerCorrect(null);
    } else {
      navigate('/results');
    }
  };

  // If not joined yet, show quick join prompt
  if (room && !currentPlayer) {
    return (
      <div className="w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center gap-6">
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/40">
            Room: {cleanCode}
          </span>
          <h2 className="text-2xl font-black text-white mt-2">
            Join Locker Room
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Choose a nickname to enter the room with your friends.
          </p>
        </div>

        <form
          onSubmit={handleJoinSubmit}
          className="w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col gap-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              {t('room.nickname')}
            </label>
            <input
              type="text"
              maxLength={18}
              value={joinNickname}
              onChange={(e) => setJoinNickname(e.target.value)}
              placeholder="e.g. FootballWizard"
              required
              autoFocus
              className="w-full bg-slate-800 border-2 border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!joinNickname.trim() || loading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50 transition-all"
          >
            <span>Enter Room</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    );
  }

  // Active playing state
  if (room && room.status === 'playing') {
    const activeQuestion = room.questions[currentQIndex];
    if (!activeQuestion) return null;

    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-6 flex flex-col gap-6">
        {/* Prominent Scorer Highlight at top of screen whenever a player scores */}
        {room.lastScorerName && room.lastScoreAmount && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 text-slate-950 font-black text-center py-2 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 border border-amber-300"
          >
            <Sparkles className="w-4 h-4 fill-slate-950 animate-bounce" />
            <span className="text-sm font-black">
              {t('game.lastScorer', { name: room.lastScorerName, points: room.lastScoreAmount })}
            </span>
          </motion.div>
        )}

        {/* Live In-Room Scoreboard */}
        <div className="w-full bg-slate-900/90 border border-emerald-800/50 rounded-2xl p-4 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-500/40">
              Q {currentQIndex + 1} / {room.questions.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {playersList.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold"
              >
                <span className="text-emerald-400">{p.name}:</span>
                <span className="text-amber-400 font-extrabold">{p.score} pts</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Mode Screen */}
        <div className="w-full">
          {activeQuestion.mode === 'career_path' && (
            <CareerPathMode
              question={activeQuestion as CareerPathQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'football_auction' && (
            <FootballAuctionMode
              question={activeQuestion as FootballAuctionQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'historic_lineup' && (
            <HistoricLineupMode
              question={activeQuestion as HistoricLineupQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'password_link' && (
            <PasswordLinkMode
              question={activeQuestion as PasswordLinkQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'lightning_round' && (
            <LightningRoundMode
              question={activeQuestion as LightningQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'guess_match' && (
            <GuessMatchMode
              question={activeQuestion as GuessMatchQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'numbers_stats' && (
            <NumbersStatsMode
              question={activeQuestion as NumbersStatsQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'nicknames_terms' && (
            <NicknamesTermsMode
              question={activeQuestion as NicknamesTermsQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'referee_laws' && (
            <RefereeLawsMode
              question={activeQuestion as RefereeLawsQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'continental_tournaments' && (
            <ContinentalTournamentsMode
              question={activeQuestion as ContinentalTournamentsQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'joker_double' && (
            <JokerDoubleMode
              question={activeQuestion as JokerDoubleQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'tiered_risk' && (
            <TieredRiskMode
              question={activeQuestion as TieredRiskQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
          {activeQuestion.mode === 'steal_round' && (
            <StealRoundMode
              question={activeQuestion as StealRoundQuestion}
              onAnswer={handleQuestionAnswer}
              isAnswered={hasAnsweredCurrent}
              isCorrect={isAnswerCorrect}
            />
          )}
        </div>

        {/* Live Emoji Reactions Bar */}
        <EmojiReactions
          onReact={(emoji) => sendReaction(emoji)}
          externalReactions={room.reactions}
        />

        {/* Next Question / Finish */}
        {hasAnsweredCurrent && (
          <button
            onClick={handleNextQuestion}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl"
          >
            <span>
              {currentQIndex >= room.questions.length - 1 ? 'Finish Match' : 'Next Question'}
            </span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    );
  }

  // Lobby State (Waiting for players & Host kick-off)
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Room Code Card */}
      <div className="p-6 rounded-3xl bg-slate-900 border-2 border-emerald-500/50 shadow-2xl flex flex-col items-center text-center gap-4 relative overflow-hidden">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {t('room.roomCode')}
        </span>

        <div className="flex items-center gap-3">
          <span className="font-mono text-4xl sm:text-5xl font-black text-amber-400 tracking-wider">
            {cleanCode}
          </span>
          <button
            onClick={handleCopyCode}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={t('room.copyCode')}
          >
            {copiedCode ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {/* Quick Share Buttons */}
        <div className="flex items-center gap-2 w-full max-w-sm">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedLink ? t('room.linkCopied') : t('room.copyLink')}</span>
          </button>

          <button
            onClick={handleShare}
            className="py-2.5 px-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/50 text-xs font-bold text-emerald-300 flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{t('room.shareRoom')}</span>
          </button>
        </div>
      </div>

      {/* Roster of Players */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-300">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-400" />
            {t('room.players')} ({playersList.length})
          </span>
          <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
            <Wifi className="w-3 h-3 text-emerald-400 animate-pulse" />
            {t('room.connected')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {playersList.map((player) => (
            <div
              key={player.id}
              className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/70 flex items-center justify-between gap-2 shadow-sm"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-lg shrink-0">
                  {player.avatar || '⚽'}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-white text-sm truncate flex items-center gap-1.5">
                    <span>{player.name}</span>
                    {player.isHost && (
                      <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {player.id === playerId ? t('room.youBadge') : 'Ready'}
                  </div>
                </div>
              </div>

              {player.isHost && (
                <span className="text-[10px] font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  {t('room.hostBadge')}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Activity / Check-in Feed */}
      {room?.chatNotifications && room.chatNotifications.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-1.5 max-h-32 overflow-y-auto text-xs text-slate-400">
          {room.chatNotifications.slice(-5).map((notif) => (
            <div key={notif.id} className="flex items-center gap-1.5">
              <span className="text-emerald-400">•</span>
              <span>{notif.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Real-time Emoji Reactions in Locker Room */}
      <EmojiReactions
        onReact={(emoji) => sendReaction(emoji)}
        externalReactions={room?.reactions}
      />

      {/* Kick Off Button or Waiting Message */}
      {isHost ? (
        <button
          onClick={startGame}
          disabled={playersList.length < 1}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all disabled:opacity-50"
        >
          <Play className="w-5 h-5 fill-current ml-0.5" />
          <span>{t('room.startGame')}</span>
        </button>
      ) : (
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center text-xs font-bold text-slate-400 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>{t('room.waitingForHost')}</span>
        </div>
      )}
    </div>
  );
};

