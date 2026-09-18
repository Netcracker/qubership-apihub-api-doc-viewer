import type { Meta, StoryObj } from "@storybook/react";
import {
  collectJsonSchemaSampleCases,
  createJsonSchemaSampleById,
} from "../utils/json-schema-samples-cases";
import {
  JsonSchemaSampleStory,
  createCaseStoryFactory,
  jsonSchemaSamplesStoryMetaBase,
  type JsonSchemaSamplesStoryObj,
} from "./json-schema-samples-common";

const sampleFiles = import.meta.glob(
  "../../../../samples/json-schema/description/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectJsonSchemaSampleCases(sampleFiles);
const sampleById = createJsonSchemaSampleById(sampleCases);
const createCaseStory = createCaseStoryFactory(sampleById);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaSamplesStoryMetaBase,
  id: "json-schema-suite-description",
  title: "JSON Schema Suite/Description",
} satisfies Meta<typeof JsonSchemaSampleStory>;

export default meta;

type Story = JsonSchemaSamplesStoryObj;

export const Case_001_short_single_line: Story = createCaseStory("001-short-single-line");
export const Case_002_short_multi_line: Story = createCaseStory("002-short-multi-line");
export const Case_003_long_single_line: Story = createCaseStory("003-long-single-line");
export const Case_004_long_multi_line: Story = createCaseStory("004-long-multi-line");
