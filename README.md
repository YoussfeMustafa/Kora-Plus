# Koora Plus | كورة بلس
> **Play. Guess. Win. • العب. خَمِّن. فُز.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 18](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Vitest-21%20Passed-success.svg)](https://vitest.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-emerald.svg)](https://vite-pwa-org.netlify.app/)

**Koora Plus (كورة بلس)** is a production-quality, 100% FREE-to-play football (soccer) trivia web application built with **React 18, Vite, TypeScript, and Tailwind CSS**. It features online multiplayer for friends to compete in real-time over the internet, a local pass-and-play mode for single-device gaming, and offline solo challenge support.

---

## 🌟 Key Highlights

- **13 Diverse Game Modes**: From FIFA-style *Career Path (Who Am I?)* and *Historic Match Lineups* with pitch diagrams to *Football Auctions*, *IFAB Referee Laws*, and dramatic *Steal Rounds*.
- **Online Multiplayer (Real-Time)**: Create rooms with 6-character room codes (`/room/CODE`), share invite links, send live emoji reactions (⚽, 🔥, 👏, 🏆, etc.), and watch live scoreboard syncs. Includes Free-for-All (FFA) and Team Battles (Team Green vs Team Gold).
- **Solo & Pass-and-Play**: Play offline by yourself or pass the phone/tablet around a group of 2–6 friends.
- **Bilingual (Arabic & English)**: Complete native RTL (Right-to-Left) Arabic layout with Cairo typography, instant language switching, and comprehensive i18n translation files.
- **Dynamic Scoring & Risk**: Base points per tier, speed bonuses, consecutive streak multipliers, 2X Joker cards, and hard-tier wrong answer penalties.
- **No Paywalls & No Login Required**: Hop in instantly with an optional nickname.
- **Progressive Web App (PWA)**: Installable on iOS, Android, and Desktop, offering offline solo play.

---

## 🎮 The 13 Game Modes

| # | Game Mode | Description |
|---|---|---|
| 1 | **Career Path Challenge (Who Am I?)** | Guess the world star from their chronological club transfers. Hints (nationality, position, number) cost points. |
| 2 | **Football Auction** | Name as many valid answers (e.g. Ballon d'Or winners, Premier League 100-goal club) before the timer runs out. |
| 3 | **Historic Match Lineup** | Interactive pitch diagram of famous finals with 3–4 hidden starters to reveal. |
| 4 | **Password / Common Link** | Uncover the single common link connecting three superstars or managers. |
| 5 | **Lightning Round (30s)** | Rapid-fire quick-tap questions with rising streak multipliers (up to 3x). |
| 6 | **Guess the Match** | Deduce the match, teams, and competition from final scores, goalscorers, and goal minutes. |
| 7 | **Numbers & Stats Questions** | World records, appearances, and interactive **Higher / Lower** showdowns. |
| 8 | **Nicknames & Terminology** | Club nicknames (*Los Galácticos*, *Azzurri*), slang (*Rabona*, *Panenka*, *Pichichi*), and traditions. |
| 9 | **Referee Laws & Scenarios** | Rare refereeing scenarios, offside nuances, and penalty rules with official IFAB law citations. |
| 10 | **World Cup & Continental** | Full rounds dedicated to FIFA World Cup, UCL, AFCON, AFC Asian Cup, and the Arab Cup. |
| 11 | **Joker System (2X Points)** | Activate your ONE joker card before revealing a question to double your points. |
| 12 | **Tiered Risk System** | Choose your tier: Easy (+100 pts), Medium (+200, -50), or Hard (+350, -150 penalty). |
| 13 | **Steal Round** | If Team 1 misses, a dramatic 5-second window opens for rivals to steal the points! |

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/koora-plus.git
cd "Koora Plus(football)"
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Run Unit Tests
Run the 21 Vitest test suites (scoring, Arabic normalization, and fuzzy matching):
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```
The optimized assets and PWA service worker will be generated inside the `dist/` directory.

---

## 🌐 Free Firebase Multiplayer Setup

Koora Plus includes a **dual-engine multiplayer architecture**:
1. **Zero-Config Fallback**: Automatically enables instant cross-tab / local multiplayer out of the box using `BroadcastChannel` and local storage sync (perfect for instant testing and local demos).
2. **Firebase Realtime Database (Free Spark Plan)**: Connects unlimited players across different devices and networks.

### Setting Up Firebase Free-Tier:
1. Go to the [Firebase Console](https://console.firebase.google.com/) and click **Create a project**.
2. Under **Build**, select **Realtime Database** and click **Create Database** (choose a region close to your players, e.g. Belgium or US-Central).
3. Under Realtime Database **Rules**, configure read and write access:
   ```json
   {
     "rules": {
       "rooms": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```
4. Under **Authentication**, click **Get Started**, choose **Anonymous**, and enable it.
5. In **Project Settings > General**, click **Add App (Web icon `</>`)**, and copy your Firebase SDK credentials.
6. Create a `.env` file in the root folder with your keys:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
   VITE_FIREBASE_PROJECT_ID=your-project
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
   VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
   ```
7. Restart your development server (`npm run dev`) or re-deploy.

---

## 📦 How to Add More Questions

Questions are organized cleanly into individual mode files in `src/data/`:
- `careerPathQuestions.ts`
- `footballAuctionQuestions.ts`
- `historicLineupQuestions.ts`
- `passwordLinkQuestions.ts`
- `lightningQuestions.ts`
- `guessMatchQuestions.ts`
- `numbersStatsQuestions.ts`
- `nicknamesTermsQuestions.ts`
- `refereeLawsQuestions.ts`
- `continentalQuestions.ts`
- `jokerDoubleQuestions.ts`
- `tieredRiskQuestions.ts`
- `stealRoundQuestions.ts`

Each question is bilingual and typed:
```typescript
{
  id: 'cp_16',
  mode: 'career_path',
  category: 'Modern Star',
  difficulty: 4,
  prompt: {
    en: 'Who is this player based on his club career journey?',
    ar: 'من هو هذا اللاعب بناءً على مسيرته الكروية في الأندية؟'
  },
  career: [
    { years: '2016–2019', club: { en: 'Flamengo', ar: 'فلامنغو' } },
    { years: '2019–Present', club: { en: 'Real Madrid', ar: 'ريال مدريد' } }
  ],
  answer: { en: 'Vinícius Júnior', ar: 'فينيسيوس جونيور' },
  aliases: ['Vinicius', 'Vini Jr', 'فينيسيوس', 'فيني'],
  hints: {
    nationality: { en: 'Brazil', ar: 'البرازيل' },
    position: { en: 'Left Winger', ar: 'جناح أيسر' },
    shirtNumber: 7
  }
}
```

---

## 🚢 Free Deployment Guide

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository. Framework preset will automatically detect **Vite**.
4. Add your `.env` variables under **Environment Variables**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Add a `_redirects` file in `public/` containing:
   ```text
   /*    /index.html   200
   ```
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: './'`.
2. Run `npm run build` and deploy the `dist/` directory via `gh-pages` or GitHub Actions.

---

## 🎨 Branding & Original Artwork

- **Name**: "Koora Plus" (English) / "كورة بلس" (Arabic transliteration).
- **Logo**: 100% original, stylized vector football with a central "+" (Plus) jewel badge in pitch-green (`#10b981`) and gold (`#fbbf24`), rendered cleanly as an inline SVG component.
- **Audio Engine**: Synthesized in real-time via the browser's native **Web Audio API** (referee whistle, crowd cheer chords, timer ticks, buzzer), requiring 0 external MP3 asset downloads and functioning 100% offline.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE). Made with passion for football fans worldwide! ⚽🔥
