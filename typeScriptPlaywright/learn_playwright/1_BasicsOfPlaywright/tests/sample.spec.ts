import {test, expect} from '@playwright/test'

test('way2automation test', async ({ page }) => {
    await page.goto('http://way2automation.com');

    // Extract page title
    const title = await page.title();
    console.log(title);

    // assertions
    await expect(title).toContain('Way2Automation');
    
    // launch a new page
    await page.goto("http://gmail.com");
    await page.waitForTimeout(2000);

    // Go to the previous page
    await page.goBack();
    await page.waitForTimeout(2000);

    // Go to the next page
    await page.goForward();
    await page.waitForTimeout(2000);

    // Refreshes the page
    await page.reload();
    await page.waitForTimeout(2000);
    
});