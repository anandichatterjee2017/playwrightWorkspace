import {test, expect} from '@playwright/test'

test('Playwright test', async ({ page }) => {
    await page.goto('http://way2automation.com');

    // Extract page title
    const title = await page.title();``
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

test('Handling dropdown elements', async ({page}) => {
    // Maximise the page
    await page.setViewportSize({width: 1920, height: 1080});
    // Launch URL
    await page.goto('https://www.wikipedia.org/');
    await page.waitForTimeout(2000);

    await page.selectOption('select', {label: 'Eesti'});
    await page.waitForTimeout(2000);

    await page.selectOption('select', {value: 'hi'});
    await page.waitForTimeout(2000);

    await page.selectOption('select', {index: 0});
    await page.waitForTimeout(2000);

    const options = await page.locator('option').all();
    console.log('Total elements: '+options.length);

    for(const option of options){
        const text = await option.innerText();
        const language = await option.getAttribute('lang');

        console.log(`${text} ----- ${language}`)
    }
});

test('Handling links', async({page}) => {

    // Maximise the page
    await page.setViewportSize({width: 1920, height: 1080});
    // Launch URL
    await page.goto('https://www.wikipedia.org/');
    await page.waitForTimeout(2000);

    // Locate the footer
    const footerNavblock = await page.locator("//*[@id='www-wikipedia-org']/footer/nav");
    // We can identify a single block by passing the index
    const footerNavblock2 = await page.locator('footerNavblock[2]');
    // Locate the anchor tag within the footer block
    const links = await footerNavblock.locator('a').all();
    //const links = await page.locator('a').all();
    console.log('Total elements: '+links.length);

    for(const link of links){
        const text = await link.innerText();
        const name = await link.getAttribute('href');

        console.log(`${text} ----- ${name}`)
    }
    await footerNavblock.locator('a').nth(1).click();
    await page.waitForTimeout(2000);
});

test('Handling checkboxes', async({page}) => {
    // Maximise the page
    await page.setViewportSize({width: 1920, height: 1080});
    // Launch URL
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await page.waitForTimeout(2000);

    const firstDiv = page.locator("xpath=//h1[contains(text(),'HTML - Checkbox Forms')]/following-sibling::div[@class='display'][1]");
    const CheckBoxes = await firstDiv.locator("[name='sports']");
    const checkboxCount = await CheckBoxes.count();

    console.log(checkboxCount);

    for(let i=0; i< checkboxCount; i++){
        await CheckBoxes.nth(i).click();
    }
    await page.waitForTimeout(2000);
});

test('Assertions', async({page}) => {
        // Maximise the page
        await page.setViewportSize({width: 1920, height: 1080});
        // Launch URL
        await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        await page.waitForTimeout(2000);

        await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        console.log('URL assertion passed');

        await expect(page).not.toHaveURL('/error/');
        console.log('No errors on the page');

        await expect(page).toHaveTitle('HTML Tutorial - Checkboxes');
        console.log('Page title verified');

        const link = await page.locator("xpath=//a[contains(@href,'tags.php')][not(contains(@href,'format'))]");
        await expect(link).toHaveText('HTML - Tags');
        console.log('Text assertion is passed');

        const checkbox = await page.locator("xpath=//h1[contains(text(),'HTML - Checkbox Forms')]/following-sibling::div[@class='display'][1]/input[@value='soccer']");
        await expect(checkbox).toBeVisible();
        console.log("Checkbox is Visible");

        await checkbox.click();
        await expect(checkbox).toBeChecked();

        await page.waitForTimeout(2000);
});

test('Handling webtables', async({page}) => {
        // Maximise the page
        await page.setViewportSize({width: 1920, height: 1080});
        // Launch URL
        await page.goto('https://money.rediff.com/indices/nse/NIFTY-50?src=moneyhome_nseIndices');
        await page.waitForTimeout(2000);

        const rowCount = await page.locator("#leftcontainer > table > tbody > tr").count();
        console.log('row count is '+rowCount);

        const colNum = await page.locator("#leftcontainer>table>tbody>tr:first-child>td").count();
        console.log('column number is '+colNum);

        const text = await page.locator('#leftcontainer > table > tbody > tr:nth-child(1) > td:first-child');
        expect(text).toContainText('Adani');
        console.log(await text.innerText());

        // Print value of all the td below tr
        const allInnerText = await page.locator("#leftcontainer > table > tbody > tr").allInnerTexts();
        for(const tableText of allInnerText){
           
            console.log(tableText);
        }
        await page.waitForTimeout(3000);
});

test('Shadow Root Element', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('chrome://downloads/');
    await page.waitForTimeout(3000)
    await page.locator('#searchInput').fill("Playwright");


    await page.waitForTimeout(3000)

  });

  test('Mouse Hover Element', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://www.way2automation.com/');
    
    // Using hover function we hover on a web element
    await page.locator('//*[@id="menu-item-27580"]/a/span[2]').hover();
    await page.locator('//*[@id="menu-item-27581"]/a').click();

    await page.waitForTimeout(3000)

  });

  test('Right Click action', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://deluxe-menu.com/popup-mode-sample.html');
    // Using buttton: right we can perform right click action on the web element.
    await page.locator('//p[2]/img').click({button:'right'});
    await page.waitForTimeout(3000);
  });

  test('Handling Alerts', async ({ page }) => {

    //listner handling the event of alert and accepting the alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // Listen to the dialog event and handle the alert
    await page.locator('.signin-btn').click();

    await page.waitForTimeout(3000);
  });