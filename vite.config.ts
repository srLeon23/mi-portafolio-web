import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // -- AQUI --
  base: "/mi-portafolio-web/",
  
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  }
});