import { test, expect, type Mobile, type Locator } from 'taqwright';

// Scroll `target` on-screen, then nudge it into the upper half of the view.
async function scrollToUpperHalf(mobile: Mobile, target: Locator, x = 0.99): Promise<void> {
  // 1. Bring it on-screen (scrollIntoView leaves it near the bottom edge).
  await target.scrollIntoView({ direction: 'down', forceGesture: true, from: { x }, to: { x }, maxAttempts: 10 });

  // 2. Nudge upward until its center sits in the upper half.
  const { height } = await mobile.getScreenSize();
  const aim = 0.35;                                   // desired center (fraction of height)
  for (let i = 0; i < 5; i++) {
    const box = await target.boundingBox();
    const center = (box.y + box.height / 2) / height;
    if (center <= 0.5) break;                         // already in the upper half
    const delta = Math.min(0.35, center - aim);       // travel up, capped to avoid overshoot
    await mobile.scroll('down', {
      from: { x, y: 0.5 + delta / 2 },
      to:   { x, y: 0.5 - delta / 2 },
      duration: 600,                                  // slow drag → ~1:1, minimal fling
    });
  }
}

test('long press', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();
  await mobile.getByUiSelector('new UiSelector().description("Gestures")').click();

  const target = mobile.getByUiSelector('new UiSelector().description("Long press me for options")');
  await scrollToUpperHalf(mobile, target);
  await expect(target).toBeVisible();

  await target.longPress();
  await expect(mobile.getByUiSelector('new UiSelector().description("Copy")')).toBeVisible();
});
