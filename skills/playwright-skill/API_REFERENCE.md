# Playwright API Reference

This is a quick reference for the Playwright API as used in this skill.

## Locators

- `page.locator(selector)`: Recommended way to find elements.
- `locator.click()`: Click an element.
- `locator.fill(value)`: Fill an input.
- `locator.innerText()`: Get text content.

## Navigation

- `page.goto(url)`: Navigate to a URL.
- `page.waitForURL(url)`: Wait for a specific URL.
- `page.waitForLoadState(state)`: Wait for 'load', 'domcontentloaded', or 'networkidle'.

## Assertions

- `expect(locator).toBeVisible()`
- `expect(locator).toHaveText('text')`

## Responsive Design

- `page.setViewportSize({ width, height })`

For full documentation, visit [playwright.dev](https://playwright.dev).
