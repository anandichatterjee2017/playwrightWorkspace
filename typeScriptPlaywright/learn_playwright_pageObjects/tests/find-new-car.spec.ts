import {test, expect} from '@playwright/test';
import { FindNewVehicle } from '../pages/FindNewVehicle';
import { HomePage } from '../pages/HomePage';

test.describe('Find a Vehicle Test', () => {

    // Create an object of the FindNewVehicle class
    let findNewVehicle : FindNewVehicle;
    let homePage : HomePage;

    // Before each test, we will create a new instance of the HomePage class
    test.beforeEach(async ({page}) => {
        findNewVehicle = new FindNewVehicle(page);
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    });

    test('should navigate to the Find a Vehicle page', async ({page}) => {
        // Click on the "Inventory" menu and then click on the "Find a Vehicle" submenu
        await findNewVehicle.navigateToFindAVehicle();
        // Verify that we have navigated to the Find a Vehicle page by checking the URL
        await expect(page).toHaveURL(/.*vehicleFinder/);
    });
});