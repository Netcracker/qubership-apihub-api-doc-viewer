import type { Meta } from "@storybook/react";
import {
  JsoPropertySamplesStory,
  createCaseStory,
  type JsoPropertySamplesStoryObj,
} from "./property-samples-common";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSO Diffs Suite/nodeChangesSummary",
  component: JsoPropertySamplesStory,
} satisfies Meta<typeof JsoPropertySamplesStory>;

export default meta;

type Story = JsoPropertySamplesStoryObj;

export const Case_16_1_nodeChangesSummary_on_object: Story = createCaseStory("16.1-nodeChangesSummary-on-object");
