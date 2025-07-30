import { Page, Locator } from '@playwright/test';

export class CatalogValidationLocators {
    // Filter selection locators
    readonly inputSelectApiWithResult: Locator;
    readonly inputSelectSoftwareWithResult: Locator;
    readonly inputSelectBuyOnline: Locator;
    
    // Summary and status locators
    readonly spanCustomQuery: Locator;
    readonly spanApi: Locator;
    readonly spanFilteredView: Locator;
    
    // Count locators
    readonly apiCountLocator: Locator;
    readonly softwareCountLocator: Locator;
    readonly buyOnlineCountLocator: Locator;
    
    // Result card locators
    readonly resultCardLocator: Locator;
    readonly productDetailsXpath: string;
    readonly titleXpath: string;
    readonly pricingXpath: string;
    readonly pricingValueXpath: string;
    
    constructor(private page: Page) {
        // Filter selection locators
        this.inputSelectApiWithResult = page.getByTitle("API", {exact: true});
        this.inputSelectSoftwareWithResult = page.getByTitle("Software", {exact: true});
        this.inputSelectBuyOnline = page.getByTitle("Buy online", {exact: true});
        
        // Summary and status locators
        this.spanCustomQuery = page.locator("xpath=//span[@class='custom-query-summary__qty']");
        this.spanApi = page.locator("xpath=//span[@class='coveo-facet-breadcrumb-caption']");
        this.spanFilteredView = page.locator("xpath=//span[@class='custom-query-summary__label']");
        
        // Count locators
        this.apiCountLocator = page.locator("li[data-value='Marketplace|Product Type|API'] label[class='coveo-facet-value-label'] span[class='coveo-facet-value-count']");
        this.softwareCountLocator = page.locator("li[data-value='Marketplace|Product Type|Software'] label[class='coveo-facet-value-label'] span[class='coveo-facet-value-count']");
        this.buyOnlineCountLocator = page.locator("li[data-value='Marketplace|Purchase Options|Buy online'] label[class='coveo-facet-value-label'] span[class='coveo-facet-value-count']");
        
        // Result card locators
        this.resultCardLocator = page.locator("//div[contains(@class, 'coveo-result-list-container')]//div[@class='coveo-card-tile']");
        this.productDetailsXpath = "//a[@class='CoveoResultLink']";
        this.titleXpath = "div.coveo-result-cell.result-page-title.scart";
        this.pricingXpath = "//a[@class='coveo-view-pricing']";
        this.pricingValueXpath = "//div[@class='coveo-result-tile-price']";
    }
    
    // Method to navigate to the catalog page
    async navigateToCatalogPage() {
        await this.page.goto("https://marketplace.optum.com/explore-catalog?id=mn&fromCart=false#sort=%40pagetitle%20ascending&numberOfResults=12");
        console.log('Navigated to the catalog page');
    }
}