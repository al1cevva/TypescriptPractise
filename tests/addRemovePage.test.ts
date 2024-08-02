import { AddRemovePage } from '../pages/addRemovePage';
import {expect, test} from "@playwright/test";
import { MenuPage } from "../pages/menuPage";

test.beforeEach(async ({page}) => {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.addRemove.click();
})

test ('Add element', async ({page}) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addElement();
    await expect(addRemovePage.deleteBtn, 'Не появился элемент').toBeVisible();
});

test ('Delete element', async ({page}) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addElement();
    await expect(addRemovePage.deleteBtn, 'Не появился элемент').toBeVisible();
    await addRemovePage.deleteElement();
    await expect(addRemovePage.deleteBtn, 'Не появился элемент').not.toBeVisible();
})