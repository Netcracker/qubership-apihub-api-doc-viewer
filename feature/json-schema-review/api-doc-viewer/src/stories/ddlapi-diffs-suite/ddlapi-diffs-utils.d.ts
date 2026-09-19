import type { Meta, StoryObj } from "@storybook/react";
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
export type DdlDiffSampleCase = {
    caseId: string;
    beforeSql: string;
    afterSql: string;
};
export type DdlDiffCaseStoryComponentProps = Pick<DdlDiffSampleCase, "caseId" | "beforeSql" | "afterSql">;
export declare const ddlDiffSampleReadonlyArgTypes: {
    caseId: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    beforeSql: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    afterSql: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
};
export declare const DdlDiffSampleStory: (_props: DdlDiffCaseStoryComponentProps) => null;
export type DdlDiffsSamplesStoryMeta = Meta<typeof DdlDiffSampleStory>;
export type DdlDiffsSamplesStoryObj = StoryObj<DdlDiffsSamplesStoryMeta>;
export declare const ddlDiffsSamplesStoryMetaBase: {
    component: (_props: DdlDiffCaseStoryComponentProps) => null;
    argTypes: {
        caseId: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        beforeSql: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        afterSql: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
    };
};
export type RawSqlSources = Record<string, string>;
export declare const collectDdlDiffSampleCases: (beforeFiles: RawSqlSources, afterFiles: RawSqlSources) => DdlDiffSampleCase[];
export declare const createDdlDiffSampleById: <TSample extends DdlDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const resolveTableKey: (caseId: string) => TableKey;
export declare const createDdlDiffCaseStoryFactory: (sampleById: Record<string, DdlDiffSampleCase>) => (caseId: string) => DdlDiffsSamplesStoryObj;
