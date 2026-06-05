import { test, expect } from '@taqwright/taqwright';

test('long press', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();

  const target = mobile.getByUiSelector('new UiSelector().description("Long press me for options")');
  // Scroll on-screen AND lift it clear of the bottom edge (≥20% above the
  // bottom) so the long-press lands on a fully-visible target. Swipe along the
  // right edge (x: 0.99) to avoid the card's own gesture area.
  await target.scrollIntoView({
    direction: 'down',
    forceGesture: true,
    from: { x: 0.99 },
    to: { x: 0.99 },
    maxAttempts: 10,
    bottomMargin: 0.2,
  });
  await expect(target).toBeVisible();

  await target.longPress();
  await expect(mobile.getByUiSelector('new UiSelector().description("Copy")')).toBeVisible();
});
