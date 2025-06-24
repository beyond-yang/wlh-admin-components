import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',           // 入口文件
      name: 'Core',                    // UMD 全局变量名
      fileName: 'core'                 // 打包输出文件名
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue'], // 不打包进最终产物的依赖---后续如果有其他外部依赖，也要加进来
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'Antd'
        }
      }
    }
  }
})