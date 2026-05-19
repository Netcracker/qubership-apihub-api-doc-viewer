import type { Meta } from "@storybook/react";
import {
  JsoPropertySamplesStory,
  createCaseStory,
  type JsoPropertySamplesStoryObj,
} from "./property-samples-common";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSO Diffs Suite/stringJsonSchema",
  component: JsoPropertySamplesStory,
} satisfies Meta<typeof JsoPropertySamplesStory>;

export default meta;

type Story = JsoPropertySamplesStoryObj;

export const Case_13_1_stringJsonSchema_add_primitive_json_schema: Story = createCaseStory("13.1-stringJsonSchema-add-primitive-json-schema");
export const Case_13_3_stringJsonSchema_remove_primitive_json_schema: Story = createCaseStory("13.3-stringJsonSchema-remove-primitive-json-schema");
