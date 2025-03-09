<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# 

---

# playwrite and lighthouse intigration test

Integrating Lighthouse with Playwright allows you to automate performance testing in your web applications. This combination helps evaluate performance metrics, accessibility, best practices, and SEO while leveraging Playwright's browser automation capabilities.

## Setting Up Playwright-Lighthouse Integration

To get started, install the necessary packages:

```bash
npm install --save-dev playwright lighthouse playwright-lighthouse
```


### Basic Implementation

Here's a simple example of how to implement a Lighthouse test with Playwright:

```javascript
import { test } from "@playwright/test";
import { chromium } from "playwright";
import { playAudit } from "playwright-lighthouse";

test("run lighthouse audit", async () => {
  const browser = await chromium.launch({
    args: ["--remote-debugging-port=9222"],
    headless: true
  });
  
  const page = await browser.newPage();
  await page.goto("http://localhost:4173/");
  
  await playAudit({
    page: page,
    thresholds: {
      performance: 85,
      accessibility: 85,
      "best-practices": 85,
      seo: 85
    },
    port: 9222
  });
  
  await browser.close();
});
```

This script launches Chromium with remote debugging enabled, navigates to a URL, runs a Lighthouse audit with specified thresholds, and then closes the browser[^4][^5].

## Creating Custom Fixtures for Parallel Testing

For more advanced setups, especially when running tests in parallel, you can create custom fixtures:

```javascript
import { test as base } from '@playwright/test';
import { chromium } from 'playwright';
import { playAudit } from 'playwright-lighthouse';
import getPort from 'get-port';

export const lighthouseTest = base.extend({
  port: [
    async ({}, use) => {
      // Assign a unique port for each playwright worker
      const port = await getPort();
      await use(port);
    },
    { scope: 'worker' }
  ],
  
  context: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`]
      });
      // Additional setup...
      await use(browser);
    },
    { scope: 'test' }
  ]
});
```

This approach assigns unique ports for each test worker, enabling parallel execution of Lighthouse tests[^1].

## Configuring Thresholds

You can customize which metrics to evaluate by specifying thresholds:

```javascript
await playAudit({
  page: page,
  thresholds: {
    performance: 85,
    // Only checking performance in this example
  },
  port: 9222
});
```

If the Lighthouse analysis returns scores below your thresholds, the test will fail[^3].

## Running Tests for Different Devices

You can create specialized functions for testing on different device types:

```javascript
// For desktop testing
async function runPerformanceAuditInDesktop(page, setView, url, reportName) {
  // Desktop-specific configuration
}

// For mobile testing
async function runPerformanceAuditInMobile(page, url, reportName) {
  // Mobile-specific configuration
}
```

These functions allow you to test your application's performance across different device profiles[^6].

## Benefits of Playwright-Lighthouse Integration

- **Automated Performance Audits**: Playwright handles page navigation while Lighthouse conducts in-depth performance analysis[^4]
- **Comprehensive Testing**: Combines functional testing with performance metrics evaluation[^5]
- **CI/CD Integration**: Easy to incorporate into continuous integration pipelines[^4]
- **Parallel Test Execution**: Support for running multiple tests simultaneously[^1]

By integrating Lighthouse with Playwright, you can ensure your web applications maintain high performance standards throughout the development lifecycle.

<div style="text-align: center">⁂</div>

[^1]: https://www.npmjs.com/package/playwright-lighthouse

[^2]: https://www.youtube.com/watch?v=0zBLPZfcgTU

[^3]: https://github.com/abhinaba-ghosh/playwright-lighthouse

[^4]: https://www.thegreenreport.blog/articles/frontend-performance-testing-with-playwright-and-lighthouse/frontend-performance-testing-with-playwright-and-lighthouse.html

[^5]: https://blog.seancoughlin.me/enhancing-web-performance-and-quality-integrating-playwright-and-lighthouse

[^6]: https://github.com/haideralii/playwright-lighthouse-test

[^7]: https://stackoverflow.com/questions/78374260/how-do-i-create-user-flow-performace-tests-with-lighthouse-and-playwright

[^8]: https://www.checklyhq.com/learn/playwright/performance/

[^9]: https://www.lambdatest.com/support/docs/playwright-lighthouse-library/

[^10]: https://github.com/microsoft/playwright/issues/31696

[^11]: https://dev.to/autumn_tonita1/end-to-end-seo-testing-with-playwright-and-lighthouse-3n5c

[^12]: https://www.youtube.com/watch?v=Rr6-Wt-G0TY

[^13]: https://www.reddit.com/r/QualityAssurance/comments/1950tid/comparing_playwright_vs_playwrightlighthouse_for/

[^14]: https://www.browserstack.com/docs/automate/playwright/lighthouse-integration

[^15]: https://geekyants.com/blog/playwright-and-lighthouse-the-ultimate-combination-for-optimizing-web-performance

