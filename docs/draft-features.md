---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

# 主要特色

<div class="features-grid">
  <!-- 卡片 1：純文字與表情符號 icon -->
  <div class="feature-card">
    <div class="feature-icon">🛠️</div>
    <div class="feature-title">Simple and minimal, always</div>
    <p class="feature-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <!-- 卡片 2：單一 SVG 圖片，帶有文字連結與右箭頭動畫 -->
  <div class="feature-card">
    <div class="feature-icon">
      <img src="/cool-feature-icon.svg" alt="Cool Feature" width="48" height="48" />
    </div>
    <div class="feature-title">Another cool feature</div>
    <p class="feature-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="feature-link-container">
      <a href="/features/editor" class="feature-link">Learn more <span class="arrow">&rarr;</span></a>
    </div>
  </div>

  <!-- 卡片 3：響應式深淺色模式圖示，整張卡片可點選跳轉 -->
  <a href="https://example.com" target="_blank" rel="external" class="feature-card has-link">
    <div class="feature-icon">
      <!-- 淺色模式圖示 -->
      <img src="/light-feature-icon.svg" alt="Light Icon" width="48" height="48" class="icon-light" />
      <!-- 深色模式圖示 -->
      <img src="/dark-feature-icon.svg" alt="Dark Icon" width="48" height="48" class="icon-dark" />
    </div>
    <div class="feature-title">Another cool feature</div>
    <p class="feature-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </a>
</div>

[其他特色...](/features/editor)

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

/* 將首頁 VPHero 底下的 link 連結加上底線 */
.VPHero .VPButton.link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* 僅限首頁特色卡片樣式微調 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.feature-card {
  display: block;
  padding: 24px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  /* border: 1px solid var(--vp-c-divider); */
  text-decoration: none;
  color: inherit;
  transition: border-color 0.25s, background-color 0.25s;
}
.feature-card.has-link:hover {
  border-color: var(--vp-c-brand-1);
}
.feature-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-mute);
  width: 48px;
  height: 48px;
  font-size: 24px;
}
.feature-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}
.feature-details {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.feature-link-container {
  margin-top: 12px;
}
.feature-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}
.feature-link:hover {
  color: var(--vp-c-brand-2);
}
.arrow {
  display: inline-block;
  transition: transform 0.25s;
}
.feature-link:hover .arrow {
  transform: translateX(4px);
}

/* 深淺色模式圖示切換 */
.dark .icon-light {
  display: none;
}
html:not(.dark) .icon-dark {
  display: none;
}
</style>
