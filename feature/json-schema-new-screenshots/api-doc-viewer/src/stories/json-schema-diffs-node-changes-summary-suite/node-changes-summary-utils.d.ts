/**
 * Shared render helper for the node-changes-summary case files in this suite. Each
 * `case-N-*.stories.tsx` file owns exactly one sample case (see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md) and renders it at 2-4
 * `expandedDepth` values - one story per variant. Splitting "Case N" and its semantic title into
 * the file's own `meta.title` (see the per-case files) keeps each story's own `name` down to just
 * the variant (e.g. "Expanded root"), instead of repeating the case identity in every story name.
 */
import { jsonSchemaDiffSampleReadonlyArgTypes } from '../json-schema-diffs-suite/json-schema-diffs-utils';
type NodeChangesSummaryStoryArgs = {
    beforeYaml: string;
    afterYaml: string;
};
/** `meta.component` for the per-case files; every story overrides `render` with its own depth. */
export declare const NodeChangesSummarySampleStory: ({ beforeYaml, afterYaml }: NodeChangesSummaryStoryArgs) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
type NodeChangesSummaryCaseStoryResult = {
    name: string;
    args: NodeChangesSummaryStoryArgs;
    argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
    render: (args: NodeChangesSummaryStoryArgs) => JSX.Element;
};
/** Renders one node-changes-summary sample case at a specific expand depth. */
export declare const createNodeChangesSummaryCaseStory: (caseSlug: string, variantName: string, expandedDepth: number) => NodeChangesSummaryCaseStoryResult;
export {};
