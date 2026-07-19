//import {test, expect} from '@playwright/test';
//import { Register } from '../pages/RegisterClass';
//import { HomePage } from '../pages/HomePage';
import { readCSV } from '../utils/readCSV';
import { test, expect } from '../utils/test_base';

test.describe('User Registration Test', () => {

    //let registerPage: Register;
    //let homePage: HomePage;

    test.beforeEach(async ({pages}) => {
        //registerPage = new Register(page);
        //homePage = new HomePage(page);
        await pages.HomePage.navigateToHomePage();
        await pages.Register.navigateToRegister();
    });

    test('should register a new user', async ({pages}) => {
        let headerText = await pages.Register.getHeaderText();
        expect(pages.page).toHaveURL(/.*doRegistration/);
        expect(headerText).toContain('Join the family');
        const email = ''+ Math.floor(Math.random() * 10000) + '@example.com';
        const password = 'Test@1234';
        const mobile = '2025550123';
        await pages.Register.user_register(email, password, mobile);
    });

    const testData = readCSV('data/testdata.csv');
    test('should register a new user - Parameterized', async ({pages}) => {
        for(const data of testData) {
            let headerText = await pages.Register.getHeaderText();
            expect(pages.page).toHaveURL(/.*doRegistration/);
            expect(headerText).toContain('Join the family');
            const email = ''+ Math.floor(Math.random() * 10000) + '@example.com';
            await pages.Register.user_register(email, data.password, data.mobile);
        }
    });
});