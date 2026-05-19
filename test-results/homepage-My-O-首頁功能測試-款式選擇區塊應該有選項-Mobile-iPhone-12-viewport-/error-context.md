# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> My O! 首頁功能測試 >> 款式選擇區塊應該有選項
- Location: tests/homepage.spec.ts:27:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8080/
Call log:
  - navigating to "http://localhost:8080/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('My O! 首頁功能測試', () => {
  4  | 
  5  |   test('首頁應該正確載入', async ({ page }) => {
  6  |     await page.goto('/');
  7  |     await expect(page).toHaveTitle(/My O/);
  8  |   });
  9  | 
  10 |   test('主要區塊應該存在', async ({ page }) => {
  11 |     await page.goto('/');
  12 | 
  13 |     await expect(page.locator('nav')).toBeVisible();
  14 |     await expect(page.locator('.hero-section')).toBeVisible();
  15 |     await expect(page.locator('#designs')).toBeVisible();
  16 |     await expect(page.locator('#product-overview')).toBeVisible();
  17 |     await expect(page.locator('#contact')).toBeVisible();
  18 |   });
  19 | 
  20 |   test('產品特點應該顯示正確資訊', async ({ page }) => {
  21 |     await page.goto('/');
  22 | 
  23 |     const features = page.locator('#product-overview ul li');
  24 |     await expect(features).toHaveCount(4);
  25 |   });
  26 | 
  27 |   test('款式選擇區塊應該有選項', async ({ page }) => {
> 28 |     await page.goto('/');
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8080/
  29 | 
  30 |     const colorOptions = page.locator('.select-option[data-type="color"]');
  31 |     await expect(colorOptions).toHaveCount(2);
  32 | 
  33 |     const styleOptions = page.locator('.select-option[data-type="style"]');
  34 |     await expect(styleOptions).toHaveCount(5);
  35 |   });
  36 | 
  37 |   test('聯絡方式區塊應該有社交連結', async ({ page }) => {
  38 |     await page.goto('/');
  39 | 
  40 |     const instagramLink = page.locator('#contact a[href*="instagram"]');
  41 |     await expect(instagramLink).toBeVisible();
  42 | 
  43 |     const whatsappLink = page.locator('#contact a[href*="whatsapp"]');
  44 |     await expect(whatsappLink).toBeVisible();
  45 |   });
  46 | 
  47 |   test('頁腳應該存在', async ({ page }) => {
  48 |     await page.goto('/');
  49 | 
  50 |     const footer = page.locator('footer');
  51 |     await expect(footer).toBeVisible();
  52 | 
  53 |     await expect(footer.locator('a[href="privacy.html"]')).toBeVisible();
  54 |     await expect(footer.locator('a[href="terms.html"]')).toBeVisible();
  55 |   });
  56 | 
  57 |   test('RWD - 平板尺寸', async ({ page }) => {
  58 |     await page.setViewportSize({ width: 768, height: 1024 });
  59 |     await page.goto('/');
  60 | 
  61 |     // 漢堡選單應該隱藏
  62 |     const hamburgerBtn = page.locator('#mobile-menu-button');
  63 |     await expect(hamburgerBtn).not.toBeVisible();
  64 | 
  65 |     // 桌面選單應該可見
  66 |     const desktopMenu = page.locator('.desktop-nav-links');
  67 |     await expect(desktopMenu).toBeVisible();
  68 |   });
  69 | 
  70 |   test('RWD - 桌面尺寸', async ({ page }) => {
  71 |     await page.setViewportSize({ width: 1280, height: 720 });
  72 |     await page.goto('/');
  73 | 
  74 |     const desktopMenu = page.locator('.desktop-nav-links');
  75 |     await expect(desktopMenu).toBeVisible();
  76 | 
  77 |     // Sticky Bar 應該隱藏
  78 |     const stickyBar = page.locator('#sticky-conversion-bar');
  79 |     await expect(stickyBar).not.toBeVisible();
  80 |   });
  81 | });
```