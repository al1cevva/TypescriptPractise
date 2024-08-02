import {HoversPage} from "../pages/hoversPage";
import {expect, test} from "@playwright/test";
import {MenuPage} from "../pages/menuPage";

test.beforeEach(async ({page}) => {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.hovers.click();
})

test('Hover pic 1', async ({page}) => {
    const hoversPage = new HoversPage(page);
    await hoversPage.pic1.hover();
    await expect(hoversPage.userName1, 'Не найдено имя пользователя user1').toBeVisible()
});

test('Hover pic 2', async ({page}) => {
    const hoversPage = new HoversPage(page);
    await hoversPage.pic2.hover();
    await expect(hoversPage.userName2, 'Не найдено имя пользователя user2').toBeVisible()
});

test('Hover pic 3', async ({page}) => {
    const hoversPage = new HoversPage(page);
    await hoversPage.pic3.hover();
    await expect(hoversPage.userName3, 'Не найдено имя пользователя user3').toBeVisible()
});