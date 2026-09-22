class AmazonHomePage {
  constructor(page) {
    this.page = page; // store the page reference
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
  }

  async goto() {
    await this.page.goto('https://www.amazon.in');
  }

  async search(term) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }
}
module.exports = AmazonHomePage;