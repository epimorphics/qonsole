import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      // Compile every SFC in custom element mode, so the styles of nested
      // components are injected into the shadow root rather than extracted
      // to a style.css that cannot reach it
      customElement: true,
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
  test: {
    // Unit tests only; the Playwright browser tests in tests/ run separately
    include: ['tests/unit/**/*.test.js'],
  },
})
