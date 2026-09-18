/**
 * Screenshot tests for JSON Schema Diffs Suite (Extensions) — Node Diff to Extension
 * Inheritance — AnyOf Array Two Items.
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-extensions-node-diff-to-extension-inheritance-anyof-array-two-items";

// This suite's root is `anyOf` wrapping a tuple array (`items: [...]`). Per the known gap
// documented in packages/samples/json-schema-diffs/extensions/README.md, a root-level tuple
// array never gets structural child nodes, so the combiner's array option never expands into
// a `[data-name="JsonNode"]` element - only the combiner option-picker itself mounts. Wait for
// either, so this stays correct if tuple-item rendering is added later.
async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector(
    '[data-name="JsonNode"], [data-testid="json-schema-combiner-node-viewer"]',
    { visible: true },
  );
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

describe("JSON Schema Diffs Suite (Extensions) - Node Diff to Extension Inheritance - AnyOf Array Two Items", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("01-second-item-added", async () => {
    story = await storyPage(page, `${META_ID}--case-01-second-item-added`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("02-second-item-removed", async () => {
    story = await storyPage(page, `${META_ID}--case-02-second-item-removed`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
