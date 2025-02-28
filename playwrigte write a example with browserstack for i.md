<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# 

---

# playwrigte write a example with browserstack for iphone 16

Here's an example of how to use Playwright with BrowserStack to test on an iPhone 16 (Pro):

```javascript
const { chromium } = require('playwright');

(async () => {
  const caps = {
    'browser': 'playwright-webkit',
    'os': 'ios',
    'device': 'iPhone 14 Pro', // Using iPhone 14 Pro as a proxy for iPhone 16
    'real_mobile': 'true',
    'name': 'Playwright test on iPhone 16',
    'build': 'playwright-build-1',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY
  };

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`
  });

  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  
  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
```

This script does the following:

1. It imports the `chromium` module from Playwright.
2. It sets up the capabilities for BrowserStack, specifying:
    - `playwright-webkit` as the browser (for iOS testing)
    - iOS as the operating system
    - iPhone 14 Pro as the device (since iPhone 16 is not yet available in BrowserStack's device list)
    - Other test configuration details
3. It connects to BrowserStack using the WebSocket endpoint, passing the capabilities.
4. It creates a new page, navigates to a website, and prints the page title.
5. Finally, it closes the browser.

To run this script:

1. Install the necessary dependencies:

```bash
npm install playwright
```

2. Set your BrowserStack credentials as environment variables:

```bash
export BROWSERSTACK_USERNAME='your_username'
export BROWSERSTACK_ACCESS_KEY='your_access_key'
```

3. Run the script:

```bash
node your_script_name.js
```


Note that as of February 2025, BrowserStack might not have an iPhone 16 option available. The example uses iPhone 14 Pro as a close approximation. Always check the latest BrowserStack documentation for the most up-to-date device list and capabilities[^1][^3][^4].

<div style="text-align: center">⁂</div>

[^1]: https://www.restack.io/p/playwright-browserstack-ios-answer

[^2]: https://dev.to/ekanto/integrate-your-playwright-test-suite-with-browserstack-42f5

[^3]: https://www.browserstack.com/docs/automate/playwright/playwright-test-emulation

[^4]: https://www.aimoretechnologies.com/playwright-automation-framework/

[^5]: https://www.browserstack.com/docs/automate/playwright/browsers-and-os

[^6]: https://www.browserstack.com/list-of-browsers-and-platforms/playwright

[^7]: https://www.browserstack.com/docs/automate/playwright

[^8]: https://community.neptune-software.com/topics/tips--tricks/blogs/run--playwright--tests-with--git-hub--action-on--browser

[^9]: https://github.com/microsoft/playwright/issues/6906

[^10]: https://www.browserstack.com/guide/playwright-python-tutorial

[^11]: https://www.youtube.com/watch?v=LRHHTXemPWk

[^12]: https://testingbot.com/mobile-testing/apple-iphone-16

[^13]: https://www.reddit.com/r/Playwright/comments/1gvxgvk/running_playwright_tests_for_web_application_on/

[^14]: https://community.lambdatest.com/t/does-playwright-support-mobile-devices-specifically-on-ios/27290

[^15]: https://github.com/browserstack/playwright-browserstack

[^16]: https://github.com/microsoft/playwright/issues/1122

[^17]: https://www.youtube.com/watch?v=NBHDp-QvGBQ

[^18]: https://www.youtube.com/watch?v=XSHifNNWML4

[^19]: https://stackoverflow.com/questions/71053528/playwright-no-tests-found-on-simple-copy-of-example-spec-ts

