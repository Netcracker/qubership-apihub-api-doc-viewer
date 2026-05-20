import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SAMPLES_DIR = path.join(ROOT_DIR, "..", "samples", "jso-diffs", "property");
const OUTPUT_DIR = path.join(ROOT_DIR, "src", "stories", "jso-diffs-suite");

const toStoryExportName = (caseId) => `Case_${caseId.replaceAll(".", "_").replaceAll("-", "_")}`;

const extractPropertyPrefix = (caseId) => {
  const match = caseId.match(/^\d+\.\d+-([a-zA-Z]+)-/);
  if (!match) {
    throw new Error(`Cannot extract property prefix from case id: ${caseId}`);
  }
  return match[1];
};

const collectCaseIds = () => {
  if (!fs.existsSync(SAMPLES_DIR)) {
    throw new Error(`Samples directory not found: ${SAMPLES_DIR}`);
  }

  return fs.readdirSync(SAMPLES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((caseId) => (
      fs.existsSync(path.join(SAMPLES_DIR, caseId, "before.json")) &&
      fs.existsSync(path.join(SAMPLES_DIR, caseId, "after.json"))
    ))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
};

const groupCaseIdsByPropertyPrefix = (caseIds) => {
  /** @type {Map<string, string[]>} */
  const groups = new Map();

  for (const caseId of caseIds) {
    const propertyPrefix = extractPropertyPrefix(caseId);
    const group = groups.get(propertyPrefix) ?? [];
    group.push(caseId);
    groups.set(propertyPrefix, group);
  }

  return groups;
};

const printStoryFile = (propertyPrefix, caseIds) => {
  const storyExports = caseIds.map((caseId) => (
    `export const ${toStoryExportName(caseId)}: Story = createCaseStory(${JSON.stringify(caseId)});`
  )).join("\n");

  return `import type { Meta } from "@storybook/react";
import {
  JsoPropertySamplesStory,
  createCaseStory,
  type JsoPropertySamplesStoryObj,
} from "./property-samples-common";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSO Diffs Suite/${propertyPrefix}",
  component: JsoPropertySamplesStory,
} satisfies Meta<typeof JsoPropertySamplesStory>;

export default meta;

type Story = JsoPropertySamplesStoryObj;

${storyExports}
`;
};

const removeLegacyStoryFiles = () => {
  const legacyFile = path.join(OUTPUT_DIR, "property-samples.stories.tsx");
  if (fs.existsSync(legacyFile)) {
    fs.unlinkSync(legacyFile);
  }

  for (const entry of fs.readdirSync(OUTPUT_DIR, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith("-samples.stories.tsx")) {
      continue;
    }
    fs.unlinkSync(path.join(OUTPUT_DIR, entry.name));
  }
};

const caseIds = collectCaseIds();
const groups = groupCaseIdsByPropertyPrefix(caseIds);

removeLegacyStoryFiles();

for (const [propertyPrefix, groupedCaseIds] of groups.entries()) {
  const outputFile = path.join(OUTPUT_DIR, `${propertyPrefix}-samples.stories.tsx`);
  fs.writeFileSync(outputFile, printStoryFile(propertyPrefix, groupedCaseIds), "utf8");
}

console.log(`Generated ${groups.size} JSO diffs suite story files (${caseIds.length} cases total).`);
