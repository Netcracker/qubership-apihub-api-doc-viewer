import { RawSampleSources } from './sample-cases';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
export type RawDdlSources = RawSampleSources;
export type DdlSampleCase = {
    caseId: string;
    ddl: string;
    tableKey: TableKey;
};
export declare const DEFAULT_DDL_SAMPLE_TABLE_KEY: TableKey;
export declare const collectDdlSampleCases: (sampleFiles: RawDdlSources, tableKey?: TableKey) => DdlSampleCase[];
