import {
  AsyncApiOperationDiffsViewer,
  type AsyncApiOperationDiffsViewerProps,
} from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer";
import type { Meta, StoryObj } from "@storybook/react";
import { prepareAsyncApiDiffsDocument } from "../preprocess";
import { collectSampleCases } from "./sample-cases";
import { TEST_DIFF_META_KEYS, TEST_REFERENCE_NAME_PROPERTY } from "./shared-test-data";
import { parseYamlSource } from "./yaml-source";

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
export const Case_3_1_channel_bindings_add_amqp: Story = createCaseStory("3.1-channel-bindings-add-amqp");
export const Case_3_2_channel_bindings_remove_kafka: Story = createCaseStory("3.2-channel-bindings-remove-kafka");
export const Case_3_3_channel_bindings_add_kafka: Story = createCaseStory("3.3-channel-bindings-add-kafka");
export const Case_3_4_channel_bindings_remove_kafka: Story = createCaseStory("3.4-channel-bindings-remove-kafka");
export const Case_4_1_channel_bindings_kafka_bindingVersion_changed: Story = createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed");
export const Case_4_2_channel_bindings_kafka_bindingVersion_removed: Story = createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed");
export const Case_4_3_channel_bindings_kafka_bindingVersion_added: Story = createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added");
export const Case_5_1_1_channel_bindings_kafka_string_to_number: Story = createCaseStory("5.1.1-channel-bindings-kafka-string-to-number");
export const Case_5_1_2_channel_bindings_kafka_number_to_string: Story = createCaseStory("5.1.2-channel-bindings-kafka-number-to-string");
export const Case_5_1_3_channel_bindings_kafka_string_to_boolean: Story = createCaseStory("5.1.3-channel-bindings-kafka-string-to-boolean");
export const Case_5_1_4_channel_bindings_kafka_number_to_null: Story = createCaseStory("5.1.4-channel-bindings-kafka-number-to-null");
export const Case_5_1_5_channel_bindings_kafka_boolean_to_string: Story = createCaseStory("5.1.5-channel-bindings-kafka-boolean-to-string");
export const Case_5_1_6_channel_bindings_kafka_null_to_number: Story = createCaseStory("5.1.6-channel-bindings-kafka-null-to-number");
export const Case_5_1_7_channel_bindings_kafka_string_to_array_primitives: Story = createCaseStory("5.1.7-channel-bindings-kafka-string-to-array-primitives");
export const Case_5_1_8_channel_bindings_kafka_number_to_array_primitives: Story = createCaseStory("5.1.8-channel-bindings-kafka-number-to-array-primitives");
export const Case_5_1_9_channel_bindings_kafka_string_to_array_objects: Story = createCaseStory("5.1.9-channel-bindings-kafka-string-to-array-objects");
export const Case_5_1_10_channel_bindings_kafka_number_to_array_objects: Story = createCaseStory("5.1.10-channel-bindings-kafka-number-to-array-objects");
export const Case_5_1_11_channel_bindings_kafka_string_to_array_arrays_primitives: Story = createCaseStory("5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives");
export const Case_5_1_12_channel_bindings_kafka_number_to_array_arrays_primitives: Story = createCaseStory("5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives");
export const Case_5_1_13_channel_bindings_kafka_boolean_to_null: Story = createCaseStory("5.1.13-channel-bindings-kafka-boolean-to-null");
export const Case_5_1_14_channel_bindings_kafka_boolean_to_array_primitives: Story = createCaseStory("5.1.14-channel-bindings-kafka-boolean-to-array-primitives");
export const Case_5_1_15_channel_bindings_kafka_null_to_array_primitives: Story = createCaseStory("5.1.15-channel-bindings-kafka-null-to-array-primitives");
export const Case_5_1_16_channel_bindings_kafka_boolean_to_object: Story = createCaseStory("5.1.16-channel-bindings-kafka-boolean-to-object");
export const Case_5_1_17_channel_bindings_kafka_null_to_object: Story = createCaseStory("5.1.17-channel-bindings-kafka-null-to-object");
export const Case_5_1_18_channel_bindings_kafka_array_primitives_to_object: Story = createCaseStory("5.1.18-channel-bindings-kafka-array-primitives-to-object");
export const Case_5_1_19_channel_bindings_kafka_array_objects_to_object: Story = createCaseStory("5.1.19-channel-bindings-kafka-array-objects-to-object");
export const Case_5_1_20_channel_bindings_kafka_array_arrays_primitives_to_object: Story = createCaseStory("5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object");
export const Case_5_1_21_channel_bindings_kafka_remove_object_property: Story = createCaseStory("5.1.21-channel-bindings-kafka-remove-object-property");
export const Case_5_1_22_channel_bindings_kafka_add_object_property: Story = createCaseStory("5.1.22-channel-bindings-kafka-add-object-property");
export const Case_6_1_channel_x_second_added: Story = createCaseStory("6.1-channel-x-second-added");
export const Case_6_2_channel_x_second_removed: Story = createCaseStory("6.2-channel-x-second-removed");
export const Case_6_3_channel_x_second_changed: Story = createCaseStory("6.3-channel-x-second-changed");
export const Case_6_4_channel_x_first_and_x_second_added: Story = createCaseStory("6.4-channel-x-first-and-x-second-added");
export const Case_6_5_channel_x_first_and_x_second_removed: Story = createCaseStory("6.5-channel-x-first-and-x-second-removed");
export const Case_7_1_channel_parameters_added: Story = createCaseStory("7.1-channel-parameters-added");
export const Case_7_2_channel_parameters_removed: Story = createCaseStory("7.2-channel-parameters-removed");
export const Case_7_3_channel_parameters_firstParam_removed: Story = createCaseStory("7.3-channel-parameters-firstParam-removed");
export const Case_7_4_channel_parameters_secondParam_added: Story = createCaseStory("7.4-channel-parameters-secondParam-added");
export const Case_7_5_channel_parameters_key_rename: Story = createCaseStory("7.5-channel-parameters-key-rename");
export const Case_7_6_channel_parameters_secondParam_object_to_broken_ref: Story = createCaseStory("7.6-channel-parameters-secondParam-object-to-broken-ref");
export const Case_7_7_channel_parameters_secondParam_broken_ref_to_object: Story = createCaseStory("7.7-channel-parameters-secondParam-broken-ref-to-object");
export const Case_7_8_channel_servers_added: Story = createCaseStory("7.8-channel-servers-added");
export const Case_7_9_channel_servers_removed: Story = createCaseStory("7.9-channel-servers-removed");
export const Case_7_10_channel_servers_one_item_added: Story = createCaseStory("7.10-channel-servers-one-item-added");
export const Case_7_11_channel_servers_one_item_removed: Story = createCaseStory("7.11-channel-servers-one-item-removed");
export const Case_7_12_channel_servers_ref_changed_to_broken_ref: Story = createCaseStory("7.12-channel-servers-ref-changed-to-broken-ref");
export const Case_7_13_channel_servers_broken_ref_changed_to_existing_ref: Story = createCaseStory("7.13-channel-servers-broken-ref-changed-to-existing-ref");
