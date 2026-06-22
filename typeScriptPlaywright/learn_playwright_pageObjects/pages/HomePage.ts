import {Page} from '@playwright/test';

export class HomePage {

    // We will create the object of the home page class by passing the page
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Create locators for the elements on the home page

    // Navigate to the home page
    async navigateToHomePage() {
        await this.page.goto('/');
        
    }
}