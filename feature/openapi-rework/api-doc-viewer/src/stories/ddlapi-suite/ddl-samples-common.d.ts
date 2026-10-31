import { Meta, StoryObj } from '@storybook/react-vite';
import { DdlSampleCase } from '../utils/ddl-samples-cases';
import { DdlCaseStoryComponentProps } from './ddl-samples-utils';
export declare const DdlSampleStory: (_props: DdlCaseStoryComponentProps) => null;
export type DdlSamplesStoryMeta = Meta<typeof DdlSampleStory>;
export type DdlSamplesStoryObj = StoryObj<DdlSamplesStoryMeta>;
export declare const ddlSamplesStoryMetaBase: {
    component: (_props: DdlCaseStoryComponentProps) => null;
    argTypes: {
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly import('../..').DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
        caseId: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        sampleSql: {
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
export type DdlCaseStoryFactoryOptions = {
    perCase?: Partial<Record<string, {
        noHeading?: boolean;
    }>>;
};
export declare const createCaseStoryFactory: (sampleById: Record<string, DdlSampleCase>, options?: DdlCaseStoryFactoryOptions) => (caseId: string) => DdlSamplesStoryObj;
