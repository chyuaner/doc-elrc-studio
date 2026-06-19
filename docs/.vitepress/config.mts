import { defineConfig } from 'vitepress'

const sharedSidebar = [
  {
    text: '✨ 專案特色',
    items: [
      { text: '歌詞編輯器', link: '/features/editor' },
      { text: 'KTV ASS字幕', link: '/features/ktv' },
    ]
  },
  {
    text: '📖 使用說明',
    items: [
      { text: '下載版與線上版的差異', link: '/use/different-app-web' },
      { text: '步驟說明', link: '/use/step' },
      // { text: '擴充.lrc的標籤', link: '/use/tag' },
      {
        text: '擴充.lrc的標籤',
        link: '/use/tag',
        items: [
          { text: 'LRC 標準的 標籤系統', link: '/use/tag#lrc-%E6%A8%99%E6%BA%96%E7%9A%84-%E6%A8%99%E7%B1%A4%E7%B3%BB%E7%B5%B1-%E8%AA%AA%E6%98%8E' },
          { text: 'KTV 專屬開源擴充', link: '/use/tag#ktv-%E5%B0%88%E5%B1%AC%E9%96%8B%E6%BA%90%E6%93%B4%E5%85%85-lrc-%E6%A8%99%E7%B1%A4%E7%B3%BB%E7%B5%B1-ktv-lrc-metadata-tags-%E7%9A%84%E8%AA%AA%E6%98%8E' },
          { text: 'KTV 多角色演唱與色彩樣式控制', link: '/use/tag/character' },
        ]
      },
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  title: "Enhanced LRC Studio",
  description: ".lrc動態歌詞編輯程式，同時可製作可匯出成.ass的KTV字幕",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '特色與使用說明', link: '/features/editor', activeMatch: '/(use|features)/' },
      { text: '下載/線上版', link: '/download' },
      { text: '開發說明', link: '/dev', activeMatch: '/dev/' },
      { text: 'Youtube', link: 'http://www.youtube.com/@yunsongktv' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chyuaner/doc-elrc-studio' }
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
      ],
      '/dev': [
        {
          text: '📖 開發文件',
          items: [
            { text: '專案組成', link: '/dev/' },
            {
              text: 'electron-elrc-studio',
                items: [
                  { text: '概要', link: '/dev/electron/' },
                  { text: '建立electron專案 <Badge type="info" text="AI生成文" />', link: '/dev/electron/init' },
                  { text: '自動Build <Badge type="info" text="AI生成文" />', link: '/dev/electron/github-action' },
                  { text: '視窗化處理 <Badge type="info" text="AI生成文" />', link: '/dev/electron/window' },
                ]
            },
            {
              text: 'tauri-elrc-maker <Badge type="info" text="棄用" />',
                items: [
                  { text: '概要', link: '/dev/tauri/' },
                ]
            }
          ]
        }
      ]
    },

    lastUpdated: true,

    outline: {
      label: '目錄'
    },

    footer: {
      message: '本專案採用 GNU AGPL v3 授權',
      copyright: 'Copyright © 2026-present <a href="https://yuaner.tw" target="_blank" rel="noopener noreferrer">Yuan Chiu</a>'
    }
  }
})
