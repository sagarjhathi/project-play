const { test, expect } = require('@playwright/test');
const AmazonHomePage = require('./AmazonHomePage');
const AmazonResultsPage = require('./AmazonResultsPage');

const searchTerms = ['Mobile', 'Laptop', 'Headphones'];

let homePage;

 test.beforeEach(async ({ page }) => {

  page.on('request', (request) => {
  if (request.url().includes('/s?')) { // Amazon's search results URL pattern, from what you've already seen
    console.log('Real request URL:', request.url());
  }
});

    homePage = new AmazonHomePage(page);
    await homePage.goto();
  });

for(const term of searchTerms){


  test(`searche for ${term}`, async ({ page }) => {
  // const homePage = new AmazonHomePage(page);
  // await homePage.goto();
  await homePage.search(term);

  const resultsPage = new AmazonResultsPage(page);
  const firstResultText = await resultsPage.getFirstResultText();
  console.log(firstResultText);

  await expect(page).toHaveTitle(new RegExp(term));
});

}



// test(`searchee for ${term}`, async ({ page }) => {
//   // const homePage = new AmazonHomePage(page);
//   // await homePage.goto();
//   await homePage.search(term);

//   const resultsPage = new AmazonResultsPage(page);
//   const firstResultText = await resultsPage.getFirstResultText();
//   console.log(firstResultText);

//   await expect(page).toHaveTitle(new RegExp(term));
// });




// test(`searcheee for ${term}`, async ({ page }) => {
//   // const homePage = new AmazonHomePage(page);
//   // await homePage.goto();
//   await homePage.search(term);

//   const resultsPage = new AmazonResultsPage(page);
//   const firstResultText = await resultsPage.getFirstResultText();
//   console.log(firstResultText);

//   await expect(page).toHaveTitle(new RegExp(term));
// });




// test(`searcheeee for ${term}`, async ({ page }) => {
//   // const homePage = new AmazonHomePage(page);
//   // await homePage.goto();
//   await homePage.search(term);

//   const resultsPage = new AmazonResultsPage(page);
//   const firstResultText = await resultsPage.getFirstResultText();
//   console.log(firstResultText);

//   await expect(page).toHaveTitle(new RegExp(term));
// });
  








