# 有庠創新論壇 — 切版計畫

**Figma 檔案**：aNgdl8sGqzlFF205DjXcIt  
**設計基準**：桌機 1440px / 手機 390px  
**RWD 斷點**：`@media (max-width: 768px)`  
**技術棧**：純 HTML5 + CSS3 + vanilla JS（輪播互動）

---

## 進度紀錄

*最後更新：2026-06-30（本對話結束前）*

### ✅ 已完成的 Section

#### 0. Header（導覽列）
- **對應 HTML**：`<header class="site-header">` → `index.html` 約第 17–76 行
- **對應 CSS**：`css/style.css` → `1. HEADER / NAVIGATION`；手機樣式 → `@media` Header 區塊
- **桌機版 ✅**：fixed 白底、高 94px、雙 Logo + 7 項導覽（flex 自適應字寬）
- **手機版 ✅**：高 57px、漢堡選單 + `mobile-nav` 下拉（`js/main.js`）

#### 1. HeroSection（主視覺）
- **對應 HTML**：`<section id="hero-section" class="hero-section">` → `index.html` 約第 82–118 行
- **對應 CSS**：`css/style.css` → `2. HERO SECTION`；手機樣式 → `@media` Hero Section 區塊
- **桌機版 ✅**：全幅背景（`<picture>` + `object-fit: cover`）、5 張 `.hero-deco` 絕對定位裝飾圖、標題群置中
- **手機版 ✅**：背景改 `hero-bg-mobile.jpg`、`.hero-deco { display: none }`（見 T-2）、主標題改直排 60px、英/中副標改 `<img>`
- **動畫 ✅**：`.hero-section__title-group` → `data-animate="fadeInDown"`

#### 1-b. 合作校園（嵌於 HeroSection 內）
- **對應 HTML**：`<div class="school-section">` → `index.html` 約第 120–234 行（含 6 張 `.school-card`）
- **對應 CSS**：`css/style.css` → `3. 合作校園（School Section）`；手機樣式 → `@media` 合作校園區塊
- **桌機版 ✅**：CSS Grid 三欄（320px × 3）、`.section-title` + 6 卡片（light/dark 交替）
- **手機版 ✅**：單欄、`padding: 0 50px`、標題字級縮小
- **動畫 ✅**：`.section-title__text` → `fadeInDown`（JS 自動加）、`.school-cards` → `data-animate="fadeIn"`

#### 2. page-container（About 起共用漸層 + 底部 bg2）
- **對應 HTML**：`<div class="page-container">` → `index.html` 約第 238 行起；包住 about / speaker / forum / report / download / **footer**
- **對應 CSS**：`css/style.css` → `4. PAGE CONTAINER`（含 `.page-container__bg-wrap`、`.page-container__bg`）
- **漸層 ✅**：Figma Container `1:866` — `#e5721c` → `#f6d0b3`（16.83%）→ `#ffffff`
- **bg2 置底 ✅**：`assets/images/container-bg2.png`；`.page-container__bg-wrap` 裁切 transform 溢出（見 T-33、T-34）

#### 3. section-about（徐有庠紀念基金會 / 論壇簡介）
- **對應 HTML**：`<section id="about-section" class="section-about">` → `index.html` 約第 248–285 行
- **對應 CSS**：`css/style.css` → `5. SECTION ABOUT`；共用元件 → `4. 共用元件`；手機 → `@media` Section About
- **桌機版 ✅**：左文右影片、`.section-title--light`、`.btn--outline-light`、YouTube 點擊嵌入
- **手機版 ✅**：上下堆疊、影片高 197px
- **動畫 ✅**：`.section-about__content` → `data-animate="fadeIn"`

#### 4. section-speaker（講師介紹）
- **對應 HTML**：`<section id="speaker-section" class="section-speaker">` → `index.html` 約第 288–444 行
- **對應 CSS**：`css/style.css` → `6. SECTION SPEAKER`；手機 → `@media` Section Speaker
- **桌機版 ✅**：主影片 + 6 slide 輪播（左文右圖）、箭頭 + 12px dots、`deco-student` 裝飾圖
- **手機版 ✅**：上圖下文（flex order）、隱藏箭頭、8px dots、touch 拖曳（`js/main.js`）
- **動畫 ✅**：`.speaker-slider` → `data-animate="fadeIn"`
- **待補**：slide 2–6 講師內容

