const {chromium} = require('playwright');
const { expect } = require('playwright/test'); // or require('@playwright/test') if installed separately



(async ()=>{
const broswer= await chromium.launch({headless:false});
const page= await broswer.newPage();
await page.goto('https://www.amazon.in');


await page.locator('#twotabsearchtextbox').waitFor(); // wait for a known real element instead

const inputBox=await page.locator('#twotabsearchtextbox');
await expect(inputBox).toHaveAttribute('placeholder', 'Search Amazon.in');
await expect(page).toHaveTitle(/Amazon\.in/);


await inputBox.click();

await inputBox.fill('Mobile');
await page.locator('#nav-search-submit-button').click();
await page.locator('.s-search-results').waitFor();
await expect(inputBox).toHaveAttribute('placeholder', 'Search Amazon.in');


await page.locator("//div[@data-cy='title-recipe']").first().waitFor();
const results= page.locator("//div[@data-cy='title-recipe']");
const count= await results.count();
console.log(count);
expect(count).toBeGreaterThan(0);

const firstResultText= await results.first().textContent();
console.log(firstResultText);

await expect(page).toHaveTitle(/Mobile/);
await broswer.close();

})();