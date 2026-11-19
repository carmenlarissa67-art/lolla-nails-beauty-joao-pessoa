import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Build normal (Vercel): npm run build
// Arquivo único para enviar por WhatsApp: npm run build:html (gera dist/index.html com tudo dentro)
export default defineConfig(({ mode }) => ({
  plugins: mode === 'html' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'html' ? { assetsInlineLimit: 100000000, cssCodeSplit: false } : {},
}))
