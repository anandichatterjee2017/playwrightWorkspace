import {Page} from '@playwright/test';
import { BaseClass } from './BaseClass';
import locators from '../locators/locators.json';

export class FindNewVehicle extends BaseClass {
    //private page: Page;

    /*constructor(page: Page) {
        this.page = page;
    }*/
    private locators = locators.HomePage;
    constructor(page: Page) {
        super(page);
    }

    //private lnkInventory = () => this.page.locator('//div[contains(@class,"desktopScreen")]//a[@data-uname="homePageFindAVehicle"]');
    //private findAVehicle = () => this.page.locator('//div[contains(@class,"desktopScreen")]//a[normalize-space(text())="Vehicle finder"]');

    // Navigate to the used cars page by hovering on the "NEW CARS" menu and then clicking on the "Find New Cars" submenu
    async navigateToFindAVehicle() {
        //await this.lnkInventory().hover();
        //await this.page.waitForTimeout(2000);
        //await this.findAVehicle().click();

        this.hover(this.locators.lnkInventory);
        await this.setTimeout(2000);
        await this.click(this.locators.findAVehicle);
    }
}