package prashanti.test;

import com.microsoft.playwright.Page;

public class TestUtils {
    
    public static void waitForPageLoad(Page page) {
        page.waitForLoadState();
    }

    public static void takeScreenshot(Page page, String fileName) {
        page.screenshot(new Page.ScreenshotOptions()
                .setPath(String.format("screenshots/%s.png", fileName)));
    }

    public static void scrollToBottom(Page page) {
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    }
}