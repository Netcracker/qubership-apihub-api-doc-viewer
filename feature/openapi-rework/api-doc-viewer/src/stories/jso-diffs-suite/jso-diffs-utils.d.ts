import { JsoDiffsViewer } from '../../components/JsoViewer/JsoDiffsViewer';
import { ComponentProps } from '../../../../../node_modules/react';
export type JsoDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export type JsoCaseStoryComponentProps = Pick<JsoDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml"> & {
    hideUnchangedNodes: boolean;
};
export declare const JSO_DIFFS_SUITE_DEFAULT_HIDE_UNCHANGED_NODES = false;
export declare const jsoDiffSampleReadonlyArgTypes: {
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
type JsoDiffsViewerProps = ComponentProps<typeof JsoDiffsViewer>;
type JsoCaseStoryArgs = {
    name: string;
    args: JsoCaseStoryComponentProps;
    argTypes: typeof jsoDiffSampleReadonlyArgTypes;
    render: (args: JsoCaseStoryComponentProps) => JSX.Element;
};
export declare const createJsoViewerArgs: (beforeSourceText: string, afterSourceText: string, hideUnchangedNodes: boolean) => JsoDiffsViewerProps;
/**
 * `defaultHideUnchangedNodes` seeds the `hideUnchangedNodes` story arg (default `false`: the property
 * suites show every row; the "Hiding Unchanged Nodes" suite passes `true`).
 */
export declare const createJsoCaseStoryFactory: (StoryComponent: (props: JsoCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsoDiffSampleCase>, defaultHideUnchangedNodes?: boolean) => (caseId: string) => JsoCaseStoryArgs;
export {};
