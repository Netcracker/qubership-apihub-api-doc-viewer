import { type CombinerKind } from "../shared/combiner-schema-builder";
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
 * allOf). See packages/samples/json-schema-diffs/{oneOf,anyOf,allOf}/README.md for the case matrix.
 */
export declare function getCombinerDiffCaseDefinitions(combinerKind: CombinerKind): CombinerDiffCaseDefinition[];
export declare function listCombinerDiffCases(combinerKind: CombinerKind): CombinerDiffCase[];
export declare const toCombinerCaseExportName: (caseId: string) => string;
