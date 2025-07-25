import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [
    vue(),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'dist/stats.html'
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(
        fileURLToPath(new URL('.', import.meta.url)),
        '../packages',
      ),
      // 优化开发体验-直接引入core的index.ts-热更新
      // '@wli-admin-components/core': path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../packages/core/index.ts'),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild', // 或 'terser'
    rollupOptions: {
      treeshake: true, // 确保开启 Tree Shaking
    },
  },
})
