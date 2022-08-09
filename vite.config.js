import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
  },
  plugins: [vue()]
})
