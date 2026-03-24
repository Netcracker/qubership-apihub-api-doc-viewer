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
const defaultCaseId = sampleCases[0]?.caseId ?? "";
const sampleCaseIds = sampleCases.map((item) => item.caseId);
const sampleById = Object.fromEntries(sampleCases.map((item) => [item.caseId, item])) as Record<
  string,
  (typeof sampleCases)[number]
>;

type StoryArgs = {
  caseId: string;
};

const AsyncApiChannelSamplesStory = ({ caseId }: StoryArgs) => {
  const selected = sampleById[caseId] ?? sampleCases[0];
  if (!selected) {
    return <div>No sample cases found</div>;
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
  argTypes: {
    caseId: {
      control: "select",
      options: sampleCaseIds,
    },
  },
  args: {
    caseId: defaultCaseId,
  },
} satisfies Meta<StoryArgs>;

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

export const Samples: Story = {
  render: (args) => <AsyncApiChannelSamplesStory caseId={args.caseId} />,
};