#### 5. section-forum（論壇精華）
- **對應 HTML**：`<section id="forum-section" class="section-forum">` → `index.html` 約第 447–536 行
- **對應 CSS**：`css/style.css` → `7. SECTION FORUM`；手機 → `@media` Section Forum
- **桌機版 ✅**：6 slide 影片輪播、箭頭 + dots；slide 1 YouTube `B8nWC4H3zrg`；`deco-bionic-limb` / `deco-silicon-wafer`
- **手機版 ✅**：全寬 16:9、隱藏箭頭、touch 拖曳；wafer 隱藏；bionic 貼右緣（見 T-16）
- **待補**：slide 2–6 影片內容

#### 6. section-report（深度報導）
- **對應 HTML**：`<section id="report-section" class="section-report">` → `index.html` 約第 539–865 行
- **對應 CSS**：`css/style.css` → `8. SECTION REPORT`；手機 → `@media` Section Report
- **桌機版 ✅**：彈性 3 欄卡片（`100cqi` 均分）、18 張 `<a class="report-card">` 整卡外連、步進 3 輪播、6 個 page dots（白/半透明，見 T-23）、`deco-nanobot`
- **手機版 ✅**：單張輪播、dots 隱藏、箭頭移到底部置中、每次步進 1 張、touch 拖曳
- **互動 ✅**：首尾循環 `loop: true`（見 T-20）；標題 hover 改主色（見 T-22）
- **待補**：各卡真實 `href`、圖片 URL、文案（目前 18 張佔位同結構）

#### 7. section-download（手冊下載）
- **對應 HTML**：`<section id="download-section" class="section-download">` → `index.html` 約第 867–897 行
- **對應 CSS**：`css/style.css` → `9. SECTION DOWNLOAD`；手機 → `@media` Section Download
- **桌機版 ✅**：白字標題、**CSS 白圓底**（`.download-visual__circle`，見 T-36）+ 書籍圖 + `.btn--filled`「立即下載」
- **手機版 ✅**：視覺縮至 339×334、按鈕水平置中（Figma `10:1431`）
- **下載 ✅**：`<a download>` → `assets/documents/2026-university-guide.pdf`（佔位 PDF，待換正式檔）
- **動畫 ✅**：`.download-visual` → `data-animate="fadeIn"`

#### 8. footer（頁尾）
- **對應 HTML**：`<footer class="site-footer">` → `index.html` 約第 899–914 行（**在 `.page-container` 內**，疊於 bg2 上）
- **對應 CSS**：`css/style.css` → `10. SITE FOOTER`；手機 → `@media` Footer
- **桌機版 ✅**：連結單行 + `|` 分隔、Copyright 第二行；**白字**、透明底（見 T-29）
- **手機版 ✅**：連結垂直堆疊、分隔符隱藏、Copyright 可換行（Figma `10:1437`）

#### 裝飾圖
| 圖片 | 位置 | 狀態 |
|------|------|------|
| `deco-dna-helix` 等 5 張 | `hero-section` `.hero-deco--*` | 桌機 ✅ / 手機隱藏（T-2） |
| `deco-student.png` | `section-speaker` `.section-deco--student` | 桌機 ✅ / 手機 ✅ |
| `deco-bionic-limb.png` | `section-forum` `.section-deco--bionic` | 桌機 ✅ / 手機 ✅ |
| `deco-silicon-wafer.png` | `section-forum` `.section-deco--wafer` | 桌機 ✅ / 手機隱藏 |
| `deco-nanobot.png` | `section-report` `.section-deco--nanobot` | 桌機 ✅ / 手機 ✅ |
| `container-bg2.png` | `.page-container__bg`（置底） | 桌機 ✅ / 手機 ✅ |

---

### 🔜 下一個要做的工作

**主要 section 切版已全部完成**（含合作校園、bg2、footer 移入 Container）。後續建議順序：

1. **內容待補**：speaker / forum slide 2–6、report 18 張卡片各別文案／圖片／外連 URL、正式 PDF 替換佔位檔
2. **全版 RWD 微調**：跨 section 間距、裝飾圖與 bg2 在不同 viewport 核對
3. **Footer 連結 URL 確認**（目前為天下學習通用連結佔位）

---

### 📐 CSS 變數命名規則摘要

