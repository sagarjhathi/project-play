const { test, expect } = require('@playwright/test');


// test('debug session', async ({ page, context }) => {
//  const cookies = await context.cookies();
//   console.log('Cookies loaded into context:', cookies);

//   const response = await page.goto('https://the-internet.herokuapp.com/secure');
//   console.log('Response status:', response.status());
//   console.log('Final URL after navigating:', page.url());
//   console.log('Redirected chain:', response.request().redirectedFrom()?.url());
// });


test('shows the dashboard1', async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/secure'); // straight to secure, no login steps
   await expect(page.locator('h2')).toHaveText(' Secure Area');
});


test('shows the dashboard2', async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/secure'); // straight to secure, no login steps
 await expect(page.locator('h2')).toHaveText(' Secure Area');
});


test('shows the dashboard3', async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/secure'); // straight to secure, no login steps
  await expect(page.locator('h2')).toHaveText(' Secure Area');
});