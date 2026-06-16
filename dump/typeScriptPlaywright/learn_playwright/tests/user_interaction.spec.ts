import {test, expect} from '@playwright/test'

test('Slider Movement', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://jqueryui.com/resources/demos/slider/default.html');


    const slider = await page.locator('//*[@id="slider"]/span');

    const boundingBox = await slider.boundingBox();
    await page.waitForTimeout(3000)
    if(boundingBox){

        const startX = boundingBox.x + boundingBox.width/2;
        const startY = boundingBox.y + boundingBox.height/2;

        await page.mouse.move(startX,startX);
        await page.mouse.down();
        await page.mouse.move(startX + 400, startY);
        await page.mouse.up();

    }

    await page.waitForTimeout(3000)

  });



test('Resizable Element', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://jqueryui.com/resources/demos/resizable/default.html');
    await page.waitForTimeout(3000)

    const resizable = await page.locator('//*[@id="resizable"]/div[3]');

    const boundingBox = await resizable.boundingBox();
    await page.waitForTimeout(3000)
    if(boundingBox){

        const startX = boundingBox.x + boundingBox.width/2;
        const startY = boundingBox.y + boundingBox.height/2;

        await page.mouse.move(startX,startX);
        await page.mouse.down();
        await page.mouse.move(startX + 400, startY + 400);
        await page.mouse.up();

    }
 
    await page.waitForTimeout(3000)

  });

test('Drag and Drop', async ({ page }) => {

    await page.setViewportSize({width:1920, height:1080});
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    await page.waitForTimeout(2000)

    const draggable = page.locator('#draggable');
    const droppable = page.locator('#droppable')

    const draggableBox = await draggable.boundingBox();
    const droppableBox = await droppable.boundingBox();

    if(draggableBox && droppableBox){
        await page.mouse.move(
            draggableBox.x + draggableBox.width/2,
            draggableBox.y + draggableBox.height/2
        );
        await page.mouse.down();
        await page.mouse.move(
            droppableBox.x + droppableBox.width/2,
            droppableBox.y + droppableBox.height/2
        );
        await page.mouse.up();
    }
    await page.waitForTimeout(3000)

  });
