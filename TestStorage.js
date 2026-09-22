const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ storageState: 'auth.json' });
  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/secure');
  console.log('URL:', page.url());

  await page.waitForTimeout(5000); // pause so you can look at the actual page
  await browser.close();
})();

