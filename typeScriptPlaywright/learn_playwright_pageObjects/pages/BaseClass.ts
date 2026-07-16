import {Page} from '@playwright/test';

export class BaseClass {
    protected page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Enter text into a field
    async fill(locator: string, value: string) {
        await this.page.fill(locator, value);
    }

    // Click on an element
    async click(locator: string) {
        await this.page.click(locator);
    }

    // Get text from an element
    async getText(locator: string) {
        return await this.page.locator(locator).innerText();
    }

    // Wait for an element to be visible    
    async waitForElementToBeVisible(locator: string) {
        await this.page.waitForSelector(locator, { state: 'visible' });
    }

    //navigate to a URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Hover over an element
    async hover(locator: string) {
        await this.page.hover(locator);
    }

    async setTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}