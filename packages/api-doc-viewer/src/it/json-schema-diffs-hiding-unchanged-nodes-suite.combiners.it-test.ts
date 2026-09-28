/**
 * Screenshot tests for JSON Schema Diffs Suite (Hiding Unchanged Nodes) — combiners.
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";
import { switchCombinerNodesToChangedVariant } from "../utils/combiner-changed-variant";

const META_ID = "json-schema-diffs-suite-hiding-unchanged-nodes-combiners";

async function waitForJsonSchemaDiffsViewer() {
  await page.waitForSelector('[data-testid="json-schema-diffs-viewer"]', { visible: true });
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
  await page.evaluate(switchCombinerNodesToChangedVariant);
}

describe("JSON Schema Diffs Suite (Hiding Unchanged Nodes) - Combiners", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("3.1-oneof-variant-added", async () => {
    story = await storyPage(page, `${META_ID}--case-3-1-oneof-variant-added`);
    await waitForJsonSchemaDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("4.1-oneof-variant-content-changed", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-4-1-oneof-variant-content-changed`,
    );
    await waitForJsonSchemaDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("4.2-oneof-variant-description-only-changed", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-4-2-oneof-variant-description-only-changed`,
    );
    await waitForJsonSchemaDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("5.1-oneof-three-variants-unchanged", async () => {
    story = await storyPage(page, `${META_ID}--case-5-1-oneof-three-variants-unchanged`);
    await waitForJsonSchemaDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("5.2-root-description-changed-oneof-unchanged", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-5-2-root-description-changed-oneof-unchanged`,
    );
    await waitForJsonSchemaDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
