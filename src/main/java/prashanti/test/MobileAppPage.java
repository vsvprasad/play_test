package prashanti.test;

import com.microsoft.playwright.Page;

class MobileAppPage {
    private final Page page;

    // Locators
    private final String searchInput = "[data-test=search-input]";
    private final String menuButton = "[data-test=menu-button]";
    private final String loginButton = "[data-test=login-button]";

    public MobileAppPage(Page page) {
        this.page = page;
    }

    public void navigateToApp() {
        page.navigate("https://your-mobile-app-url.com");
    }

    public void enterSearchText(String text) {
        page.fill(searchInput, text);
    }

    public void tapMenuButton() {
        page.click(menuButton);
    }

    public void tapLoginButton() {
        page.click(loginButton);
    }

    public String getPageTitle() {
        return page.title();
    }
}