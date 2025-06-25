import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer({
    open: true, // 打包后自动打开分析页面
    gzipSize: true,
    brotliSize: true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../packages')
    }
  }
})
