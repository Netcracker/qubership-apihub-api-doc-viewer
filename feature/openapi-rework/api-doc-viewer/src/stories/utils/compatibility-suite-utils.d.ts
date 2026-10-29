import { SpecificationVersionPair, TestSpecType } from '@netcracker/qubership-apihub-compatibility-suites';
import { DisplayMode } from '../../types/DisplayMode';
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
export type OpenApiCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
    displayMode: DisplayMode;
    /** `false`: every row shows, as in the OpenAPI Operation Diffs Suite. */
    hideUnchangedNodes: boolean;
};
/**
 * One operation of the merged case (the added / removed one when the case has two), side by side.
 * Design: docs/design/openapi/features/compatibility-suite.md
 */
export declare function OpenApiStoryComponent({ before, after, displayMode, hideUnchangedNodes }: OpenApiCompatibilitySuiteStoryArgs): import("react").JSX.Element;
/** `specificationVersionPair`: the OAS versions the case is patched to (its version-pair group). */
export declare function getOpenApiStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string, specificationVersionPair?: SpecificationVersionPair): OpenApiCompatibilitySuiteStoryArgs;
