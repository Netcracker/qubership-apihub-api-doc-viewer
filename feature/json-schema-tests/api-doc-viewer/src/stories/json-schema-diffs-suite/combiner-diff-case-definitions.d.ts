import { type CombinerKind } from "../shared/combiner-schema-builder.ts";
export type CombinerDiffCaseDefinition = {
    slug: string;
    before: Record<string, unknown>;
    after: Record<string, unknown>;
    summary: string;
};
export type CombinerDiffCase = CombinerDiffCaseDefinition & {
    caseId: string;
};
/**
 * All combiner diff cases for one combiner kind (matches the sample sub-directory: oneOf / anyOf /
 * allOf). See combiners-cases.md for the full matrix and terminology.
 */
export declare function getCombinerDiffCaseDefinitions(combinerKind: CombinerKind): CombinerDiffCaseDefinition[];
export declare function listCombinerDiffCases(combinerKind: CombinerKind): CombinerDiffCase[];
export declare const toCombinerCaseExportName: (caseId: string) => string;
