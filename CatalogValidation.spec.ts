import {test, expect} from '@playwright/test';
import { CatalogValidationLocators } from './CatalogValidationLocators';

async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
test('CatalogValidation', async ({page}) => {
    // Initialize the locators
    const locators = new CatalogValidationLocators(page);
    
    // Navigate to the catalog page
    await locators.navigateToCatalogPage();



    await expect(locators.inputSelectApiWithResult).toBeVisible();
    await locators.inputSelectApiWithResult.click()
    await sleep(200);
    const apiCount = await locators.apiCountLocator.textContent();
    await expect(locators.spanCustomQuery).toContainText(apiCount)
    await expect(locators.spanApi).toContainText('API');
    await expect(locators.spanFilteredView).toContainText('Filtered View');

    await expect(locators.inputSelectSoftwareWithResult).toBeVisible();
    //     get All the result from page

    await locators.inputSelectApiWithResult.click();
    await sleep(200);
    const softwareCount = await locators.softwareCountLocator.textContent();
    await locators.inputSelectSoftwareWithResult.click();
    await expect(locators.spanCustomQuery).toContainText(softwareCount)
    await expect(locators.spanApi).toContainText('Software');
    await expect(locators.spanFilteredView).toContainText('Filtered View');

    //unselect the software
    await locators.inputSelectSoftwareWithResult.click();
    await sleep(200);
    const buyOnlineCount = await locators.buyOnlineCountLocator.textContent();
    //select buy online
    await locators.inputSelectBuyOnline.click();
    await expect(locators.spanCustomQuery).toContainText(buyOnlineCount);
    await expect(locators.spanApi).toContainText('Buy online');
    await expect(locators.spanFilteredView).toContainText('Filtered View');
    await sleep(5000);

    const itemCount = await locators.resultCardLocator.count();
    console.log(itemCount);
    for (let i = 0; i < itemCount; i++) {
        const link = locators.resultCardLocator.nth(i);
        let title = await link.locator(locators.titleXpath)
        console.log(await title.textContent())
        await expect(await link.locator(locators.productDetailsXpath)).toBeVisible()
        const pricingVisible = await link.locator(locators.pricingValueXpath).isVisible();
        if(pricingVisible) {
            await expect(await link.locator(locators.pricingXpath)).toBeVisible()
        }
        // Perform actions on each link
    }

});


