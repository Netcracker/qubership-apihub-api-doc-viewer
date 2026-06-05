import {
  AsyncApiOperationDiffsViewer,
  type AsyncApiOperationDiffsViewerProps
} from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { TEST_REFERENCE_NAME_PROPERTY } from "../async-api-suite/shared-test-data";
import { prepareAsyncApiDiffsDocument } from "../preprocess";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { parseYamlSource } from "../utils/parse-yaml-source";
import { TEST_DIFF_META_KEYS } from "./shared-test-data";

const beforeFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/channel/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/channel/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

const AsyncApiChannelSamplesStory = ({ caseId }: { caseId: string }) => {
  const selected = sampleById[caseId];

  if (!selected) {
    return <div>Sample case not found: {caseId}</div>;
  }

  return (
    <AsyncApiOperationDiffsViewer
      {...createViewerArgs(selected.beforeYaml, selected.afterYaml)}
    />
  );
};

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "Async API Diffs Suite/Channel Samples",
  component: AsyncApiChannelSamplesStory,
} satisfies Meta<typeof AsyncApiChannelSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const OPERATION_KEY = "sendOperation";
const MESSAGE_KEY = "TestMessage";

const createSource = (sourceText: string): Record<string, unknown> => parseYamlSource(sourceText);

const createViewerArgs = (beforeSourceText: string, afterSourceText: string): AsyncApiOperationDiffsViewerProps => ({
  devMode: true,
  mergedSource: prepareAsyncApiDiffsDocument({
    beforeSource: createSource(beforeSourceText),
    afterSource: createSource(afterSourceText),
  }),
  operationKeys: {
    operationKey: OPERATION_KEY,
    messageKey: MESSAGE_KEY,
  },
  referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
  diffMetaKeys: TEST_DIFF_META_KEYS,
});

const createCaseStory = (caseId: string): Story => ({
  name: caseId,
  args: {
    caseId,
  },
  render: (args) => <AsyncApiChannelSamplesStory caseId={args.caseId} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByTestId("message-channel");
    await userEvent.click(buttons[0]);
  },
});

export const Case_1_1_channel_title_changed: Story = createCaseStory("1.1-channel-title-changed");
export const Case_1_2_channel_title_removed: Story = createCaseStory("1.2-channel-title-removed");
export const Case_1_3_channel_title_added: Story = createCaseStory("1.3-channel-title-added");
export const Case_2_1_channel_description_changed: Story = createCaseStory("2.1-channel-description-changed");
export const Case_2_2_channel_description_removed: Story = createCaseStory("2.2-channel-description-removed");
export const Case_2_3_channel_description_added: Story = createCaseStory("2.3-channel-description-added");
export const Case_2_4_channel_summary_changed: Story = createCaseStory("2.4-channel-summary-changed");
export const Case_2_5_channel_summary_removed: Story = createCaseStory("2.5-channel-summary-removed");
export const Case_2_6_channel_description_moved_to_summary: Story = createCaseStory("2.6-channel-description-moved-to-summary");
export const Case_2_7_channel_summary_moved_to_description: Story = createCaseStory("2.7-channel-summary-moved-to-description");
export const Case_3_1_channel_bindings_add_one_more_binding: Story = createCaseStory("3.1-channel-bindings-add-one-more-binding");
export const Case_3_2_channel_bindings_remove_one_of_several_bindings: Story = createCaseStory("3.2-channel-bindings-remove-one-of-several-bindings");
export const Case_3_3_channel_bindings_add_bindings: Story = createCaseStory("3.3-channel-bindings-add-bindings");
export const Case_3_4_channel_bindings_remove_bindings: Story = createCaseStory("3.4-channel-bindings-remove-bindings");
export const Case_4_1_channel_bindings_kafka_bindingVersion_changed: Story = createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed");
export const Case_4_2_channel_bindings_kafka_bindingVersion_removed: Story = createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed");
export const Case_4_3_channel_bindings_kafka_bindingVersion_added: Story = createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added");
export const Case_5_1_channel_bindings_kafka_internal_jso_changes: Story = createCaseStory("5.1-channel-bindings-kafka-internal-jso-changes");
export const Case_6_1_channel_x_second_added: Story = createCaseStory("6.1-channel-x-second-added");
export const Case_6_2_channel_x_second_removed: Story = createCaseStory("6.2-channel-x-second-removed");
export const Case_6_3_channel_x_second_changed: Story = createCaseStory("6.3-channel-x-second-changed");
export const Case_6_4_channel_x_first_and_x_second_added: Story = createCaseStory("6.4-channel-x-first-and-x-second-added");
export const Case_6_5_channel_x_first_and_x_second_removed: Story = createCaseStory("6.5-channel-x-first-and-x-second-removed");

