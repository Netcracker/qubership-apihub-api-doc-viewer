import type { Meta, StoryObj } from "@storybook/react";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import {
  JsonSchemaDiffSamplesStory,
  createJsonSchemaDiffCaseStoryFactory,
  createJsonSchemaDiffSampleById,
  jsonSchemaDiffSampleReadonlyArgTypes,
} from "../json-schema-diffs-suite/json-schema-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = createJsonSchemaDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Object Two Properties",
  component: JsonSchemaDiffSamplesStory,
  argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
} satisfies Meta<typeof JsonSchemaDiffSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = createJsonSchemaDiffCaseStoryFactory(
  JsonSchemaDiffSamplesStory,
  sampleById,
);

export const Case_01_second_property_added: Story = createCaseStory("01-second-property-added");
export const Case_02_second_property_removed: Story = createCaseStory("02-second-property-removed");
