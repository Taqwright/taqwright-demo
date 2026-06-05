# taq-demo

Mobile UI test suite for the **DemoApp** (a Flutter app), built with
[taqwright](https://www.npmjs.com/package/taqwright) — a Playwright-style test
runner with a flat locator API over Appium. Tests run on local emulators /
simulators or on real devices in the cloud via BrowserStack.

## Requirements

- Node.js `>= 24`
- [Appium](https://appium.io/) 3 (taqwright auto-starts it for local runs)
- **Android:** Android SDK + an AVD named `Pixel_10_Pro_XL`. The 2-device
  projects (`android-pool-2`, `android-auto-2`) also need a second AVD,
  `Pixel_10_Pro_XL_2`. taqwright cold-boots the AVDs for you and waits until
  each is ready.
- **iOS:** Xcode + an `iPhone 17 Pro` simulator (macOS only)
- A BrowserStack account for the cloud projects (optional)

## Setup

```bash
npm install
```

The app binaries are bundled under [app/](app/):

- `DemoApp-v1.0.0.apk` — Android build
- `DemoApp-v1.0.0.app` — iOS simulator build

## Running tests

The local Android suite ships in four run modes, each its own project:

```bash
npm run test:single   # 1 emulator, pinned to a given udid (emulator-5554)
npm run test:pool     # 2-emulator udid pool, run 2-wide
npm run test:auto1    # auto-detect host AVDs, 1 worker
npm run test:auto2    # auto-detect host AVDs, 2 workers
npm run test:android  # all four of the above, in sequence
```

Or invoke any project directly:

```bash
npx taqwright test --project android-single
npx taqwright test --project android-pool-2     # needs 2 booted AVDs
npx taqwright test --project ios                # local iOS simulator
```

Appium is started automatically; the 2-device projects need both
`Pixel_10_Pro_XL` and `Pixel_10_Pro_XL_2` available (`adb devices` /
`npm run devices`).

Other scripts:

```bash
npm run codegen    # record a test interactively
npm run doctor     # check the local environment
npm run devices    # list available devices
npm run report     # open the HTML report
```

### Running on BrowserStack

The cloud projects read credentials from environment variables:

```bash
BROWSERSTACK_USERNAME=… BROWSERSTACK_ACCESS_KEY=… \
  npx taqwright test --project browserstack-android

BROWSERSTACK_USERNAME=… BROWSERSTACK_ACCESS_KEY=… \
  npx taqwright test --project browserstack-ios
```

`browserstack-android` runs **5 sessions in parallel** (`workers: 5`) — keep
this at or below your BrowserStack plan's parallel-session limit, or extra
sessions queue. The project allows a longer per-test budget and session-creation
/ idle timeouts so real-device allocation under parallel load doesn't abort; see
[taqwright.config.ts](taqwright.config.ts) to tune them.

To run against a different build, override the upload path:

```bash
TAQ_APK=./path/to/app.apk  npx taqwright test --project android-single
TAQ_IPA=bs://<app-id>      npx taqwright test --project browserstack-ios
```

## Project layout

```
.
├── app/                  # bundled app builds (.apk / .app)
├── tests/
│   ├── android/          # Android specs (gestures, swipe, drag-drop, …)
│   └── ios/              # iOS specs
├── taqwright.config.ts   # device/project definitions
├── playwright-report/    # generated HTML report
└── test-results/         # run artifacts (traces, screenshots, video)
```

## Configured projects

| Project                | Platform | Device / mode                              | Workers | Provider     |
| ---------------------- | -------- | ------------------------------------------ | ------- | ------------ |
| `android-single`       | Android  | one emulator, pinned udid (`emulator-5554`)| 1       | local        |
| `android-pool-2`       | Android  | 2-emulator udid pool (`5554` + `5556`)     | 2       | local        |
| `android-auto-1`       | Android  | auto-detect host AVDs                       | 1       | local        |
| `android-auto-2`       | Android  | auto-detect host AVDs                       | 2       | local        |
| `browserstack-android` | Android  | Google Pixel 8 (Android 14)                | 5       | BrowserStack |
| `ios`                  | iOS      | iPhone 17 Pro (simulator)                   | 1       | local        |
| `browserstack-ios`     | iOS      | iPhone 15 (iOS 17)                          | 1       | BrowserStack |

See [taqwright.config.ts](taqwright.config.ts) for the full configuration.

## License

[MIT](LICENSE)
