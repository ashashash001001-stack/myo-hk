# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile.spec.ts >> My O! 手機版 UX/UI 測試 >> 漢堡選單功能 >> 點擊選單項目後應該關閉選單
- Location: tests/mobile.spec.ts:26:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8080/
Call log:
  - navigating to "http://localhost:8080/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('My O! 手機版 UX/UI 測試', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
> 6   |     await page.goto('/');
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8080/
  7   |   });
  8   | 
  9   |   test.describe('漢堡選單功能', () => {
  10  |     test('選單應該預設隱藏', async ({ page, viewport }) => {
  11  |       if (viewport && viewport.width >= 768) test.skip();
  12  |       const menu = page.locator('#mobile-menu');
  13  |       // 檢查選單是否有 active 類別（應該沒有，處於隱藏狀態）
  14  |       await expect(menu).not.toHaveClass(/active/);
  15  |     });
  16  | 
  17  |     test('點擊漢堡圖標應該展開選單', async ({ page, viewport }) => {
  18  |       if (viewport && viewport.width >= 768) test.skip();
  19  |       const menuButton = page.locator('#mobile-menu-button');
  20  |       const menu = page.locator('#mobile-menu');
  21  | 
  22  |       await menuButton.click();
  23  |       await expect(menu).toHaveClass(/active/);
  24  |     });
  25  | 
  26  |     test('點擊選單項目後應該關閉選單', async ({ page, viewport }) => {
  27  |       if (viewport && viewport.width >= 768) test.skip();
  28  |       const menuButton = page.locator('#mobile-menu-button');
  29  |       const menu = page.locator('#mobile-menu');
  30  |       const menuLink = menu.locator('a').first();
  31  | 
  32  |       // 展開選單
  33  |       await menuButton.click();
  34  |       await expect(menu).toHaveClass(/active/);
  35  | 
  36  |       // 點擊選單連結
  37  |       await menuLink.click();
  38  | 
  39  |       // 選單應該關閉
  40  |       await expect(menu).not.toHaveClass(/active/);
  41  |     });
  42  | 
  43  |     test('選單項目應該有觸控回饋效果', async ({ page, viewport }) => {
  44  |       if (viewport && viewport.width >= 768) test.skip();
  45  | 
  46  |       // 檢查手機版選單元素存在於 DOM
  47  |       const menu = page.locator('#mobile-menu');
  48  |       await expect(menu).toBeAttached();
  49  | 
  50  |       // 檢查選單內有連結
  51  |       const menuLinks = page.locator('#mobile-menu a');
  52  |       const count = await menuLinks.count();
  53  |       expect(count).toBeGreaterThan(0);
  54  |     });
  55  |   });
  56  | 
  57  |   test.describe('Swiper 輪播功能', () => {
  58  |     test('Swiper 應該正確初始化', async ({ page }) => {
  59  |       const swiper = page.locator('.mySwiper');
  60  |       await expect(swiper).toBeVisible();
  61  |     });
  62  | 
  63  |     test('輪播應該支援滑動操作', async ({ page, viewport }) => {
  64  |       if (viewport && viewport.width >= 768) test.skip();
  65  | 
  66  |       const wrapper = page.locator('.mySwiper .swiper-wrapper');
  67  |       await expect(wrapper).toBeVisible();
  68  | 
  69  |       // 檢查 Swiper 配置中的 touch 參數
  70  |       const swiper = page.locator('.mySwiper');
  71  |       await expect(swiper).toBeVisible();
  72  |     });
  73  | 
  74  |     test('箭頭按鈕應該可點擊', async ({ page }) => {
  75  |       const nextButton = page.locator('.mySwiper .swiper-button-next');
  76  | 
  77  |       // 檢查箭頭存在
  78  |       await expect(nextButton).toBeVisible();
  79  | 
  80  |       // 檢查箭頭有足夠的觸控區域 (40-44px)
  81  |       const buttonSize = await nextButton.evaluate((el) => {
  82  |         const rect = el.getBoundingClientRect();
  83  |         return { width: rect.width, height: rect.height };
  84  |       });
  85  | 
  86  |       expect(buttonSize.width).toBeGreaterThanOrEqual(38);
  87  |       expect(buttonSize.height).toBeGreaterThanOrEqual(38);
  88  |     });
  89  |   });
  90  | 
  91  |   test.describe('Modal 彈窗功能', () => {
  92  |     test('點擊顏色選項應該開啟 Modal', async ({ page }) => {
  93  |       const colorOption = page.locator('.select-option[data-type="color"]').first();
  94  | 
  95  |       await colorOption.click();
  96  | 
  97  |       const modal = page.locator('#image-modal');
  98  |       await expect(modal).toBeVisible();
  99  |     });
  100 | 
  101 |     test('點擊關閉按鈕應該關閉 Modal', async ({ page }) => {
  102 |       // 先打開 Modal
  103 |       const colorOption = page.locator('.select-option[data-type="color"]').first();
  104 |       await colorOption.click();
  105 | 
  106 |       const modal = page.locator('#image-modal');
```