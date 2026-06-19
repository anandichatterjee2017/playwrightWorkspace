import {Page} from '@playwright/test';

export class HomePage {

    // We will create the object of the home page class by passing the page
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Create locators for the elements on the home page
    private newCarsMenu = () => this.page.locator('a[text="NEW CARS"]');
    private usedCarsMenu = () => this.page.locator('a[text="Find New Cars"]');
    private lnkSearchCar = () => this.page.getByRole('link').filter({hasText: 'Search Cars'});
    private lnkUpcomingCarLaunches = () => this.page.getByRole('link',{name: 'Upcoming Car Launches'});

    // Navigate to the home page
    async navigateToHomePage() {
        await this.page.goto('/');
    }

    // Navigate to the used cars page by hovering on the "NEW CARS" menu and then clicking on the "Find New Cars" submenu
    async navigateToNewCarsMenu() {
        await this.newCarsMenu().hover();
        await this.page.waitForTimeout(2000);
        await this.usedCarsMenu().click();
    }  

    async findNewCar(){
        await this.newCarsMenu().hover();
    }

    async searchForNewCar(){
    }

    async upcomingCarLaunches(){
    }
}