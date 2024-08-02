import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class StatusCodesPage extends AbstractPage{
    readonly OkResponse: Locator;
    readonly redirectResponse: Locator;
    readonly serverErrorResponse: Locator;
    readonly notFoundResponse: Locator;

    constructor(page: Page) {
        super(page);
        this.OkResponse = page.getByText('200');
        this.redirectResponse = page.getByText('301');
        this.serverErrorResponse = page.getByText('500');
        this.notFoundResponse = page.getByText('404');
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async get200(){
        await this.OkResponse.click();
    }

    async get301(){
        await this.redirectResponse.click();
    }

    async get404(){
        await this.notFoundResponse.click();
    }

    async get500(){
        await this.serverErrorResponse.click();
    }
}