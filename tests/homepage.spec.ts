import { test, expect } from '@playwright/test';

test.describe('My O! 首頁功能測試', () => {

  test('首頁應該正確載入', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/My O/);
  });

  test('主要區塊應該存在', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('.hero-section')).toBeVisible();
    await expect(page.locator('#designs')).toBeVisible();
    await expect(page.locator('#product-overview')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('產品特點應該顯示正確資訊', async ({ page }) => {
    await page.goto('/');

    const features = page.locator('#product-overview ul li');
    await expect(features).toHaveCount(4);
  });

  test('款式選擇區塊應該有選項', async ({ page }) => {
    await page.goto('/');

    const colorOptions = page.locator('.select-option[data-type="color"]');
    await expect(colorOptions).toHaveCount(2);

    const styleOptions = page.locator('.select-option[data-type="style"]');
    await expect(styleOptions).toHaveCount(5);
  });

  test('聯絡方式區塊應該有社交連結', async ({ page }) => {
    await page.goto('/');

    const instagramLink = page.locator('#contact a[href*="instagram"]');
    await expect(instagramLink).toBeVisible();

    const whatsappLink = page.locator('#contact a[href*="whatsapp"]');
    await expect(whatsappLink).toBeVisible();
  });

  test('頁腳應該存在', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    await expect(footer.locator('a[href="privacy.html"]')).toBeVisible();
    await expect(footer.locator('a[href="terms.html"]')).toBeVisible();
  });

  test('RWD - 平板尺寸', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // 漢堡選單應該隱藏
    const hamburgerBtn = page.locator('#mobile-menu-button');
    await expect(hamburgerBtn).not.toBeVisible();

    // 桌面選單應該可見
    const desktopMenu = page.locator('.desktop-nav-links');
    await expect(desktopMenu).toBeVisible();
  });

  test('RWD - 桌面尺寸', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    const desktopMenu = page.locator('.desktop-nav-links');
    await expect(desktopMenu).toBeVisible();

    // Sticky Bar 應該隱藏
    const stickyBar = page.locator('#sticky-conversion-bar');
    await expect(stickyBar).not.toBeVisible();
  });
});