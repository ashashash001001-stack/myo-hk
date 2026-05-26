# My O! 網站程式碼修復計劃

**創建日期**: 2026-05-07
**目標**: 修復 myo-hk 婚慶網站的 HTML 程式碼問題
**更新日期**: 2026-05-07 (根據用戶反饋更新)

---

## 數據確認

| 項目 | 數量 | 備註 |
|------|------|------|
| 總文章數 | 423 篇 | blog 目錄下所有 .html |
| 有 JSON-LD 的文章 | 291 篇 | 約 69% 有結構化數據 |
| JSON-LD 區塊總數 | 629 個 | 平均每篇 2.16 個 |
| 有 2+ 區塊的文章 | 大量 | 需要合併處理 |

---

## 問題清單

### 🔴 嚴重問題 (High Priority)

| # | 問題 | 影響範圍 | 修復難度 |
|---|------|----------|----------|
| 1 | 重複的 JSON-LD 結構化數據 | 291 篇文章 | 中等 |
| 2 | 表格缺少無障礙屬性 | 含表格的文章 | 簡單 |

### 🟡 中等問題 (Medium Priority)

| # | 問題 | 影響範圍 | 修復難度 |
|---|------|----------|----------|
| 3 | 硬編碼 URL fallback | 所有文章 | 簡單 |
| 4 | 重複的 og:image | 所有文章 | 複雜 |
| 5 | 缺少 meta robots | 所有文章 | 簡單 |
| 6 | HTML5 語義化不足 | 所有文章 | 中等 |
| 7 | Tailwind CDN 載入方式 | 所有頁面 | 複雜 |
| 8 | 缺少 lazy loading | 含圖片的文章 | 簡單 |
| 9 | 缺少 favicon 變體 | 所有頁面 | 簡單 |

---

## 修復策略

### 階段 1: 嚴重問題 (優先處理)

#### 1.1 重複的 JSON-LD 結構化數據

**問題**: 每篇文章包含 2-4 個重複的 FAQPage Schema，內容略有不同

**修復方案 - 識別最完整版本**:
```
1. 讀取文章 HTML
2. 使用正則表達式找出所有 <script type="application/ld+json"> 區塊
3. 解析每個區塊的 JSON
4. 識別 @type 為 "FAQPage" 的區塊
5. 比較 mainEntity 陣列長度，選擇問題數量最多的版本
6. 刪除其他重複的 FAQPage 區塊
7. 驗證 JSON 語法正確
```

**邏輯細節**:
```python
# 範例 pseudocode
def find_most_complete_faq(json_blocks):
    faq_blocks = [b for b in json_blocks if b.get('@type') == 'FAQPage']
    return max(faq_blocks, key=lambda b: len(b.get('mainEntity', [])))
```

**自動化腳本需求**:
- 輸入: 文章 HTML 檔案
- 輸出: 修復後的 HTML
- 邏輯: 正則匹配 → JSON 解析 → 比較 mainEntity 長度 → 合併 → 刪除重複

**預估時間**: 30-45 分鐘 (291 篇有 JSON-LD 的文章)

#### 1.2 表格缺少無障礙屬性

**問題**: 表格沒有 `<caption>`, `scope`, `aria-label`

**修復方案 - 自動提取 caption**:
```
1. 識別所有 <table> 標籤
2. 自動提取 caption (優先順序):
   - 方法 B (最高優先): 從表格前的 <h2> 或 <h3> 提取
   - 方法 A (備用): 從文章標題提取 (如 "2026 婚禮攝影價錢比較" → "套餐比較")
3. 為 <thead> 中的 <th> 添加 scope="col"
4. 為 <table> 添加 aria-label="[caption]"
5. 如已有 <caption>，則跳過
```

**caption 提取邏輯** (優先 B 再 fallback 到 A):
```python
def extract_caption(table_element, article_title):
    # 方法 B: 從表格前的標題提取
    prev_sibling = table_element.previous_sibling
    while prev_sibling:
        if prev_sibling.name in ['h2', 'h3']:
            return prev_sibling.get_text().strip()
        prev_sibling = prev_sibling.previous_sibling

    # 方法 A: 從文章標題提取 (fallback)
    # "2026 婚禮攝影價錢比較" → "婚禮攝影套餐比較"
    import re
    # 移除年份前綴和結尾的 "指南"/"攻略" 等
    title_clean = re.sub(r'^\d{4}\s*', '', article_title)
    title_clean = re.sub(r'(指南|攻略|教學|推薦|比較)$', '', title_clean)
    return title_clean + "比較"
```

