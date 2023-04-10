import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "http://localhost:5173/",
    },
  }, 
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@@', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@@@', replacement: path.resolve(__dirname, 'src/contexts') },
    ],
  },
})
