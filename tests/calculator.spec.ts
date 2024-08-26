import { expect, test } from "@playwright/test";

test.describe("Calculator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/calculator_pwa");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("Calculator PWA");
  });

  test("renders with default value 0", async ({ page }) => {
    const locator = page.locator("#input");
    await expect(locator).toHaveValue("0");
  });

  test("renders with no result", async ({ page }) => {
    const locator = page.locator("#result");
    await expect(locator).toHaveText("");
  });

  test("renders digit buttons with correct labels", async ({ page }) => {
    await expect(page.getByLabel("0")).toBeVisible();
    await expect(page.getByLabel("1")).toBeVisible();
    await expect(page.getByLabel("2")).toBeVisible();
    await expect(page.getByLabel("3")).toBeVisible();
    await expect(page.getByLabel("4")).toBeVisible();
    await expect(page.getByLabel("5")).toBeVisible();
    await expect(page.getByLabel("6")).toBeVisible();
    await expect(page.getByLabel("7")).toBeVisible();
    await expect(page.getByLabel("8")).toBeVisible();
    await expect(page.getByLabel("9")).toBeVisible();
  });

  test("digit buttons function correctly when clicked", async ({ page }) => {
    const locator = page.locator("#input");
    await page.getByLabel("1").click();
    await page.getByLabel("2").click();
    await page.getByLabel("3").click();
    await page.getByLabel("4").click();
    await page.getByLabel("5").click();
    await page.getByLabel("6").click();
    await page.getByLabel("7").click();
    await page.getByLabel("8").click();
    await page.getByLabel("9").click();
    await page.getByLabel("0").click();
    await expect(locator).toHaveValue("1234567890");
  });
});
