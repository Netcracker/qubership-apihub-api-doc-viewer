import {
  AsyncApiOperationDiffsViewer,
  type AsyncApiOperationDiffsViewerProps
} from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { TEST_REFERENCE_NAME_PROPERTY } from "../async-api-suite/shared-test-data";
import { prepareAsyncApiDiffsDocument } from "../preprocess";
import { collectSampleCases } from "./sample-cases";
import { TEST_DIFF_META_KEYS } from "./shared-test-data";
import { parseYamlSource } from "./yaml-source";

const beforeFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/channel-server/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/channel-server/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

const AsyncApiServerSamplesStory = ({ caseId }: { caseId: string }) => {
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
  title: "Async API Diffs Suite/Server Samples",
  component: AsyncApiServerSamplesStory,
} satisfies Meta<typeof AsyncApiServerSamplesStory>;

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
  render: (args) => <AsyncApiServerSamplesStory caseId={args.caseId} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByTestId("message-channel");
    await userEvent.click(buttons[0]);
  },
});

export const Case_1_1_channel_servers_host_protocol_changed: Story = createCaseStory("1.1-channel-servers-host-protocol-changed");
export const Case_1_2_channel_servers_description_set: Story = createCaseStory("1.2-channel-servers-description-set");
export const Case_1_3_channel_servers_summary_set: Story = createCaseStory("1.3-channel-servers-summary-set");
export const Case_2_1_channel_servers0_bindings_add_amqp: Story = createCaseStory("2.1-channel-servers0-bindings-add-amqp");
export const Case_2_2_channel_servers0_bindings_remove_kafka: Story = createCaseStory("2.2-channel-servers0-bindings-remove-kafka");
export const Case_2_3_channel_servers_all_added: Story = createCaseStory("2.3-channel-servers-all-added");
export const Case_2_4_channel_servers_all_removed: Story = createCaseStory("2.4-channel-servers-all-removed");
export const Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed: Story = createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed");
export const Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed: Story = createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed");
export const Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added: Story = createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added");
export const Case_4_1_channel_server_bindings_kafka_internal_jso_changes: Story = createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes");
export const Case_5_1_channel_servers_one_item_removed: Story = createCaseStory("5.1-channel-servers-one-item-removed");
export const Case_5_2_channel_servers_one_item_added: Story = createCaseStory("5.2-channel-servers-one-item-added");
