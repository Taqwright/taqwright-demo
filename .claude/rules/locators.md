# Rule: locators

Preference order, matching the existing suite:

1. `mobile.getByUiSelector('new UiSelector().description("…")')` — the default
   for Android. Use `.descriptionContains(…)` when the content-desc carries
   dynamic state, e.g. a drop target whose label gains a count:

   ```ts
   mobile.getByUiSelector('new UiSelector().descriptionContains("Drag Item 4")')
   ```

2. `mobile.getByXpath("//*[@hint='…']")` — for text inputs, which expose `hint`
   rather than a content-desc.
3. `mobile.getByXpath(...)` with structural paths — **last resort only.**
   Positional paths like

   ```ts
   mobile.getByXpath("//*[@content-desc='Pinch to Zoom']/../android.view.View[15]")
   ```

   exist in the suite because the Flutter render tree exposes no better handle
   for those canvases. They are brittle and break on layout change. Never
   introduce a new one if a UiSelector works.

Inspect the live tree before guessing a selector — `npm run codegen` records
against the running app and shows what the accessibility tree actually exposes.
