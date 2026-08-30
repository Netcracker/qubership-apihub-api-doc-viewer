import { TestSpecType } from '@netcracker/qubership-apihub-compatibility-suites';
export type GraphQLCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
};
export declare function GraphQLStoryComponent({ before, after }: GraphQLCompatibilitySuiteStoryArgs): import("react/jsx-runtime").JSX.Element;
export declare function getGraphQLStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string): GraphQLCompatibilitySuiteStoryArgs;
