import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' permite publicar em qualquer subcaminho (ex.: usuario.github.io/repositorio) sem configurar nada.
export default defineConfig({ base: './', plugins: [react()], build: { chunkSizeWarningLimit: 900 } });
