import { test, expect } from '@taqwright/taqwright';

test('login and see cart is visible on home page', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await expect(mobile.getByUiSelector('new UiSelector().description("Cart")')).toBeVisible();
});
