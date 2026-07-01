# Figma → 純 HTML + CSS 開發規範

本專案將 Figma 設計稿轉換為純 HTML + CSS 網頁。**每次生成或修改程式碼時，必須遵守以下規範。**

---

## 技術棧

- **純 HTML5 + CSS3**
- 不使用 Sass、Less 等 CSS 預處理器
- 不使用 JS 框架（React、Vue 等）
- 若需輪播或互動功能，僅使用**原生 vanilla JavaScript**

---

## 檔案結構

```
/
├── index.html
├── css/
│   ├── variables.css   # 設計 token（顏色、字級、間距等）
│   └── style.css       # 元件與版面樣式
├── js/
│   └── main.js         # 互動邏輯（僅在需要時使用）
└── assets/
    └── images/         # 從 Figma 匯出的圖片資產
```

---

## 響應式斷點

- 設計基準：**390px**（手機）、**1440px**（桌機）
- 切換方式：寬度 **< 1024px** 為手機版（`@media (max-width: 1023px)`）

```css
/* 桌機優先：預設為 1440px 樣式 */
@media (max-width: 1023px) {
  /* 手機 390px 樣式 */
}
```

---

## CSS 變數（Design Tokens）

所有顏色、字級、字重、間距、圓角**一律**定義在 `:root`（`css/variables.css`）。

**禁止**在元件 CSS（`style.css`）中寫死數值，必須引用變數：

```css
/* ✅ 正確 */
color: var(--color-text-primary);
font-size: var(--font-size-body);
padding: var(--spacing-md);
border-radius: var(--radius-sm);

/* ❌ 錯誤 */
color: #333333;
font-size: 16px;
padding: 24px;
border-radius: 8px;
```

---

## HTML 語意化

- 使用語意標籤：`header`、`nav`、`main`、`section`、`footer`
- 每個 `section` 加上有意義的 `id` 或 `class`，例如：
  - `hero-section`
  - `schools-section`
  - `about-section`

---

## 圖片資產

- 從 Figma 匯出後放置於 `assets/images/`
- 使用語意化檔名，例如：
  - `hero-bg.png`
  - `logo-tianxia.svg`
  - `school-card-thumb.jpg`

---

## Class 命名（BEM）

採用 **BEM** 風格，方便重複元件套用同一套樣式：

| 類型 | 格式 | 範例 |
|------|------|------|
| Block | `block-name` | `school-card` |
| Element | `block-name__element` | `school-card__date`、`school-card__title` |
| Modifier | `block-name--modifier` | `school-card--featured` |

---

## 生成流程提醒

1. 先從 Figma 提取設計 token → 寫入 `css/variables.css`
2. 建立語意化 HTML 結構 → `index.html`
3. 依 BEM 命名撰寫樣式 → `css/style.css`
4. 僅在需要互動時才新增 → `js/main.js`
