import { test, expect } from '@playwright/test';

test('has title and welcome message', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NextJS Boilerplate/);

  // Expect the welcome message to be visible
  await expect(
    page.getByText(/Welcome to Amirreza's NextJS Boilerplate/i)
  ).toBeVisible();
});
