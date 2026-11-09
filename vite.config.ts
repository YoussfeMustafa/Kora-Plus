import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'robots.txt'],
      manifest: {
        name: 'Koora Plus | كورة بلس',
        short_name: 'Koora Plus',
        description: 'The Ultimate Football Trivia Game - العب. خَمِّن. فُز.',
        theme_color: '#064e3b',
        background_color: '#040908',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/logo.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    host: true
  }
});
