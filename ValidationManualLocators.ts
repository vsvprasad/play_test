import { Page, Locator } from '@playwright/test';

export class ValidationManualLocators {
    // Bundle selection locators
    readonly silverBundleRadio: Locator;
    readonly toggleButton: Locator;
    readonly recommendedBatchFileCheckbox: Locator;
    readonly selfServiceEnrollmentsRadio: Locator;
    readonly addOnAccordionArrow: Locator;
    readonly divSilverBundle: Locator;
    readonly divGoldPaymentsBundle: Locator;
    
    // Silver Dialog locators
    readonly silverInfoButton: Locator;
    readonly dialog: Locator;
    readonly h3SilverBundleIncludedModules: Locator;
    readonly silverCloseButton: Locator;
    readonly divSilverDialogContent: Locator;
    
    // Gold Dialog locators
    readonly goldInfoButton: Locator;
    readonly goldDialog: Locator;
    readonly h3GoldPaymentsBundleIncluded: Locator;
    readonly goldCloseButton: Locator;
    readonly divGoldDialogContent: Locator;

    // Contract term locators
    readonly h3SelectTheContractTerm: Locator;
    readonly pSaveMoneyWithLonger: Locator;
    readonly divInitialTerm: Locator;
    readonly selectDropdown: Locator;

    // Implementation locators
    readonly implementationHeader: Locator;
    readonly implementationText: Locator;
    readonly divRequiredWithYourPackage: Locator;
    readonly divStandardImplementation: Locator;
    readonly pImplementationIncludedDescription: Locator;
    readonly divPricingPrice: Locator;
    readonly divOneTimeFee: Locator;
    readonly divOptionalImplementationServices: Locator;
    readonly optionalImplCheckbox: Locator;
    readonly optionalImplPackageName: Locator;
    readonly optionalImpldesc: Locator;
    readonly optionalImplprice: Locator;

    // Enrollments locators
    readonly h3SelectTheEnrollments: Locator;
    readonly spanEnrollmentsHeader: Locator;
    readonly divSelfServiceEnrollments: Locator;
    readonly selfServiceRadio: Locator;
    readonly divSelfServiceEnrollments2: Locator;
    readonly selfServeDescription: Locator;
    readonly selfServeprice: Locator;

    // Managed Enrollments 1
    readonly managedEnrollments: Locator;
    readonly managedEnrollmentsRadio: Locator;
    readonly managedEnrollmentsLabel: Locator;
    readonly managedEnrollmentsDescription: Locator;
    readonly managedEnrollmentseprice: Locator;

    // Managed Enrollments 2
    readonly managedEnrollments2: Locator;
    readonly managedEnrollmentsRadio2: Locator;
    readonly managedEnrollmentsLabel2: Locator;
    readonly managedEnrollmentsDescription2: Locator;
    readonly managedEnrollmentseprice2: Locator;

    // Managed Enrollments 3
    readonly managedEnrollments3: Locator;
    readonly managedEnrollmentsRadio3: Locator;
    readonly managedEnrollmentsLabel3: Locator;
    readonly managedEnrollmentsDescription3: Locator;
    readonly managedEnrollmentseprice3: Locator;

