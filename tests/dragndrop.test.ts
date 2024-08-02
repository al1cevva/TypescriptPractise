import {DragndropPage} from "../pages/dragndropPage";
import {test, expect} from "@playwright/test";
import {MenuPage} from "../pages/menuPage";

test.beforeEach(async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.dragndrop.click();
})

test('Drag A to B', async ({page})=> {
    const dragndropPage = new DragndropPage(page);
    await dragndropPage.dragAtoB();
    await expect(dragndropPage.columnA).toHaveText('B');
})