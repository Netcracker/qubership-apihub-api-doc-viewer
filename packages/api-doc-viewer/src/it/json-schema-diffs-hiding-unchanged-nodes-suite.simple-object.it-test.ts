/**
 * Screenshot tests for JSON Schema Diffs Suite (Hiding Unchanged Nodes) — simple object.
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-hiding-unchanged-nodes-simple-object-samples";

async function waitForJsonSchemaNextDiffsViewer() {
  await page.waitForSelector('[data-testid="json-schema-next-diffs-viewer"]', { visible: true });
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

describe("JSON Schema Diffs Suite (Hiding Unchanged Nodes) - Simple Object", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("1.1-two-added-three-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-1-1-two-added-three-removed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("1.2-second-and-fifth-added-others-unchanged", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-1-2-second-and-fifth-added-others-unchanged`,
    );
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("1.3-root-description-replaced", async () => {
    story = await storyPage(page, `${META_ID}--case-1-3-root-description-replaced`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("1.4-property-metadata-and-constraints-changed", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-1-4-property-metadata-and-constraints-changed`,
    );
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
