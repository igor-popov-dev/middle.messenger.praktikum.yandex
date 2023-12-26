import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

export default defineConfig({
  preview: {
    port: 3000,
  },
  plugins: [eslint({
    cache: false,
    include: ['./**/*.js', '/**/*.ts',  '/**/*.cts'],
    exclude: [],
  }), checker({typescript: true})],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  },
  build: {
    outDir: 'dist'
  }
}); 


