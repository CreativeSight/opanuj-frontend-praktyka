import { Locator, Page } from '@playwright/test';

export class CommunityPortalPage {
  readonly page: Page;
  private readonly helpDeskLink: Locator;  
  
  constructor(page: Page) {
    this.page = page;
    this.helpDeskLink = page.getByRole('link', { name: 'Help desk', exact: true });    
  }

  async goToHelpDeskPage() {
    const helpDeskLinkHref = await this.helpDeskLink.getAttribute('href');  

    await this.helpDeskLink.click();

    return this.page.waitForURL(`**${helpDeskLinkHref}`);
  }
}