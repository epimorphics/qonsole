import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      customElement: /\.ce\.vue$/,
    }),
  ],
  // Library mode leaves Vue's `process.env.NODE_ENV` checks in the bundle,
  // which throws "process is not defined" in a browser without a bundler
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'Qonsole',
      fileName: 'qonsole',
    },
  },
})
