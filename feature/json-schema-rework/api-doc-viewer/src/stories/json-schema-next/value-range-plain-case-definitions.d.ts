import { type ValueRangeBounds } from "../shared/value-range-schema-builder.ts";
export type ValueRangePlainCaseDefinition = {
    slug: string;
    bounds: ValueRangeBounds;
    summary: string;
    oas31Only?: boolean;
};
export type ValueRangePlainCase = ValueRangePlainCaseDefinition & {
    caseId: string;
};
export type ValueRangePlainSampleListOptions = {
    includeOas31Only?: boolean;
};
export type ValueRangePlainSampleResolveOptions = ValueRangePlainSampleListOptions & {
    type?: "integer" | "number";
};
export declare function getValueRangePlainCaseDefinitions(): ValueRangePlainCaseDefinition[];
export declare function listValueRangePlainCases(options?: ValueRangePlainSampleListOptions): ValueRangePlainCase[];
export declare const resolveValueRangePlainSchema: (caseId: string, options?: ValueRangePlainSampleResolveOptions) => Record<string, unknown>;
export declare const toValueRangePlainCaseExportName: (caseId: string) => string;
