import type { ValueRangePlainSampleResolveOptions } from "./value-range-plain-case-definitions";
export type { ValueRangePlainCase, ValueRangePlainCaseDefinition, ValueRangePlainSampleListOptions, ValueRangePlainSampleResolveOptions, } from "./value-range-plain-case-definitions";
export { getValueRangePlainCaseDefinitions, listValueRangePlainCases, resolveValueRangePlainSchema, toValueRangePlainCaseExportName, } from "./value-range-plain-case-definitions";
export type ValueRangePlainProgrammaticSampleCase = {
    caseId: string;
    schema: Record<string, unknown>;
    summary: string;
};
export declare const buildValueRangePlainProgrammaticSampleCases: (options?: ValueRangePlainSampleResolveOptions) => ValueRangePlainProgrammaticSampleCase[];
export declare const resolveValueRangePlainSchemaOas31: (caseId: string, options?: ValueRangePlainSampleResolveOptions) => Record<string, unknown>;
export declare const buildValueRangePlainOas31ProgrammaticSampleCases: (options?: ValueRangePlainSampleResolveOptions) => ValueRangePlainProgrammaticSampleCase[];
export declare const resolveValueRangePlainYaml: (caseId: string, options?: ValueRangePlainSampleResolveOptions) => string;
