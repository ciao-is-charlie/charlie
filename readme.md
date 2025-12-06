# 🌌 角色展示網站 - 個人化使用說明書

這是一個基於 HTML/CSS/JS 的靜態網站，特色是**極簡科幻風格**、**雙重錯位框線設計**以及**動態星空背景**。所有的內容管理都集中在 `data.js` 中，無需更動複雜的 HTML 結構。

-----

## 📂 檔案結構簡介

  * **`index.html`**: 網站的骨架。負責結構排列、引入字體與特效邏輯。
  * **`style.css`**: 網站的皮膚。負責所有的視覺樣式、錯位框線、RWD 手機版適配。
  * **`data.js`**: 網站的大腦 (控制台)。所有的文字、圖片連結、字體設定、顏色開關都在這裡。

-----

## 🛠️ 如何修改內容 (使用 `data.js`)

請打開 `data.js`，這裡是您最常需要動的地方。

### 1\. 全域設定 (`config`)

在 `websiteData.config` 區塊中，您可以調整整體的視覺基調：

| 變數名稱 | 功能描述 | 修改範例 |
| :--- | :--- | :--- |
| `bannerUrl` | 頂部橫幅大圖的連結 | `"https://..."` |
| `backgroundColor` | 網頁背景底色 | `#1a1a2e` (深藍) |
| `themeColor` | 主題色 (框線、文字顏色) | `#b8c6db` (淺灰藍) |
| `offsetBorderOpacity` | **錯位後框線的透明度** | `0.3` (30% 透明), `1.0` (不透明) |
| `title` | 瀏覽器分頁上的標題 | `"我的角色設定集"` |

### 2\. 字體與大小控制 (`config` 內的 A, B, C 區)

您可以針對不同區域獨立設定字體與大小：

  * **A. `sectionTitleStyle`**: 控制大標題 (如 ABOUT ME, CHARACTERS)。
  * **B. `aboutStyle`**: 控制「關於我」的內文。
  * **C. `characterStyle`**: 控制「角色介紹」的內文。

> **💡 提示：** 字體名稱請參考 `index.html` 中引入的 Google Fonts (目前有 'Orbitron' 和 'Noto Serif TC')。

### 3\. 修改「關於我」 (`intro`)

在 `websiteData.intro` 區塊：

  * `title`: 區塊標題 (例如 "關於我" 或角色名)。
  * `image`: 左側圖片連結 (建議比例 2:3)。
  * `content`: 右側介紹文字。

### 4\. 新增/修改角色 (`characters`)

在 `websiteData.characters` 是一個陣列 (Array)，每一組 `{...}` 代表一個角色：

  * **新增角色**：複製一組 `{ name: "...", image: "...", desc: "..." }` 貼在後面即可。
  * **排列邏輯**：程式會自動以「三格一列」排列，且偶數行會自動進行「圖文左右交換」的排版。
  * **圖片比例**：建議統一使用 **2:3** 的直式圖片 (如 400x600px)，以達到最佳滿版效果。

-----

## 🎨 如何微調樣式 (使用 `style.css`)

若覺得版面太寬或太窄，請修改 `style.css`：

### 1\. 調整整體寬度 (縮放網站)

搜尋 `.container`：

```css
.container {
    max-width: 1275px; /* 修改此數字可放大或縮小整體版面 */
    /* ... */
}
```

### 2\. 調整「關於我」的大小

搜尋 `.intro-container-narrow`：

```css
.intro-container-narrow {
    max-width: 520px; /* 修改此數字可改變關於我區塊的寬度 */
    /* ... */
}
```

### 3\. 調整錯位框線的距離

搜尋 `.double-border-box::before`：

```css
.double-border-box::before {
    /* ... */
    top: -9px;  /* 負值代表往上移 */
    left: 9px;  /* 正值代表往右移 */
    /* 修改這兩個數字可以改變錯位的距離 */
}
```

-----

## ✨ 特效與進階設定 (使用 `index.html`)

### 1\. 調整星空下墜速度

打開 `index.html`，滑到最下方的 `<script>` 區域，找到星空特效迴圈：

```javascript
// 找到這幾行來調整速度
const minDuration = 5;  // 最快的一顆星要花幾秒 (數字越小越快)
const randomAdd = 10;   // 隨機增加的秒數範圍 (數字越大越慢)
```

### 2\. 更換 Google Fonts 字體

如果您想用別的字體 (例如標楷體或特殊英文字體)：

1.  到 [Google Fonts](https://fonts.google.com/) 挑選字體。
2.  複製 `<link ...>` 標籤。
3.  貼到 `index.html` 的 `<head>` 區域，取代原本的字體連結。
4.  記得去 `data.js` 修改對應的 `fontFamily` 名稱。

-----

## ⚠️ 常見問題排除

1.  **圖片出現不明灰線/邊框？**

      * 這通常是圖片溢出導致的卷軸或邊框渲染。
      * **解法**：確保 `style.css` 中的 `.char-img` 和 `.intro-img` 都有設定 `border: none;` 以及 `overflow: hidden;`。

2.  **右鍵無法存圖？**

      * 這是正常的，因為 `index.html` 中加入了 `contextmenu` 的阻擋程式碼以保護您的圖片。若要暫時解除，請註解掉該行 JS 程式碼。

3.  **手機版跑版？**

      * 目前的設計在手機版 (寬度 \< 1024px) 會自動切換為單欄模式，且「關於我」會維持橫式排列。若有跑版，請檢查圖片網址是否有效，或文字長度是否過長。

-----

**祝您創作愉快！May the stars guide your story.** 🚀
