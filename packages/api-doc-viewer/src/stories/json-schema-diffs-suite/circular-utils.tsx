import { JsonSchemaNextDiffsViewer } from '@apihub/components/JsonSchemaNextViewer/JsonSchemaNextDiffsViewer'
import type { ArgTypes } from '@storybook/react'
import type { ComponentProps } from 'react'
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from '@netcracker/qubership-apihub-api-diff'
import { prepareJsonDiffSchema, RESPONSE_200_BODY_TARGET } from '../preprocess'
import { parseYamlSource } from '../utils/parse-yaml-source'
import { switchCombinerNodesToChangedVariant } from '@apihub/utils/combiner-changed-variant'

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
> & {
  hideUnchangedNodes: boolean;
};

export const JSON_SCHEMA_DIFFS_SUITE_DEFAULT_HIDE_UNCHANGED_NODES = false;

export const jsonSchemaDiffSampleReadonlyArgTypes = {
  beforeYaml: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "Before sample YAML for reference (\"beforeSchema\" plus circular \"beforeAdditionalComponents\" definitions). The viewer always uses the bundled fixture for the selected case.",
  },
  afterYaml: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "After sample YAML for reference (\"afterSchema\" plus circular \"afterAdditionalComponents\" definitions). The viewer always uses the bundled fixture for the selected case.",
  },
  hideUnchangedNodes: {
    control: { type: "boolean" },
    table: { category: "Display" },
    description: "Forwarded to JsonSchemaNextDiffsViewer's hideUnchangedNodes prop.",
  },
} satisfies Partial<ArgTypes<JsonSchemaDiffCaseStoryComponentProps>>;

type JsonSchemaDiffsViewerProps = ComponentProps<typeof JsonSchemaNextDiffsViewer>;

type JsonSchemaDiffCaseStoryArgs = {
  name: string;
  args: JsonSchemaDiffCaseStoryComponentProps;
  argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
  render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};

const JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH = 5;

// Circular fixtures keep the cyclic schema in named OAS components: the fixture is
// substituted into an OAS document, so a bare "#" or "#/definitions/..." ref (valid for a
// standalone JSON Schema document) would resolve against the OAS root instead and fail to
// find a schema there. Each fixture file therefore carries the schema under "beforeSchema"/
// "afterSchema" plus the cyclic component definitions under "beforeAdditionalComponents"/
// "afterAdditionalComponents", mirroring the `prepareJsonDiffSchema` option names so the
// raw YAML shown in Storybook controls matches what is actually fed into the viewer.
type CircularSampleFileShape = {
  beforeSchema?: unknown;
  beforeAdditionalComponents?: Record<PropertyKey, unknown>;
  afterSchema?: unknown;
  afterAdditionalComponents?: Record<PropertyKey, unknown>;
};

const createJsonSchemaDiffViewerBaseArgs = (
  schema: unknown,
): JsonSchemaDiffsViewerProps => ({
  schema,
  expandedDepth: JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH,
  diffMetaKeys: JSON_SCHEMA_DIFF_META_KEYS,
});

export const createJsonSchemaDiffViewerArgs = (
  beforeSourceText: string,
  afterSourceText: string,
): JsonSchemaDiffsViewerProps => {
  const before = parseYamlSource(beforeSourceText) as CircularSampleFileShape;
  const after = parseYamlSource(afterSourceText) as CircularSampleFileShape;

  return createJsonSchemaDiffViewerBaseArgs(
    prepareJsonDiffSchema({
      beforeSchema: before.beforeSchema,
      afterSchema: after.afterSchema,
      beforeAdditionalComponents: before.beforeAdditionalComponents,
      afterAdditionalComponents: after.afterAdditionalComponents,
      target: RESPONSE_200_BODY_TARGET,
      circular: true,
    }),
  );
};

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
      hideUnchangedNodes: JSON_SCHEMA_DIFFS_SUITE_DEFAULT_HIDE_UNCHANGED_NODES,
    },
    argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
    render: (args) => {
      const resolvedSample = sampleById[args.caseId];
      return (
        <StoryComponent
          caseId={args.caseId}
          beforeYaml={resolvedSample.beforeYaml}
          afterYaml={resolvedSample.afterYaml}
          hideUnchangedNodes={args.hideUnchangedNodes}
        />
      );
    },
  };
};

type JsonSchemaDiffCaseStoryArgsWithChangedVariant = JsonSchemaDiffCaseStoryArgs & {
  play: (context: { canvasElement: HTMLElement }) => Promise<void>;
};

/**
 * Same as `createJsonSchemaDiffCaseStoryFactory`, but also switches oneOf/anyOf combiner nodes
 * to their changed variant on mount (recursing into nested combiners until a leaf is reached),
 * so the story opens accented on the change instead of the combiner's default first option.
 * Only meaningful for the circular cases that actually contain a oneOf combiner-variant cycle —
 * a safe no-op otherwise. Screenshot ITs do not rely on this `play` function (it does not run
 * under the Puppeteer iframe.html harness); they call `switchCombinerNodesToChangedVariant`
 * directly via `page.evaluate`.
 */
export const createJsonSchemaDiffCaseStoryFactoryWithChangedVariant = (
  StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element,
  sampleById: Record<string, JsonSchemaDiffSampleCase>,
) => {
  const createCaseStory = createJsonSchemaDiffCaseStoryFactory(StoryComponent, sampleById);
  return (caseId: string): JsonSchemaDiffCaseStoryArgsWithChangedVariant => ({
    ...createCaseStory(caseId),
    play: async ({ canvasElement }) => {
      await switchCombinerNodesToChangedVariant(canvasElement);
    },
  });
};

export const JsonSchemaDiffSamplesStory = ({
  beforeYaml,
  afterYaml,
  hideUnchangedNodes,
}: JsonSchemaDiffCaseStoryComponentProps) => (
  <JsonSchemaNextDiffsViewer
    {...createJsonSchemaDiffViewerArgs(beforeYaml, afterYaml)}
    hideUnchangedNodes={hideUnchangedNodes}
  />
);
