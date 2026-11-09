import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, X, Check } from 'lucide-react';

interface ReportModalProps {
  questionId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  questionId,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const [reason, setReason] = useState('fact');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save report to local storage or log
    const reports = JSON.parse(localStorage.getItem('koora_question_reports') || '[]');
    reports.push({
      questionId,
      reason,
      details,
      timestamp: Date.now(),
    });
    localStorage.setItem('koora_question_reports', JSON.stringify(reports));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDetails('');
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-amber-400 font-bold text-lg">
              <Flag className="w-5 h-5" />
              <h3>{t('game.reportQuestion')}</h3>
            </div>

            {submitted ? (
              <div className="py-6 flex flex-col items-center justify-center text-center text-emerald-400 gap-2">
                <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center border border-emerald-500">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <p className="font-bold">{t('game.reportedThanks')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="text-xs text-slate-400">Question ID: {questionId}</div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Issue Reason
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="fact">Fact is incorrect or outdated</option>
                    <option value="typo">Spelling error or typo</option>
                    <option value="translation">Translation is inaccurate</option>
                    <option value="answer">Accepted answer was rejected</option>
                    <option value="other">Other issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Provide correction details..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

