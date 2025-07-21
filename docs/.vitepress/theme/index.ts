import DefaultTheme from 'vitepress/theme'
import { WButton } from '../../../packages/core/Button'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册你的组件
    app.component('WButton', WButton)
  },
} as Theme
