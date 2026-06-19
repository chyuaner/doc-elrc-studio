---
outline: deep
---

Enhanced LRC Studio概要
===

## Repo專案組成

### web-elrc-studio - 核心
<https://github.com/chyuaner/web-elrc-studio>

主要由AI Studio生成開發，並做了數次重構與測試，也包含核心的KTV字幕產生邏輯。
後續衍生的桌面視窗版與行動APP版都將這個repo去git submodule連結進來以後再繼續開發的。

### electron-elrc-studio - 桌面視窗版
<https://github.com/chyuaner/electron-elrc-studio>

首選Electron版，是功能最完整的版本，詳情可參考[桌面視窗版 與 Web線上網頁版 有什麼不一樣](/use/different-app-web)。

### capacitor-elrc-studio - Android版
<https://github.com/chyuaner/capacitor-elrc-studio>

已做APP與Android作業系統的狀態列與導覽列配色連動處理，也特殊處理過全螢幕設計適配處理。

### doc-elrc-studio - 本站說明頁面
<https://github.com/chyuaner/doc-elrc-studio>

採用VitePress框架，並加入些許魔改，作為本專案官網用。

### tauri-elrc-maker <Badge type="info" text="已棄用" />
<https://github.com/chyuaner/tauri-elrc-maker>

～屍體一名～ 其實原意是要取代肥大的Electron，並且可以調用Rust直接操作GTK。

結果發現Tauri採用的瀏覽器引擎實在太過精簡，本專案有用到Web Audio API相關功能，結果導致開發中途還要架設串流伺服器，直接導致效能與穩定度嚴重不行。

## 專案歷來的改名

### 最初版：Enhanced LRC Maker
早期的repo名稱
- ai-studio-applet → aistudio-elrc-maker → web-elrc-maker
- tauri-elrc-maker
- electron-elrc-maker
- capacitor-elrc-maker

### 最終版Enhanced LRC Studio
相關repo名稱
- web-elrc-studio
- electron-elrc-studio
- capacitor-elrc-studio
