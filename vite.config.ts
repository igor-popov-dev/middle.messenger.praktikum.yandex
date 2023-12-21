import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    port: 3000,
  },
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
}) 