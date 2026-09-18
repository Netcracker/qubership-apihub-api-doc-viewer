import { sanitize } from "@storybook/csf";
import { kebabCase } from "lodash-es";

/** Storybook meta id from a CSF `title` (e.g. `Group/Story Name`). */
export const toStorybookMetaId = (title) => title.split("/").map(sanitize).join("-");

/** Storybook story slug from a CSF named export (e.g. `Case_025_rule1_string`). */
export const toStorybookStorySlug = (exportName) => kebabCase(exportName);

/**
 * Screenshot IT wait helper body for JSON Schema Next diffs viewers. Includes the import for
 * `switchCombinerNodesToChangedVariant` and a call to it at the end of the wait, so every
 * generated diffs-suite IT test picks the oneOf/anyOf combiner variant that actually contains
 * the diff before capturing a screenshot -- a safe no-op on pages with no combiner (or none of
 * whose combiner options need switching). Both current consumers
 * (generate-json-schema-type-changes-samples.mjs, generate-value-range-diff-stories.mjs) write
 * their IT tests to `src/it/json-schema-diffs-suite/`, so the relative import path below is
 * correct for both -- re-check this path if a future consumer writes elsewhere.
 */
export const printJsonSchemaDiffsItWaitFunction = () => `import { switchCombinerNodesToChangedVariant } from "../../utils/combiner-changed-variant";

async function waitForJsonSchemaDiffViewer() {
  await page.waitForSelector('[data-testid="json-schema-next-diffs-viewer"]', { visible: true });
  await page.waitForFunction(() => {
    for (const selector of ['[data-name="JsonNode"]', '[data-testid="json-schema-combiner-node-viewer"]']) {
      const element = document.querySelector(selector);
      if (!element) {
        continue;
      }
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return true;
      }
    }
    return false;
  });
  await page.waitForFunction(() => document.readyState === "complete");
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  ));
  await page.evaluate(switchCombinerNodesToChangedVariant);
}`;
