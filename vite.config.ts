import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages（https://tokunagaakiraeng.github.io/taskboard/）で配信するためのベースパス
  base: '/taskboard/',
  plugins: [react()],
})
