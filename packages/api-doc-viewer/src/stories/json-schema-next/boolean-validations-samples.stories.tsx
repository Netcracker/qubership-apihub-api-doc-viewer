/**
 * Regenerate YAML samples: node bin/generate-json-schema-validation-samples.mjs
 * Regenerate this file: node bin/generate-json-schema-validation-suite-stories.mjs
 */
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
  "../../../../samples/json-schema/boolean-validations/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectJsonSchemaSampleCases(sampleFiles);
const sampleById = createJsonSchemaSampleById(sampleCases);
const createCaseStory = createNextCaseStoryFactory(sampleById);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaNextSamplesStoryMetaBase,
  id: "json-schema-next-boolean-validations",
  title: "JSON Schema Next/Boolean  Validations",
} satisfies Meta<typeof JsonSchemaNextSampleStory>;

export default meta;

type Story = JsonSchemaNextSamplesStoryObj;

export const Case_001_default_false: Story = createCaseStory("001-default-false");
export const Case_002_default_true: Story = createCaseStory("002-default-true");
export const Case_003_example_false: Story = createCaseStory("003-example-false");
export const Case_004_example_true: Story = createCaseStory("004-example-true");
export const Case_005_examples_false: Story = createCaseStory("005-examples-false");
export const Case_006_examples_true: Story = createCaseStory("006-examples-true");
export const Case_007_examples_true_false: Story = createCaseStory("007-examples-true-false");
