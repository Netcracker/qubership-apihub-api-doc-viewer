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
type NodeChangesSummaryCaseStoryResultWithChangedVariant = NodeChangesSummaryCaseStoryResult & {
    play: (context: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
/**
 * Same as `createNodeChangesSummaryCaseStory`, but also switches oneOf/anyOf combiner nodes to
 * their changed variant on mount (recursing into nested combiners until a leaf is reached), so
 * the story opens accented on the change instead of the combiner's default first option. Use
 * for cases that contain a oneOf/anyOf combiner (cases 5-7) — a safe no-op otherwise. Screenshot
 * ITs do not rely on this `play` function (it does not run under the Puppeteer iframe.html
 * harness); they call `switchCombinerNodesToChangedVariant` directly via `page.evaluate`.
 */
export declare const createNodeChangesSummaryCaseStoryWithChangedVariant: (caseSlug: string, variantName: string, expandedDepth: number) => NodeChangesSummaryCaseStoryResultWithChangedVariant;
export {};
