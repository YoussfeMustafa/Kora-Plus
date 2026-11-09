import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StadiumBackground } from './components/StadiumBackground';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { GameView } from './views/GameView';
import { LobbyView } from './views/LobbyView';
import { RoomView } from './views/RoomView';
import { PassAndPlaySetupView } from './views/PassAndPlaySetupView';
import { ResultsView } from './views/ResultsView';
import { SettingsView } from './views/SettingsView';
import { AboutView } from './views/AboutView';

export const App: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <BrowserRouter>
      <StadiumBackground>
        <Header onOpenAbout={() => setAboutOpen(true)} />

        <main className="flex-1 flex flex-col justify-start">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/game" element={<GameView />} />
            <Route path="/lobby" element={<LobbyView />} />
            <Route path="/room/:code" element={<RoomView />} />
            <Route path="/pass-and-play" element={<PassAndPlaySetupView />} />
            <Route path="/results" element={<ResultsView />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global About Modal */}
        {aboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
            <div className="w-full max-w-2xl bg-slate-900 border-2 border-emerald-500/60 rounded-3xl p-6 shadow-2xl relative my-8">
              <button
                onClick={() => setAboutOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
              <AboutView />
            </div>
          </div>
        )}
      </StadiumBackground>
    </BrowserRouter>
  );
};

export default App;
