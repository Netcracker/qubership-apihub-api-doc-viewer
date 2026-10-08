import type { Meta, StoryObj } from "@storybook/react-vite";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { createSampleById } from "../utils/sample-cases";
import { OpenApiDiffSampleStory } from "./OpenApiDiffSampleStory";

const beforeFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/responses/*/before.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/responses/*/after.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const sampleById = createSampleById(collectSampleCases(beforeFiles, afterFiles));

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Diffs Suite/Responses Samples",
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

export const Case_01_response_added: Story = createCaseStory("01-response-added");
export const Case_02_response_code_case_renamed: Story = createCaseStory("02-response-code-case-renamed");
export const Case_03_response_description_changed: Story = createCaseStory("03-response-description-changed");
export const Case_04_response_header_added: Story = createCaseStory("04-response-header-added");
export const Case_05_response_media_type_removed: Story = createCaseStory("05-response-media-type-removed");
export const Case_06_response_schema_property_added: Story = createCaseStory("06-response-schema-property-added");
export const Case_07_response_body_only_media_type_removed: Story = createCaseStory("07-response-body-only-media-type-removed");
export const Case_08_response_body_only_schema_removed: Story = createCaseStory("08-response-body-only-schema-removed");
export const Case_09_response_all_headers_removed: Story = createCaseStory("09-response-all-headers-removed");
export const Case_10_response_added_with_headers_and_body: Story = createCaseStory("10-response-added-with-headers-and-body");
export const Case_11_response_code_renamed_and_description_changed: Story = createCaseStory("11-response-code-renamed-and-description-changed");
export const Case_12_response_changes_of_different_severity: Story = createCaseStory("12-response-changes-of-different-severity");
export const Case_13_responses_and_response_extensions_changed: Story = createCaseStory("13-responses-and-response-extensions-changed");