| 類別 | 命名格式 | 範例 |
|------|---------|------|
| 顏色 | `--color-[描述]` | `--color-primary`、`--color-report-dot` |
| 字型 | `--font-family-[描述]` | `--font-family-base`、`--font-family-number` |
| 字級 | `--font-size-[層級/用途]` | `--font-size-h1`、`--font-size-h1-mobile` |
| 字重 | `--font-weight-[描述]` | `--font-weight-bold` |
| 行高 | `--line-height-[層級/px]` | `--line-height-h1`、`--line-height-28-8` |
| 字距 | `--letter-spacing-[描述]` | `--letter-spacing-wide` |
| 間距 | `--spacing-[px數字]` | `--spacing-20`、`--spacing-section-x`（170px） |
| 寬度 | `--width-[區塊/元件]-[描述]` | `--width-section-content`、`--width-download-circle` |
| 高度 | `--height-[區塊/元件]-[描述]` | `--height-about-video`、`--height-download-stage` |
| 定位（裝飾圖 / bg2） | `--top/right/left/rotate-deco-[名稱]` | `--left-deco-nanobot-mobile` |
| 圓角 | `--radius-[描述]` | `--radius-card` |
| 陰影 | `--shadow-[描述]` | `--shadow-card`、`--shadow-report-card` |
| 邊框寬 | `--stroke-width-[描述]` | `--stroke-width-2` |
| 比例 | `--aspect-ratio-[用途]` | `--aspect-ratio-video`、`--aspect-ratio-container-bg2` |
| 透明度 | `--opacity-[用途]` | `--opacity-report-dot` |
| 漸層 / Container | `--color-container-bg-*`、`--container-gradient-stop-mid` | 16.83% |
| bg2  transform | `--rotate-container-bg2` | `180deg` |
| Header 自適應 | `--width-header-*`、`--width-nav-*` | Logo clamp、nav 最小 4.5em 字寬 |
| Footer | `--padding-footer-bottom*` | 桌機 40px / 手機 30px |

所有 token 定義於 `css/variables.css` 的 `:root`。

---

### 🏷 Class 命名規則摘要（BEM）

| 類型 | 格式 | 範例 |
|------|------|------|
| Block | `block-name` | `site-header`、`hero-section`、`report-card` |
| Element | `block__element` | `school-card__date`、`speaker-slider__slide` |
| Modifier | `block--modifier` | `school-card--dark`、`btn--filled`、`btn--outline-light` |
| Section 區塊 | `section-[名稱]` + `section-[名稱]__inner` | `section-report`、`section-download__inner` |
| Page Container | `page-container` + `page-container__*` | `page-container__bg-wrap`、`page-container__bg` |
| 裝飾圖 | `section-deco` + `section-deco--[名稱]` | `section-deco--nanobot` |
| Hero 裝飾 | `hero-deco` + `hero-deco--[名稱]` | `hero-deco--dna` |
| 下載視覺 | `download-visual` + `download-visual__*` | `download-visual__circle`、`download-visual__book` |
| Footer | `site-footer` + `footer__*` | `footer__links`、`footer__link` |
| 跨 section 共用 | 無 block 前綴 | `.section-title`、`.btn`、`.video-player`、`.slider-arrow` |
| 輪播 JS hook | `[data-slider="speaker\|forum\|report"]` | `js/main.js`；report 含 `responsive` + `loop` |
| 捲動動畫 hook | `[data-animate="fadeIn\|fadeInDown"]` | `js/main.js` + animate.css 4.1.1 |

---

### ⚠️ 與 AGENTS.md 不同的臨時決定

