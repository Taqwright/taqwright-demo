import { test, expect } from '@taqwright/taqwright';

test('open checkout', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();

  await mobile.getByUiSelector('new UiSelector().description("Proceed to Checkout")').click();
});
