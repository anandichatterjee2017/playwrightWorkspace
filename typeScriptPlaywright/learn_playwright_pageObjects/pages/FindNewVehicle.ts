import {Page} from '@playwright/test';

export class FindNewVehicle {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private lnkInventory = () => this.page.locator('//div[contains(@class,"desktopScreen")]//a[@data-uname="homePageFindAVehicle"]');
    private findAVehicle = () => this.page.locator('//div[contains(@class,"desktopScreen")]//a[normalize-space(text())="Vehicle finder"]');

    // Navigate to the used cars page by hovering on the "NEW CARS" menu and then clicking on the "Find New Cars" submenu
    async navigateToFindAVehicle() {
        await this.lnkInventory().hover();
        await this.page.waitForTimeout(2000);
        await this.findAVehicle().click();
    }
}