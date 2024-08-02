import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class MultipleWindowsPage extends AbstractPage{
    readonly openWindow: Locator;

    constructor(page: Page) {
        super(page);
        this.openWindow = page.locator('//*[@href="/windows/new"]');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async openNewWindow(){
        await this.openWindow.click();
    }

}