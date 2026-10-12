import { Meta, StoryObj } from '@storybook/react-vite';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
import { RawSampleSources } from '../utils/sample-cases';
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
export type RawSqlSources = RawSampleSources;
export declare const collectDdlDiffSampleCases: (beforeFiles: RawSqlSources, afterFiles: RawSqlSources) => DdlDiffSampleCase[];
export declare const resolveTableKey: (caseId: string) => TableKey;
export declare const createDdlDiffCaseStoryFactory: (sampleById: Record<string, DdlDiffSampleCase>) => (caseId: string) => DdlDiffsSamplesStoryObj;
