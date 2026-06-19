---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Enhanced LRC Studio"
  text: "lrc動態歌詞編輯程式"
  tagline: ".lrc動態歌詞編輯程式，同時可製作可匯出成.ass的KTV字幕"
  image:
    light: /main.png
    dark: /main-dark.png
    alt: elrc-studio
  actions:
    - theme: brand
      text: 下載
      link: /download
    - theme: alt
      text: 線上網頁版
      link: https://elrc-open.yuaner.tw
    - theme: link
      text: 下載版與線上版的差異
      link: /use/different-app-web

features:
  - icon: Free
    title: 100% 免費！！
    details: 當初開發動機就是因為我有編輯動態歌詞的需求，免費好用的又幾乎難找，而且又看不慣品質不好卻搞收費的平台，就乾脆自己重新搞一套。
  - icon: 🐧
    title: 100% Linux全功能支援
    details: 本程式是在Linux Manjaro環境下開發的，保證在Linux作業系統可以全功能運作！
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Light / Dark Mode UI設計
    details: 本程式有設計亮、暗配色
  - icon: 🚀
    title: 編輯原檔即是標準的.lrc檔
    details: 本程式所產生的這份原檔可直接用於一般播放程式使用，由本程式衍生的所有額外擴充的功能，都以 LRC屬性 `[ktv:xxx]` 的方式紀錄。
  - icon: 🚀
    title: 多種匯出格式
    details: 支援匯出 .lrc 、 .ass 、 .srt 、 .txt 格式，可適用於各個播放器
  - icon: KTV
    title: 完善正統的KTV字幕系統
    details: 本專案內建ASS動態字幕匯出功能，可直接當作MV壓上KTV字幕使用。
  # - icon:
  #     src: /cool-feature-icon.svg
  #   title: Another cool feature
  #   details: Lorem ipsum...
  
---
