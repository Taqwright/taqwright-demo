import { test, expect } from '@taqwright/taqwright';

test('log in as invalid user verify error message', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('invalid@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('wrongpassword');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await expect(mobile.getByXpath("//android.view.View[@content-desc=\"DemoApp\"]/parent::*/android.view.View[3]")).toBeVisible();
});
