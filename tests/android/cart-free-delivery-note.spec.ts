import { test, expect } from '@taqwright/taqwright';

test('cart free delivery note under $50', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByLabel('Login').click();
  await mobile.getByUiSelector('new UiSelector().descriptionContains("Everyday comfort & style")').click();
  // Casual Sundress is $49.99 — the cheapest item, just under the $50 threshold.
  await mobile.getByUiSelector('new UiSelector().descriptionContains("Casual Sundress")').click();
  await mobile.getByLabel('Add to Cart').click();
  await mobile.getByLabel('VIEW CART').click();

  await expect(mobile.getByLabel('Free delivery over $50')).toBeVisible();
});
