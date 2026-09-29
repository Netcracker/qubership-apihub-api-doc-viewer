import { JsoDiffsViewer } from '../../components/JsoViewer/JsoDiffsViewer';
import type { ComponentProps } from '../../../../../node_modules/react';
export type JsoDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export type JsoCaseStoryComponentProps = Pick<JsoDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml">;
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
};
type JsoDiffsViewerProps = ComponentProps<typeof JsoDiffsViewer>;
type JsoCaseStoryArgs = {
    name: string;
    args: JsoCaseStoryComponentProps;
    argTypes: typeof jsoDiffSampleReadonlyArgTypes;
    render: (args: JsoCaseStoryComponentProps) => JSX.Element;
};
export declare const createJsoViewerArgs: (beforeSourceText: string, afterSourceText: string) => JsoDiffsViewerProps;
export declare const createJsoSampleById: <TSample extends JsoDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const createJsoCaseStoryFactory: (StoryComponent: (props: JsoCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsoDiffSampleCase>) => (caseId: string) => JsoCaseStoryArgs;
export {};
