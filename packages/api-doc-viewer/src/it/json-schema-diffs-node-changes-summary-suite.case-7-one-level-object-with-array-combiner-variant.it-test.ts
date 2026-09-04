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
// `string` variant; "chosen array" stories click the `array` option on both.
async function selectArrayVariants() {
  await page.click('[data-testid="legacy-combiner-option-#/properties/variantWithCaseThree/oneOf/1"]');
  await page.click('[data-testid="legacy-combiner-option-#/properties/variantWithCaseFour/oneOf/1"]');
}

// Selecting a combiner variant rebuilds that variant's own child state nodes from scratch
// (always collapsed), independent of the story's `expandedDepth` - so the array variant's
// `items` node needs its own expand click via the `data-testid` on ExpandingCaret.
async function expandItems() {
  await page.click('[data-testid="legacy-node-expander-#/properties/variantWithCaseThree/oneOf/1/items"]');
  await page.click('[data-testid="legacy-node-expander-#/properties/variantWithCaseFour/oneOf/1/items"]');
}

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
    await expandItems();
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
