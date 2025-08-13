import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Rehair Wig Salon',
  description: 'Rehair Wig Salon給您髮型重生、找回自信、質感高級',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    // navbar: ['/', '/get-started'],
    logo: '/images/logo.png',
    navbar: [
      { text: '首頁', link: '/' },
      { text: '產品介紹', link: '/products/' },
      { text: '設計實例', link: '/gallery/' },
      { text: '製作技術', link: '/technology/' },
      { text: '親臨體驗', link: '/experience/' },
      { text: '社群', link: '/social/' },
      { text: '聯絡我們', link: '/contact/' },
    ],
    sidebar: false,
    footer: '© 2025 Rehair Wig Salon — 專業妝髮設計 | 版權所有',
    displayFooter: true,

  }),

  bundler: viteBundler(),
})
