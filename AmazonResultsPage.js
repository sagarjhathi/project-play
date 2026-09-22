class AmazonResultsPage {
  constructor(page) {
    this.page = page;
    this.resultTitles = page.locator('div[data-cy="title-recipe"] h2 span');
  }

  async getFirstResultText() {
    await this.resultTitles.first().waitFor(); // wait for the first result to actually exist
    return await this.resultTitles.first().textContent();
  }
}

module.exports = AmazonResultsPage;