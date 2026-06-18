# Enhanced LRC Studio 說明文件

本專案為 **Enhanced LRC Studio** 的官方說明文件網站，採用 [VitePress](https://vitepress.dev/) 靜態網站產生器 (SSG) 建置。本站介紹了 `.lrc` 動態歌詞編輯程式的各項特色、下載管道以及詳細的開發說明（包含 KTV ASS 字幕製作、多角色演唱與色彩樣式控制等）。

---

## 🚀 快速開始（建置與開發步驟）

請確保您的系統已安裝 [Node.js](https://nodejs.org/)（建議使用 LTS 版本，例如 v18+）。

### 1. 安裝相依套件

在專案根目錄下執行以下指令安裝需要的 Node 模組：

```bash
npm install
```

### 2. 本地開發伺服器

執行以下指令啟動 VitePress 本地開發伺服器，它支援熱重載 (Hot Reload)：

```bash
npm run dev
```

* 啟動後通常會運行在 `http://localhost:5173/`（如果連接埠被佔用則會自動跳轉至 `5174` 等）。
* 您可以在瀏覽器中打開此網址，即時預覽文件的修改結果。

### 3. 靜態建置 (Build)

如果您要將網站發佈或部署到生產環境（例如 GitHub Pages、Vercel 或 Netlify），請執行以下指令進行靜態建置：

```bash
npm run build
```

* 建置完成後，靜態檔案將會產生在 `docs/.vitepress/dist` 目錄中。

### 4. 本地預覽建置結果 (Preview)

建置完成後，如果您想在本地模擬生產環境的伺服器載入，可以執行以下指令：

```bash
npm run preview
```

---

## 📂 專案目錄結構

```text
doc-elrc-studio/
├── docs/                      # VitePress 文件主要原始碼
│   ├── .vitepress/            # VitePress 設定目錄
│   │   ├── theme/             # 自訂主題與樣式
│   │   │   ├── index.ts       # 主題入口（已整合 Page Transitions 轉場特效與 sidebar spy）
│   │   │   └── custom.css     # 自訂樣式表（含 View Transitions 動畫特效與平滑滾動設定）
│   │   └── config.mts         # 網站導覽列、側邊欄、metadata 等設定檔
│   ├── features/              # 專案特色介紹頁面
│   ├── use/                   # 使用說明手冊
│   ├── dev/                   # 開發備忘錄與 Electron 建置說明
│   ├── download.md            # 下載與安裝頁面
│   └── index.md               # 首頁
├── package.json               # 專案相依套件與指令設定
└── README.md                  # 本說明文件
```

---

## 📄 授權條款

本說明文件網站與主專案均採用 **GNU AGPL v3** 授權條款。詳細版權資訊請參閱主專案之授權宣告。
