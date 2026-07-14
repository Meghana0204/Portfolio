import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Automatically adjust base path if running in GitHub Actions CI
  base: process.env.GITHUB_ACTIONS ? '/meghana-portfolio/' : '/',
})
