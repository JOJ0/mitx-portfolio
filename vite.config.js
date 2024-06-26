import path from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '~assets': path.resolve(__dirname, 'src/assets'),
      },
    base: "./portfolio"
  },
})
