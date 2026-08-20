import type { Meta, StoryObj } from "@storybook/react";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import {
  JsonSchemaDiffSamplesStory,
  createJsonSchemaDiffCaseStoryFactory,
  createJsonSchemaDiffSampleById,
  jsonSchemaDiffSampleReadonlyArgTypes,
} from "./json-schema-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = createJsonSchemaDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSON Schema Diffs Suite/Hiding Unchanged Rows Combiners Samples",
  component: JsonSchemaDiffSamplesStory,
  argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
} satisfies Meta<typeof JsonSchemaDiffSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = createJsonSchemaDiffCaseStoryFactory(
  JsonSchemaDiffSamplesStory,
  sampleById,
);

export const Case_3_1_oneof_variant_added: Story = createCaseStory("3.1-oneof-variant-added");
export const Case_4_1_oneof_variant_content_changed: Story = createCaseStory(
  "4.1-oneof-variant-content-changed",
);
export const Case_5_1_oneof_three_variants_unchanged: Story = createCaseStory(
  "5.1-oneof-three-variants-unchanged",
);
export const Case_5_2_root_description_changed_oneof_unchanged: Story = createCaseStory(
  "5.2-root-description-changed-oneof-unchanged",
);
