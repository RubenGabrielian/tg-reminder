import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      external: ['@twa-dev/sdk'],
      output: {
        globals: {
          '@twa-dev/sdk': 'window.Telegram.WebApp'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@twa-dev/sdk': '@twa-dev/sdk/dist/index.js'
    }
  }
})
