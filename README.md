# My O! — 香港婚慶教學指南網站

> 為您的結婚證書打造設計師級專屬證書套，讓這份愛情的見證永恆閃耀。

**Live Site**: [https://myo-hk.github.io](https://myo-hk.github.io)
**教學指南**: [https://myo-hk.github.io/blog/](https://myo-hk.github.io/blog/)

---

## 📋 目錄

- [項目概述](#項目概述)
- [核心數據](#核心數據)
- [網站架構](#網站架構)
- [內容分類](#內容分類)
- [SEO 優化](#seo-優化)
- [技術棧](#技術棧)
- [自動化腳本](#自動化腳本)
- [測試](#測試)
- [部署指南](#部署指南)
- [專案結構](#專案結構)
- [開發規範](#開發規範)
- [品牌資訊](#品牌資訊)
- [PDF 列印除錯筆記](#pdf-列印除錯筆記)

---

## 項目概述

My O! 是一家專注於客製化結婚證書套的香港品牌。本項目是品牌的官方靜態網站，提供：

- **品牌展示** — 產品介紹、材質選擇、客製化選項（`index.html` / `v2.html`）
- **宣傳單張** — A5 尺寸海報，支援瀏覽器原生 PDF 列印（`poster.html`）
- **婚慶教學指南** — 420+ 篇涵蓋婚禮籌備全流程的中文文章（`blog/`）
- **SEO 內容矩陣** — 通過 Topical Authority 策略建立行業權威
- **社交分享** — 每篇文章內建 WhatsApp、Facebook、Twitter 分享按鈕
- **HEIC 轉換工具** — 瀏覽器端 HEIC/HEIF 轉 PNG/JPG 工具（`heic-converter.html`）

網站採用純靜態 HTML 架構，部署於 GitHub Pages，無需後端服務器。

### 兩個首頁版本

項目包含兩個首頁版本：

| 版本 | 檔案 | 說明 |
|------|------|------|
| 原始版 | `index.html` | 基於 Tailwind CSS + 自訂 CSS，暖色系配色（米色/玫瑰色），使用 Swiper.js 輪播展示設計款式 |
| 重設計版 | `v2.html` | CSS 變量系統 + Playfair Display 字體，更現代的設計語言，含步驟指示器、浮動快捷按鈕、Lightbox 圖片查看器、動畫系統與 `prefers-reduced-motion` 無障礙支援 |

兩個版本共享相同的產品內容（證書套顏色選擇、設計款式、客製化說明），並在手機版包含 Sticky Conversion Bar（固定底部轉換欄）。

---

## 核心數據

| 指標 | 數值 | 備註 |
|------|------|------|
| **總文章數** | 420+ | 涵蓋 28 個婚禮相關分類 |
| **非攝影文章** | 219+ | 佔比 52.1%，內容多元化 |
| **攝影文章** | 201 | 佔比 47.9% |
| **平均字數** | ~2,710 字 | 遠超 1,500 字 SOP 標準 |
| **1,500 字達標率** | 100% | 所有文章均達標 |
| **300 字視覺中斷合規率** | 100% | 最大純文字區塊 ≤ 100 字 |
| **孤立頁面** | 0 | 每篇文章連結 4 篇相關文章 |
| **分享按鈕覆蓋率** | 100% | 所有文章內建 4 個分享按鈕 |
| **動態 URL 覆蓋率** | 100% | og:url、canonical 全部動態解析 |

---

## 網站架構

```
myo-hk.github.io/
├── index.html              # 首頁（原始版）— 品牌展示、產品介紹、款式選擇、聯絡我們
├── v2.html                 # 首頁（重設計版）— CSS 變量系統、動畫、Lightbox
├── poster.html             # A5 宣傳單張 — 支援瀏覽器原生 PDF 列印
├── heic-converter.html     # HEIC/HEIF 轉圖片工具 — 中英雙語、多檔案批次轉換 + ZIP 下載
├── blog/
│   ├── index.html          # 教學指南索引 — 搜尋、分類篩選、動態計數
│   └── [420+ articles]     # 教學指南文章
├── privacy.html            # 私隱政策
├── terms.html              # 服務條款
├── sitemap.xml             # XML 網站地圖（含 35+ 文章 URL）
├── robots.txt              # 爬蟲指引
├── image/                  # 圖片資源（Logo、證書套顏色/款式預覽圖）
├── js library/             # 第三方 JS 庫（heic2any、JSZip、FileSaver）
└── tests/                  # Playwright 自動化測試
```

### 頁面連結策略

- **零孤立頁面** — 每篇文章包含 4 個「延伸閱讀」連結，指向隨機相關文章
- **雙向導航** — 所有頁面均可透過導航列返回首頁和教學指南索引
- **麵包屑導航** — 每篇文章包含「首頁 > 教學指南 > 文章標題」麵包屑
- **底部 CTA** — 每篇文章底部包含 WhatsApp 和 Instagram 聯絡我們按鈕
- **手機 Sticky Bar** — 手機版所有頁面底部顯示固定轉換欄（品牌 Logo + WhatsApp/IG 按鈕 + 立即查詢 CTA）

### 手機 Sticky Conversion Bar

所有頁面（首頁、文章頁、隱私政策、服務條款）在手機版（< 768px）底部均顯示固定轉換欄，桌面版自動隱藏。包含：
- 品牌 Logo 與名稱
- 「立即查詢」CTA 按鈕（橘紅色漸變）
- Instagram 與 WhatsApp 快速連結按鈕
- 超小螢幕（< 380px）自動隱藏輔助文字

---

## 內容分類

網站涵蓋 28 個婚禮相關分類，確保內容多元化：

### 核心分類（10+ 篇）

| 分類 | 文章數 | 涵蓋主題 |
|------|--------|----------|
| 📸 婚禮攝影 | 201 | 拍攝技巧、風格比較、價錢評測、後期處理 |
| 📋 婚禮籌備 | 28 | 預算分配、時間表、供應商選擇、場地比較 |
| 💡 其他 | 31 | 省錢貼士、常見錯誤、婚後事項 |
| 📜 證書套 | 18 | 材質比較、尺寸指南、客製化、保養 |
| 🏨 婚宴場地 | 16 | 酒店、餐廳、戶外、教堂、小型場地 |

### 支援分類（5-9 篇）

| 分類 | 文章數 | 涵蓋主題 |
|------|--------|----------|
| 🎎 傳統習俗 | 14 | 过大禮、安床、敬茶、上頭、回門 |
| ⚖️ 法律財務 | 10 | 財產協議、稅務優惠、保險規劃 |
| 🎨 婚禮創意 | 10 | 拍照道具、祝酒詞、簽名板 |
| 💑 婚後生活 | 10 | 溝通技巧、理財規劃、家居佈置 |
| 🤵 賓客服務 | 9 | 座位安排、住宿、交通、兒童照顧 |
| 🎀 婚禮佈置 | 9 | 花藝、燈飾、背景牆、甜品桌 |

### 細分分類（2-8 篇）

| 分類 | 文章數 | 分類 | 文章數 |
|------|--------|------|--------|
| 🎁 禮物紀念 | 8 | 💍 婚戒珠寶 | 8 |
| 💌 請柬設計 | 7 | 👰 新娘化妝 | 7 |
| 🎵 婚禮音樂 | 7 | 👗 婚紗禮服 | 6 |
| 🎊 婚禮回禮 | 6 | 🌿 環保婚禮 | 5 |
| 💔 離婚再婚 | 4 | 📝 註冊結婚 | 4 |
| 🏖️ 蜜月旅行 | 4 | 🌍 海外結婚 | 4 |
| ⛈️ 天氣應對 | 4 | 🎬 婚禮影片 | 2 |
| 🎤 婚禮司儀 | 2 | 🛡️ 婚禮保險 | 2 |
| 👥 婚禮人員 | 2 | | |

---

## SEO 優化

### 頁面級 SEO

每篇文章包含完整的 SEO meta 標籤：

```html
<title>文章標題</title>
<meta name="description" content="文章描述">
<meta name="keywords" content="關鍵字1, 關鍵字2, 關鍵字3">
<link rel="canonical" href="動態生成">
<meta property="og:title" content="文章標題">
<meta property="og:description" content="文章描述">
<meta property="og:url" content="動態生成">
<meta property="og:image" content="品牌圖片">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="index, follow">
```

### Schema.org 結構化數據

- **Article Schema** — 標題、描述、作者、發佈日期
- **FAQPage Schema** — 常見問題與答案（部分文章）
- **BreadcrumbList Schema** — 麵包屑導航結構
- **WebPage Schema** — 用於隱私政策、服務條款等非文章頁面

### 動態 URL 解析

所有社交分享 URL 使用 JavaScript 動態獲取當前頁面 URL，確保在不同域名部署時正確運作：

```javascript
(function() {
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = window.location.href;
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
})();
```

### 社交分享按鈕

每篇文章內建 4 個分享按鈕，URL 動態生成：

| 平台 | 實現方式 |
|------|----------|
| WhatsApp | `api.whatsapp.com/send?text=` |
| Facebook | `facebook.com/sharer/sharer.php?u=` |
| Twitter | `twitter.com/intent/tweet?url=` |
| 複製連結 | `navigator.clipboard.writeText()` |

### 內容 SOP 標準

| 規則 | 標準 | 合規率 |
|------|------|--------|
| 黃金字數 | 1,500+ 中文字符 | 100% |
| 視覺中斷 | 純文字區塊 ≤ 300 字 | 100%（實際 ≤ 100 字） |
| 視覺中斷類型 | 表格、清單、提示框、H3 標題 | 每篇文章 3-6 個 |

**為什麼是 1,500 字？**
- 防 AI 廢話：避免無中生有和重複觀點
- SEO 權重：足以佈局 1 個主關鍵字 + 5-8 個長尾關鍵字
- 香港市場：3-4 分鐘閱讀時間，保持低跳出率

**300 字視覺中斷法則：**
- 對 Google：表格和清單增加 Featured Snippets 機會
- 對讀者：迎合 F 型視覺掃描習慣，增加 Dwell Time

---

## 技術棧

| 技術 | 用途 | 版本/來源 |
|------|------|-----------|
| HTML5 | 頁面結構 | 純靜態 |
| Tailwind CSS | 樣式框架 | CDN (v3.x) |
| Font Awesome | 圖標庫 | CDN (v6.5.2) |
| Google Fonts | 字體 | Inter + Playfair Display + Noto Sans TC |
| JavaScript | 互動功能 | Vanilla JS |
| JSON-LD | 結構化數據 | Schema.org |
| Swiper.js | 輪播/滑塊 | CDN (swiper-bundle) |
| heic2any | HEIC 圖片轉換 | `js library/heic2any.min.js` |
| JSZip | ZIP 打包下載 | `js library/jszip.min.js` |
| FileSaver | 檔案下載 | `js library/FileSaver.min.js` |
| Playwright | 自動化測試 | npm 套件（v1.40） |
| Python 3 | 批次處理腳本 | — |

### 無需編譯

- 無 Node.js 依賴（除測試外）
- 無構建步驟
- 無框架依賴
- 直接部署靜態文件

---

## 自動化腳本

項目包含 3 個 Python 腳本用於內容管理與品質控制：

### 1. `fix_json_ld_and_table.py`

JSON-LD 結構化數據合併 + 表格無障礙修復。

**功能**：
- 合併重複的 JSON-LD FAQPage 區塊（保留問題數最多的）
- 為所有 `<th>` 標籤添加 `scope="col"` 以符合無障礙標準
- 生成 JSON 格式修復報告

**使用方法**：
```bash
python3 fix_json_ld_and_table.py [--test]
```

### 2. `fix_medium_issues.py`

中等 SEO 問題批量修復。

**功能**：
- 將硬編碼的絕對 URL（`https://myo-hk.github.io/blog/`）替換為相對 URL
- 為缺少 meta robots 標籤的頁面添加 `<meta name="robots" content="index, follow">`
- 為所有 `<img>` 標籤添加 `loading="lazy"` 延遲加載

**使用方法**：
```bash
python3 fix_medium_issues.py [--test]
```

### 3. `add_sticky_bar.py`

批次為所有 HTML 頁面添加手機版 Sticky Conversion Bar。

**功能**：
- 注入完整的 CSS 樣式（含響應式設計）
- 注入 HTML 結構（品牌 Logo + WhatsApp/IG 按鈕 + CTA）
- 自動根據檔案路徑（blog/ vs 根目錄）調整圖片路徑
- 自動跳過已存在 Sticky Bar 的檔案

**使用方法**：
```bash
python3 add_sticky_bar.py
```

---

## 測試

項目使用 Playwright 進行自動化端對端測試，覆蓋手機、平板、桌面三種裝置。

### 測試架構

```bash
tests/
├── homepage.spec.ts     # 首頁功能測試
└── mobile.spec.ts       # 手機版專屬測試（Sticky Bar、漢堡選單等）
```

### Playwright 配置

三種測試專案並行執行：

| 專案 | 裝置 | 視窗 |
|------|------|------|
| Mobile (iPhone 12) | 行動裝置 | 390 × 844 |
| Desktop Chrome | 桌面 | 1280 × 720 |
| Tablet (iPad) | 平板 | 768 × 1024 |

### 執行測試

```bash
# 安裝依賴
npm install

# 執行所有測試
npm test

# 手機版測試
npm run test:mobile

# 有頭模式（可視化）
npm run test:headed

# 查看測試報告
npm run report
```

---

## 部署指南

### GitHub Pages 部署

網站已配置為 GitHub Pages 靜態站點：

1. 推送代碼到 `main` 分支
2. GitHub Pages 自動從根目錄提供服務
3. 網站網址：`https://myo-hk.github.io`

### 自定義域名

如需使用自定義域名：

1. 在倉庫 Settings → Pages 中添加自定義域名
2. 在 DNS 提供商處添加 CNAME 記錄指向 `myo-hk.github.io`
3. 所有社交分享 URL 會自動適應新域名（使用 `window.location.href`）

### 本地預覽

```bash
# 使用任何靜態文件服務器
python3 -m http.server 8000
# 訪問 http://localhost:8000
```

---

## 專案結構

```
myo-hk/
├── index.html                  # 首頁（原始版）— Tailwind + Swiper
├── v2.html                     # 首頁（重設計版）— CSS 變量 + 動畫系統
├── poster.html                 # A5 宣傳單張 — 支援 PDF 列印下載
├── heic-converter.html         # HEIC/HEIF 轉圖片工具（中英雙語）
├── HTML-Artifacts.html         # PDF 下載實驗（html2pdf.js）
├── privacy.html                # 私隱政策
├── terms.html                  # 服務條款
├── robots.txt                  # 爬蟲指引
├── sitemap.xml                 # XML 網站地圖
│
├── blog/
│   ├── index.html              # 教學指南索引（搜尋 + 分類篩選）
│   └── [420+ .html files]      # 教學指南文章
│
├── image/
│   ├── 01_company_logo.png     # 品牌 Logo
│   ├── cert_color_beige.jpg    # 米色證書套預覽
│   ├── cert_color_blue.jpg     # 藍色證書套預覽
│   ├── cert_color_beige_texture.png
│   ├── cert_color_blue_texture.png
│   ├── cert_color_beige_and_blue.png
│   └── cert_style_[1-5]*.png   # 款式 1-5 預覽圖
│
├── js library/
│   ├── heic2any.min.js         # HEIC → PNG/JPG 轉換庫
│   ├── jszip.min.js            # ZIP 打包庫
│   └── FileSaver.min.js        # 瀏覽器端檔案儲存
│
├── tests/
│   ├── homepage.spec.ts        # 首頁 Playwright 測試
│   └── mobile.spec.ts          # 手機版 Playwright 測試
│
├── docs/                       # 文件資源
│
├── fix_json_ld_and_table.py    # JSON-LD 合併 + 表格無障礙修復
├── fix_medium_issues.py        # SEO 中等問題批量修復
├── add_sticky_bar.py           # 批次添加手機 Sticky Bar
├── fix_medium_report.json      # 修復報告
├── fix_report.json             # 修復報告
│
├── package.json                # Node.js 依賴（Playwright 測試）
├── playwright.config.js        # Playwright 配置
├── opencode.jsonc              # OpenCode AI 編輯器配置
│
├── CLAUDE.md                   # AI 行為指南
├── USER.md                     # 用戶指南
└── SOUL.md                     # 專案靈魂文件
```

---

## 開發規範

### 修改首頁

- `index.html`：修改直接編輯 HTML/CSS，使用 Tailwind CDN + 自訂 CSS 變量
- `v2.html`：修改時使用 `:root` CSS 變量系統（`--color-primary`、`--bg-primary` 等），確保無障礙支援（`prefers-reduced-motion`）

### 修改文章

1. 直接編輯對應的 HTML 文件
2. 確保字數 ≥ 1,500 中文字符
3. 確保每 300 字內有視覺中斷（表格、清單、提示框、H3）
4. 運行 `python3 fix_medium_issues.py --test` 檢查 SEO 合規性
5. 運行 `python3 fix_json_ld_and_table.py --test` 檢查結構化數據

### 新增文章

1. 以現有文章為模板創建新 HTML 文件
2. 修改 meta 標籤（title、description、keywords）
3. 修改 canonical URL 和 OG 標籤
4. 添加 JSON-LD Article Schema
5. 在 `blog/index.html` 中添加文章卡片
6. 在 `sitemap.xml` 中添加 URL 條目
7. 運行 `python3 add_sticky_bar.py` 添加手機轉換欄

### 提交代碼

```bash
git add .
git commit -m "feat: 描述更改"
git push
```

---

## 品牌資訊

| 項目 | 詳情 |
|------|------|
| **品牌名稱** | My O! 專屬結婚證書套 |
| **WhatsApp** | +852 6379 6410 |
| **Instagram** | [@myo.makeyourown](https://www.instagram.com/myo.makeyourown/) |
| **網站** | [myo-hk.github.io](https://myo-hk.github.io) |
| **產品** | 客製化結婚證書套（亞麻布 / 磨砂珠光） |
| **特色** | 熱轉印（燙印）工藝、新人名字 + 日期、書法家設計字體 |

---

## 授權

© 2026 My O! 版權所有。

---

## PDF 列印除錯筆記

### 背景
`poster.html` 提供「下載 PDF」功能，透過 `window.print()` 讓瀏覽器原生輸出 A4 PDF。

### 遇到的問題與解決方案

| # | 嘗試 | 問題 | 學到的教訓 |
|---|------|------|-----------|
| 1 | `html2canvas` + `jsPDF` | 圖片被 CSS 壓扁（`object-fit: cover`、`flex`、`padding` 無法被正確捕捉） | html2canvas 不支援現代 CSS 佈局（flexbox、gap、object-fit、transform），只能用於簡單 DOM |
| 2 | `window.print()` 原生列印 | POPUP 視窗中所有圖片變空白 | `window.open()` + `document.write()` 重建 DOM 會丟失圖片資源參照，**必須在原頁面觸發 `window.print()`** |
| 3 | `@media print` + `transform: scale(calc(...))` | 海報被推到右下，左邊大片空白、右邊內容飛出 A4 | 網頁的 `margin: 0 auto` / flex 居中會在 print 時將容器推到畫面中央，`transform-origin: top left` 在此基礎上縮放 → 位移放大 |
| 4 | **✅ 最終解法**: `position: absolute; left: 0; top: 0` + 精確 `scale(1.8898)` | 完美 | **核心洞察**：print 時必須先「釘死」容器在 (0,0)，再從左上角縮放 |

### 最終實現（第 4 版）

```css
@media print {
  .a5-flyer {
    position: absolute !important;   /* 脫離排版流，避免居中位移 */
    left: 0 !important;
    top: 0 !important;
    margin: 0 !important;            /* 拔除 margin: 0 auto */
    width: 420px !important;         /* 海報原始設計寬度 */
    transform: scale(1.8898) !important;  /* A4 width(793.7px) / poster(420px) */
    transform-origin: top left !important;
  }
}
```

### 關鍵數字

| 參數 | 數值 | 來源 |
|------|------|------|
| 海報設計寬度 | 420px | `poster.html` `.a5-flyer` |
| A4 寬度（96 DPI） | 793.7px | `210mm × 3.7795 px/mm` |
| A4 高度 | 1123px | 海報高度 530px × 1.8898 = 1002px（< A4 高度，正常留白） |
| 縮放倍數 | 1.8898 | `793.7 / 420`，硬編碼避免 `calc()` 單位混算 |

### poster.html 關鍵特性

- **品牌展示**：Alex Brush 手寫字體 Logo + Noto Serif 副標題
- **產品展示**：5 款證書套設計款式網格 + 顏色選擇（米色亞麻布 / 藍色磨砂珠光）
- **QR Code**：透過 `api.qrserver.com` 動態生成 Instagram / WhatsApp / 網站 QR Code
- **客製化說明**：產品特色四格佈局（尺寸、封面、保護、印刷）
- **螢幕自適應**：JS 根據視窗寬度自動縮放海報比例