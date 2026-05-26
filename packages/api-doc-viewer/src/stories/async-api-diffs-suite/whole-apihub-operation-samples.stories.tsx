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
  "../../../../samples/async-api-diffs/whole-apihub-operation/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/async-api-diffs/whole-apihub-operation/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectSampleCases(beforeFiles, afterFiles);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

const AsyncApiWholeApihubOperationSamplesStory = ({ caseId }: { caseId: string }) => {
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
  title: "Async API Diffs Suite/Whole Apihub Operation Samples",
  component: AsyncApiWholeApihubOperationSamplesStory,
} satisfies Meta<typeof AsyncApiWholeApihubOperationSamplesStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const OPERATION_KEY = "ConsumeUserSignups";
const MESSAGE_KEY = "UserMessage";

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
  render: (args) => <AsyncApiWholeApihubOperationSamplesStory caseId={args.caseId} />,
});

export const Case_1_1_message_removed_from_operation_channel_and_document: Story = createCaseStory("1.1-message-removed-from-operation-channel-and-document");
export const Case_1_2_message_added_to_operation_channel_and_document: Story = createCaseStory("1.2-message-added-to-operation-channel-and-document");
