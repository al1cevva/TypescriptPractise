import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class DragndropPage extends AbstractPage{
    readonly columnA: Locator;
    readonly columnB: Locator;

    constructor(page: Page) {
        super(page);
        this.columnA = page.locator('#column-a');
        this.columnB = page.locator('#column-b');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async dragAtoB(){
        await this.columnA.dragTo(this.columnB);
    }
}