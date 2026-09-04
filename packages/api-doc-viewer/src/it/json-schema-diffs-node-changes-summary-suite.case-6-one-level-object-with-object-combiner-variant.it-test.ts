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
// `string` variant (nestedNodes[0]); the "chosen object" story clicks the `object` option on
// both, using the `data-testid` on SelectNestedNodeRow's option buttons (id = combiner node id).
async function selectObjectVariants() {
  await page.click('[data-testid="legacy-combiner-option-#/properties/variantWithCaseOne/oneOf/1"]');
  await page.click('[data-testid="legacy-combiner-option-#/properties/variantWithCaseTwo/oneOf/1"]');
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
