import { test, expect } from "@playwright/test";

test.describe("jio mart test", () => {
  //using saved data from auth.json
  test.use({
    storageState: "auth.json",
  });

  test("profile test", async ({ page }) => {
    await page.goto("https://www.jiomart.com/profile");

    const profileName = page.getByTestId("JDSText-text").first();

    console.log(await profileName.textContent());

    console.log(await profileName.textContent());

    await expect(profileName).toContainText("Almost there!");
  });
});
