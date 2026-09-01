import { test, expect } from '@taqwright/taqwright';

test('open checkout', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();

  // Recorded step: TAP "Proceed to Checkout" (accessibilityId → content-desc,
  // matched by UiSelector().description()).
  const checkout = mobile.getByUiSelector('new UiSelector().description("Proceed to Checkout")');
  await expect(checkout).toBeVisible();
  await checkout.click();
});
