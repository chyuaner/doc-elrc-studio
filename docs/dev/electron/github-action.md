::: warning
本文是由AI生成，是在功能製作過程中時順便備份內容當作為來手動處理時參考用，我沒花心力為該頁手動校稿。
:::


已新增 [`.github/workflows/release.yml`](.github/workflows/release.yml)，並更新 README 說明。

## 觸發時機

| 事件 | 行為 |
|------|------|
| `push` → `main` / `master` | 三平台建置，上傳 **Artifacts**（保留 90 天） |
| `push` → tag `v*`（例如 `v1.0.0`） | 同上 + 建立 **GitHub Release** 並附上安裝檔 |
| `pull_request` | 建置並上傳 Artifacts（方便測 PR） |
| 手動 | Actions 頁面 → **Run workflow** |

## 建置矩陣

- **Linux**（`ubuntu-latest`）→ `.AppImage`、`.deb`
- **Windows**（`windows-latest`）→ NSIS `.exe`
- **macOS**（`macos-latest`）→ `.dmg`（Apple Silicon；未簽章，已設 `CSC_IDENTITY_AUTO_DISCOVERY=false`）

每個 job 會：`checkout`（含 submodule）→ `npm ci` → `npm run dist` → 上傳安裝檔（不含 `*-unpacked/` 目錄）。

## 使用者如何下載

**日常 push（無 tag）**  
GitHub → **Actions** → 選一次成功的 **Release Build** → 底部 **Artifacts** → 下載 `Linux` / `Windows` / `macOS`。

**正式發版**

```bash
git tag v1.0.0
git push origin v1.0.0
```

之後在 repo 的 **Releases** 頁面可下載各平台檔案。

## 推送前請確認

1. **`aistudio-elrc-maker` submodule** 已 push 到遠端，且 CI 能讀取（公開 repo 即可）。
2. 第一次 push workflow 後到 Actions 看是否三平台都綠燈；macOS 未簽章 dmg 首次開啟可能需在「安全性與隱私」允許。

若要改成「只有打 tag 才建置」或「macOS 同時產 x64 + arm64」，可以再說一下我幫你調整 workflow。
