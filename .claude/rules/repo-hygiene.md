# Rule: repo hygiene

- Node `>= 24`, ESM (`"type": "module"`), TypeScript `strict`. Typecheck with
  `npx tsc --noEmit` (covers `tests/**/*` and `taqwright.config.ts`).
- Never commit `test-results/`, `playwright-report/`, `taqwright-report/`,
  traces, screenshots, or videos — all gitignored, and they are large.
- The app binaries in `app/` (`DemoApp-v1.0.0.apk`, `DemoApp-v1.0.0.app`) are
  checked in intentionally. Don't replace or regenerate them; there is no app
  source in this repo.
- When bumping `@taqwright/taqwright`, update `package-lock.json` in the same
  commit (`npm install --package-lock-only`).
- Keep `README.md` in sync when adding or renaming a project in
  `taqwright.config.ts` — it documents the project table and the run scripts.
