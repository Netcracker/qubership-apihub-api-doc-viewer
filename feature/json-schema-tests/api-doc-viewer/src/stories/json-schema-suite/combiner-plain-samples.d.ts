import type { CombinerKind } from "../shared/combiner-schema-builder.ts";
export type { CombinerPlainCase, CombinerPlainCaseDefinition, } from "./combiner-plain-case-definitions";
export { getCombinerPlainCaseDefinitions, listCombinerPlainCases, resolveCombinerPlainSchema, toCombinerCaseExportName, } from "./combiner-plain-case-definitions";
export type CombinerPlainProgrammaticSampleCase = {
    caseId: string;
    schema: Record<string, unknown>;
    summary: string;
};
export declare const buildCombinerPlainProgrammaticSampleCases: (combinerKind: CombinerKind) => CombinerPlainProgrammaticSampleCase[];