    constructor(private page: Page) {
        // Bundle selection locators
        this.silverBundleRadio = page.getByRole('radio', { name: 'Silver Bundle $1,000.00/month' });
        this.toggleButton = page.locator('#toggle-button');
        this.recommendedBatchFileCheckbox = page.getByRole('checkbox', { name: 'Recommended Batch File' });
        this.selfServiceEnrollmentsRadio = page.getByRole('radio', { name: 'Self-Service Enrollments Self' });
        this.addOnAccordionArrow = page.locator('#add-on-accordion-arrow');
        this.divSilverBundle = page.locator("div.cmp-pricing__title-content").first();
        this.divGoldPaymentsBundle = page.locator("div.cmp-pricing__title-content").nth(1);

        // Contract term locators
        this.h3SelectTheContractTerm = page.locator("div[class='cmp-pricing__left__helper-container'] h3");
        this.pSaveMoneyWithLonger = page.locator("xpath=//p[.//*[@id='contract-term-header']]");
        this.divInitialTerm = page.locator("div[for='initial-term']");
        this.selectDropdown = page.locator("xpath=//*[@id='initial-term-select']");

        // Implementation locators
        this.implementationHeader = page.getByRole("heading", {name: "implementation"});
        this.implementationText = page.locator("xpath=//p[.//*[@id='implementation-header']]");
        this.divRequiredWithYourPackage = page.locator("div[class='cmp-pricing__card-container outer'] .cmp-pricing__option-items-sub-header");
        this.divStandardImplementation = page.locator("div[class='cmp-pricing__option-items-included-title']");
        this.pImplementationIncludedDescription = page.locator("xpath=//*[@id='implementation-included-description-0']");
        this.divPricingPrice = page.locator("div[class='cmp-pricing__option-items-included-price-amount'] .cmp-pricing__price-discount");
        this.divOneTimeFee = page.locator("div.cmp-pricing__option-items-included-price-label");
        this.divOptionalImplementationServices = page.locator("div[id='implementations']").locator("div.cmp-pricing__option-items-sub-header").nth(1);
        this.optionalImplCheckbox = page.locator("input[data-link-text='Implementation Radio']");
        this.optionalImplPackageName = page.locator("label[data-link-text='Implementation Button'] .cmp-pricing__left__enrollments-title");
        this.optionalImpldesc = page.locator("p[id='implementation-description-1']");
        this.optionalImplprice = page.locator("label[data-link-text='Implementation Button'] .cmp-pricing__left__enrollments-price-amount");

        // Enrollments locators
        this.h3SelectTheEnrollments = page.getByRole("heading", {name: "Select the enrollments"});
        this.spanEnrollmentsHeader = page.locator("xpath=//span[@id='enrollments-header']");
        this.divSelfServiceEnrollments = page.locator("xpath=//div[contains(@class, 'card')][.//*[@id='enrollments-description-0']]");
        this.selfServiceRadio = this.divSelfServiceEnrollments.locator('//input');
        this.divSelfServiceEnrollments2 = this.divSelfServiceEnrollments.locator("div.cmp-pricing__left__enrollments-title");
        this.selfServeDescription = this.divSelfServiceEnrollments.locator('//p');
        this.selfServeprice = this.divSelfServiceEnrollments.locator('div.cmp-pricing__left__enrollments-price');

        // Managed Enrollments 1
        this.managedEnrollments = page.locator("xpath=//div[@class='cmp-pricing__card-container'][.//*[@id='enrollments-description-1']]");
        this.managedEnrollmentsRadio = this.managedEnrollments.locator('//input');
        this.managedEnrollmentsLabel = this.managedEnrollments.locator("div.cmp-pricing__left__enrollments-title");
        this.managedEnrollmentsDescription = this.managedEnrollments.locator('//p');
        this.managedEnrollmentseprice = this.managedEnrollments.locator('div.cmp-pricing__left__enrollments-price');

        // Managed Enrollments 2
        this.managedEnrollments2 = page.locator("xpath=//div[@class='cmp-pricing__card-container'][.//*[@id='enrollments-description-2']]");
        this.managedEnrollmentsRadio2 = this.managedEnrollments2.locator('//input');
        this.managedEnrollmentsLabel2 = this.managedEnrollments2.locator("div.cmp-pricing__left__enrollments-title");
        this.managedEnrollmentsDescription2 = this.managedEnrollments2.locator('//p');
        this.managedEnrollmentseprice2 = this.managedEnrollments2.locator('div.cmp-pricing__left__enrollments-price');

        // Managed Enrollments 3
        this.managedEnrollments3 = page.locator("xpath=//div[@class='cmp-pricing__card-container'][.//*[@id='enrollments-description-3']]");
        this.managedEnrollmentsRadio3 = this.managedEnrollments3.locator('//input');
        this.managedEnrollmentsLabel3 = this.managedEnrollments3.locator("div.cmp-pricing__left__enrollments-title");
        this.managedEnrollmentsDescription3 = this.managedEnrollments3.locator('//p');
        this.managedEnrollmentseprice3 = this.managedEnrollments3.locator('div.cmp-pricing__left__enrollments-price');
        
        // Silver Dialog locators
        this.silverInfoButton = page.locator("#large-info-5478c710-1c98-438e-9ad9-483020246bab");
        this.dialog = page.getByRole('dialog');
        this.h3SilverBundleIncludedModules = this.dialog.getByRole("heading", {name: "Silver Bundle included Modules"});
        this.silverCloseButton = this.dialog.locator("button.cmp-pricing__modal-standalone-close-btn");
        this.divSilverDialogContent = this.dialog.locator("div.cmp-pricing__modal-content-container");
        
        // Gold Dialog locators
        this.goldInfoButton = page.locator("#large-info-9a157546-4bd1-472a-8059-a1730fe539d3");
        this.goldDialog = page.getByRole('dialog');
        this.h3GoldPaymentsBundleIncluded = this.goldDialog.getByRole("heading", {name: "Gold Payments Bundle included Modules"});
        this.goldCloseButton = this.goldDialog.locator("button.cmp-pricing__modal-standalone-close-btn");
        this.divGoldDialogContent = this.goldDialog.locator("div.cmp-pricing__modal-content-container");
    }

    // Method to navigate to the pricing page
    async navigateToPricingPage() {
        await this.page.goto('https://marketplace.optum.com/products/payment_and_reimbursement/revenue-performance-advisor/pricing?id=rpa&fromCart=false');
        console.log('Navigated to the pricing page');
    }
}