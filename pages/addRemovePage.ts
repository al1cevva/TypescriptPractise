import { AbstractPage } from './abstractPage';
import { Locator, Page, expect} from '@playwright/test'

export class AddRemovePage extends AbstractPage{
    readonly addElementBtn: Locator;
    readonly deleteBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.addElementBtn = page.locator('//*[@onclick = "addElement()"]');
        this.deleteBtn = page.locator('//*[@onclick = "deleteElement()"]');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async addElement(){
        await this.addElementBtn.click();
    }

    async deleteElement(){
        await this.deleteBtn.click();
    }
}