| 編號 | 項目 | AGENTS.md 規範 | 實際做法 | 原因 |
|------|------|---------------|---------|------|
| T-1 | 手機版主標題字級 | 數值一律 variables.css | `.hero-section__main-title` 手機 `60px / 70px` 寫在 media query | 尚未建立 `--font-size-hero-title-mobile` |
| T-2 | 手機 Hero 裝飾圖 | 未規定 | `.hero-deco { display: none }`，視覺由 `hero-bg-mobile.jpg` 承擔 | 避免與 forum 區 bionic 重複 |
| T-3 | animate.css | 不用框架 | CDN 引入 animate.css 4.1.1 | 僅 utility 動畫 class |
| T-4 | `--animate-duration` | 應在 variables.css | 寫在 `style.css` 各元件 | 元件級 animate override |
| T-5 | `mobile-nav` 展開 | 未規定 | `max-height: 0 → 480px` transition | 純 CSS 展開 |
| T-6 | 手機選單陰影 | 應用變數 | `box-shadow: 0 6px 16px rgba(0,0,0,0.1)` 寫死 | 非設計 token |
| T-7 | Section 共用背景 | 未規定 | About 起包在 `.page-container` 統一 linear-gradient | Figma Container `1:866` |
| T-8 | 漸層中間色 | — | `--color-container-bg-mid: #f6d0b3` 在 variables.css | Figma 實量色 |
| T-9 | 主影片尺寸 | Figma 固定 px 高 | `width:100%` + `aspect-ratio:16/9` + 縮圖 `object-fit:contain` | 完整顯示影片 |
| T-10 | 水平溢出 | 未規定 | `html, body { overflow-x: hidden }` | 裝飾圖貼邊不產生橫向捲軸 |
| T-11 | 裝飾圖定位 | Figma 絕對 px | bionic / wafer 改貼螢幕邊；手機 bionic `top:-110px` | RWD 貼邊 |
| T-12 | img-student 歸屬 | PLAN 初稿寫 Hero | 實作在 `section-speaker` | 依 Figma 講師介紹區 |
| T-13 | 按鈕 hover | 未規定 | `.btn--outline-light:hover` 改 `--color-secondary` | 互動微調 |
| T-14 | Header 左右 padding | spacing token | 桌機 `clamp` + 最大 72px | Figma Header |
| T-15 | 半透明色 | 禁止 style.css 寫死 | 多處 `rgba(...)` placeholder / nav 分隔等 | 非正式 palette token |
| T-16 | 論壇標題層級 | 未規定 | `.section-forum__inner { z-index: 2 }` | 手機 bionic 不遮標題 |
| T-17 | 影片播放 JS | vanilla only | 點擊 poster 嵌入 iframe；輪播切換 `restoreVideoPoster` | forum 多 slide |
| T-18 | Report 卡片寬度 | Figma 316px 固定 | 桌機 `100cqi` 彈性三欄填滿 viewport | 使用者要求三張完整顯示 |
| T-19 | Report 卡片數量 | Figma 6 張 | HTML 18 張佔位 | 使用者指定 |
| T-20 | Report 輪播邊界 | 未規定 | `loop: true` 首尾循環 | 使用者指定 |
| T-21 | Report 卡片互動 | 未規定 | 整卡 `<a class="report-card">` 外連 | 整張卡片為感應區 |
| T-22 | Report 標題 hover | 未規定 | hover / focus 時 `.report-card__title` 改 `--color-primary` | 使用者指定 |
| T-23 | Report dots 顏色 | 與 speaker 同 primary | 白底 active / 35% 半透明 inactive（`--color-report-dot`） | 依 Figma 漸層背景稿 |
| T-24 | Report 圖片比例 | Figma 316×280 | `--aspect-ratio-report-card: 4 / 3` + `object-fit: cover` | 使用者指定橫式比例 |
| T-25 | Report 桌機 dots | 6 dots = 6 slides | 6 page dots（每 3 張一組）對應 18 卡 | `dotMode: page` |
| T-26 | Report 手機 slider | Figma dots 隱藏 | 無 dots、箭頭底部、步進 1 | 使用者指定 |
| T-27 | Download 結構 | PLAN 寫 `.download__book` | 實作 `.download-visual__*` 絕對定位堆疊 | 對齊 Figma Group 1 圖層 |
| T-28 | 下載按鈕樣式 | 僅 `.btn--outline-light` | 新增 `.btn--filled`（secondary 底 + 黑框黑字） | Figma download BTN |
| T-29 | Footer 位置/字色 | 未規定 | 在 `.page-container` **內**、透明底、**白字**（`--color-white`） | 疊於 bg2；對齊 Figma Container 內 footer |
| T-30 | Footer link class | PLAN 寫 `footer__link-item` | 使用 `footer__link`（`<a>` 直接在 nav 內） | 簡化語意化結構 |
| T-31 | 下載 PDF | — | `assets/documents/2026-university-guide.pdf` 為佔位檔 | 正式檔待替換 |
| T-32 | Footer 連結 URL | — | 天下學習通用連結 / `mailto:` 佔位 | 正式 URL 待確認 |
| T-33 | Container 底部背景 | 未規定 | Figma `bg2 1` → `.page-container__bg` 置底全幅 | Figma Container `1:866` |
| T-34 | bg2 transform 溢出 | 未規定 | 外層 `.page-container__bg-wrap { overflow: hidden }` + `transform-origin: bottom center` | 避免 transform 產生多餘 scroll bar |
| T-35 | Footer link hover | 未規定 | `.footer__link:hover` 改 `--color-secondary` | 橘色 bg2 上 primary hover 不易辨識 |
| T-36 | Download 圓形白底 | 圖片資產 | `.download-visual__circle` 改 **CSS 實心白圓**（非 `download-circle.png`） | 原 PNG 為 90% 透明 SVG，在 bg2 上不可見 |
| T-37 | 捲動 fadeIn 目標 | 未規定 | 除 hero / school 外，新增 `.section-about__content`、`.speaker-slider`、`.download-visual` | 使用者指定 |

