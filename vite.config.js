import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('Proxying request:', req.method, req.url);
          });
        }
        // No path rewrite - keep /api intact
      }
    }
  }
});
