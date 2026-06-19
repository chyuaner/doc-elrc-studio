---
aside: false
prev: false
next: false
---

下載 Enhanced LRC Studio
===

## 桌面視窗版

桌面版檔案目前託管於 GitHub。以下為最新版本 **{{ version }}** 的直接下載連結與中文說明：

### Linux 系統 {#linux}
#### 當前版本直接下載
*   <a :href="downloads.linuxAppImage" target="_blank" rel="noopener noreferrer">**AppImage 格式**</a>：免安裝格式，下載後賦予可執行權限即可直接啟動，支援絕大多數 Linux 發行版。
*   <a :href="downloads.linuxDeb" target="_blank" rel="noopener noreferrer">**Debian / Ubuntu 格式 (.deb)**</a>：適用於 Debian、Ubuntu、Linux Mint 等系統。
*   <a :href="downloads.linuxPacman" target="_blank" rel="noopener noreferrer">**Arch Linux 格式 (.pacman)**</a>：適用於 Arch Linux、Manjaro 等系統。

#### AUR / flatpak <Badge type="info" text="規劃中" />
*   暫未上架，目前 Linux 使用者請優先下載上述格式。

### macOS 系統 {#macos}
如果您的電腦是 Mac (如 MacBook, iMac)：
*   <a :href="downloads.macDmg" target="_blank" rel="noopener noreferrer">**Apple Silicon 晶片版**</a>：點擊下載 DMG 安裝檔。
    *   *適合使用 Apple M1 / M2 / M3 / M4 等晶片的新款 Mac 電腦。*

### Windows 系統 {#windows}
如果您的電腦是一般的 Windows：
*   <a :href="downloads.winSetup" target="_blank" rel="noopener noreferrer">**安裝版 (推薦一般使用者)**</a>：點擊下載安裝程式。
    *   *下載後雙擊執行，將會引導您安裝程式，並在桌面和開始選單建立捷徑。*
*   <a :href="downloads.winPortable" target="_blank" rel="noopener noreferrer">**免安裝版 (可攜版)**</a>：點擊下載免安裝程式.
    *   *下載後直接按兩下即可啟動，適合想直接體驗或放隨身碟攜帶的使用者。*


## 平板、手機APP版 {#平板-手機版}
### Android <Badge type="info" text="規劃中" />
暫未上架，請先使用線上網頁版。

### iPad OS / iOS <Badge type="info" text="規劃中" />
暫未上架，請先使用線上網頁版。


## 線上網頁版 {#線上版}

👉 **Enhanced LRC Studio 線上網頁版** <https://elrc-open.yuaner.tw>

線上網頁版無需下載或安裝，只要有網頁瀏覽器即可直接開啟並開始製作歌詞。

::: warning ⚠️ 瀏覽器功能限制
線上網頁版主要為了**方便快速使用、臨時修改或跨平台體驗**而提供。

由於瀏覽器的安全性沙盒限制，線上網頁版會受到部份功能限制，詳情請參考[桌面視窗版與Web線上網頁版有什麼不一樣](../use/different-app-web.md)。


為了獲得最完整、穩定的製作體驗與編輯效能，**強烈建議您優先下載並使用 [桌面視窗版](#桌面視窗版) 或是 [平板、手機APP版](#平板-手機版)**。
:::

<script setup>
import { ref, onMounted } from 'vue'

const fallbackVersion = 'v1.2.0'
const version = ref(fallbackVersion)

const downloads = ref({
  winSetup: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/Enhanced.LRC.Studio.Setup.1.2.0.exe',
  winPortable: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/Enhanced.LRC.Studio.1.2.0.exe',
  macDmg: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/Enhanced.LRC.Studio-1.2.0-arm64.dmg',
  linuxAppImage: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/Enhanced.LRC.Studio-1.2.0.AppImage',
  linuxDeb: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/electron-elrc-studio_1.2.0_amd64.deb',
  linuxPacman: 'https://github.com/chyuaner/electron-elrc-studio/releases/download/v1.2.0/electron-elrc-studio-1.2.0.pacman'
})

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/chyuaner/electron-elrc-studio/releases/latest')
    if (res.ok) {
      const data = await res.json()
      version.value = data.tag_name
      
      const assets = data.assets || []
      const findAssetUrl = (filterFn, fallback) => {
        const asset = assets.find(filterFn)
        return asset ? asset.browser_download_url : fallback
      }
      
      downloads.value = {
        winSetup: findAssetUrl(a => a.name.includes('Setup') && a.name.endsWith('.exe'), downloads.value.winSetup),
        winPortable: findAssetUrl(a => a.name.endsWith('.exe') && !a.name.includes('Setup') && !a.name.includes('.blockmap'), downloads.value.winPortable),
        macDmg: findAssetUrl(a => a.name.endsWith('.dmg') && !a.name.includes('.blockmap'), downloads.value.macDmg),
        linuxAppImage: findAssetUrl(a => a.name.endsWith('.AppImage'), downloads.value.linuxAppImage),
        linuxDeb: findAssetUrl(a => a.name.endsWith('.deb'), downloads.value.linuxDeb),
        linuxPacman: findAssetUrl(a => a.name.endsWith('.pacman'), downloads.value.linuxPacman)
      }
    }
  } catch (err) {
    console.error('Failed to fetch latest release info:', err)
  }
})
</script>

