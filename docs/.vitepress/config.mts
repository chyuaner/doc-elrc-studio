import { defineConfig } from 'vitepress'

const sharedSidebar = [
  {
    text: '專案特色',
    items: [
      { text: '歌詞編輯器', link: '/features/editor' },
      { text: 'KTV ASS字幕', link: '/features/ktv' },
    ]
  },
  {
    text: '使用說明',
    items: [
      { text: '步驟說明', link: '/use/step' },
      // { text: '擴充.lrc的標籤', link: '/use/tag' },
      {
        text: '擴充.lrc的標籤',
        items: [
          { text: 'v1', link: '/use/tag/v1' },
          { text: 'v2', link: '/use/tag/v2' },
          { text: 'v3', link: '/use/tag/v3' },
        ]
      },
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
      { text: '下載/線上版', link: '/download' },
      { text: '開發說明', link: '/dev' },
      { text: 'Youtube', link: 'http://www.youtube.com/@yunsongktv' },
    ],

    sidebar: {
      '': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ]
        }
      ],
      '/features/': sharedSidebar,
      '/use/': sharedSidebar,
      '/download': [
        {
          text: '📦 下載與安裝',
          items: [
            {
              text: '桌面視窗版', link: '/download#桌面視窗版',
                items: [
                  { text: 'Linux', link: '/download#linux' },
                  { text: 'Windows', link: '/download#windows' },
                  { text: 'macOS', link: '/macos' },
                ]
            },
            {
              text: '平板、手機版', link: '/download#平板-手機版',
              items: [
                { text: 'Android', link: '/download#android' },
                { text: 'iPad OS/iOS', link: '/download#ipad-os-ios' },
              ]
            },
            { text: '線上版', link: '/download#線上版' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '本專案採用 GNU AGPL v3 授權',
      copyright: 'Copyright © 2026-present Yuan Chiu'
    }
  }
})
