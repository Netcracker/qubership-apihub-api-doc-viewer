/**
 * Screenshot smoke tests for JSON Schema Next/String stories.
 */
import path from "path"
import { storyPage } from "../service/storybook-service"

const META_ID = "json-schema-next-string"
const SNAPSHOTS_DIR = path.resolve(__dirname, "..", "__image_snapshots__")

const TEST_IDS: string[] = [
  "case-001-type-only",
  "case-003-description",
]

async function waitForJsonSchemaNextViewer() {
  await page.waitForSelector('[data-testid="json-schema-next-viewer"]', { visible: true })
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true })
  await page.waitForFunction(() => document.readyState === "complete")
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
    await waitForJsonSchemaNextViewer()
    const component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: `json-schema-next-${testId}`,
    })
  })
}
