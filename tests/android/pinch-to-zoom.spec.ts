import { test } from 'taqwright';

test('pinch to zoom', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();

  await mobile.getByUiSelector('new UiSelector().description("Pinch to Zoom")').scrollIntoView();
  await mobile.getByXpath("//*[@content-desc='Pinch to Zoom']/../android.view.View[15]").pinchOut();
  await mobile.getByXpath("//*[@content-desc='Pinch to Zoom']/../android.view.View[15]").pinchOut();
  await mobile.getByXpath("//*[@content-desc='Pinch to Zoom']/../android.view.View[15]").pinchIn();
  await mobile.getByXpath("//*[@content-desc='Pinch to Zoom']/../android.view.View[15]").pinchIn();
});
