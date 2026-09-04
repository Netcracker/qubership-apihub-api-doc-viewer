import { jsonSchemaDiffSampleReadonlyArgTypes } from "../json-schema-diffs-suite/json-schema-diffs-utils";
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
