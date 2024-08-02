import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class BasicAuth extends AbstractPage{
    readonly loggedInMsg: Locator;

    constructor(page: Page) {
        super(page);
        // this.loggedInMsg = page.getByText('Congratulations!', {exact: false});
        this.loggedInMsg = page.getByText('Congratulations!');
    }

    async goto(url: string){
        await this.page.goto(url);
    }


}