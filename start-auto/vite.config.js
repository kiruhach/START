import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        yandex: resolve(__dirname, 'public/yandex_3bd5675eaf36de32.html')
      }
    }
  },
  publicDir: 'public'
})