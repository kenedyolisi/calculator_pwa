import { expect, test } from "@playwright/test";

test.describe("clear button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/calculator_pwa");
  });

  test("resets input and output when clicked", async ({ page }) => {
    const input = page.locator("#input");
    const clearButton = page.getByLabel("clear");
    const output = page.locator("#output");
    await input.fill("123 + 45");
    await clearButton.click();

    await expect(input).toHaveValue("0");
    await expect(output).toHaveText("");
  });
});
