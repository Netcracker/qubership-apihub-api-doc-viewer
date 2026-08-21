/**
 * Screenshot tests for JSON Schema Diffs Suite (Hiding Unchanged Nodes) — complex object.
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-hiding-unchanged-nodes-complex-object-samples";

async function waitForJsonSchemaNextDiffsViewer() {
  await page.waitForSelector('[data-testid="json-schema-next-diffs-viewer"]', { visible: true });
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

describe("JSON Schema Diffs Suite (Hiding Unchanged Nodes) - Complex Object", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("2.1-root-description-changed", async () => {
    story = await storyPage(page, `${META_ID}--case-2-1-root-description-changed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.2-primitive-props-added", async () => {
    story = await storyPage(page, `${META_ID}--case-2-2-primitive-props-added`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.3-nested-object-props-added", async () => {
    story = await storyPage(page, `${META_ID}--case-2-3-nested-object-props-added`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.4-primitive-added-nested-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-2-4-primitive-added-nested-removed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.5-nested-prop-added-and-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-2-5-nested-prop-added-and-removed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.6-nested-prop-added-object-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-2-6-nested-prop-added-object-removed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.7-object-added-nested-prop-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-2-7-object-added-nested-prop-removed`);
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("2.8-nested-property-metadata-and-constraints-changed", async () => {
    story = await storyPage(
      page,
      `${META_ID}--case-2-8-nested-property-metadata-and-constraints-changed`,
    );
    await waitForJsonSchemaNextDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
