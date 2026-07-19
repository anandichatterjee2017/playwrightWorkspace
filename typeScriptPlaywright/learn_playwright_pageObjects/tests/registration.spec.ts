import {test, expect} from '@playwright/test';
import { Register } from '../pages/RegisterClass';
import { HomePage } from '../pages/HomePage';

test.describe('User Registration Test', () => {

    let registerPage: Register;
    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        registerPage = new Register(page);
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await registerPage.navigateToRegister();
    });

    test('should register a new user', async ({page}) => {
        let headerText = await registerPage.getHeaderText();
        expect(headerText).toContain('Join the family');
        const email = ''+ Math.floor(Math.random() * 10000) + '@example.com';
        const password = 'Test@1234';
        const mobile = '1234567890';
        await registerPage.user_register(email, password, mobile);
    });

});