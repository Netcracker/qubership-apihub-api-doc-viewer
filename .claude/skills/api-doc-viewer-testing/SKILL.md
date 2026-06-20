---
description: Write api-doc-viewer screenshot integration tests against Storybook stories and sample fixtures.
---

# Testing api-doc-viewer

Screenshot integration tests live in `packages/api-doc-viewer/src/it/`. They
run Jest with `jest-puppeteer` and `jest-image-snapshot` against a static
Storybook build.

## Commands

From `packages/api-doc-viewer/`:

| Script | Purpose |
| --- | --- |
| `npm test` | Unit tests only |
| `npm run screenshot-test` | Build showcase, start static server, run IT config |
| `npm run regenerate-screenshots` | Same as above with `--updateSnapshot` |

Root monorepo: `npm run screenshot-test` runs via Lerna.

IT Jest config: `.config/it/it-test-docker.jest.config.cjs` (local Docker
Chrome). Setup and snapshot tuning are in `.jest/setup.tests.ts`
(`failureThreshold: 20`, custom diff threshold).

## Test anatomy

Each IT file targets one Storybook meta (suite). Pattern:

```typescript
import { storyPage } from './service/storybook-service'

beforeEach(async () => {
  await jestPuppeteer.resetPage()
})

it('story-kebab-name', async () => {
  const story = await storyPage(page, 'meta-id--story-kebab-name')
  const component = await story.viewComponent()
  expect(await component.captureScreenshot()).toMatchImageSnapshot()
})
```

Story IDs are `{metaId}--{kebab-case export name}`. Storybook converts
PascalCase exports to kebab-case; pre-compute kebab IDs when generating tests.

Helpers in `src/it/service/`:

- `storyPage(page, storyId)` — opens iframe URL, sets viewport, hides nav noise.
- `story.viewComponent()` — locates the rendered viewer root for screenshots.

## Generated vs hand-written suites

**Generated** (do not edit by hand — regenerate instead):

- GraphQL compatibility suite — `bin/generate-compatibility-suite-stories.mjs`
  and `bin/generate-compatibility-suite-tests.mjs` →
  `src/stories/compatibility-suite/` and `src/it/compatibility-suite/`.

**Hand-written** (edit stories and matching IT files together):

- JSO general suite, AsyncAPI suites, diff sample suites under
  `src/stories/*/` with paired `src/it/*.it-test.ts`.
- When adding a diff sample case, add the YAML pair under
  `packages/samples/`, export a story, and append a matching `it(...)` with
  the correct story ID.

Run `npm run generate-stories` / `npm run generate-tests` before screenshot
runs when compatibility-suite sources changed.

## Flaky rendering

Some AsyncAPI diff stories need a paint settle helper before capture:

```typescript
await page.waitForFunction(() => document.readyState === 'complete')
await page.evaluate(() => new Promise<void>(resolve =>
  requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
))
```

Reuse this pattern when new stories show timing-related snapshot drift.

## Snapshots

Images land in `src/it/__image_snapshots__/`. Snapshot identifiers follow
`{describe-slug}-{test-name}-{counter}` unless overridden via
`customSnapshotIdentifier`.

After intentional visual changes, run `regenerate-screenshots` and commit
updated PNGs with the code change — do not bump `failureThreshold` to mask
regressions.

## Data-layer tests

Builder and aggregator unit tests belong in
`packages/next-data-model/tests/`, not in screenshot IT files. Keep view
and data test boundaries separate.
