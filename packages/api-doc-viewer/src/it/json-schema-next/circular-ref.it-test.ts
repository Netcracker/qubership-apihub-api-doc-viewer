/**
 * Screenshot test for JSON Schema Next circular $ref story.
 */
import path from "path"
import { storyPage } from "../service/storybook-service"

const META_ID = "json-schema-next-circular-ref"
const TEST_ID = "cycled"
const SNAPSHOTS_DIR = path.resolve(__dirname, "..", "__image_snapshots__")

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

it(TEST_ID, async () => {
  const story = await storyPage(page, `${META_ID}--${TEST_ID}`)
  await waitForJsonSchemaNextViewer()
  const component = await story.viewComponent()
  expect(await component.captureScreenshot()).toMatchImageSnapshot({
    customSnapshotsDir: SNAPSHOTS_DIR,
    customSnapshotIdentifier: `${META_ID}-${TEST_ID}`,
  })
})
