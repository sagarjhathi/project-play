const { test } = require('@playwright/test');

test('authenticate', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').waitFor();
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator("//button[@type='submit']").click();
  await page.waitForURL('https://the-internet.herokuapp.com/secure');

  await page.context().storageState({ path: 'auth.json' });
});