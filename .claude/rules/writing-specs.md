# Rule: writing specs

- Import only from the package root: `import { test, expect } from '@taqwright/taqwright';`
  Never import `webdriverio`, `appium`, or `@playwright/test` directly — the
  `mobile` fixture is the entire surface.
- One `test()` per file, named for the gesture/flow it covers. No `describe`
  blocks, no page objects, no shared helper modules — the suite is deliberately
  flat and self-contained per spec.
- Android specs go in `tests/android/`, iOS specs in `tests/ios/`. `tests/ios/`
  is wired up by the `ios` and `browserstack-ios` projects but is currently
  empty; create it when adding the first iOS spec.
- `resetBetweenTests: true` on every project, so **each spec must start from a
  cold app** and perform the login itself:

  ```ts
  await mobile.getByXpath("//*[@hint='Username']").fill('emma@demoapp.com');
  await mobile.getByXpath("//*[@hint='Password']").fill('10203040');
  await mobile.getByUiSelector('new UiSelector().description("Login")').click();
  ```

  These are demo-app throwaway credentials — fine to keep inline. Never add real
  credentials or tokens to a spec.
- Assert outcomes with `expect(...)`, never with a sleep. There are no arbitrary
  waits anywhere in this suite — keep it that way; `expectTimeout` is 30s and
  auto-waiting is built in.
