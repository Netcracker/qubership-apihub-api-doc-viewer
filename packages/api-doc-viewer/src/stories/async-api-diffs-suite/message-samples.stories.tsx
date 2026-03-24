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
  "../../../../samples/async-api-diffs/message/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/message/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

const AsyncApiMessageSamplesStory = ({ caseId }: { caseId: string }) => {
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
  title: "Async API Diffs Suite/Message Samples",
  component: AsyncApiMessageSamplesStory,
} satisfies Meta<typeof AsyncApiMessageSamplesStory>;

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
  render: (args) => <AsyncApiMessageSamplesStory caseId={args.caseId} />,
});

export const Case_1_1_message_title_changed: Story = createCaseStory("1.1-message-title-changed");
export const Case_1_2_message_title_removed: Story = createCaseStory("1.2-message-title-removed");
export const Case_1_3_message_title_added: Story = createCaseStory("1.3-message-title-added");
export const Case_2_1_message_description_changed: Story = createCaseStory("2.1-message-description-changed");
export const Case_2_2_message_description_removed: Story = createCaseStory("2.2-message-description-removed");
export const Case_2_3_message_description_added: Story = createCaseStory("2.3-message-description-added");
export const Case_2_4_message_summary_changed: Story = createCaseStory("2.4-message-summary-changed");
export const Case_2_5_message_summary_removed: Story = createCaseStory("2.5-message-summary-removed");
export const Case_2_6_message_description_moved_to_summary: Story = createCaseStory("2.6-message-description-moved-to-summary");
export const Case_2_7_message_summary_moved_to_description: Story = createCaseStory("2.7-message-summary-moved-to-description");
export const Case_3_1_message_bindings_add_amqp: Story = createCaseStory("3.1-message-bindings-add-amqp");
export const Case_3_2_message_bindings_remove_kafka: Story = createCaseStory("3.2-message-bindings-remove-kafka");
export const Case_3_3_message_bindings_add_kafka: Story = createCaseStory("3.3-message-bindings-add-kafka");
export const Case_3_4_message_bindings_remove_kafka: Story = createCaseStory("3.4-message-bindings-remove-kafka");
export const Case_4_1_message_bindings_kafka_bindingVersion_changed: Story = createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed");
export const Case_4_2_message_bindings_kafka_bindingVersion_removed: Story = createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed");
export const Case_4_3_message_bindings_kafka_bindingVersion_added: Story = createCaseStory("4.3-message-bindings-kafka-bindingVersion-added");
export const Case_5_1_1_message_bindings_kafka_string_to_number: Story = createCaseStory("5.1.1-message-bindings-kafka-string-to-number");
export const Case_5_1_2_message_bindings_kafka_number_to_string: Story = createCaseStory("5.1.2-message-bindings-kafka-number-to-string");
export const Case_5_1_3_message_bindings_kafka_string_to_boolean: Story = createCaseStory("5.1.3-message-bindings-kafka-string-to-boolean");
export const Case_5_1_4_message_bindings_kafka_number_to_null: Story = createCaseStory("5.1.4-message-bindings-kafka-number-to-null");
export const Case_5_1_5_message_bindings_kafka_boolean_to_string: Story = createCaseStory("5.1.5-message-bindings-kafka-boolean-to-string");
export const Case_5_1_6_message_bindings_kafka_null_to_number: Story = createCaseStory("5.1.6-message-bindings-kafka-null-to-number");
export const Case_5_1_7_message_bindings_kafka_string_to_array_primitives: Story = createCaseStory("5.1.7-message-bindings-kafka-string-to-array-primitives");
export const Case_5_1_8_message_bindings_kafka_number_to_array_primitives: Story = createCaseStory("5.1.8-message-bindings-kafka-number-to-array-primitives");
export const Case_5_1_9_message_bindings_kafka_string_to_array_objects: Story = createCaseStory("5.1.9-message-bindings-kafka-string-to-array-objects");
export const Case_5_1_10_message_bindings_kafka_number_to_array_objects: Story = createCaseStory("5.1.10-message-bindings-kafka-number-to-array-objects");
export const Case_5_1_11_message_bindings_kafka_string_to_array_arrays_primitives: Story = createCaseStory("5.1.11-message-bindings-kafka-string-to-array-arrays-primitives");
export const Case_5_1_12_message_bindings_kafka_number_to_array_arrays_primitives: Story = createCaseStory("5.1.12-message-bindings-kafka-number-to-array-arrays-primitives");
export const Case_5_1_13_message_bindings_kafka_boolean_to_null: Story = createCaseStory("5.1.13-message-bindings-kafka-boolean-to-null");
export const Case_5_1_14_message_bindings_kafka_boolean_to_array_primitives: Story = createCaseStory("5.1.14-message-bindings-kafka-boolean-to-array-primitives");
export const Case_5_1_15_message_bindings_kafka_null_to_array_primitives: Story = createCaseStory("5.1.15-message-bindings-kafka-null-to-array-primitives");
export const Case_5_1_16_message_bindings_kafka_boolean_to_object: Story = createCaseStory("5.1.16-message-bindings-kafka-boolean-to-object");
export const Case_5_1_17_message_bindings_kafka_null_to_object: Story = createCaseStory("5.1.17-message-bindings-kafka-null-to-object");
export const Case_5_1_18_message_bindings_kafka_array_primitives_to_object: Story = createCaseStory("5.1.18-message-bindings-kafka-array-primitives-to-object");
export const Case_5_1_19_message_bindings_kafka_array_objects_to_object: Story = createCaseStory("5.1.19-message-bindings-kafka-array-objects-to-object");
export const Case_5_1_20_message_bindings_kafka_array_arrays_primitives_to_object: Story = createCaseStory("5.1.20-message-bindings-kafka-array-arrays-primitives-to-object");
export const Case_5_1_21_message_bindings_kafka_remove_object_property: Story = createCaseStory("5.1.21-message-bindings-kafka-remove-object-property");
export const Case_5_1_22_message_bindings_kafka_add_object_property: Story = createCaseStory("5.1.22-message-bindings-kafka-add-object-property");
export const Case_6_1_message_x_second_added: Story = createCaseStory("6.1-message-x-second-added");
export const Case_6_2_message_x_second_removed: Story = createCaseStory("6.2-message-x-second-removed");
export const Case_6_3_message_x_second_changed: Story = createCaseStory("6.3-message-x-second-changed");
export const Case_6_4_message_x_first_and_x_second_added: Story = createCaseStory("6.4-message-x-first-and-x-second-added");
export const Case_6_5_message_x_first_and_x_second_removed: Story = createCaseStory("6.5-message-x-first-and-x-second-removed");
export const Case_7_1_message_headers_object_schema_added: Story = createCaseStory("7.1-message-headers-object-schema-added");
export const Case_7_2_message_headers_object_schema_removed: Story = createCaseStory("7.2-message-headers-object-schema-removed");
export const Case_7_3_message_headers_description_changed: Story = createCaseStory("7.3-message-headers-description-changed");
export const Case_7_4_message_payload_object_schema_added: Story = createCaseStory("7.4-message-payload-object-schema-added");
export const Case_7_5_message_payload_object_schema_removed: Story = createCaseStory("7.5-message-payload-object-schema-removed");
export const Case_7_6_message_payload_description_changed: Story = createCaseStory("7.6-message-payload-description-changed");
