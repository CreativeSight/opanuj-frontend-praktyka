import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortal();
});

test('should go to searched page', async({page}) => {
  const query = 'Playwright';

  await page.getByLabel('Search Wikipedia').fill(query);
  await page.getByLabel('Search results').getByRole('link').first().click();
  
  expect(page.getByTitle(query)).not.toBeNull();
})