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
  "../../../../samples/json-schema/performance-tests/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectJsonSchemaSampleCases(sampleFiles);
const sampleById = createJsonSchemaSampleById(sampleCases);
const createCaseStory = createNextCaseStoryFactory(sampleById);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaNextSamplesStoryMetaBase,
  id: "json-schema-next-performance-tests",
  title: "JSON Schema Next/Performance Tests",
} satisfies Meta<typeof JsonSchemaNextSampleStory>;

export default meta;

type Story = JsonSchemaNextSamplesStoryObj;

export const Case_001_loket_concept_employees_list_response: Story = createCaseStory(
  "001-loket-concept-employees-list-response",
);
