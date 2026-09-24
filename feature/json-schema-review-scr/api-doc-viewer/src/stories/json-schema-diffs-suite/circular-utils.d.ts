import { JsonSchemaNextDiffsViewer } from '../../components/JsonSchemaNextViewer/JsonSchemaNextDiffsViewer';
import type { ComponentProps } from '../../../../../node_modules/react';
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from '@netcracker/qubership-apihub-api-diff';
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
type JsonSchemaDiffsViewerProps = ComponentProps<typeof JsonSchemaNextDiffsViewer>;
type JsonSchemaDiffCaseStoryArgs = {
    name: string;
    args: JsonSchemaDiffCaseStoryComponentProps;
    argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
    render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};
export declare const createJsonSchemaDiffViewerArgs: (beforeSourceText: string, afterSourceText: string) => JsonSchemaDiffsViewerProps;
export declare const createJsonSchemaDiffSampleById: <TSample extends JsonSchemaDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const createJsonSchemaDiffCaseStoryFactory: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>) => (caseId: string) => JsonSchemaDiffCaseStoryArgs;
type JsonSchemaDiffCaseStoryArgsWithChangedVariant = JsonSchemaDiffCaseStoryArgs & {
    play: (context: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
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
export declare const createJsonSchemaDiffCaseStoryFactoryWithChangedVariant: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>) => (caseId: string) => JsonSchemaDiffCaseStoryArgsWithChangedVariant;
export declare const JsonSchemaDiffSamplesStory: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
