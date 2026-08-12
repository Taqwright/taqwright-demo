# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

`taq-demo` — a mobile UI test suite for **DemoApp** (a Flutter app), built on
[taqwright](https://www.npmjs.com/package/@taqwright/taqwright): a Playwright-runner-based
test framework with a flat locator API over Appium 3. Specs run on local
emulators/simulators or on BrowserStack real devices.

There is no application source here — only tests, the runner config, and
prebuilt app binaries in [app/](app/). Do not try to build or modify the app.

## Layout

```
tests/android/         Android specs (the whole current suite)
tests/ios/             iOS specs — configured in taqwright.config.ts but does not exist yet
app/                   Prebuilt binaries: DemoApp-v1.0.0.apk, DemoApp-v1.0.0.app
taqwright.config.ts    All device/project definitions, heavily commented
```

## Commands

```bash
npm run test:single    # 1 emulator pinned to emulator-5554
npm run test:pool      # 2-emulator udid pool, 2 workers
npm run test:auto1     # auto-detect host AVDs, 1 worker
npm run test:auto2     # auto-detect host AVDs, 2 workers
npm run doctor         # check local environment (Appium, SDK, devices)
npm run devices        # list available devices
npm run codegen        # record a test interactively
npm run report         # open the HTML report
npx tsc --noEmit       # typecheck (tests + config, strict mode)
```

Run a single spec: `npx taqwright test --project android-single tests/android/long-press.spec.ts`

## Rules

Topic rules live in [.claude/rules/](.claude/rules/) and are imported below.
Add a new rule as its own file there and import it here — files in that
directory are **not** auto-discovered.

@.claude/rules/running-tests.md
@.claude/rules/writing-specs.md
@.claude/rules/locators.md
@.claude/rules/gestures.md
@.claude/rules/config.md
@.claude/rules/repo-hygiene.md
