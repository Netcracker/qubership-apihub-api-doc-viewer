/**
 * Screenshot tests for JSON Schema Suite/Extensions stories.
 */
import path from 'path'
import { storyPage } from '../service/storybook-service'

const META_ID = 'json-schema-extensions-suite-extensions'
const SNAPSHOTS_DIR = path.resolve(__dirname, '__image_snapshots__')

const TEST_IDS: string[] = [
  'case-001-root-primitive',
  'case-002-root-object',
  'case-003-root-array',
  'case-004-root-json-schema',
  'case-005-property-primitive',
  'case-006-property-object',
  'case-007-property-array',
  'case-008-property-json-schema',
  'case-009-items-primitive',
  'case-010-items-object',
  'case-011-items-array',
  'case-012-items-json-schema',
  'case-013-root-mixed-set',
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
