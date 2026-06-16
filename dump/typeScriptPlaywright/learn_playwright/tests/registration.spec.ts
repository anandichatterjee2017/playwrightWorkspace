import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
  await page.locator('#register_form input[name="name"]').click();
  await page.locator('#register_form input[name="name"]').fill('Arunava');
  
  await page.pause();

  await page.locator('#register_form input[name="name"]').press('Tab');
  await page.getByRole('paragraph').filter({ hasText: 'Last Name:' }).getByRole('textbox').click();
  await page.getByRole('paragraph').filter({ hasText: 'Last Name:' }).getByRole('textbox').fill('Chatterjee');
  await page.getByText('Single').click();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByRole('combobox').nth(1).selectOption('1');
  await page.getByRole('combobox').nth(2).selectOption('1');
  await page.getByRole('combobox').nth(3).selectOption('2014');
  await page.locator('#register_form input[name="phone"]').click();
  await page.locator('#register_form input[name="phone"]').fill('1234567890');
  await page.locator('#register_form input[name="username"]').click();
  await page.locator('#register_form input[name="username"]').fill('arunava');
  await page.locator('#register_form input[name="email"]').click();
  await page.locator('#register_form input[name="email"]').fill('arunava@gail.com');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('How are you');
  await page.locator('#register_form input[name="password"]').click();
  await page.locator('#register_form input[name="password"]').fill('Hola');
  await page.locator('input[name="c_password"]').click();
  await page.locator('input[name="c_password"]').fill('Hola');
  await page.getByRole('button', { name: 'submit' }).click();
});