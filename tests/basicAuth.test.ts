import {Locator, Page, expect, test} from '@playwright/test'
import {MenuPage} from "../pages/menuPage";
import {BasicAuth} from "../pages/basicAuthPage";
import {generateStr} from "../utils/GenerateStr";

test.beforeEach(async ({page}) => {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.basicAuth.click();
})

test('Basic Auth', async ({page}) => {
    const basicAuth = new BasicAuth(page);
    await basicAuth.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    await expect(basicAuth.loggedInMsg, 'Не найдено сообщение об успешном входе').toBeVisible();
})

test('Wrong password', async ({page}) => {
    const basicAuth = new BasicAuth(page);
    const wrongLogin = generateStr();
    const wrongPassword = generateStr();
    await basicAuth.goto(`https://${wrongLogin}:${wrongPassword}@the-internet.herokuapp.com/basic_auth`);
    await expect(basicAuth.loggedInMsg, 'Произошел вход').not.toBeVisible()
})