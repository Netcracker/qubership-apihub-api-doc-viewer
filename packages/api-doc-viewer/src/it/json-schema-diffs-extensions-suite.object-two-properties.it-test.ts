/**
 * Screenshot tests for JSON Schema Diffs Suite (Extensions) — Node Diff to Extension
 * Inheritance — Object Two Properties.
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-extensions-node-diff-to-extension-inheritance-object-two-properties";

async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

describe("JSON Schema Diffs Suite (Extensions) - Node Diff to Extension Inheritance - Object Two Properties", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("01-second-property-added", async () => {
    story = await storyPage(page, `${META_ID}--case-01-second-property-added`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("02-second-property-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-02-second-property-removed`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
