import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';

test.describe('Find New Cars Test', () => {

    // Create an object of the HomePage class
    let homePage : HomePage;

    // Before each test, we will create a new instance of the HomePage class
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePage.navigateToHomePage();
    });

    test('should navigate to the Find New Cars page', async ({page}) => {
        // Click on the "NEW CARS" menu and then click on the "Find New Cars" submenu
        await homePage.navigateToNewCarsMenu();
        // Verify that we have navigated to the Find New Cars page by checking the URL
        await expect(page).toHaveURL(/.*find-new-cars/);
    });
});