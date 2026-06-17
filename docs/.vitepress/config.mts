import { defineConfig } from 'vitepress'

const sharedSidebar = [
  {
    text: '專案特色',
    items: [
      { text: '歌詞編輯器', link: '/features/editor' },
      { text: 'KTV ASS字幕', link: '/features/ktv' },
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Enhanced LRC Studio",
  description: ".lrc動態歌詞編輯程式，同時可製作可匯出成.ass的KTV字幕",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '特色與使用說明', link: '/features/editor' },
      { text: '下載', link: '/markdown-examples' },
      { text: '線上版', link: '/markdown-examples' },
      { text: '歌詞庫', link: '/markdown-examples' },
      { text: '開發說明', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ]
        }
      ],
      '/features/': sharedSidebar,
      '/use/': sharedSidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
