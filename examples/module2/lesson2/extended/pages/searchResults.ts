import { Page } from '@playwright/test';

export class SearchResultsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    //this.searchResults = page.getByRole('listbox', { name: /Search results/i });
  }
}