Playwright E2E Testing – Day 12
📌 Overview

This project introduces the basics of End-to-End (E2E) testing using Playwright with JavaScript. It demonstrates how to automate browser actions, interact with web elements, and validate application behavior.

Key learning areas include:

Navigating to web pages
Locating elements using XPath and ARIA roles
Performing user actions like clicks
Verifying results using assertions

📖 Core Concepts
Playwright: A browser automation tool developed by Microsoft for reliable web testing.
Locator: A method used to identify elements on a webpage.
Assertion: A validation step to ensure expected results match actual outcomes.
Fixture (page): A fresh browser instance provided to each test.

🧩 Functions & Syntax
Function Purpose Example
test() Defines a test case test('test name', async ({ page }) => {})
page.goto() Opens a URL await page.goto('https://example.com')
page.locator() Finds element via XPath/CSS page.locator('//\*[@id="root"]')
page.getByRole() Finds element by role page.getByRole('button', { name: /Submit/ })
.nth() Selects element by index locator.nth(1)
.click() Clicks on element await locator.click()
page.url() Gets current URL page.url()
expect().toBe() Checks exact match expect(value).toBe(expected)
expect().toHaveTitle() Validates page title await expect(page).toHaveTitle(/Playwright/)
expect().toBeVisible() Checks visibility await expect(locator).toBeVisible()
