import { test, expect } from '@taqwright/taqwright';

test('enter username asdsasad', async ({ mobile }) => {
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  await mobile.getByUiSelector('new UiSelector().description("Open navigation menu")').click();

  const logoutButton = mobile.getByUiSelector('new UiSelector().description("Logout")');
  await logoutButton.scrollIntoView({
    direction: 'down',
    forceGesture: true,
    from: { x: 0.99 },
    to: { x: 0.99 },
    maxAttempts: 10,
    bottomMargin: 0.2,
  });
  await logoutButton.click();

  await expect(mobile.getByUiSelector('new UiSelector().description("Login")')).toBeVisible();
  await mobile.getByXpath("//*[@hint='Username']").fill('asdsasad');
});
