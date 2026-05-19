import type { Meta } from "@storybook/react";
import {
  JsoPropertySamplesStory,
  createCaseStory,
  type JsoPropertySamplesStoryObj,
} from "./property-samples-common";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSO Diffs Suite/objectJsonSchema",
  component: JsoPropertySamplesStory,
} satisfies Meta<typeof JsoPropertySamplesStory>;

export default meta;

type Story = JsoPropertySamplesStoryObj;

export const Case_13_2_objectJsonSchema_add_complex_json_schema: Story = createCaseStory("13.2-objectJsonSchema-add-complex-json-schema");
export const Case_13_4_objectJsonSchema_remove_complex_json_schema: Story = createCaseStory("13.4-objectJsonSchema-remove-complex-json-schema");
