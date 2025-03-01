<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# 

---

# provide a playwrite test case project

Here's a basic example of a Playwright test case project for automating tests on an iPhone 16 (using iPhone 14 Pro as a proxy) and a Samsung Galaxy S24 Ultra. This example includes setting up a test environment, writing test cases, and running them.

### Project Setup

First, ensure you have Node.js installed (version 14 or higher). Then, create a new project directory and install Playwright:

```bash
npm init -y
npm install playwright
```


### Test Case Example

Create a file named `tests/example.spec.js` and add the following code:

```javascript
const { chromium } = require('playwright');

describe('Mobile Device Tests', () => {
  it('should test on iPhone 16', async () => {
    const browser = await chromium.launch();
    const iPhone14Pro = {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    };

    const context = await browser.newContext({
      ...iPhone14Pro
    });
    const page = await context.newPage();
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
    await browser.close();
  });

  it('should test on Samsung Galaxy S24 Ultra', async () => {
    const browser = await chromium.launch();
    const s24Ultra = {
      width: 1440,
      height: 3088,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.210 Mobile Safari/537.36'
    };

    const context = await browser.newContext({
      ...s24Ultra
    });
    const page = await context.newPage();
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
    await browser.close();
  });
});
```


### Running Tests

To run these tests, use the following command:

```bash
npx playwright test
```

This will execute the tests in the `tests` folder.

### Using BrowserStack

If you want to run these tests on BrowserStack, you'll need to modify the test to connect to BrowserStack's WebSocket endpoint. Here's how you can do it for the iPhone test:

```javascript
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

// Rest of the test remains the same
```

Make sure to set your BrowserStack credentials as environment variables:

```bash
export BROWSERSTACK_USERNAME='your_username'
export BROWSERSTACK_ACCESS_KEY='your_access_key'
```


### Project Structure

Your project structure should look something like this:

```
project/
|--- tests/
|    |--- example.spec.js
|--- package.json
|--- node_modules/
```

This setup allows you to run tests locally or on cloud services like BrowserStack by modifying the test configurations accordingly.

<div style="text-align: center">⁂</div>

[^1]: https://github.com/VinayKumarBM/playwright-sample-project

[^2]: https://betterstack.com/community/guides/testing/playwright-intro/

[^3]: https://playwright.dev/docs/writing-tests

[^4]: https://saucelabs.com/resources/blog/getting-started-with-playwright-testing

[^5]: https://www.youtube.com/watch?v=vH0Lck0wLPs

[^6]: https://playwright.dev/docs/test-projects

[^7]: https://testgrid.io/blog/playwright-testing/

[^8]: https://github.com/microsoft/playwright-examples

