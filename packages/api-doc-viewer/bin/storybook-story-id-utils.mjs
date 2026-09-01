import { sanitize } from "@storybook/csf";
import { kebabCase } from "lodash-es";

/** Storybook meta id from a CSF `title` (e.g. `Group/Story Name`). */
export const toStorybookMetaId = (title) => title.split("/").map(sanitize).join("-");

/** Storybook story slug from a CSF named export (e.g. `Case_025_rule1_string`). */
export const toStorybookStorySlug = (exportName) => kebabCase(exportName);

/** Screenshot IT wait helper body for JSON Schema Next diffs viewers. */
export const printJsonSchemaDiffsItWaitFunction = () => `async function waitForJsonSchemaDiffViewer() {
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
}`;
