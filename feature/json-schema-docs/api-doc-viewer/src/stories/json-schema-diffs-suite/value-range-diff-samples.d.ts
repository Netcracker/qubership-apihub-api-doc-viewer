import type { ValueRangeDiffCase, ValueRangeDiffSampleListOptions, ValueRangeDiffSampleResolveOptions } from "./value-range-diff-samples.types";
export type { ValueRangeDiffCase, ValueRangeDiffCaseDefinition, ValueRangeDiffSampleListOptions, ValueRangeDiffSampleResolveOptions, } from "./value-range-diff-samples.types";
export { getValueRangeDiffCaseDefinitions, listValueRangeDiffCases, toValueRangeCaseExportName, } from "./value-range-diff-case-definitions";
export declare const findValueRangeDiffCase: (caseId: string, options?: ValueRangeDiffSampleListOptions) => ValueRangeDiffCase;
export declare const resolveValueRangeDiffSchemas: (caseId: string, options?: ValueRangeDiffSampleResolveOptions) => {
    before: Record<string, unknown>;
    after: Record<string, unknown>;
};
export declare const resolveValueRangeDiffYamlPair: (caseId: string, options?: ValueRangeDiffSampleResolveOptions) => {
    beforeYaml: string;
    afterYaml: string;
};
export type ValueRangeDiffProgrammaticSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
    summary: string;
};
export declare const buildValueRangeDiffProgrammaticSampleCases: (options?: ValueRangeDiffSampleListOptions) => ValueRangeDiffProgrammaticSampleCase[];
