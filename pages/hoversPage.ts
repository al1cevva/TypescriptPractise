import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class HoversPage extends AbstractPage {
    readonly pic1: Locator;
    readonly pic2: Locator;
    readonly pic3: Locator;
    readonly userName1: Locator;
    readonly userName2: Locator;
    readonly userName3: Locator;

    constructor(page: Page) {
        super(page);
        this.pic1 = page.locator('//*[@alt = "User Avatar"]').first();
        this.pic2 = page.locator('//*[@alt = "User Avatar"]').nth(1);
        this.pic3 = page.locator('//*[@alt = "User Avatar"]').last();
        this.userName1 = page.getByText('user1');
        this.userName2 = page.getByText('user2');
        this.userName3 = page.getByText('user3');
    }

    async goto(url: string){
        await this.page.goto(url);
    }
}