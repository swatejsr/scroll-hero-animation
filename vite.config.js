import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/scroll-hero-animation/',
  plugins: [
    react(),
    tailwindcss()
  ]
})