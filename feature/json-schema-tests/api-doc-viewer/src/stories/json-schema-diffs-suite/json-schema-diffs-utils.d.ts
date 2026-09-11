import { JsonSchemaDiffViewer } from '../../components/JsonSchemaViewer/JsonSchemaDiffViewer';
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
export type JsonSchemaDiffCaseStoryComponentProps = Pick<JsonSchemaDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml">;
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
};
type JsonSchemaDiffViewerProps = ComponentProps<typeof JsonSchemaDiffViewer>;
type JsonSchemaDiffCaseStoryArgs = {
    name: string;
    args: JsonSchemaDiffCaseStoryComponentProps;
    argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
    render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};
export type JsonSchemaDiffViewerArgsOptions = {
    disableSubstitutionTitle?: boolean;
};
export declare const createJsonSchemaDiffViewerArgsFromSchemas: (beforeSchema: Record<string, unknown>, afterSchema: Record<string, unknown>, options?: JsonSchemaDiffViewerArgsOptions) => JsonSchemaDiffViewerProps;
export declare const createJsonSchemaDiffViewerArgs: (beforeSourceText: string, afterSourceText: string, options?: JsonSchemaDiffViewerArgsOptions) => JsonSchemaDiffViewerProps;
export declare const createJsonSchemaDiffSampleById: <TSample extends JsonSchemaDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const createJsonSchemaDiffCaseStoryFactory: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>) => (caseId: string) => JsonSchemaDiffCaseStoryArgs;
export declare const JsonSchemaDiffSamplesStory: ({ beforeYaml, afterYaml, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
/**
 * Same as JsonSchemaDiffSamplesStory, but inlines schemas in the OAS template instead of $ref-ing
 * to __Substitution__ (disableSubstitutionTitle) -- needed for combiner suites, where the
 * substitution $ref would otherwise be the thing labeled at the diff root instead of the combiner.
 */
export declare const JsonSchemaDiffSamplesStoryWithDisabledSubstitutionTitle: ({ beforeYaml, afterYaml, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
