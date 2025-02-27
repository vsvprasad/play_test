package prashanti.test;

import prashanti.test.BaseTest;
import prashanti.test.MobileAppPage;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class MobileAppTest extends BaseTest {

    @Test
    public void testSearchFunctionality() {
        MobileAppPage mobileAppPage = new MobileAppPage(page);
        
        // Navigate to the mobile app
        mobileAppPage.navigateToApp();

        // Perform search
        mobileAppPage.enterSearchText("test search");

        // Add assertions based on your app's behavior
        assertTrue(page.isVisible("[data-test=search-results]"));
    }

    @Test
    public void testMenuNavigation() {
        MobileAppPage mobileAppPage = new MobileAppPage(page);
        
        // Navigate to the mobile app
        mobileAppPage.navigateToApp();

        // Tap menu button
        mobileAppPage.tapMenuButton();

        // Add assertions for menu visibility
        assertTrue(page.isVisible("[data-test=menu-container]"));
    }
}