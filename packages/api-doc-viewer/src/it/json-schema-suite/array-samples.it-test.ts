/**
 * Auto-generated screenshot tests for JSON Schema Suite/Array stories.
 * Regenerate: node bin/generate-json-schema-suite-tests.mjs (from packages/api-doc-viewer).
 */
import path from 'path'
import { storyPage } from '../service/storybook-service'

const META_ID = 'json-schema-suite-array'
const SNAPSHOTS_DIR = path.resolve(__dirname, '..', '__image_snapshots__')

const TEST_IDS: string[] = [
  'case-001-type-only',
  'case-002-header',
  'case-003-description',
  'case-004-header-description',
  'case-005-items',
  'case-006-header-items',
  'case-007-description-items',
  'case-008-header-description-items',
  'case-009-additional-items',
  'case-010-header-additional-items',
  'case-011-description-additional-items',
  'case-012-header-description-additional-items',
  'case-013-items-additional-items',
  'case-014-header-items-additional-items',
  'case-015-description-items-additional-items',
  'case-016-header-description-items-additional-items',
  'case-017-additional-info',
  'case-018-header-additional-info',
  'case-019-description-additional-info',
  'case-020-header-description-additional-info',
  'case-021-items-additional-info',
  'case-022-header-items-additional-info',
  'case-023-description-items-additional-info',
  'case-024-header-description-items-additional-info',
  'case-025-additional-items-additional-info',
  'case-026-header-additional-items-additional-info',
  'case-027-description-additional-items-additional-info',
  'case-028-header-description-additional-items-additional-info',
  'case-029-items-additional-items-additional-info',
  'case-030-header-items-additional-items-additional-info',
  'case-031-description-items-additional-items-additional-info',
  'case-032-header-description-items-additional-items-additional-info',
]

async function waitForJsonSchemaViewer() {
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true })
  await page.waitForFunction(() => document.readyState === 'complete')
  await page.evaluate(() => new Promise<void>(resolve =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  ))
}

beforeEach(async () => {
  await jestPuppeteer.resetPage()
})

for (const testId of TEST_IDS) {
  it(testId, async () => {
    const story = await storyPage(page, `${META_ID}--${testId}`)
    await waitForJsonSchemaViewer()
    const component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `${META_ID}-${testId}-${counter}`,
    })
  })
}
