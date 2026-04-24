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
  "../../../../samples/async-api-diffs/operation/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/operation/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

const AsyncApiOperationSamplesStory = ({ caseId }: { caseId: string }) => {
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
  title: "Async API Diffs Suite/Operation Samples",
  component: AsyncApiOperationSamplesStory,
} satisfies Meta<typeof AsyncApiOperationSamplesStory>;

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
  render: (args) => <AsyncApiOperationSamplesStory caseId={args.caseId} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByTestId("message-operation");
    await userEvent.click(buttons[0]);
  },
});

export const Case_1_1_operation_title_changed: Story = createCaseStory("1.1-operation-title-changed");
export const Case_1_2_operation_title_removed: Story = createCaseStory("1.2-operation-title-removed");
export const Case_1_3_operation_title_added: Story = createCaseStory("1.3-operation-title-added");
export const Case_2_1_operation_description_changed: Story = createCaseStory("2.1-operation-description-changed");
export const Case_2_2_operation_description_removed: Story = createCaseStory("2.2-operation-description-removed");
export const Case_2_3_operation_description_added: Story = createCaseStory("2.3-operation-description-added");
export const Case_2_4_operation_summary_changed: Story = createCaseStory("2.4-operation-summary-changed");
export const Case_2_5_operation_summary_removed: Story = createCaseStory("2.5-operation-summary-removed");
export const Case_2_6_operation_description_moved_to_summary: Story = createCaseStory("2.6-operation-description-moved-to-summary");
export const Case_2_7_operation_summary_moved_to_description: Story = createCaseStory("2.7-operation-summary-moved-to-description");
export const Case_3_1_operation_bindings_add_amqp: Story = createCaseStory("3.1-operation-bindings-add-amqp");
export const Case_3_2_operation_bindings_remove_kafka: Story = createCaseStory("3.2-operation-bindings-remove-kafka");
export const Case_3_3_operation_bindings_add_kafka: Story = createCaseStory("3.3-operation-bindings-add-kafka");
export const Case_3_4_operation_bindings_remove_kafka: Story = createCaseStory("3.4-operation-bindings-remove-kafka");
export const Case_4_1_operation_bindings_kafka_bindingVersion_changed: Story = createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed");
export const Case_4_2_operation_bindings_kafka_bindingVersion_removed: Story = createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed");
export const Case_4_3_operation_bindings_kafka_bindingVersion_added: Story = createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added");
export const Case_5_1_1_operation_bindings_kafka_string_to_number: Story = createCaseStory("5.1.1-operation-bindings-kafka-string-to-number");
export const Case_5_1_2_operation_bindings_kafka_number_to_string: Story = createCaseStory("5.1.2-operation-bindings-kafka-number-to-string");
export const Case_5_1_3_operation_bindings_kafka_string_to_boolean: Story = createCaseStory("5.1.3-operation-bindings-kafka-string-to-boolean");
export const Case_5_1_4_operation_bindings_kafka_number_to_null: Story = createCaseStory("5.1.4-operation-bindings-kafka-number-to-null");
export const Case_5_1_5_operation_bindings_kafka_boolean_to_string: Story = createCaseStory("5.1.5-operation-bindings-kafka-boolean-to-string");
export const Case_5_1_6_operation_bindings_kafka_null_to_number: Story = createCaseStory("5.1.6-operation-bindings-kafka-null-to-number");
export const Case_5_1_7_operation_bindings_kafka_string_to_array_primitives: Story = createCaseStory("5.1.7-operation-bindings-kafka-string-to-array-primitives");
export const Case_5_1_8_operation_bindings_kafka_number_to_array_primitives: Story = createCaseStory("5.1.8-operation-bindings-kafka-number-to-array-primitives");
export const Case_5_1_9_operation_bindings_kafka_string_to_array_objects: Story = createCaseStory("5.1.9-operation-bindings-kafka-string-to-array-objects");
export const Case_5_1_10_operation_bindings_kafka_number_to_array_objects: Story = createCaseStory("5.1.10-operation-bindings-kafka-number-to-array-objects");
export const Case_5_1_11_operation_bindings_kafka_string_to_array_arrays_primitives: Story = createCaseStory("5.1.11-operation-bindings-kafka-string-to-array-arrays-primitives");
export const Case_5_1_12_operation_bindings_kafka_number_to_array_arrays_primitives: Story = createCaseStory("5.1.12-operation-bindings-kafka-number-to-array-arrays-primitives");
export const Case_5_1_13_operation_bindings_kafka_boolean_to_null: Story = createCaseStory("5.1.13-operation-bindings-kafka-boolean-to-null");
export const Case_5_1_14_operation_bindings_kafka_boolean_to_array_primitives: Story = createCaseStory("5.1.14-operation-bindings-kafka-boolean-to-array-primitives");
export const Case_5_1_15_operation_bindings_kafka_null_to_array_primitives: Story = createCaseStory("5.1.15-operation-bindings-kafka-null-to-array-primitives");
export const Case_5_1_16_operation_bindings_kafka_boolean_to_object: Story = createCaseStory("5.1.16-operation-bindings-kafka-boolean-to-object");
export const Case_5_1_17_operation_bindings_kafka_null_to_object: Story = createCaseStory("5.1.17-operation-bindings-kafka-null-to-object");
export const Case_5_1_18_operation_bindings_kafka_array_primitives_to_object: Story = createCaseStory("5.1.18-operation-bindings-kafka-array-primitives-to-object");
export const Case_5_1_19_operation_bindings_kafka_array_objects_to_object: Story = createCaseStory("5.1.19-operation-bindings-kafka-array-objects-to-object");
export const Case_5_1_20_operation_bindings_kafka_array_arrays_primitives_to_object: Story = createCaseStory("5.1.20-operation-bindings-kafka-array-arrays-primitives-to-object");
export const Case_5_1_21_operation_bindings_kafka_remove_object_property: Story = createCaseStory("5.1.21-operation-bindings-kafka-remove-object-property");
export const Case_5_1_22_operation_bindings_kafka_add_object_property: Story = createCaseStory("5.1.22-operation-bindings-kafka-add-object-property");
export const Case_6_1_operation_x_second_added: Story = createCaseStory("6.1-operation-x-second-added");
export const Case_6_2_operation_x_second_removed: Story = createCaseStory("6.2-operation-x-second-removed");
export const Case_6_3_operation_x_second_changed: Story = createCaseStory("6.3-operation-x-second-changed");
export const Case_6_4_operation_x_first_and_x_second_added: Story = createCaseStory("6.4-operation-x-first-and-x-second-added");
export const Case_6_5_operation_x_first_and_x_second_removed: Story = createCaseStory("6.5-operation-x-first-and-x-second-removed");
