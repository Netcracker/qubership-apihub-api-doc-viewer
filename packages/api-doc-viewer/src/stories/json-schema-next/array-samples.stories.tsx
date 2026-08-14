import type { Meta } from "@storybook/react";
import {
  collectJsonSchemaSampleCases,
  createJsonSchemaSampleById,
} from "../utils/json-schema-samples-cases";
import {
  JsonSchemaNextSampleStory,
  createNextCaseStoryFactory,
  jsonSchemaNextSamplesStoryMetaBase,
  type JsonSchemaNextSamplesStoryObj,
} from "./json-schema-next-samples-common";

const sampleFiles = import.meta.glob(
  "../../../../samples/json-schema/array/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectJsonSchemaSampleCases(sampleFiles);
const sampleById = createJsonSchemaSampleById(sampleCases);
const createCaseStory = createNextCaseStoryFactory(sampleById);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaNextSamplesStoryMetaBase,
  id: "json-schema-next-array",
  title: "JSON Schema Next/Array",
} satisfies Meta<typeof JsonSchemaNextSampleStory>;

export default meta;

type Story = JsonSchemaNextSamplesStoryObj;

export const Case_001_type_only: Story = createCaseStory("001-type-only");
export const Case_002_header: Story = createCaseStory("002-header");
export const Case_003_description: Story = createCaseStory("003-description");
export const Case_004_header_description: Story = createCaseStory("004-header-description");
export const Case_005_items: Story = createCaseStory("005-items");
export const Case_006_header_items: Story = createCaseStory("006-header-items");
export const Case_007_description_items: Story = createCaseStory("007-description-items");
export const Case_008_header_description_items: Story = createCaseStory("008-header-description-items");
export const Case_009_additional_items: Story = createCaseStory("009-additional-items");
export const Case_010_header_additional_items: Story = createCaseStory("010-header-additional-items");
export const Case_011_description_additional_items: Story = createCaseStory("011-description-additional-items");
export const Case_012_header_description_additional_items: Story = createCaseStory("012-header-description-additional-items");
export const Case_013_items_additional_items: Story = createCaseStory("013-items-additional-items");
export const Case_014_header_items_additional_items: Story = createCaseStory("014-header-items-additional-items");
export const Case_015_description_items_additional_items: Story = createCaseStory("015-description-items-additional-items");
export const Case_016_header_description_items_additional_items: Story = createCaseStory("016-header-description-items-additional-items");
export const Case_017_additional_info: Story = createCaseStory("017-additional-info");
export const Case_018_header_additional_info: Story = createCaseStory("018-header-additional-info");
export const Case_019_description_additional_info: Story = createCaseStory("019-description-additional-info");
export const Case_020_header_description_additional_info: Story = createCaseStory("020-header-description-additional-info");
export const Case_021_items_additional_info: Story = createCaseStory("021-items-additional-info");
export const Case_022_header_items_additional_info: Story = createCaseStory("022-header-items-additional-info");
export const Case_023_description_items_additional_info: Story = createCaseStory("023-description-items-additional-info");
export const Case_024_header_description_items_additional_info: Story = createCaseStory("024-header-description-items-additional-info");
export const Case_025_additional_items_additional_info: Story = createCaseStory("025-additional-items-additional-info");
export const Case_026_header_additional_items_additional_info: Story = createCaseStory("026-header-additional-items-additional-info");
export const Case_027_description_additional_items_additional_info: Story = createCaseStory("027-description-additional-items-additional-info");
export const Case_028_header_description_additional_items_additional_info: Story = createCaseStory("028-header-description-additional-items-additional-info");
export const Case_029_items_additional_items_additional_info: Story = createCaseStory("029-items-additional-items-additional-info");
export const Case_030_header_items_additional_items_additional_info: Story = createCaseStory("030-header-items-additional-items-additional-info");
export const Case_031_description_items_additional_items_additional_info: Story = createCaseStory("031-description-items-additional-items-additional-info");
export const Case_032_header_description_items_additional_items_additional_info: Story = createCaseStory("032-header-description-items-additional-items-additional-info");
