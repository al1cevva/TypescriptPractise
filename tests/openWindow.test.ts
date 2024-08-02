import {expect, test} from "@playwright/test";
import {MenuPage} from "../pages/menuPage";
import {MultipleWindowsPage} from "../pages/multipleWindowsPage";

test.beforeEach(async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.multWindows.click();
})

test('Open multiple windows', async({page})=> {
    const multWindows = new MultipleWindowsPage(page);
    const pagePromise = page.context().waitForEvent('page');
    await multWindows.openNewWindow();
    const newPage = await pagePromise;
    await expect(newPage.getByText('New Window'), 'Новая страница не была открыта').toBeVisible();
})