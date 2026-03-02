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

test('Finding Locators', async({page}) => {
    // Maximise the page
    await page.setViewportSize({width: 1920, height: 1080});
    // Launch URL
    await page.goto('http://gmail.com');
    await page.waitForTimeout(2000);
    // Find locator by label
    //await page.getByLabel('Email or phone', {exact: true}).fill("arunava.chatterjee@gmail.com");
    // Find locator by css
    //await page.locator('#identifierId').fill("arunava.chatterjee@gmail.com");
    // Find locator by xpath
    await page.locator('//*[@id="identifierId"]').fill("arunava.chatterjee@gmail.com");
    await page.waitForTimeout(2000);
    // Locate the button using filter by text on the button attribute
    await page.locator('button').filter({hasText: 'Next'}).click();
    await page.waitForTimeout(2000);
});