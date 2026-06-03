# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Login and save session
- Location: tests/auth.spec.js:3:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("Login and save session", async ({ page }) => {
  4  |   test.setTimeout(120000); // 2 minutes
  5  | 
  6  |   await page.goto("https://www.jiomart.com/");
  7  | 
  8  |   // Login manually
  9  | 
> 10 |   await page.waitForTimeout(60000);
     |              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  11 | 
  12 |   await page.context().storageState({
  13 |     path: "auth.json",
  14 |   });
  15 | });
  16 | 
```