**預估時間**: 20-30 分鐘 (含表格的文章)

---

### 階段 2: 中等問題 (批量處理)

整合 2.1-2.4 為一個綜合修復腳本，一次處理所有中等問題：

#### 綜合修復腳本 `fix_medium_issues.py`

**同時處理**:
- 2.1 硬編碼 URL → 設為空值
- 2.2 meta robots → 添加 `index, follow`
- 2.3 lazy loading → 為 `<img>` 添加 `loading="lazy"`
- 2.4 favicon 變體 → (可選，需要準備圖檔)

**修復邏輯**:

```python
import re

def fix_medium_issues(html):
    # 2.1 硬編碼 URL fallback
    html = html.replace(
        'href="https://myo-hk.github.io/blog/',
        'href=""'
    )

    # 2.2 添加 meta robots (如不存在) - 使用 re.IGNORECASE 避免匹配失敗
    if 'name="robots"' not in html.lower():
        html = re.sub(
            r'</head>',
            '<meta name="robots" content="index, follow">\n</head>',
            html,
            flags=re.IGNORECASE
        )

    # 2.3 添加 lazy loading - 使用 r'<img\b([^>]*)>' 避免吃掉 >
    def add_loading_lazy(match):
        img_tag = match.group(0)
        if 'loading=' not in img_tag:
            # 在 src 之後插入 loading="lazy"
            return re.sub(r'<img\b', r'<img loading="lazy"', img_tag, count=1)
        return img_tag

    html = re.sub(r'<img\b[^>]*>', add_loading_lazy, html)

    return html
```

**預估時間**: 30 分鐘 (一次過處理 423 篇文章)

---

### 階段 3: 複雜問題 (可選)

#### 3.1 重複的 og:image

**現狀**: 所有文章使用相同 Logo

**選項**:
- A: 保持現狀 (使用 Logo 作為預設)
- B: 為不同分類使用不同的預設圖片
- C: 為每篇文章設計專屬 feature image

**建議**: 選項 A (成本最低，確保一致性)

#### 3.2 Tailwind CDN 優化

**現狀**: 每次載入動態編譯

**選項**:
- A: 保持 CDN (開發階段合理)
- B: 編譯 CSS (需要建構流程)
- C: 使用 Tailwind Play CDN (優化版)

**建議**: 保持現狀 (靜態網站 CDN 足夠)

#### 3.3 HTML5 語義化

**建議**: 在主要區塊添加語義化標籤
- `<nav>` 用於導航
- `<aside>` 用於側邊欄
- `<section>` 用於分段
- `<footer>` 用於頁腳

---

## 執行順序

根據用戶建議，**將階段 1 和階段 2 合併處理**，寫一個綜合腳本一次過處理所有問題：

```
[階段 1+2 合併: 嚴重 + 中等問題]
  └─ 腳本 A: fix_json_ld_and_table.py
      - 1.1 合併重複的 JSON-LD (選擇 mainEntity 最多者)
      - 1.2 表格添加 caption 和 scope

  └─ 腳本 B: fix_medium_issues.py (批量處理)
      - 2.1 硬編碼 URL → 設為空值
      - 2.2 添加 meta robots
      - 2.3 添加 lazy loading
      - 2.4 favicon 變體 (如需要)

[階段 3: 可選優化]
  └─ 3.1 og:image (跳過)
  └─ 3.2 Tailwind (跳過)
  └─ 3.3 語義化 (低優先級)
```

---

## 預估工作時間

| 階段 | 預估時間 | 說明 |
|------|----------|------|
| 腳本 A (JSON-LD + 表格) | 45 分鐘 | 291 篇有結構化數據的文章 |
| 腳本 B (批量中等問題) | 30 分鐘 | 423 篇文章 |
| 驗證與測試 | 15 分鐘 | 抽樣驗證 |
| **總計** | **1.5 小時** | - |

### 腳本開發額外時間
- 腳本開發與測試: 30-60 分鐘
- 如已有框架可跳過

---

## 腳本功能要求 (技術細節)

### 進度追蹤

```python
# 使用 tqdm 顯示進度
from tqdm import tqdm

def process_articles(article_files):
    for file in tqdm(article_files, desc="修復進度"):
        # 處理邏輯
        pass
```

