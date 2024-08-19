import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LxBox文档",
  description: "一个基于LSE-nodejs的空岛核心API",
  base: '/LxBoxDoc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页面', link: '/' },
      { text: '插件介绍', link: '/README.md' },
      { text: 'API', link: '/API/README.md' }
    ],

    sidebar: [
      {
        text: 'LxBox介绍',
        items: [
          { text: 'LxBox介绍', link: '/README.md' }
        ]
      },
      {
        text: 'API 介绍',
        items: [
          { text: 'API 介绍', link: '/API/README.md' },
          { text: '组队 API', link: '/API/TeamAPI.md' },
          { text: '保护 API', link: '/API/ProtectAPI.md' },
          { text: '经济 API', link: '/API/EconomyAPI.md' },
          { text: '消息 API', link: '/API/MessageAPI.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Laoxiao7274/LxBox' }
    ]
  }
})
