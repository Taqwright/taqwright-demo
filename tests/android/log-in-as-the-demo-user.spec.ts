import { test, expect } from '@taqwright/taqwright';

test('log in as the demo user', async ({ mobile }) => {
  // Type "emma@demoapp.com" in Username
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');

  // Type "10203040" in Password
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');

  // Tap Login button
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();

  // Check that Shop All is visible
  await expect(mobile.getByUiSelector('new UiSelector().description("Shop All")')).toBeVisible();
});
