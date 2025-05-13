import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
// In your vite.config.js
  // Ensure this is present to load env variables
  envPrefix: 'VITE_'
