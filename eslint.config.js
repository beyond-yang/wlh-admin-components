import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    ignores: [
      // 依赖目录
      'node_modules/**',
      '.pnpm-store/**',

      // 构建输出目录
      'dist/**',
      'build/**',
      'lib/**',
      'es/**',
      '**/*.min.js',

      // 缓存目录
      '.cache/**',
      '.parcel-cache/**',
      '.vite/**',

      // 测试覆盖率报告
      'coverage/**',
      '**/*.lcov',

      // 日志文件
      '**/*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',

      // 环境变量文件
      '.env*',

      // IDE 和编辑器文件
      '.vscode/**',
      '.idea/**',
      '**/*.swp',
      '**/*.swo',
      '**/~',

      // 操作系统生成的文件
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',

      // 临时文件
      '**/*.tmp',
      '**/*.temp',
      '.tmp/**',
      '.temp/**',

      // 文档生成目录
      'docs/dist/**',
      'docs/.vuepress/dist/**',

      // 示例项目的构建输出
      'examples/dist/**',
      'examples/build/**',

      // 包管理器的锁文件
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',

      // 配置文件
      '**/*.config.js',
      '**/*.config.ts',
      'vite.config.ts',
      'rollup.config.js',
      'webpack.config.js',

      // 类型声明文件
      '**/*.d.ts',

      // 自动生成的文件
      'auto-imports.d.ts',
      'components.d.ts',

      // 文档文件
      '**/*.md',
      '**/*.mdx',

      // 其他不需要 lint 的文件
      '**/*.json',
      '**/*.yaml',
      '**/*.yml',
      '**/*.toml',
      '**/*.ini',
    ],
  },

  js.configs.recommended,

  // TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // Vue3
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // 这里手动写你想要的 vue3 规则
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-unused-vars': 'warn',
      // 你可以根据官方文档补充更多 vue3 推荐规则
    },
  },

  prettier,
])
