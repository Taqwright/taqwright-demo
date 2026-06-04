# taq-demo

Mobile UI test suite for the **DemoApp** (a Flutter app), built with
[taqwright](https://www.npmjs.com/package/taqwright) — a Playwright-style test
runner with a flat locator API over Appium. Tests run on local emulators /
simulators or on real devices in the cloud via BrowserStack.

## Requirements

- Node.js `>= 24`
- [Appium](https://appium.io/) 3 (taqwright auto-starts it for local runs)
- **Android:** Android SDK + an AVD named `Pixel_10_Pro_XL`
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

```bash
npm test                                   # run all projects
npx taqwright test --project android       # local Android emulator
npx taqwright test --project ios           # local iOS simulator
```

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

To run against a different build, override the upload path:

```bash
TAQ_APK=./path/to/app.apk  npx taqwright test --project android
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

| Project                 | Platform | Device                        | Provider     |
| ----------------------- | -------- | ----------------------------- | ------------ |
| `android`               | Android  | Pixel 10 Pro XL (emulator)    | local        |
| `browserstack-android`  | Android  | Google Pixel 8 (Android 14)   | BrowserStack |
| `ios`                   | iOS      | iPhone 17 Pro (simulator)     | local        |
| `browserstack-ios`      | iOS      | iPhone 15 (iOS 17)            | BrowserStack |

See [taqwright.config.ts](taqwright.config.ts) for the full configuration.

## License

[MIT](LICENSE)
