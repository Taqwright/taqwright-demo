import { test, expect } from 'taqwright';

test('gesture swipe left and right', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();
  await mobile.getByUiSelector('new UiSelector().description("Swipe Card 1")').swipeLeft();
  await mobile.getByUiSelector('new UiSelector().description("Swipe Card 5")').swipeRight();
  await expect(mobile.getByUiSelector('new UiSelector().description("Swipe Card 1")')).toBeHidden();
  await expect(mobile.getByUiSelector('new UiSelector().description("Swipe Card 5")')).toBeHidden();
});
