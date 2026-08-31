import type { ValueRangeDiffProgrammaticSampleCase } from "./value-range-diff-samples";
import type { ValueRangeDiffSampleListOptions, ValueRangeDiffSampleResolveOptions } from "./value-range-diff-samples.types";
/**
 * Converts an OAS 3.0 / Draft-04 style value-range schema
 * (boolean exclusiveMinimum / exclusiveMaximum paired with minimum / maximum)
 * into OAS 3.1 / Draft 2020-12 numeric exclusive bound form.
 *
 * Example:
 * `{ type: "integer", minimum: 1, maximum: 10, exclusiveMaximum: true }`
 * → `{ type: "number", minimum: 1, exclusiveMaximum: 10 }`
 */
export declare const convertValueRangeSchemaToOas31: (schema: Record<string, unknown>) => Record<string, unknown>;
export declare const resolveValueRangeDiffSchemasOas31: (caseId: string, options?: ValueRangeDiffSampleResolveOptions) => {
    before: Record<string, unknown>;
    after: Record<string, unknown>;
};
export declare const resolveValueRangeDiffYamlPairOas31: (caseId: string, options?: ValueRangeDiffSampleResolveOptions) => {
    beforeYaml: string;
    afterYaml: string;
};
export declare const buildValueRangeDiffOas31ProgrammaticSampleCases: (options?: ValueRangeDiffSampleListOptions) => ValueRangeDiffProgrammaticSampleCase[];
