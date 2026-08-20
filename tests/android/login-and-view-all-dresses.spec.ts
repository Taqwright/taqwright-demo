import { test, expect } from '@taqwright/taqwright';

test('login as valid user and open view all, verify all dress page is loaded', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("View All")').click();
  await expect(mobile.getByUiSelector('new UiSelector().description("All Dresses")')).toBeVisible();
  await expect(mobile.getByUiSelector('new UiSelector().description("Showing 6 of 32 items")')).toBeVisible();
});
