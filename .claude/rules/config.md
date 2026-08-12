# Rule: taqwright.config.ts

- The config carries long comments explaining non-obvious choices (per-project
  `workers`, Appium port offsets, BrowserStack timeouts, the
  `appium:settings[…]` bracket syntax). **Preserve them** when editing, and add
  a comment for any new non-obvious knob.
- A project's `workers` must be `<=` its device count — pool length, or the
  number of AVDs `autoDiscover` resolves. Raising `workers` without adding
  devices breaks the run. Two parallel emulators need two *distinct* AVDs.
- Worker *i* spawns Appium on `port + i`, so the `port` field is a base, not a
  fixed address.
- Build paths stay overridable via `process.env.TAQ_APK` / `TAQ_IPA`. Keep that
  fallback pattern when touching `buildPath`.
- Credentials come from the environment only (`BROWSERSTACK_USERNAME`,
  `BROWSERSTACK_ACCESS_KEY`). Never hardcode BrowserStack keys.
- Cloud-only knobs (`appium.connectionTimeout`, `bstack:options`) don't apply to
  local `emulator` projects, and most local `appium.*` fields don't apply to a
  cloud provider. Don't copy settings between the two kinds of project without
  checking.
- Timeouts are deliberately generous (global `timeout: 180_000`, 300s on
  `browserstack-android`) because device allocation and app install run before
  the test body. Don't tighten them to "clean up".
