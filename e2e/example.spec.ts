import { test, expect } from '@playwright/test';

test('has title and theme toggle', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NextJS Boilerplate/);

  // Expect the theme toggle to be visible
  const themeToggle = page.getByRole('button', { name: /toggle theme/i });
  await expect(themeToggle).toBeVisible();
});
