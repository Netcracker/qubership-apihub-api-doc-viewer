import type { CombinerKind } from "../shared/combiner-schema-builder.ts";
import type { CombinerDiffCase } from "./combiner-diff-case-definitions";
export type { CombinerDiffCase, CombinerDiffCaseDefinition, } from "./combiner-diff-case-definitions";
export { getCombinerDiffCaseDefinitions, listCombinerDiffCases, toCombinerCaseExportName, } from "./combiner-diff-case-definitions";
export declare const findCombinerDiffCase: (combinerKind: CombinerKind, caseId: string) => CombinerDiffCase;
export declare const resolveCombinerDiffSchemas: (combinerKind: CombinerKind, caseId: string) => {
    before: Record<string, unknown>;
    after: Record<string, unknown>;
};
export declare const resolveCombinerDiffYamlPair: (combinerKind: CombinerKind, caseId: string) => {
    beforeYaml: string;
    afterYaml: string;
};
export type CombinerDiffProgrammaticSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
    summary: string;
};
export declare const buildCombinerDiffProgrammaticSampleCases: (combinerKind: CombinerKind) => CombinerDiffProgrammaticSampleCase[];
