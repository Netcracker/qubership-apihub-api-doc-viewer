/**
 * Shared render helper for the node-changes-summary case files in this suite. Each
 * `case-N-*.stories.tsx` file owns exactly one sample case (see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md) and renders it at 2-4
 * `expandedDepth` values - one story per variant. Splitting "Case N" and its semantic title into
 * the file's own `meta.title` (see the per-case files) keeps each story's own `name` down to just
 * the variant (e.g. "Expanded root"), instead of repeating the case identity in every story name.
 */
import { JsonSchemaDiffViewer } from "@apihub/components/JsonSchemaViewer/JsonSchemaDiffViewer";
import {
  createJsonSchemaDiffViewerArgs,
  jsonSchemaDiffSampleReadonlyArgTypes,
} from "../json-schema-diffs-suite/json-schema-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/node-changes-summary/*/before.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/json-schema-diffs/node-changes-summary/*/after.yaml",
  { as: "raw", eager: true },
) as Record<string, string>;

const CASE_SLUG_PATTERN = /node-changes-summary\/case-([^/]+)\//;

const extractCaseSlug = (path: string): string => {
  const match = path.match(CASE_SLUG_PATTERN);
  if (!match) {
    throw new Error(`Cannot resolve node-changes-summary case slug from path: ${path}`);
  }
  return match[1];
};

const indexBySlug = (files: Record<string, string>): Record<string, string> =>
  Object.entries(files).reduce<Record<string, string>>((accumulator, [path, content]) => {
    accumulator[extractCaseSlug(path)] = content;
    return accumulator;
  }, {});

const beforeBySlug = indexBySlug(beforeFiles);
const afterBySlug = indexBySlug(afterFiles);

type NodeChangesSummaryStoryArgs = {
  beforeYaml: string;
  afterYaml: string;
};

/** `meta.component` for the per-case files; every story overrides `render` with its own depth. */
export const NodeChangesSummarySampleStory = ({ beforeYaml, afterYaml }: NodeChangesSummaryStoryArgs) => (
  <JsonSchemaDiffViewer {...createJsonSchemaDiffViewerArgs(beforeYaml, afterYaml)} />
);

type NodeChangesSummaryCaseStoryResult = {
  name: string;
  args: NodeChangesSummaryStoryArgs;
  argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
  render: (args: NodeChangesSummaryStoryArgs) => JSX.Element;
};

/** Renders one node-changes-summary sample case at a specific expand depth. */
export const createNodeChangesSummaryCaseStory = (
  caseSlug: string,
  variantName: string,
  expandedDepth: number,
): NodeChangesSummaryCaseStoryResult => {
  const beforeYaml = beforeBySlug[caseSlug];
  const afterYaml = afterBySlug[caseSlug];
  if (!beforeYaml || !afterYaml) {
    throw new Error(`Sample case not found: ${caseSlug}`);
  }

  return {
    name: variantName,
    args: { beforeYaml, afterYaml },
    argTypes: jsonSchemaDiffSampleReadonlyArgTypes,
    render: (args) => {
      const viewerArgs = createJsonSchemaDiffViewerArgs(args.beforeYaml, args.afterYaml);
      return <JsonSchemaDiffViewer {...viewerArgs} expandedDepth={expandedDepth} />;
    },
  };
};
