import { Locator, Page } from '@playwright/test';

export class HelpDeskPage {
  readonly page: Page;
  readonly searchResultsFormSubmit: Locator;
  readonly searchResultsInput: Locator;  
  
  constructor(page: Page) {
    this.page = page;  
    this.searchResultsInput = page.getByRole('cell', { name: 'Search the frequently asked' }).getByRole('textbox');    
    this.searchResultsFormSubmit = page.getByRole('button', { name: 'Search the frequently asked questions' });   
  }

  async goToSearchResultsPage() {
    await this.searchResultsInput.click();
    await this.searchResultsInput.fill('Watchlist');

    return this.searchResultsFormSubmit.click()
  }
}