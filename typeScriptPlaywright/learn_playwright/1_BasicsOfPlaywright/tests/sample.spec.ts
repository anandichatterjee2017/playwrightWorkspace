import {test, expect} from '@playwright/test'

test('way2automation test', async ({ page }) => {
    await page.goto('http://way2automation.com');
    const title = await page.title();
    console.log(title);
    await expect(title).toContain('Way2Automation');
});