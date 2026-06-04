import { test } from 'taqwright';

test('double tap to zoom', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();

  await mobile.getByUiSelector('new UiSelector().description("Double Tap to Zoom")').scrollIntoView();
  await mobile.getByXpath("//*[@content-desc='Double Tap to Zoom']/../android.view.View[11]").doubleTap();
});
