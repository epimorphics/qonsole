import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      customElement: /\.ce\.vue$/,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'Qonsole',
      fileName: 'qonsole',
    },
  },
})
