import type { Meta, StoryObj } from "@storybook/react";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import {
  JsonSchemaDiffSamplesStory,
  createJsonSchemaDiffCaseStoryFactory,
  createJsonSchemaDiffSampleById,
  jsonSchemaDiffSampleReadonlyArgTypes,
} from "./json-schema-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = createJsonSchemaDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSON Schema Diffs Suite/Hiding Unchanged Rows Complex Object Samples",
  component: JsonSchemaDiffSamplesStory,
  argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
} satisfies Meta<typeof JsonSchemaDiffSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = createJsonSchemaDiffCaseStoryFactory(
  JsonSchemaDiffSamplesStory,
  sampleById,
);

export const Case_2_1_root_description_changed: Story = createCaseStory("2.1-root-description-changed");
export const Case_2_2_primitive_props_added: Story = createCaseStory("2.2-primitive-props-added");
export const Case_2_3_nested_object_props_added: Story = createCaseStory("2.3-nested-object-props-added");
export const Case_2_4_primitive_added_nested_removed: Story = createCaseStory(
  "2.4-primitive-added-nested-removed",
);
export const Case_2_5_nested_prop_added_and_removed: Story = createCaseStory(
  "2.5-nested-prop-added-and-removed",
);
export const Case_2_6_nested_prop_added_object_removed: Story = createCaseStory(
  "2.6-nested-prop-added-object-removed",
);
export const Case_2_7_object_added_nested_prop_removed: Story = createCaseStory(
  "2.7-object-added-nested-prop-removed",
);
