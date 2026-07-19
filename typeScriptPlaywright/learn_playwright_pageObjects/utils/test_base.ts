import {test as baseTest, expect, Page} from '@playwright/test';
import { PageFixtures } from '../fixtures/page_fixtures';

type TestFixtures = {
    pages: PageFixtures;
};

export const test = baseTest.extend<TestFixtures>({
    pages: async ({page}, use) => {
        const pageFixtures = new PageFixtures(page);
        await use(pageFixtures);
    },
});

export { expect };