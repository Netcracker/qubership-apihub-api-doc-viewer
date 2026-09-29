import { JsonSchemaDiffsViewer } from '../../components/JsonSchemaViewer/JsonSchemaDiffsViewer';
import type { ComponentProps } from '../../../../../node_modules/react';
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from "@netcracker/qubership-apihub-api-diff";
export declare const JSON_SCHEMA_DIFF_META_KEYS: {
    readonly diffsMetaKey: typeof DIFF_META_KEY;
    readonly aggregatedDiffsMetaKey: typeof DIFFS_AGGREGATED_META_KEY;
};
export type JsonSchemaDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export type JsonSchemaDiffCaseStoryComponentProps = Pick<JsonSchemaDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml"> & {
    hideUnchangedNodes: boolean;
};
export declare const JSON_SCHEMA_DIFFS_SUITE_DEFAULT_HIDE_UNCHANGED_NODES = false;
export declare const jsonSchemaDiffSampleReadonlyArgTypes: {
    beforeYaml: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    afterYaml: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    hideUnchangedNodes: {
        control: {
            type: "boolean";
        };
        table: {
            category: string;
        };
        description: string;
    };
};
type JsonSchemaDiffsViewerProps = ComponentProps<typeof JsonSchemaDiffsViewer>;
type JsonSchemaDiffCaseStoryArgs = {
    name: string;
    args: JsonSchemaDiffCaseStoryComponentProps;
    argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
    render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};
export declare const JSON_SCHEMA_DIFFS_SUITE_EXPANDED_DEPTH = 5;
/**
 * `oasVersion` picks the synthetic OAS template the pair is wrapped in (default `"3.0"`). Use
 * `"3.1"` for keywords the OAS 3.0 Schema Object dialect lacks (e.g. `propertyNames`, 3.1-style
 * numeric `exclusiveMinimum`) - `apiDiff`'s `validate: true` strips them under OAS 3.0. The OAS 3.1
 * template has no inline variant, so `disableSubstitutionTitle` is OAS 3.0 only.
 */
export type JsonSchemaDiffsViewerArgsOptions = {
    oasVersion?: "3.0";
    disableSubstitutionTitle?: boolean;
} | {
    oasVersion: "3.1";
};
export declare const createJsonSchemaDiffsViewerArgsFromSchemas: (beforeSchema: Record<string, unknown>, afterSchema: Record<string, unknown>, options?: JsonSchemaDiffsViewerArgsOptions) => JsonSchemaDiffsViewerProps;
export declare const createJsonSchemaDiffsViewerArgs: (beforeSourceText: string, afterSourceText: string, options?: JsonSchemaDiffsViewerArgsOptions) => JsonSchemaDiffsViewerProps;
/**
 * `defaultHideUnchangedNodes` seeds the `hideUnchangedNodes` story arg (default `false`: validation
 * and metadata suites show every row; the "Hiding Unchanged Nodes" suite passes `true`).
 */
export declare const createJsonSchemaDiffCaseStoryFactory: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>, defaultHideUnchangedNodes?: boolean) => (caseId: string) => JsonSchemaDiffCaseStoryArgs;
type JsonSchemaDiffCaseStoryArgsWithChangedVariant = JsonSchemaDiffCaseStoryArgs & {
    play: (context: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
/**
 * Same as `createJsonSchemaDiffCaseStoryFactory`, but also switches oneOf/anyOf combiner nodes
 * to their changed variant on mount (recursing into nested combiners until a leaf is reached),
 * so the story opens accented on the change instead of the combiner's default first option.
 * Only meaningful for suites that actually contain oneOf/anyOf combiners — a safe no-op
 * otherwise. Screenshot ITs do not rely on this `play` function (it does not run under the
 * Puppeteer iframe.html harness); they call `switchCombinerNodesToChangedVariant` directly via
 * `page.evaluate`.
 */
export declare const createJsonSchemaDiffCaseStoryFactoryWithChangedVariant: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>, defaultHideUnchangedNodes?: boolean) => (caseId: string) => JsonSchemaDiffCaseStoryArgsWithChangedVariant;
export declare const JsonSchemaDiffSamplesStory: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
/**
 * Same as JsonSchemaDiffSamplesStory, but inlines schemas in the OAS template instead of $ref-ing
 * to __Substitution__ (disableSubstitutionTitle) -- needed for combiner suites, where the
 * substitution $ref would otherwise be the thing labeled at the diff root instead of the combiner.
 */
export declare const JsonSchemaDiffSamplesStoryWithDisabledSubstitutionTitle: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
/**
 * Same as JsonSchemaDiffSamplesStory, but wraps the pair in the OAS 3.1 template - needed for
 * keywords the OAS 3.0 dialect strips during `apiDiff` validation (see JsonSchemaDiffsViewerArgsOptions).
 */
export declare const JsonSchemaDiffSamplesStoryOas31: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
