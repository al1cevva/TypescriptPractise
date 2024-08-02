import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class DropdownPage extends AbstractPage {
    readonly dropdown: Locator;
    readonly dropdownSelected: Locator;

    constructor(page: Page) {
        super(page);
        this.dropdown = page.locator('//select');
        this.dropdownSelected = page.locator('//select/option[@value="1"]');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async selectOption1(){
        await this.dropdown.click();
        await this.dropdown.selectOption('1');
    }
}