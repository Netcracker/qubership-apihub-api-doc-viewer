/**
 * Auto-generated screenshot tests for JSON Schema Suite/All Of Combiner Suite stories.
 * Regenerate: node --experimental-strip-types bin/generate-combiner-suite-tests.mjs
 */
import path from 'path'
import { storyPage } from '../service/storybook-service'

const META_ID = 'json-schema-suite-all-of-combiner-suite'
const SNAPSHOTS_DIR = path.resolve(__dirname, '__image_snapshots__')

const TEST_IDS: string[] = [
  'case-001-string-schema',
  'case-002-number-schema',
  'case-003-integer-schema',
  'case-004-boolean-schema',
  'case-005-array-schema',
  'case-006-object-schema',
  'case-007-all-types-schema',
  'case-008-string-my-string-null-schema',
  'case-009-string-null-iso-date-time-schema',
  'case-010-string-my-string-iso-date-time-schema',
  'case-011-number-my-number-null-schema',
  'case-012-number-null-iso-date-time-schema',
  'case-013-number-my-number-iso-date-time-schema',
  'case-014-integer-my-integer-null-schema',
  'case-015-integer-null-iso-date-time-schema',
  'case-016-integer-my-integer-iso-date-time-schema',
  'case-017-boolean-my-boolean-null-schema',
  'case-018-boolean-null-iso-date-time-schema',
  'case-019-boolean-my-boolean-iso-date-time-schema',
  'case-020-array-my-array-null-schema',
  'case-021-array-null-iso-date-time-schema',
  'case-022-array-my-array-iso-date-time-schema',
  'case-023-object-my-object-null-schema',
  'case-024-object-null-iso-date-time-schema',
  'case-025-object-my-object-iso-date-time-schema',
  'case-026-string-schema-all-of',
  'case-027-number-schema-all-of',
  'case-028-integer-schema-all-of',
  'case-029-boolean-schema-all-of',
  'case-030-array-schema-all-of',
  'case-031-object-schema-all-of',
  'case-032-string-schema-all-of-one-of',
  'case-033-number-schema-all-of-one-of',
  'case-034-integer-schema-all-of-one-of',
  'case-035-boolean-schema-all-of-one-of',
  'case-036-array-schema-all-of-one-of',
  'case-037-object-schema-all-of-one-of',
  'case-038-string-schema-all-of-any-of',
  'case-039-number-schema-all-of-any-of',
  'case-040-integer-schema-all-of-any-of',
  'case-041-boolean-schema-all-of-any-of',
  'case-042-array-schema-all-of-any-of',
  'case-043-object-schema-all-of-any-of',
  'case-044-string-schema-all-of-all-of',
  'case-045-number-schema-all-of-all-of',
  'case-046-integer-schema-all-of-all-of',
  'case-047-boolean-schema-all-of-all-of',
  'case-048-array-schema-all-of-all-of',
  'case-049-object-schema-all-of-all-of',
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
