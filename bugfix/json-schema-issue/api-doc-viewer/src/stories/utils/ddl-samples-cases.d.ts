import type { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
export type RawDdlSources = Record<string, string>;
export type DdlSampleCase = {
    caseId: string;
    ddl: string;
    tableKey: TableKey;
};
export declare const DEFAULT_DDL_SAMPLE_TABLE_KEY: TableKey;
export declare const extractDdlCaseId: (samplePath: string) => string | undefined;
export declare const collectDdlSampleCases: (sampleFiles: RawDdlSources, tableKey?: TableKey) => DdlSampleCase[];
export declare const createDdlSampleById: (sampleCases: readonly DdlSampleCase[]) => Record<string, DdlSampleCase>;
