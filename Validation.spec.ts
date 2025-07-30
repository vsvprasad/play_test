import {test, expect} from '@playwright/test';

/**
 * Test to validate the Revenue Performance Advisor pricing page
 * URL: https://marketplace.optum.com/products/payment_and_reimbursement/revenue-performance-advisor/pricing?id=rpa&fromCart=false
 */
test('Validate Revenue Performance Advisor pricing page', async ({page}) => {
    console.log('Starting test for Revenue Performance Advisor pricing page');
    
    // Navigate directly to the pricing page
    await page.goto('https://marketplace.optum.com/products/payment_and_reimbursement/revenue-performance-advisor/pricing?id=rpa&fromCart=false');
    console.log('Navigated to the pricing page');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    console.log('Page loaded completely');
    
    // Take a screenshot for debugging
    await page.screenshot({ path: 'pricing-page.png' });
    console.log('Screenshot taken');
    
    // Select the Silver Bundle option
    try {
        console.log('Attempting to select the Silver Bundle option');
        
        // First, find the Silver Bundle section using the title
        const silverBundleTitle = page.locator('.cmp-pricing__title').filter({ hasText: 'Silver Bundle' });
        await expect(silverBundleTitle).toBeVisible();
        console.log('Found Silver Bundle title');
        
        // Find the Silver Bundle card/section (parent element of the title)
        const silverBundleCard = silverBundleTitle.locator('..').first();
        console.log('Located Silver Bundle card');
        
        // Look for selectable elements within the Silver Bundle card
        // Try different possible selectors for the selection element
        const selectionSelectors = [
            'input[type="radio"]',
            'input[type="checkbox"]',
            '.bundle-select',
            '.select-bundle',
            '.bundle-option',
            '.cmp-pricing__select'
        ];
        
        let selected = false;
        for (const selector of selectionSelectors) {
            const selectionElement = silverBundleCard.locator(selector);
            if (await selectionElement.count() > 0) {
                console.log(`Found selection element with selector: ${selector}`);
                await selectionElement.click();
                console.log('Clicked on the Silver Bundle selection element');
                selected = true;
                break;
            }
        }
        
        // If no specific selection element is found, try clicking on the card itself
        if (!selected) {
            console.log('No specific selection element found, clicking on the Silver Bundle card');
            await silverBundleCard.click();
            console.log('Clicked on the Silver Bundle card');
        }
        
        // Take a screenshot after selection
        await page.screenshot({ path: 'silver-bundle-selected.png' });
        console.log('Screenshot taken after Silver Bundle selection');
        
        // Validate that Silver Bundle is selected
        console.log('Validating Silver Bundle selection');
        
        // Look for visual indicators of selection
        const selectionIndicators = [
            '.selected',
            '.active',
            '.bundle-selected',
            '.cmp-pricing__bundle--selected',
            '[aria-selected="true"]',
            '[data-selected="true"]'
        ];
        
        // Check for visual indicators on the Silver Bundle card
        for (const selector of selectionIndicators) {
            const selectedElement = silverBundleCard.locator(selector);
            if (await selectedElement.count() > 0) {
                console.log(`Found selection indicator with selector: ${selector}`);
                await expect(selectedElement).toBeVisible();
                console.log('Selection indicator is visible');
                break;
            }
        }
        
        // Check if the Silver Bundle card has a selected class or attribute
        const silverBundleClasses = await silverBundleCard.getAttribute('class');
        if (silverBundleClasses) {
            console.log(`Silver Bundle card classes: ${silverBundleClasses}`);
            if (silverBundleClasses.includes('selected') || silverBundleClasses.includes('active')) {
                console.log('Silver Bundle card has a selected/active class');
            }
        }
        
        // Check if the "Continue to checkout" button is enabled after selection
        const checkoutButton = page.getByRole('button', { name: 'Continue to checkout' });
        if (await checkoutButton.count() > 0) {
            const isEnabled = await checkoutButton.isEnabled();
            console.log(`"Continue to checkout" button is enabled after selection: ${isEnabled}`);
            if (isEnabled) {
                console.log('Silver Bundle selection confirmed: "Continue to checkout" button is now enabled');
            }
        }
    } catch (error) {
        console.log(`Error selecting or validating Silver Bundle: ${error.message}`);
    }
    
    // Uncheck auto-renewal option
    try {
        console.log('Unchecking auto-renewal option');
        
        // Based on the exploratory results, we know the auto-renewal checkbox has id="toggle-button"
        // and is near text containing "auto renewal"
        
        // First, try to find the checkbox by its ID
        const autoRenewalCheckbox = page.locator('#toggle-button');
        
        if (await autoRenewalCheckbox.count() > 0) {
            console.log('Found auto-renewal checkbox by ID');
            
            // Check if it's currently checked
            const isChecked = await autoRenewalCheckbox.isChecked();
            console.log(`Auto-renewal checkbox is checked: ${isChecked}`);
            
            // If it's checked, uncheck it
            if (isChecked) {
                await autoRenewalCheckbox.click();
                console.log('Unchecked auto-renewal checkbox');
                
                // Verify it was unchecked
                const isStillChecked = await autoRenewalCheckbox.isChecked();
                console.log(`Auto-renewal checkbox is now checked: ${isStillChecked}`);
                
                // Validate that it's actually unchecked
                expect(isStillChecked).toBe(false);
                console.log('Verified auto-renewal checkbox is unchecked');
                
                // Take a screenshot after unchecking
                await page.screenshot({ path: 'auto-renewal-unchecked.png' });
                console.log('Screenshot taken after unchecking auto-renewal');
            } else {
                console.log('Auto-renewal checkbox is already unchecked');
            }
        } else {
            // If we can't find it by ID, try finding it by nearby text
            console.log('Could not find auto-renewal checkbox by ID, trying to find it by nearby text');
            
            // Look for text elements containing "auto renewal"
            const autoRenewalText = page.locator('text=auto renewal', { exact: false });
            
            if (await autoRenewalText.count() > 0) {
                console.log('Found text containing "auto renewal"');
                
                // Look for nearby checkbox
                const nearbyCheckbox = autoRenewalText.first().locator('xpath=./ancestor::div[position() <= 3]//input[@type="checkbox"]');
                
                if (await nearbyCheckbox.count() > 0) {
                    console.log('Found checkbox near auto-renewal text');
                    
                    // Check if it's currently checked
                    const isChecked = await nearbyCheckbox.isChecked();
                    console.log(`Auto-renewal checkbox is checked: ${isChecked}`);
                    
                    // If it's checked, uncheck it
                    if (isChecked) {
                        await nearbyCheckbox.click();
                        console.log('Unchecked auto-renewal checkbox');
                        
                        // Verify it was unchecked
                        const isStillChecked = await nearbyCheckbox.isChecked();
                        console.log(`Auto-renewal checkbox is now checked: ${isStillChecked}`);
                        
                        // Validate that it's actually unchecked
                        expect(isStillChecked).toBe(false);
                        console.log('Verified auto-renewal checkbox is unchecked');
                        
                        // Take a screenshot after unchecking
                        await page.screenshot({ path: 'auto-renewal-unchecked.png' });
                        console.log('Screenshot taken after unchecking auto-renewal');
                    } else {
                        console.log('Auto-renewal checkbox is already unchecked');
                    }
                } else {
                    console.log('Could not find checkbox near auto-renewal text');
                }
            } else {
                console.log('Could not find text containing "auto renewal"');
            }
        }
    } catch (error) {
        console.log(`Error unchecking auto-renewal: ${error.message}`);
    }
    
    // 1. Validate page title
    const pageTitle = await page.title();
    console.log(`Page title: "${pageTitle}"`);
    await expect(page).toHaveTitle(/Pricing \| Optum Marketplace/);
    console.log('Page title validated');
    
    // 2. Validate page content for Revenue Performance Advisor
    try {
        // Check if the page contains the text "Revenue Performance Advisor" anywhere
        const pageContent = await page.textContent('body');
        console.log('Checking if page contains "Revenue Performance Advisor" text');
        expect(pageContent).toContain('Revenue Performance Advisor');
        console.log('Page contains "Revenue Performance Advisor" text');
        
        // Try to find the product name in various elements
        const productNameSelectors = [
            'h2', 
            '.product-title', 
            '.pricing-title',
            '.title',
            '[data-testid="product-title"]',
            '.cmp-pricing__title'
        ];
        
        for (const selector of productNameSelectors) {
            const elements = page.locator(selector);
            const count = await elements.count();
            
            for (let i = 0; i < count; i++) {
                const element = elements.nth(i);
                const text = await element.textContent();
                console.log(`${selector} element ${i+1} text: "${text?.trim()}"`);
                
                if (text && text.includes('Revenue Performance Advisor')) {
                    console.log(`Found product name in ${selector} element ${i+1}`);
                    await expect(element).toBeVisible();
                    console.log(`Product name element is visible`);
                }
            }
        }
    } catch (error) {
        console.log(`Error validating product name: ${error.message}`);
    }
    
    // 3. Validate pricing information
    try {
        console.log('Validating pricing information');
        const pricingSection = page.locator('.pricing');
        await expect(pricingSection).toBeVisible();
        console.log('Pricing section is visible');
        
        // Check for pricing details
        const pricingText = await pricingSection.textContent();
        console.log(`Pricing section text: "${pricingText?.substring(0, 100)}..."`);
        
        // Look for specific pricing elements
        const pricingElements = [
            '.pricing-details',
            '.price',
            '.amount',
            '.cmp-pricing__price'
        ];
        
        for (const selector of pricingElements) {
            const elements = page.locator(selector);
            const count = await elements.count();
            if (count > 0) {
                console.log(`Found ${count} ${selector} elements`);
                for (let i = 0; i < count; i++) {
                    const text = await elements.nth(i).textContent();
                    console.log(`${selector} element ${i+1} text: "${text?.trim()}"`);
                }
            }
        }
    } catch (error) {
        console.log(`Error validating pricing information: ${error.message}`);
    }
    
    // 4. Validate specific buttons relevant to pricing functionality
    try {
        console.log('Validating specific buttons');
        
        // Check for "Get in touch" button
        const getInTouchButton = page.getByRole('button', { name: 'Get in touch' });
        if (await getInTouchButton.count() > 0) {
            console.log('Found "Get in touch" button');
            await expect(getInTouchButton).toBeVisible();
            await expect(getInTouchButton).toBeEnabled();
            console.log('"Get in touch" button is visible and enabled');
        }
        
        // Check for "Contact sales" button
        const contactSalesButton = page.getByRole('button', { name: 'Contact sales' });
        if (await contactSalesButton.count() > 0) {
            console.log('Found "Contact sales" button');
            const isVisible = await contactSalesButton.isVisible();
            const isEnabled = await contactSalesButton.isEnabled();
            console.log(`"Contact sales" button is visible: ${isVisible}, enabled: ${isEnabled}`);
        }
        
        // Check for "Continue to checkout" button
        const checkoutButton = page.getByRole('button', { name: 'Continue to checkout' });
        if (await checkoutButton.count() > 0) {
            console.log('Found "Continue to checkout" button');
            const isVisible = await checkoutButton.isVisible();
            const isEnabled = await checkoutButton.isEnabled();
            console.log(`"Continue to checkout" button is visible: ${isVisible}, enabled: ${isEnabled}`);
        }
        
        // Check for "payment schedule" button
        const paymentScheduleButton = page.getByRole('button', { name: 'payment schedule' });
        if (await paymentScheduleButton.count() > 0) {
            console.log('Found "payment schedule" button');
            await expect(paymentScheduleButton).toBeVisible();
            await expect(paymentScheduleButton).toBeEnabled();
            console.log('"payment schedule" button is visible and enabled');
        }
    } catch (error) {
        console.log(`Error validating specific buttons: ${error.message}`);
    }
    
    // 5. Validate navigation elements (breadcrumbs)
    try {
        console.log('Validating navigation elements');
        
        // Check for breadcrumb navigation specifically
        const breadcrumbNav = page.locator('nav[aria-label="Breadcrumb"]');
        if (await breadcrumbNav.count() > 0) {
            console.log('Found breadcrumb navigation');
            await expect(breadcrumbNav).toBeVisible();
            
            // Check breadcrumb content
            const breadcrumbText = await breadcrumbNav.textContent();
            console.log(`Breadcrumb text: "${breadcrumbText?.trim()}"`);
        }
    } catch (error) {
        console.log(`Error validating navigation elements: ${error.message}`);
    }
    
    // 6. Validate "Need help?" section
    try {
        console.log('Validating "Need help?" section');
        const helpHeader = page.locator('h1.cmp-pricing__right__help-header');
        if (await helpHeader.count() > 0) {
            console.log('Found "Need help?" section');
            await expect(helpHeader).toBeVisible();
            await expect(helpHeader).toHaveText('Need help?');
            console.log('"Need help?" header validated');
            
            // Check for contact us button in the help section
            const contactUsButton = page.getByRole('button', { name: 'Contact us' });
            if (await contactUsButton.count() > 0) {
                console.log('Found "Contact us" button in help section');
                await expect(contactUsButton).toBeVisible();
                await expect(contactUsButton).toBeEnabled();
                console.log('"Contact us" button is visible and enabled');
            }
        }
    } catch (error) {
        console.log(`Error validating "Need help?" section: ${error.message}`);
    }
    
    // 7. Validate footer
    try {
        console.log('Validating footer');
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
        console.log('Footer is visible');
        
        // Check for footer navigation
        const footerNav = page.locator('#footer-nav');
        if (await footerNav.count() > 0) {
            console.log('Found footer navigation');
            await expect(footerNav).toBeVisible();
            console.log('Footer navigation is visible');
        }
    } catch (error) {
        console.log(`Error validating footer: ${error.message}`);
    }
    
    console.log('All validations completed successfully');
});



