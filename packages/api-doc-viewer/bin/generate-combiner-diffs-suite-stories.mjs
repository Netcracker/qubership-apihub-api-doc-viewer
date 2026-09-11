import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exitIfInsideNodeModules } from "./compatibility-suite-generation-utils.mjs";
import { COMBINER_KINDS, combinerKindLabel, combinerKindSlug } from "./combiner-schema-builder.mjs";
import { listCombinerDiffCases, toCombinerCaseExportName } from "./combiner-diff-case-definitions.mjs";

exitIfInsideNodeModules(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const storiesOutDir = path.resolve(packageRoot, "src/stories/json-schema-diffs-suite");

/** @type {Array<{ combinerKind: string, storyFileName: string, testFileName: string, metaKebab: string, title: string }>} */
const COMBINER_DIFF_STORY_SUITES = COMBINER_KINDS.map((combinerKind) => {
  const slug = combinerKindSlug(combinerKind);
  const label = combinerKindLabel(combinerKind);
  return {
    combinerKind,
    storyFileName: `${slug}-combiner-diffs-suite.stories.tsx`,
    testFileName: `${slug}-combiner-diffs-suite.it-test.ts`,
    metaKebab: `json-schema-diffs-suite-${slug}-combiner-diffs-suite`,
    title: `JSON Schema Diffs Suite/${label} Combiner Diffs Suite`,
  };
});

mkdirSync(storiesOutDir, { recursive: true });

/**
 * @param {typeof COMBINER_DIFF_STORY_SUITES[number]} suite
 * @param {ReturnType<typeof listCombinerDiffCases>} cases
 */
const printStoryFile = (suite, cases) => {
  const exports = cases
    .map(
      (sampleCase) =>
        `export const ${toCombinerCaseExportName(sampleCase.caseId)}: Story = createCaseStory("${sampleCase.caseId}");`,
    )
    .join("\n");

  return `/**
 * Programmatic combiner (${suite.combinerKind}) diff stories.
 * See src/stories/json-schema-diffs-suite/combiner-diff-case-definitions.ts and ../../../samples/combiners-cases.md.
 * Regenerate: node --experimental-strip-types bin/generate-combiner-diffs-suite-stories.mjs
 */
import type { Meta, StoryObj } from "@storybook/react";
import {
  JsonSchemaDiffSamplesStory,
  createJsonSchemaDiffCaseStoryFactory,
  createJsonSchemaDiffSampleById,
  jsonSchemaDiffSampleReadonlyArgTypes,
} from "./json-schema-diffs-utils";
import { buildCombinerDiffProgrammaticSampleCases } from "./combiner-diff-samples";

const sampleCases = buildCombinerDiffProgrammaticSampleCases("${suite.combinerKind}");
const sampleById = createJsonSchemaDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "${suite.title}",
  component: JsonSchemaDiffSamplesStory,
  argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
} satisfies Meta<typeof JsonSchemaDiffSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = createJsonSchemaDiffCaseStoryFactory(
  JsonSchemaDiffSamplesStory,
  sampleById,
);

${exports}
`;
};

for (const suite of COMBINER_DIFF_STORY_SUITES) {
  const cases = listCombinerDiffCases(suite.combinerKind);
  const filePath = path.join(storiesOutDir, suite.storyFileName);
  writeFileSync(filePath, printStoryFile(suite, cases));
  console.log(`Generated ${path.relative(packageRoot, filePath)} (${cases.length} stories)`);
}
