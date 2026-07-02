import { DdlTableDiffsViewer } from '../../components/DdlTableViewer/DdlTableDiffsViewer';
import type { StoryObj } from "@storybook/react";
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
export type DdlDiffSampleCase = {
    caseId: string;
    beforeSql: string;
    afterSql: string;
};
export type RawSqlSources = Record<string, string>;
export declare const collectDdlDiffSampleCases: (beforeFiles: RawSqlSources, afterFiles: RawSqlSources) => DdlDiffSampleCase[];
export declare const createDdlDiffSampleById: <TSample extends DdlDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const resolveTableKey: (caseId: string) => TableKey;
export type DdlDiffsSamplesStoryObj = StoryObj<typeof DdlTableDiffsViewer>;
export declare const createDdlDiffCaseStoryFactory: (sampleById: Record<string, DdlDiffSampleCase>) => (caseId: string) => DdlDiffsSamplesStoryObj;