---

## 整體頁面尺寸

| 項目 | 桌機 1440w | 手機 390w |
|------|-----------|----------|
| 總高度 | 6407px | 7075px |
| 最大內容寬 | 1296px（`--layout-width-max`） | 350px（padding 20px 兩側） |

---

## Section 切版計畫

---

### 0. Header `id: 13:317 / 13:555`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 94px | 57px |
| 排版 | 橫列（logo 左、導覽 右） | 待 get_design_context 確認（可能為漢堡選單） |
| 定位 | 疊在頁面最上層（absolute 或 fixed） | 同 |

**重複元件**：無（單一 instance）  
**共用 class**：`.site-header`

---

### 1. HeroSection `id: 1:867 / 10:1276`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 1585px | 2357px |
| 排版 | 全幅背景，內容待 get_design_context 確認 | 上下堆疊，內容拉長 |

**重複元件**：無  
**共用 class**：`.hero-section`

---

### 2. section-about `id: 1:1117 / 10:1336`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 577px | 739px |
| 文字欄位寬 | 370px（左欄） | 350px（全寬） |
| 影片位置 | **右欄**（489px，與文字左右並排） | **文字下方**（350×197，上下堆疊） |
| BTN 按鈕位置 | 文字欄底部，靠左 | 文字欄底部，水平置中 |

**RWD 差異**：`flex-direction: row` → `flex-direction: column`  
**重複元件**：BTN（共用）、Icon-Fill 播放按鈕（共用）  
**共用 class**：`.section-about`、`.section-about__text`、`.section-about__video`、`.btn`、`.video-player`

---

### 3. section-speaker `id: 1:922 / 10:1347`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 1598px | 1816px |
| 主影片尺寸 | 890×500px | 350×197px（全寬） |
| Slider 每頁排版 | **左欄文字（508px）+ 右欄照片（352px）**，左右並排 | **上方照片（350×438）+ 下方文字**，上下堆疊，且**照片在上文字在下**（順序與桌機相反） |
| 箭頭（←→） | 顯示，在 slider 左右兩側 | **隱藏**（`hidden="true"`） |
| 分頁點（dots） | 顯示，12px ellipse × 6 | 顯示，**8px ellipse × 6** |
| Slides 總數 | 6 張 | 6 張（相同） |

**RWD 差異**：  
- `flex-direction: row` → `flex-direction: column`（且 flex 方向反轉：photo 先，text 後）  
- 箭頭 `display: flex` → `display: none`  
- 主影片縮小並滿版

**重複元件**：slider-arrow instance（共用）、speaker slide（6 張，共用結構）  
**共用 class**：`.section-speaker`、`.speaker-slider`、`.speaker-slider__slide`、`.speaker-slider__photo`、`.speaker-slider__text`、`.speaker-slider__dots`、`.slider-arrow`、`.video-player`

---

### 4. section-forum `id: 3:69 / 10:1397`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 853px | 485px |
| 影片尺寸 | 888×499px | 350×197px（全寬） |
| 箭頭（←→） | 顯示，在 slider 左右兩側 | **隱藏**（`hidden="true"`） |
| 分頁點（dots） | 顯示，12px ellipse × 6 | 顯示，**8px ellipse × 6** |
| Slides 總數 | 6 張影片 | 6 張（相同） |

**RWD 差異**：  
- 影片縮小並滿版（350px）  
- 箭頭隱藏  
- section 高度大幅縮短

**重複元件**：slider-arrow（共用）、播放按鈕 Icon-Fill（共用）  
**共用 class**：`.section-forum`、`.forum-slider`、`.forum-slider__video`、`.slider-arrow`、`.slider-dots`

---

