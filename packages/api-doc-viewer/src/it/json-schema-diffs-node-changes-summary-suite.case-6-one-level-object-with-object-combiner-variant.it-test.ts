/**
 * Fixtures: packages/samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/
 * Edit together with
 * src/stories/json-schema-diffs-node-changes-summary-suite/case-6-one-level-object-with-object-combiner-variant.stories.tsx
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-node-changes-summary-case-6-one-level-object-with-object-combiner-variant";

async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

// Case 6's two oneOf properties (variantWithCaseOne / variantWithCaseTwo) default to their
// `string` variant; the "chosen object" story clicks the `object` option on both. The Next
// viewer's combiner picker (CombinerSelectorRow) uses index-based testids
// (`json-schema-combiner-option-{index}`, not the legacy path-based combiner-node-id scheme),
// and the same testid repeats once per property AND once per diff side (SideBySideLayout), so
// a plain `page.click(selector)` would hit the wrong element - scope the query to the
// `json-schema-combiner-node-viewer` whose own text starts with the target property name. Either
// side's button works: both sides of one property share a single selection state.
async function selectCombinerOption(propertyName: string, optionIndex: number) {
  await page.evaluate((name, index) => {
    const viewers = document.querySelectorAll('[data-testid="json-schema-combiner-node-viewer"]');
    const target = Array.from(viewers).find((viewer) => viewer.textContent?.trim().startsWith(name));
    if (!target) {
      throw new Error(`No combiner node viewer found for property: ${name}`);
    }
    const button = target.querySelector(`[data-testid="json-schema-combiner-option-${index}"]`);
    if (!button) {
      throw new Error(`No combiner option button found: json-schema-combiner-option-${index}`);
    }
    (button as HTMLElement).click();
  }, propertyName, optionIndex);
}

async function selectObjectVariants() {
  await selectCombinerOption("variantWithCaseOne", 1);
  await selectCombinerOption("variantWithCaseTwo", 1);
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
    await selectObjectVariants();
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
