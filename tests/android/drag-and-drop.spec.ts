import { test, expect } from 'taqwright';

test('drag and drop', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();
  await mobile.getByUiSelector('new UiSelector().descriptionContains("Drag Item 1")')
    .dragTo(mobile.getByUiSelector('new UiSelector().descriptionContains("Drag Item 4")'));
  await expect(
    mobile.getByXpath("//*[contains(@content-desc, '3') and contains(@content-desc, 'Drag Item 4')]")
  ).toBeVisible();
});
