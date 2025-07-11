import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // your backend dev server
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
});
