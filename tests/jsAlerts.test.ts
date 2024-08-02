import {MenuPage} from "../pages/menuPage";
import {JsAlertsPage} from "../pages/jsAlertsPage";
import {test, expect} from "@playwright/test";

test.beforeEach(async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.goto('https://the-internet.herokuapp.com/');
    await menuPage.jsAlerts.click();
})

test('Click for JS Alert', async({page})=> {
    const jsAlert = new JsAlertsPage(page);
    page.on('dialog', dialog => dialog.accept());
    await jsAlert.showAlert();
    await expect(jsAlert.jsMessage,
        'Не появилось сообщение о нажатии на JS Alert').toHaveText('You successfully clicked an alert');
})

test('Click for JS Confirm: accept', async({page})=> {
    const jsAlert = new JsAlertsPage(page);
    page.on('dialog', dialog => dialog.accept());
    await jsAlert.showConfirm();
    await expect(jsAlert.jsMessage,
        'Не появилось сообщение о нажатии на JS Confirm: OK').toHaveText('You clicked: Ok');
})

test('Click for JS Confirm: cancel', async({page})=> {
    const jsAlert = new JsAlertsPage(page);
    page.on('dialog', dialog => dialog.dismiss());
    await jsAlert.showConfirm();
    await expect(jsAlert.jsMessage,
        'Не появилось сообщение о нажатии на JS Confirm: Cancel').toHaveText('You clicked: Cancel');
})

test('Click for JS Prompt', async({page})=> {
    const jsAlert = new JsAlertsPage(page);
    page.on('dialog', dialog => dialog.accept('Cookie'));
    await jsAlert.showPrompt();
    await expect(jsAlert.jsMessage,
        'Не появилось сообщение о нажатии на JS Confirm: Cancel').toHaveText('You entered: Cookie');
})

test.fail('Wrong prompt message',async({page})=> {
    const jsAlert = new JsAlertsPage(page);
    page.on('dialog', dialog => dialog.accept('Cookie'));
    await jsAlert.showPrompt();
    await expect(jsAlert.jsMessage,
        'Не появилось сообщение о нажатии на JS Confirm: Cancel').toHaveText('You entered: Biscuit');
})