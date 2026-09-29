import { type AsyncApiOperationDiffsViewerProps } from '../../components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer';
export type AsyncApiDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export type AsyncApiCaseStoryComponentProps = Pick<AsyncApiDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml">;
export declare const asyncApiDiffSampleReadonlyArgTypes: {
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
type AsyncApiCaseStoryArgs = {
    name: string;
    args: AsyncApiCaseStoryComponentProps;
    argTypes: typeof asyncApiDiffSampleReadonlyArgTypes;
    render: (args: AsyncApiCaseStoryComponentProps) => JSX.Element;
    play?: (context: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
export declare const createAsyncApiSource: (sourceText: string) => Record<string, unknown>;
export type AsyncApiDiffsSuiteOperationKeys = {
    operationKey: string;
    messageKey: string;
};
/** Operation/message every synthetic AsyncAPI diff fixture declares (all suites but whole-apihub-operation). */
export declare const ASYNC_API_DIFFS_SUITE_OPERATION_KEYS: AsyncApiDiffsSuiteOperationKeys;
export declare const createAsyncApiViewerArgs: (beforeSourceText: string, afterSourceText: string, options?: AsyncApiDiffsSuiteOperationKeys) => AsyncApiOperationDiffsViewerProps;
export declare const createAsyncApiCaseStoryFactory: (StoryComponent: (props: AsyncApiCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, AsyncApiDiffSampleCase>, playTestId?: string) => (caseId: string) => AsyncApiCaseStoryArgs;
export {};
