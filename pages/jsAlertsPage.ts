import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class JsAlertsPage extends AbstractPage{
    readonly jsAlert: Locator;
    readonly jsConfirm: Locator;
    readonly jsPrompt: Locator;
    readonly jsMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.jsAlert = page.locator('//button[text() = "Click for JS Alert"]');
        this.jsConfirm = page.locator('//button[text() = "Click for JS Confirm"]');
        this.jsPrompt = page.locator('//button[text() = "Click for JS Prompt"]');
        this.jsMessage = page.locator('//p[@id = "result"]');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async showAlert(){
        await this.jsAlert.click();
    }

    async showConfirm(){
        await this.jsConfirm.click();
    }

    async showPrompt(){
        await this.jsPrompt.click();
    }

}