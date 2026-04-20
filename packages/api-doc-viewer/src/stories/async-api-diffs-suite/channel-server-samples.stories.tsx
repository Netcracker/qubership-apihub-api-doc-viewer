import {
  AsyncApiOperationDiffsViewer,
  type AsyncApiOperationDiffsViewerProps
} from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer";
import type { Meta, StoryObj } from "@storybook/react";
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
});

export const Case_1_1_channel_servers_host_protocol_changed: Story = createCaseStory("1.1-channel-servers-host-protocol-changed");
export const Case_1_2_channel_servers_description_set: Story = createCaseStory("1.2-channel-servers-description-set");
export const Case_1_3_channel_servers_summary_set: Story = createCaseStory("1.3-channel-servers-summary-set");
export const Case_2_1_channel_servers0_bindings_add_amqp: Story = createCaseStory("2.1-channel-servers0-bindings-add-amqp");
export const Case_2_2_channel_servers0_bindings_remove_kafka: Story = createCaseStory("2.2-channel-servers0-bindings-remove-kafka");
export const Case_2_3_channel_servers0_bindings_add_kafka: Story = createCaseStory("2.3-channel-servers0-bindings-add-kafka");
export const Case_2_4_channel_servers0_bindings_remove_kafka: Story = createCaseStory("2.4-channel-servers0-bindings-remove-kafka");
export const Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed: Story = createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed");
export const Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed: Story = createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed");
export const Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added: Story = createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added");
export const Case_4_1_1_channel_servers0_bindings_kafka_string_to_number: Story = createCaseStory("4.1.1-channel-servers0-bindings-kafka-string-to-number");
export const Case_4_1_2_channel_servers0_bindings_kafka_number_to_string: Story = createCaseStory("4.1.2-channel-servers0-bindings-kafka-number-to-string");
export const Case_4_1_3_channel_servers0_bindings_kafka_string_to_boolean: Story = createCaseStory("4.1.3-channel-servers0-bindings-kafka-string-to-boolean");
export const Case_4_1_4_channel_servers0_bindings_kafka_number_to_null: Story = createCaseStory("4.1.4-channel-servers0-bindings-kafka-number-to-null");
export const Case_4_1_5_channel_servers0_bindings_kafka_boolean_to_string: Story = createCaseStory("4.1.5-channel-servers0-bindings-kafka-boolean-to-string");
export const Case_4_1_6_channel_servers0_bindings_kafka_null_to_number: Story = createCaseStory("4.1.6-channel-servers0-bindings-kafka-null-to-number");
export const Case_4_1_7_channel_servers0_bindings_kafka_string_to_array_primitives: Story = createCaseStory("4.1.7-channel-servers0-bindings-kafka-string-to-array-primitives");
export const Case_4_1_8_channel_servers0_bindings_kafka_number_to_array_primitives: Story = createCaseStory("4.1.8-channel-servers0-bindings-kafka-number-to-array-primitives");
export const Case_4_1_9_channel_servers0_bindings_kafka_string_to_array_objects: Story = createCaseStory("4.1.9-channel-servers0-bindings-kafka-string-to-array-objects");
export const Case_4_1_10_channel_servers0_bindings_kafka_number_to_array_objects: Story = createCaseStory("4.1.10-channel-servers0-bindings-kafka-number-to-array-objects");
export const Case_4_1_11_channel_servers0_bindings_kafka_string_to_array_arrays_primitives: Story = createCaseStory("4.1.11-channel-servers0-bindings-kafka-string-to-array-arrays-primitives");
export const Case_4_1_12_channel_servers0_bindings_kafka_number_to_array_arrays_primitives: Story = createCaseStory("4.1.12-channel-servers0-bindings-kafka-number-to-array-arrays-primitives");
export const Case_4_1_13_channel_servers0_bindings_kafka_boolean_to_null: Story = createCaseStory("4.1.13-channel-servers0-bindings-kafka-boolean-to-null");
export const Case_4_1_14_channel_servers0_bindings_kafka_boolean_to_array_primitives: Story = createCaseStory("4.1.14-channel-servers0-bindings-kafka-boolean-to-array-primitives");
export const Case_4_1_15_channel_servers0_bindings_kafka_null_to_array_primitives: Story = createCaseStory("4.1.15-channel-servers0-bindings-kafka-null-to-array-primitives");
export const Case_4_1_16_channel_servers0_bindings_kafka_boolean_to_object: Story = createCaseStory("4.1.16-channel-servers0-bindings-kafka-boolean-to-object");
export const Case_4_1_17_channel_servers0_bindings_kafka_null_to_object: Story = createCaseStory("4.1.17-channel-servers0-bindings-kafka-null-to-object");
export const Case_4_1_18_channel_servers0_bindings_kafka_array_primitives_to_object: Story = createCaseStory("4.1.18-channel-servers0-bindings-kafka-array-primitives-to-object");
export const Case_4_1_19_channel_servers0_bindings_kafka_array_objects_to_object: Story = createCaseStory("4.1.19-channel-servers0-bindings-kafka-array-objects-to-object");
export const Case_4_1_20_channel_servers0_bindings_kafka_array_arrays_primitives_to_object: Story = createCaseStory("4.1.20-channel-servers0-bindings-kafka-array-arrays-primitives-to-object");
export const Case_4_1_21_channel_servers0_bindings_kafka_remove_object_property: Story = createCaseStory("4.1.21-channel-servers0-bindings-kafka-remove-object-property");
export const Case_4_1_22_channel_servers0_bindings_kafka_add_object_property: Story = createCaseStory("4.1.22-channel-servers0-bindings-kafka-add-object-property");
export const Case_5_1_channel_servers_one_item_removed: Story = createCaseStory("5.1-channel-servers-one-item-removed");
export const Case_5_2_channel_servers_one_item_added: Story = createCaseStory("5.2-channel-servers-one-item-added");
