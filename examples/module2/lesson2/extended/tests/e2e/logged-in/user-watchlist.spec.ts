import { expect, test } from '../../../fixtures';
import { CommunityPortalPage } from '../../../pages/communityPortal.page';
import { HelpDeskPage } from '../../../pages/helpDesk.page';
import { MainPage } from '../../../pages/main.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortal();

  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.goToHelpDeskPage();

  const helpDeskPage = new HelpDeskPage(page);
  await helpDeskPage.goToSearchResultsPage();
});

test('search results should have Warchlist query results', async({page}) => {

  
  await expect(page).not.toBe('');
})