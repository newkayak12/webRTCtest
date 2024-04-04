import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:2020
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue']
  },
  plugins: [vue()],
})
