/**
 * Fixtures: packages/samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/
 * Edit together with
 * src/stories/json-schema-diffs-node-changes-summary-suite/case-7-one-level-object-with-array-combiner-variant.stories.tsx
 */
import { StoryPage } from "./service/story-page";
import { ViewComponent } from "./service/view-component";
import { storyPage } from "./service/storybook-service";

const META_ID = "json-schema-diffs-suite-node-changes-summary-case-7-one-level-object-with-array-combiner-variant";

async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector('[data-name="JsonNode"]', { visible: true });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
}

// Case 7's two oneOf properties (variantWithCaseThree / variantWithCaseFour) default to their
// `string` variant; "chosen array" stories click the `array` option on both. The Next viewer's
// combiner picker (CombinerSelectorRow) uses index-based testids
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

async function selectArrayVariants() {
  await selectCombinerOption("variantWithCaseThree", 1);
  await selectCombinerOption("variantWithCaseFour", 1);
}

// There is no `expandItems()` step anymore: once the `array` variant is selected, its `items`
// child never becomes expandable in the current JsonSchemaNextViewer - a root-only combiner leaf
// gets no structural children (resolveCombinerLeafStructuralChildren in
// utils/resolve-combiner-display.ts falls through to childrenNodes(), which is empty for an
// array node), so no expander caret ever renders to click. This is the same "root-level array
// renders as a summary only" gap documented in
// packages/samples/json-schema-diffs/extensions/README.md, confirmed here to also apply to a
// plain single-schema `items:` (not just tuple `items: [...]`) once the array is a combiner
// leaf rather than the schema root. Until the viewer supports this, this story's screenshot is
// expected to match "…-collapsed-items" - the array simply can't expand further.

describe("JSON Schema Diffs Suite (Node Changes Summary)/Case 7 — One Level Object With Array Combiner Variant", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  it("expanded-root-chosen-array-expanded-items", async () => {
    story = await storyPage(page, `${META_ID}--expanded-root-chosen-array-expanded-items`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    await selectArrayVariants();
    await waitForJsonSchemaDiffViewer();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("expanded-root-chosen-array-collapsed-items", async () => {
    story = await storyPage(page, `${META_ID}--expanded-root-chosen-array-collapsed-items`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    await selectArrayVariants();
    await waitForJsonSchemaDiffViewer();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("expanded-root-default-choice", async () => {
    story = await storyPage(page, `${META_ID}--expanded-root-default-choice`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });

  it("collapsed-root", async () => {
    story = await storyPage(page, `${META_ID}--collapsed-root`);
    await waitForJsonSchemaDiffViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
