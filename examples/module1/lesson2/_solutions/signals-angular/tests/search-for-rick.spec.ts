
import test, { expect  } from '@playwright/test';
import path from 'path';


test('search for Rick', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Gender').selectOption('Female');
  await expect(page.getByRole('listitem')).toHaveCount(20);
  await page.screenshot({ path: path.join(__dirname, 'screen.png'), fullPage: true });
  await expect(page).toHaveScreenshot('screen.png');
});
