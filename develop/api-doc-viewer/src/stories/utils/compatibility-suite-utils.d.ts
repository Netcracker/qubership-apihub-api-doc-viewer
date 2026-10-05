import { TestSpecType } from '@netcracker/qubership-apihub-compatibility-suites';
export type GraphQLCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
};
export declare function GraphQLStoryComponent({ before, after }: GraphQLCompatibilitySuiteStoryArgs): import("react").JSX.Element;
export declare function getGraphQLStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string): GraphQLCompatibilitySuiteStoryArgs;
export type DdlCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
};
export declare function DdlStoryComponent({ before, after }: DdlCompatibilitySuiteStoryArgs): import("react").JSX.Element;
export declare function getDdlStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string): DdlCompatibilitySuiteStoryArgs;
