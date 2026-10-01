import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // three.js is lazy-loaded after first paint, so its large chunk doesn't block the page
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: './index.html',
    },
  },
})
