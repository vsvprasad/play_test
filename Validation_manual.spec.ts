import {test, expect} from '@playwright/test';
import { ValidationManualLocators } from './ValidationManualLocators';

test('Validation_manual', async ({page}) => {
    console.log('Starting test for Revenue Performance Advisor pricing page');

    // Initialize the locators
    const locators = new ValidationManualLocators(page);
    
    // Navigate to the pricing page
    await locators.navigateToPricingPage();

    // Perform initial actions
    await locators.silverBundleRadio.check();
    await locators.toggleButton.uncheck();
    await locators.recommendedBatchFileCheckbox.check();
    await locators.selfServiceEnrollmentsRadio.check();
    await locators.addOnAccordionArrow.click();

    // Bundle validation
    await expect(locators.divSilverBundle).toBeVisible();
    await expect(locators.divSilverBundle).toHaveText('Silver Bundle');

    await expect(locators.divGoldPaymentsBundle).toBeVisible();
    await expect(locators.divGoldPaymentsBundle).toHaveText('Gold Payments Bundle');

    // Contract term validation
    await expect(locators.h3SelectTheContractTerm).toBeVisible();
    await expect(locators.pSaveMoneyWithLonger).toBeVisible();

    await expect(locators.h3SelectTheContractTerm).toHaveText('Select the contract term');
    await expect(locators.pSaveMoneyWithLonger).toHaveText('Save money with a longer term. A longer initial contract term offers significant savings compared with a one-year contract. Also, save time with auto renewal. Automatically extend your contract to save time and prevent service disruption.')

    // Initial term validation
    await expect(locators.divInitialTerm).toBeVisible();
    await expect(locators.selectDropdown).toBeVisible();

    await expect(locators.divInitialTerm).toContainText('Initial term');
    // Verify the value
    expect(locators.selectDropdown.locator('option:checked')).toHaveText('5 Years');

    // Implementation validation
    await expect(locators.implementationHeader).toBeVisible();
    await expect(locators.implementationText).toBeVisible();
    await expect(locators.implementationHeader).toHaveText('Implementation');
    await expect(locators.implementationText).toHaveText('Accelerate your setup process. Whether you prefer support of a DIY approach or need a comprehensive build-out in your environment, we\'ve got you covered to get up and running swiftly and smoothly.');

    // Required with your package validation
    await expect(locators.divRequiredWithYourPackage).toBeVisible();
    await expect(locators.divRequiredWithYourPackage).toContainText('Required with your package');

    await expect(locators.divStandardImplementation).toBeVisible();
    await expect(locators.divStandardImplementation).toContainText('Standard Implementation');

    await expect(locators.pImplementationIncludedDescription).toBeVisible();
    await expect(locators.pImplementationIncludedDescription).toContainText('With Standard Implementation, our team configures the product and provides an overview. It also includes access to training');

    await expect(locators.divPricingPrice).toBeVisible();
    await expect(locators.divPricingPrice).toHaveText('$199.00');

    await expect(locators.divOneTimeFee).toBeVisible();
    await expect(locators.divOneTimeFee).toContainText('one-time fee');


    // Optional Implementation services validation
    await expect(locators.divOptionalImplementationServices).toBeVisible();
    await expect(locators.divOptionalImplementationServices).toContainText('Optional Implementation services');

    await expect(locators.optionalImplCheckbox).toBeVisible();
    await expect(locators.optionalImplPackageName).toContainText('Batch File Implementation');
    await expect(locators.optionalImpldesc).toContainText('With a Batch File Implementation, an FTP location will be provided so that your claims can be sent to the RPA solution via an x12 batch file using secure file transfer protocol');
    await expect(locators.optionalImplprice).toContainText('$150.00');


    // Enrollments section validation
    await expect(locators.h3SelectTheEnrollments).toContainText('Select the enrollments');
    await expect(locators.spanEnrollmentsHeader).toContainText('Enrollments made easy. Specify the number of enrollments you anticipate to streamline the process.');

    // Self-Service Enrollments validation
    await expect(locators.divSelfServiceEnrollments).toBeVisible();
    await expect(locators.selfServiceRadio).toBeVisible();
    await expect(locators.divSelfServiceEnrollments2).toBeVisible();
    await expect(locators.divSelfServiceEnrollments2).toContainText('Self-Service Enrollments');
    await expect(locators.selfServeDescription).toBeVisible();
    await expect(locators.selfServeDescription).toContainText('Self Service Enrollments lets you manage your user enrollments.');
    await expect(locators.selfServeprice).toBeVisible();
    await expect(locators.selfServeprice).toContainText('$0.00');

    // Managed Enrollments 1 validation
    await expect(locators.managedEnrollments).toBeVisible();
    await expect(locators.managedEnrollmentsRadio).toBeVisible();
    await expect(locators.managedEnrollmentsLabel).toBeVisible();
    await expect(locators.managedEnrollmentsLabel).toContainText('Managed Enrollments 1');
    await expect(locators.managedEnrollmentsDescription).toBeVisible();
    await expect(locators.managedEnrollmentsDescription).toContainText('With Managed Enrollments (per payer enrollment form) our enrollment specialist will configure your user enrollments, and and you recieve a one-hour, one-on-one training session to facilitate a smooth process.Each additional enrollment form: $25');
    await expect(locators.managedEnrollmentseprice).toBeVisible();
    await expect(locators.managedEnrollmentseprice).toContainText('$500.00');

    // Managed Enrollments 2 validation
    await expect(locators.managedEnrollments2).toBeVisible();
    await expect(locators.managedEnrollmentsRadio2).toBeVisible();
    await expect(locators.managedEnrollmentsLabel2).toBeVisible();
    await expect(locators.managedEnrollmentsLabel2).toContainText('Managed Enrollments 2');
    await expect(locators.managedEnrollmentsDescription2).toBeVisible();
    await expect(locators.managedEnrollmentsDescription2).toContainText('With Managed Enrollments (per payer enrollment form) our enrollment specialist will configure your user enrollments, and and you recieve a one-hour, one-on-one training session to facilitate a smooth process.Each additional enrollment form: $20');
    await expect(locators.managedEnrollmentseprice2).toBeVisible();
    await expect(locators.managedEnrollmentseprice2).toContainText('$600.00');

    // Managed Enrollments 3 validation
    await expect(locators.managedEnrollments3).toBeVisible();
    await expect(locators.managedEnrollmentsRadio3).toBeVisible();
    await expect(locators.managedEnrollmentsLabel3).toBeVisible();
    await expect(locators.managedEnrollmentsLabel3).toContainText('Managed Enrollments 3');
    await expect(locators.managedEnrollmentsDescription3).toBeVisible();
    await expect(locators.managedEnrollmentsDescription3).toContainText('With Managed Enrollments (per payer enrollment form) our enrollment specialist will configure your user enrollments, and and you recieve a one-hour, one-on-one training session to facilitate a smooth process.Each additional enrollment form: $15');
    await expect(locators.managedEnrollmentseprice3).toBeVisible();
    await expect(locators.managedEnrollmentseprice3).toContainText('$750.00');
    
    
//     -------------------------------------------------------------------------------  //

    // Silver Popup validation
    await locators.silverInfoButton.click();

    await expect(locators.h3SilverBundleIncludedModules).toBeVisible();
    await expect(locators.h3SilverBundleIncludedModules).toContainText('Silver Bundle included Modules');

    await expect(locators.divSilverDialogContent).toBeVisible();
    await expect(locators.divSilverDialogContent).toContainText('Eligibility and Benefits\n' +
        'Eligibility and Benefits provides batch requests, real-time requests and/or an API to connect to over 1,500 payer connections that helps to:\n' +
        '\n' +
        'Reduce eligibility-based denials\n' +
        'Lower costs associated with reworking denials\n' +
        'Reduce bad-debt write-offs from uncovered, unpaid services\n' +
        'Claims and Submission Tracking\n' +
        'Claims and Submission Tracking helps you to avoid timely and costly resubmissions, including Medical Necessity and Correct Coding Initiative edits.\n' +
        '\n' +
        'It also gives you increased visibility into the entire process which helps you not only get it right, but get it done faster.\n' +
        '\n' +
        'Denials Management\n' +
        'With Denials Management, you can:\n' +
        '\n' +
        'View group denials by reason code\n' +
        'Manage denials effectively through pre-populated appeal letters\n' +
        'View Explanation of Benefits/CMS1500 forms and create appeal letters on a single screen\n' +
        'Update one or more claims with workflow status, assign claims and notes\n' +
        'Understand your denials workflow based on comprehensive analytics and reporting by reason code, billing NPI, tax ID and payer\n' +
        'Perform in-depth drilling and exporting of denial detail for critical analysis\n' +
        'ERAs/Payer Payments\n' +
        'ERAs/Payer Payments provides details concerning the adjudication of a claim.\n' +
        '\n' +
        'Payment Reconciliation\n' +
        'Payment Reconciliation enables customers to reconcile all accounts receivables.\n' +
        '\n');

    await locators.silverCloseButton.click();

   
//     ------------- Gold Dialog ---------------- ////
    // Gold Popup validation
  
    await locators.goldInfoButton.click();

    await expect(locators.h3GoldPaymentsBundleIncluded).toBeVisible();
    await expect(locators.h3GoldPaymentsBundleIncluded).toContainText('Gold Payments Bundle included Modules');

    await expect(locators.divGoldDialogContent).toBeVisible();
    await expect(locators.divGoldDialogContent).toContainText('Eligibility and Benefits\n' +
        'Eligibility and Benefits provides batch requests, real-time requests and/or an API to connect to over 1,500 payer connections that helps to:\n' +
        '\n' +
        'Reduce eligibility-based denials\n' +
        'Lower costs associated with reworking denials\n' +
        'Reduce bad-debt write-offs from uncovered, unpaid services\n' +
        'Claims and Submission Tracking\n' +
        'Claims and Submission Tracking helps you to avoid timely and costly resubmissions, including Medical Necessity and Correct Coding Initiative edits.\n' +
        '\n' +
        'It also gives you increased visibility into the entire process which helps you not only get it right, but get it done faster.\n' +
        '\n' +
        'Denials Management\n' +
        'With Denials Management, you can:\n' +
        '\n' +
        'View group denials by reason code\n' +
        'Manage denials effectively through pre-populated appeal letters\n' +
        'View Explanation of Benefits/CMS1500 forms and create appeal letters on a single screen\n' +
        'Update one or more claims with workflow status, assign claims and notes\n' +
        'Understand your denials workflow based on comprehensive analytics and reporting by reason code, billing NPI, tax ID and payer\n' +
        'Perform in-depth drilling and exporting of denial detail for critical analysis\n' +
        'ERAs/Payer Payments\n' +
        'ERAs/Payer Payments provides details concerning the adjudication of a claim.\n' +
        '\n' +
        'Payment Reconciliation\n' +
        'Payment Reconciliation enables customers to reconcile all accounts receivables.\n' +
        '\n' +
        'SmartPay Plus\n' +
        'SmartPay Plus helps hospitals and health organizations improve revenue performance through an omni-channel payment approach that:\n' +
        'Improves the patient financial experience\n' +
        'Simplifies and automates collection workflows\n' +
        'Simplifies and automates financial communications');

    await locators.goldCloseButton.click();



});