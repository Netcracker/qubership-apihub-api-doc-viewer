import type { Meta, StoryObj } from "@storybook/react-vite";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { createSampleById } from "../utils/sample-cases";
import { OpenApiDiffSampleStory } from "./OpenApiDiffSampleStory";

const beforeFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/operation/*/before.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/operation/*/after.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const sampleById = createSampleById(collectSampleCases(beforeFiles, afterFiles));

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Diffs Suite/Operation Samples",
  component: OpenApiDiffSampleStory,
} satisfies Meta<typeof OpenApiDiffSampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = (caseId: string): Story => {
  const sample = sampleById[caseId];
  if (!sample) {
    throw new Error(`Sample case not found: ${caseId}`);
  }
  return { name: caseId, args: { caseId, beforeYaml: sample.beforeYaml, afterYaml: sample.afterYaml } };
};

export const Case_01_summary_changed: Story = createCaseStory("01-summary-changed");
export const Case_02_description_added: Story = createCaseStory("02-description-added");
export const Case_03_external_docs_added: Story = createCaseStory("03-external-docs-added");
export const Case_04_external_docs_url_changed: Story = createCaseStory("04-external-docs-url-changed");
export const Case_05_path_parameter_renamed: Story = createCaseStory("05-path-parameter-renamed");
export const Case_06_whole_operation_added: Story = createCaseStory("06-whole-operation-added");
export const Case_07_extensions_changed: Story = createCaseStory("07-extensions-changed");
export const Case_08_operation_id_changed: Story = createCaseStory("08-operation-id-changed");
export const Case_09_deprecated_added: Story = createCaseStory("09-deprecated-added");
export const Case_10_deprecated_added_without_summary: Story = createCaseStory("10-deprecated-added-without-summary");
