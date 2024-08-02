import {expect, test} from "@playwright/test";
import {MenuPage} from "../pages/menuPage";
import {DropdownPage} from "../pages/dropdownPage";


test.beforeEach(async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.dropdown.click();
})

test('Select dropdown option', async({page})=> {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.selectOption1();
    await expect(dropdownPage.dropdownSelected,
        'Не выбрана опция из списка').toHaveAttribute('selected');
})