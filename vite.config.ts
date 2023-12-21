import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [eslint()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  build: {
    outDir: 'dist'
  }
}); 