import type { ValueRangeDiffCase, ValueRangeDiffCaseDefinition, ValueRangeDiffSampleListOptions } from "./value-range-diff-samples.types";
export declare function getValueRangeDiffCaseDefinitions(): ValueRangeDiffCaseDefinition[];
export declare function listValueRangeDiffCases(options?: ValueRangeDiffSampleListOptions): ValueRangeDiffCase[];
export declare const toValueRangeCaseExportName: (caseId: string) => string;
