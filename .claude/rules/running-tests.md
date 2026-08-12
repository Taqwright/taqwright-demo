# Rule: running tests

- **Never assume a device is available.** Local runs need a booted AVD
  (`Pixel_10_Pro_XL`; the 2-worker projects also need `Pixel_10_Pro_XL_2`).
  Check with `npm run devices` first; if none are up, say so rather than
  launching a run that will hang on device allocation.
- Tests are slow (device boot + app install + run). Don't run the full
  `npm run test:android` sweep to validate a one-spec change — run that project
  and spec only:

  ```bash
  npx taqwright test --project android-single tests/android/long-press.spec.ts
  ```

- **Don't run the BrowserStack projects** (`browserstack-android`,
  `browserstack-ios`) unless explicitly asked. They consume paid parallel
  sessions and need `BROWSERSTACK_USERNAME` / `BROWSERSTACK_ACCESS_KEY`.
- When you can't run a test, say the change is unverified. Don't report a spec
  as passing on the strength of a typecheck.
- Debug a failure from the recorded artifacts (`npm run report`) before
  re-running. Local projects capture trace/video on failure; the BrowserStack
  Android project captures trace on every run.
