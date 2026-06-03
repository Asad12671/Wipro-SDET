import { test } from "@playwright/test";

test("Login and save session", async ({ page }) => {
  test.setTimeout(300000); // 5 minutes

  await page.goto("https://www.jiomart.com/");

  // Pause execution
  await page.pause();

  await page.context().storageState({
    path: "auth.json",
  });
});