### 5. section-report `id: 4:89 / 10:1414`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 913px | 865px |
| 卡片排列 | **一排 3 張**（316px × 3，水平並列，visible 3/6） | **單張輪播**（slider-card x=-319 偏移，一次只看到 1 張） |
| 箭頭（←→） | 在 slider 左右兩側 | **底部置中**（prev + next 成對，x=135, y=577） |
| 分頁點（dots） | 顯示，14px ellipse × 6 | **隱藏**（`hidden="true"`） |
| 卡片寬度 | 316px | 316px（相同，但 slider 容器僅 350px 寬） |

**RWD 差異**：  
- 桌機：3 欄橫向排列，箭頭在兩側  
- 手機：單張輪播，箭頭移至底部中央，dots 隱藏  

**重複元件**：card instance（**最主要重複元件**，6 張，共用 class）  
**共用 class**：`.section-report`、`.report-slider`、`.report-card`、`.report-card__image`、`.report-card__date`、`.report-card__title`、`.report-card__tag`、`.slider-arrow`

---

### 6. section-download `id: 7:190 / 10:1431`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 780px | 584px |
| 排版 | 圓形背景 + 書籍圖片 + 下載按鈕，**水平置中** | 同樣置中，但**整體縮小**（339×334） |
| BTN 位置 | 書籍圖下方置中 | 書籍圖下方置中（相同） |

**RWD 差異**：整體等比縮小，排版方式一致  
**重複元件**：BTN（共用）  
**共用 class**：`.section-download`、`.download__book`、`.btn`

---

### 7. footer `id: 7:224 / 10:1437`

| | 桌機 | 手機 |
|--|------|------|
| 高度 | 100px | 230px |
| 連結排列 | 所有連結**單行橫列**，以「｜」分隔 | 連結**垂直堆疊**（每行一個），分隔符號**隱藏** |
| Copyright | 第二行，橫向置中 | 底部，350px 寬，換行顯示 |

**RWD 差異**：`flex-direction: row` → `flex-direction: column`，分隔符號 `display: none`  
**共用 class**：`.site-footer`、`.footer__links`、`.footer__link-item`、`.footer__separator`、`.footer__copyright`

---

## 裝飾性圖片 RWD 對照

| 圖片名稱 | 桌機位置 | 手機狀態 |
|---------|---------|---------|
| img-student | section-speaker 標題附近 | 顯示，縮小（134×113） |
| img-bionic limb | section-forum 右緣（桌機貼邊 `right:-49px`） | 顯示，277px 寬、貼右緣 `top:-110px`（標題上方） |
| img-Silicon wafer | section-forum 左緣（`left:-56px`） | **隱藏** |
| img-nanobot | section-report 附近 y≈3049 | 顯示，縮小（170×138） |

---

## 全域共用元件清單（需共用 class）

| 元件 | Figma instance | CSS class | 出現位置 |
|------|--------------|-----------|---------|
| 章節標題 | `title` instance | `.section-title` | 所有 section |
| 主要按鈕 | `BTN` instance | `.btn` | about、download |
| 播放按鈕 | `Icon-Fill` instance | `.play-icon` | about、speaker、forum |
| 影片播放器框 | `Video Player` frame | `.video-player` | about、speaker、forum |
| 輪播箭頭 | `slider-arrow-prev/next` | `.slider-arrow` `.slider-arrow--prev` `.slider-arrow--next` | speaker、forum、report |
| 輪播分頁點 | `slider-dot` ellipse | `.slider-dots` `.slider-dots__dot` | speaker、forum、report |
| 深度報導卡片 | `card` instance | `.report-card` | report |

---

## 建議切版順序

1. `css/variables.css` ✅
2. `index.html` 骨架 ✅
3. `css/style.css` 共用元件 ✅
4. `Header` ✅
5. `HeroSection` + 合作校園 ✅
6. `page-container` 漸層 ✅
7. `section-about` ✅
8. `section-speaker` ✅
9. `section-forum` ✅（slide 2–6 待補）
10. `section-report` ✅（18 卡佔位、內容待補）
11. `section-download` ✅（PDF 佔位待換）
12. `footer` ✅
13. 裝飾圖（student / bionic / wafer / nanobot）✅
14. Container bg2 置底背景 + footer 移入 Container ✅
15. download 白圓 CSS 化 + fadeIn 動畫擴充 ✅
16. 全版 RWD 微調 / 內容回填 🔜

---

*文件最後修訂：2026-06-30（本對話結束前）*
