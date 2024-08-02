import {MenuPage} from "../pages/menuPage";
import {StatusCodesPage} from "../pages/statusCodesPage";
import {expect, test} from "@playwright/test";

test.beforeEach(async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.statusCodes.click();
})

test('Get 200 response', async({page})=> {
    const statusCodes = new StatusCodesPage(page);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/status_codes/200'));
    await statusCodes.get200();
    const response = await responsePromise;
    expect(response.status()).toBe(200);
})

test('Get 301 response', async({page})=> {
    const statusCodes = new StatusCodesPage(page);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/status_codes/301'));
    await statusCodes.get301();
    const response = await responsePromise;
    expect(response.status()).toBe(301);
})

test('Get 404 response', async({page})=> {
    const statusCodes = new StatusCodesPage(page);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/status_codes/404'));
    await statusCodes.get404();
    const response = await responsePromise;
    expect(response.status()).toBe(404);
})

test('Get 500 response', async({page})=> {
    const statusCodes = new StatusCodesPage(page);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/status_codes/500'));
    await statusCodes.get500();
    const response = await responsePromise;
    expect(response.status()).toBe(500);
})