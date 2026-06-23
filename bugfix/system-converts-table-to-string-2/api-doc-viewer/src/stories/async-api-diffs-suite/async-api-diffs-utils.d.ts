import { type AsyncApiOperationDiffsViewerProps } from '../../components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer';
export type AsyncApiDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
type AsyncApiCaseStoryComponentProps = {
    caseId: string;
};
type AsyncApiCaseStoryArgs = {
    name: string;
    args: AsyncApiCaseStoryComponentProps;
    render: (args: AsyncApiCaseStoryComponentProps) => JSX.Element;
    play?: (context: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
export declare const createAsyncApiSource: (sourceText: string) => Record<string, unknown>;
export declare const createAsyncApiViewerArgs: (beforeSourceText: string, afterSourceText: string, options: {
    operationKey: string;
    messageKey: string;
}) => AsyncApiOperationDiffsViewerProps;
export declare const createAsyncApiSampleById: <TSample extends AsyncApiDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const createAsyncApiCaseStoryFactory: (StoryComponent: (props: AsyncApiCaseStoryComponentProps) => JSX.Element, playTestId?: string) => (caseId: string) => AsyncApiCaseStoryArgs;
export {};
