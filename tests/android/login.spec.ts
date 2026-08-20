import { test, expect } from '@taqwright/taqwright';

test('log in as the demo user', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();

  await expect(mobile.getByXpath("//*[contains(@text, 'Elegant gowns & formal wear')]")).toBeVisible();
});
