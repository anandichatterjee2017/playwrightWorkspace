import {Page} from '@playwright/test';
import { BaseClass } from '../pages/BaseClass';
import { FindNewVehicle } from '../pages/FindNewVehicle';
import { Register } from '../pages/RegisterClass';
import { HomePage } from '../pages/HomePage';

export class PageFixtures {
    readonly HomePage: HomePage;
    readonly Register: Register;
    readonly FindNewVehicle: FindNewVehicle;
    readonly BaseClass: BaseClass;

    constructor(page: Page) {
        this.HomePage = new HomePage(page);
        this.Register = new Register(page);
        this.FindNewVehicle = new FindNewVehicle(page);
        this.BaseClass = new BaseClass(page);
    }
}