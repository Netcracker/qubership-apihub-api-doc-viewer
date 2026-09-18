/**
 * Fixtures: packages/samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/
 * Edit together with
 * src/stories/json-schema-diffs-node-changes-summary-suite/case-6-one-level-object-with-object-combiner-variant.stories.tsx
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";
import { switchCombinerNodesToChangedVariant } from "../utils/combiner-changed-variant";

const META_ID = "json-schema-diffs-suite-node-changes-summary-case-6-one-level-object-with-object-combiner-variant";

async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

describe("JSON Schema Diffs Suite (Node Changes Summary)/Case 6 — One Level Object With Object Combiner Variant", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("expanded-root-chosen-object", async () => {
    story = await storyPage(page, `${META_ID}--expanded-root-chosen-object`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    await page.evaluate(switchCombinerNodesToChangedVariant);
    await waitForJsonSchemaDiffViewer();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("collapsed-root", async () => {
    story = await storyPage(page, `${META_ID}--collapsed-root`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
