import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    vue(),
    stylelint({
      fix: true,
      lintOnStart: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(
        fileURLToPath(new URL('.', import.meta.url)),
        'packages',
      ),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/core/index.ts'),
      name: 'WlhCore',
      fileName: (format) => `wlh-core.${format}.js`,
    },
    outDir: 'packages/core/dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
