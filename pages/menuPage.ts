import {AbstractPage} from "./abstractPage";
import {Locator, Page} from "@playwright/test";

export class MenuPage extends AbstractPage{

    readonly addRemove: Locator;
    readonly basicAuth: Locator;
    readonly hovers: Locator;
    readonly multWindows: Locator;
    readonly dropdown: Locator;
    readonly dragndrop: Locator;
    readonly jsAlerts: Locator;
    readonly statusCodes: Locator;

    constructor(page: Page) {
        super(page);
        this.addRemove = page.getByText('Add/Remove Elements');
        this.basicAuth = page.getByText('Basic Auth');
        this.hovers = page.getByText('Hovers');
        this.multWindows = page.getByText('Multiple Windows');
        this.dropdown = page.getByText('Dropdown');
        this.dragndrop = page.getByText('Drag and Drop');
        this.jsAlerts = page.getByText('JavaScript Alerts');
        this.statusCodes = page.getByText('Status Codes');
    }

    async goto(url: string){
        await this.page.goto(url);
    }
}