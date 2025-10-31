import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ works for Render and most hosting services
  plugins: [react()],
})
