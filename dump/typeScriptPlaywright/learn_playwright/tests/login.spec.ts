import { test, expect } from '@playwright/test';

test('Login flow test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Enter username and password
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');

  // Select the checkbox
  await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();

  // Click on the Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Add an assertion to verify the login behavior (e.g., error message or navigation)
  await expect(page).toHaveURL(/.*loginpagePractise/);
});