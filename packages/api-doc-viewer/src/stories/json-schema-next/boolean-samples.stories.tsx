import type { Meta, StoryObj } from "@storybook/react";
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
  "../../../../samples/json-schema/boolean/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectJsonSchemaSampleCases(sampleFiles);
const sampleById = createJsonSchemaSampleById(sampleCases);
const createCaseStory = createNextCaseStoryFactory(sampleById);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaNextSamplesStoryMetaBase,
  id: "json-schema-next-boolean",
  title: "JSON Schema Next/Boolean",
} satisfies Meta<typeof JsonSchemaNextSampleStory>;

export default meta;

type Story = JsonSchemaNextSamplesStoryObj;

export const Case_001_type_only: Story = createCaseStory("001-type-only");
export const Case_002_header: Story = createCaseStory("002-header");
export const Case_003_description: Story = createCaseStory("003-description");
export const Case_004_header_description: Story = createCaseStory("004-header-description");
export const Case_005_additional_info: Story = createCaseStory("005-additional-info");
export const Case_006_header_additional_info: Story = createCaseStory("006-header-additional-info");
export const Case_007_description_additional_info: Story = createCaseStory("007-description-additional-info");
export const Case_008_header_description_additional_info: Story = createCaseStory("008-header-description-additional-info");
