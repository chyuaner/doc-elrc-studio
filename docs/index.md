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

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
/* 僅限首頁生效的 Hero 圖片大小微調 */
.VPHero .image-src {
  max-width: 500px; 
  max-height: 500px;
  width: 100%;
  height: auto;
  object-fit: contain;
}
@media (max-width: 768px) {
  .VPHero .image-src {
    max-width: 280px;
    max-height: 280px;
  }
}
</style>
