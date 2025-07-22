import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  title: '组件库',
  description: '企业级中后台组件库',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages'),
      },
    },
  },
})
