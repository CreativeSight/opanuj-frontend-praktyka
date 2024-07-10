import { Locator, Page } from '@playwright/test';

export class HelpDeskPage {
  readonly page: Page;
  readonly searchResultsForm: Locator;  
  readonly searchResultsFormSubmit: Locator;
  readonly searchResultsInput: Locator;  
  
  constructor(page: Page) {
    this.page = page;
    this.searchResultsForm = page.getByRole('form', { name: 'searchbox' }).first();    
    this.searchResultsInput = page.getByRole('cell', { name: 'Search the frequently asked' }).getByRole('textbox');    
    this.searchResultsFormSubmit = this.searchResultsForm.getByRole('button', { name: 'Search the frequently asked questions' });   
  }

  async goToSearchResultsPage() {
    await this.searchResultsInput.click();
    await this.searchResultsInput.fill('Wachlist');
    //await this.searchResultsForm.getByRole('textbox', { name: 'search' }).fill('Watchlist');   
    //await this.searchResultsInput.fill('Watchlist');
    // const helpDeskLinkHref = await this.helpDeskLink.getAttribute('href');  

    // await this.helpDeskLink.click();

    // return this.page.waitForURL(`**${helpDeskLinkHref}`);

    await this.searchResultsFormSubmit.click()
  }
}