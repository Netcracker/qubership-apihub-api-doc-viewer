import { type CombinerKind } from '../shared/combiner-schema-builder';
export type CombinerPlainCaseDefinition = {
    slug: string;
    schema: Record<string, unknown>;
    summary: string;
};
export type CombinerPlainCase = CombinerPlainCaseDefinition & {
    caseId: string;
};
/**
 * Suite 1 "Simple combiner" + Suite 2 "Complex combiner (2 levels)" cases for one combiner kind
 * (matches the sample sub-directory: oneOf / anyOf / allOf). See packages/samples/json-schema/README.md for the
 * terminology and the per-combiner READMEs for the case matrix.
 */
export declare function getCombinerPlainCaseDefinitions(combinerKind: CombinerKind): CombinerPlainCaseDefinition[];
export declare function listCombinerPlainCases(combinerKind: CombinerKind): CombinerPlainCase[];
export declare function resolveCombinerPlainSchema(combinerKind: CombinerKind, caseId: string): Record<string, unknown>;
export declare const toCombinerCaseExportName: (caseId: string) => string;