### 報告生成

```python
def generate_report(results):
    """處理完成後自動生成報告"""
    report = {
        "total": len(results),
        "success": sum(1 for r in results if r['status'] == 'success'),
        "failed": sum(1 for r in results if r['status'] == 'failed'),
        "errors": [r['error'] for r in results if r['status'] == 'failed']
    }
    # 輸出 JSON 報告
    with open('fix_report.json', 'w') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
```

### 測試策略

```
建議流程:
1. 小範圍測試: 先處理 5-10 篇代表性文章
2. 人工抽樣檢查: 確認輸出無誤
3. 批量處理: 處理全部 291/423 篇
4. 最終抽驗: 隨機抽查 5-10 篇結果
```

---

## 驗收標準

### 必須完成
- [ ] 所有文章只有一個 FAQPage Schema
- [ ] 所有表格有 caption 和 scope
- [ ] 所有文章有 meta robots

### 建議完成
- [ ] 所有圖片有 lazy loading
- [ ] 有多尺寸 favicon

### 驗證工具與方法

#### 結構化數據驗證
使用 Google Rich Results Test 驗證修復後的結構化數據：
- **工具**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **驗證內容**: FAQPage Schema 是否正確
- **抽樣數量**: 隨機抽樣 5-10 篇修復後的文章

#### HTML 語法驗證
- **工具**: W3C HTML Validator
- **驗證內容**: 修復後的 HTML 語法正確性

#### 自動化驗證腳本
```python
# 驗證 JSON-LD 不重複
def validate_no_duplicate_ld_json(html):
    matches = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>', html)
    faq_count = sum(1 for m in matches if '"@type": "FAQPage"' in m)
    return faq_count <= 1

# 驗證表格有 caption
def validate_table_has_caption(html):
    return '<table>' in html and '<caption>' in html
```

---

## 相關檔案

- 網站根目錄: `/Users/babubu/Documents/GitHub/myo-hk/`
- 文章目錄: `/Users/babubu/Documents/GitHub/myo-hk/blog/`
- 計劃目錄: `/Users/babubu/Documents/GitHub/myo-hk/.sisyphus/plans/`

---

## 待確認問題

| 問題 | 狀態 | 說明 |
|------|------|------|
| 是否有現有自動化腳本框架？ | ⚠️ 待確認 | README 提到 4 個腳本，但目錄中不存在 |
| 腳本開發環境？ | ✅ Python 3 | 可使用標準庫 + 正則表達式 |
| 備份策略？ | ✅ 已更新 | 見下方詳細說明 |

---

## 備份策略 (必須執行)

### 執行前準備

```bash
# 1. 確認工作目錄 clean
git status

# 2. 建立修復前備份 commit
git add -A
git commit -m "backup: before code fix - $(date +%Y-%m-%d)"

# 3. 確認 commit 成功
git log --oneline -3
```

### Rollback 方式

```bash
# 如需回滾
git revert HEAD  # 建立新 commit 回復變更
# 或
git reset --hard HEAD~1  # 硬重置 (小心使用)
```

---

## 腳本產出位置

### 策略: 覆蓋原檔 (就地修改)

```
理由: 423 篇文章逐一處理後覆蓋，確保一致性
```

**替代方案 (可選)**:
- 輸出到新目錄: `blog_fixed/`
- 差異比對: 先輸出到新目錄，人工確認後再覆蓋

**建議流程**:
```
1. 建立 git commit 備份
2. 原地修改 (覆蓋原檔)
3. 修復後抽樣檢查
4. 如有問題 → git checkout 回復
```

---

## 下一步

1. ✅ 確認此計劃是否滿足需求
2. 🔄 決定是否執行修復
3. 📝 選擇執行順序 (已優化為合併處理)
4. 🛠️ 開發/準備自動化腳本

---

## 審查結論 (更新版)

這是一份合格的修復計劃，已根據反饋改進：

- ✅ JSON-LD 合併邏輯已明確 (比較 mainEntity 長度)
- ✅ 表格 caption 提取方式已具體化
- ✅ 階段 2 整合為批量腳本
- ✅ 驗收標準加入 Google Rich Results Test

**建議執行策略**: 先執行嚴重問題 (對 SEO 影響最大)，然後一次過批量處理中等問題。