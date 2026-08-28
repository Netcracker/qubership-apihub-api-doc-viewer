import { JsonSchemaNextDiffsViewer } from "@apihub/components/JsonSchemaNextViewer/JsonSchemaNextDiffsViewer";
import type { ArgTypes } from "@storybook/react";
import type { ComponentProps } from "react";
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from "@netcracker/qubership-apihub-api-diff";
import { prepareJsonDiffSchema, RESPONSE_200_BODY_TARGET } from "../preprocess";
import { parseYamlSource } from "../utils/parse-yaml-source";

export const JSON_SCHEMA_DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
} as const;

export type JsonSchemaDiffSampleCase = {
  caseId: string;
  beforeYaml: string;
  afterYaml: string;
};

export type JsonSchemaDiffCaseStoryComponentProps = Pick<
  JsonSchemaDiffSampleCase,
  "caseId" | "beforeYaml" | "afterYaml"
>;

export const jsonSchemaDiffSampleReadonlyArgTypes = {
  beforeYaml: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "Before sample YAML for reference. The viewer always uses the bundled fixture for the selected case.",
  },
  afterYaml: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "After sample YAML for reference. The viewer always uses the bundled fixture for the selected case.",
  },
} satisfies Partial<ArgTypes<JsonSchemaDiffCaseStoryComponentProps>>;

type JsonSchemaNextDiffsViewerProps = ComponentProps<typeof JsonSchemaNextDiffsViewer>;

type JsonSchemaDiffCaseStoryArgs = {
  name: string;
  args: JsonSchemaDiffCaseStoryComponentProps;
  argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
  render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};

const JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH = 5;

const createSchemaFromYaml = (sourceText: string): Record<string, unknown> =>
  parseYamlSource(sourceText);

export const createJsonSchemaNextDiffsViewerArgsFromSchemas = (
  beforeSchema: Record<string, unknown>,
  afterSchema: Record<string, unknown>,
): JsonSchemaNextDiffsViewerProps => ({
  schema: prepareJsonDiffSchema({
    beforeSchema,
    afterSchema,
    target: RESPONSE_200_BODY_TARGET,
    disableSubstitutionTitle: true,
  }),
  expandedDepth: JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH,
  diffMetaKeys: JSON_SCHEMA_DIFF_META_KEYS,
  hideUnchangedNodes: false,
});

export const createJsonSchemaNextDiffsViewerArgs = (
  beforeSourceText: string,
  afterSourceText: string,
): JsonSchemaNextDiffsViewerProps => ({
  schema: prepareJsonDiffSchema({
    beforeSchema: createSchemaFromYaml(beforeSourceText),
    afterSchema: createSchemaFromYaml(afterSourceText),
    target: RESPONSE_200_BODY_TARGET,
    disableSubstitutionTitle: true,
  }),
  expandedDepth: JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH,
  diffMetaKeys: JSON_SCHEMA_DIFF_META_KEYS,
  hideUnchangedNodes: false,
});

export const createJsonSchemaDiffSampleById = <TSample extends JsonSchemaDiffSampleCase>(
  sampleCases: readonly TSample[],
): Record<string, TSample> =>
  sampleCases.reduce<Record<string, TSample>>((accumulator, sampleCase) => {
    accumulator[sampleCase.caseId] = sampleCase;
    return accumulator;
  }, {});

export const createJsonSchemaDiffCaseStoryFactory = (
  StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element,
  sampleById: Record<string, JsonSchemaDiffSampleCase>,
) => (caseId: string): JsonSchemaDiffCaseStoryArgs => {
  const sample = sampleById[caseId];
  if (!sample) {
    throw new Error(`Sample case not found: ${caseId}`);
  }

  return {
    name: caseId,
    args: {
      caseId,
      beforeYaml: sample.beforeYaml,
      afterYaml: sample.afterYaml,
    },
    argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
    render: (args) => {
      const resolvedSample = sampleById[args.caseId];
      return (
        <StoryComponent
          caseId={args.caseId}
          beforeYaml={resolvedSample.beforeYaml}
          afterYaml={resolvedSample.afterYaml}
        />
      );
    },
  };
};

export const JsonSchemaDiffSamplesStory = ({
  beforeYaml,
  afterYaml,
}: JsonSchemaDiffCaseStoryComponentProps) => (
  <JsonSchemaNextDiffsViewer {...createJsonSchemaNextDiffsViewerArgs(beforeYaml, afterYaml)} />
);
