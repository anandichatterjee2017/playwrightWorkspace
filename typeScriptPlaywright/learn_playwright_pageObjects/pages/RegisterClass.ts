import {Page} from '@playwright/test';
import { BaseClass } from './BaseClass';
import locators from '../locators/locators.json';

export class Register extends BaseClass {
    private locators = locators.Register;
    constructor(page: Page) {
        super(page);
    }

    async navigateToRegister() {
        await this.click(this.locators.btnregister);
    }

    async getHeaderText() : Promise<string>{
        return await this.getText(this.locators.headerText);
    }

    async user_register(email: string, password: string, mobile: string) {
        await this.fill(this.locators.txtEmail, email);
        await this.fill(this.locators.txtPassword, password);
        await this.fill(this.locators.txtMobile, mobile);
        await this.click(this.locators.btnSubmit);
    }
}