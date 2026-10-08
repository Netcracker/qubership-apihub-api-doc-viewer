import type { Meta, StoryObj } from "@storybook/react-vite";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { createSampleById } from "../utils/sample-cases";
import { OpenApiDiffSampleStory } from "./OpenApiDiffSampleStory";

const beforeFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/request/*/before.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/request/*/after.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const sampleById = createSampleById(collectSampleCases(beforeFiles, afterFiles));

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Diffs Suite/Request Samples",
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

export const Case_01_query_parameter_added: Story = createCaseStory("01-query-parameter-added");
export const Case_02_all_headers_removed: Story = createCaseStory("02-all-headers-removed");
export const Case_03_mixed_header_changes: Story = createCaseStory("03-mixed-header-changes");
export const Case_04_parameter_required_changed: Story = createCaseStory("04-parameter-required-changed");
export const Case_05_parameter_moved_query_to_header: Story = createCaseStory("05-parameter-moved-query-to-header");
export const Case_06_body_media_type_added: Story = createCaseStory("06-body-media-type-added");
export const Case_07_body_media_type_renamed: Story = createCaseStory("07-body-media-type-renamed");
export const Case_08_body_description_and_schema_changed: Story = createCaseStory("08-body-description-and-schema-changed");
export const Case_09_request_body_added: Story = createCaseStory("09-request-body-added");
export const Case_10_request_body_became_optional: Story = createCaseStory("10-request-body-became-optional");
export const Case_11_description_moved_entry_to_schema: Story = createCaseStory("11-description-moved-entry-to-schema");
export const Case_12_description_entry_removed_schema_added: Story = createCaseStory("12-description-entry-removed-schema-added");
export const Case_13_description_schema_removed_entry_added: Story = createCaseStory("13-description-schema-removed-entry-added");
export const Case_14_description_both_places_changed: Story = createCaseStory("14-description-both-places-changed");
export const Case_15_description_schema_changed_under_entry: Story = createCaseStory("15-description-schema-changed-under-entry");
export const Case_16_parameter_schema_to_content: Story = createCaseStory("16-parameter-schema-to-content");
export const Case_17_parameter_content_media_type_renamed: Story = createCaseStory("17-parameter-content-media-type-renamed");
export const Case_18_parameter_content_media_type_replaced: Story = createCaseStory("18-parameter-content-media-type-replaced");
export const Case_19_body_only_media_type_removed: Story = createCaseStory("19-body-only-media-type-removed");
export const Case_20_body_only_schema_removed: Story = createCaseStory("20-body-only-schema-removed");
export const Case_21_body_only_schema_added: Story = createCaseStory("21-body-only-schema-added");
export const Case_22_body_media_type_removed_description_kept: Story = createCaseStory("22-body-media-type-removed-description-kept");
export const Case_23_body_removed: Story = createCaseStory("23-body-removed");
export const Case_24_parameter_extension_added_and_changed: Story = createCaseStory("24-parameter-extension-added-and-changed");
export const Case_25_parameter_extension_moved_to_schema: Story = createCaseStory("25-parameter-extension-moved-to-schema");
export const Case_26_parameter_extension_nested_change: Story = createCaseStory("26-parameter-extension-nested-change");
export const Case_27_body_and_media_type_extensions_changed: Story = createCaseStory("27-body-and-media-type-extensions-changed");
export const Case_28_media_type_extension_shadows_schema_root: Story = createCaseStory("28-media-type-extension-shadows-schema-root");
