import { expect, test } from "@playwright/test";

test.describe("point", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/calculator_pwa");
  });

  test("adds point to last operand in input", async ({ page }) => {
    const input = page.locator("#input");
    page.getByLabel("point").click();
    await expect(input).toHaveValue("0.");
  });

  test("adds nothing if point already exist in last operand in input", async ({
    page,
  }) => {
    const input = page.locator("#input");
    input.fill("0.34");
    page.getByLabel("point").click();
    await expect(input).toHaveValue("0.34");
  });
});
