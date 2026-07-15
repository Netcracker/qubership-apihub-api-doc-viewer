import type { DisplayMode } from '../../types/DisplayMode';
import type { Meta, StoryObj } from "@storybook/react";
import type { DdlSampleCase } from "../utils/ddl-samples-cases";
import { type DdlCaseStoryComponentProps } from "./ddl-samples-utils";
export declare const DdlSampleStory: (_props: DdlCaseStoryComponentProps) => null;
export type DdlSamplesStoryMeta = Meta<typeof DdlSampleStory>;
export type DdlSamplesStoryObj = StoryObj<DdlSamplesStoryMeta>;
export declare const ddlSamplesStoryMetaBase: {
    component: (_props: DdlCaseStoryComponentProps) => null;
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
    displayMode?: DisplayMode;
    perCase?: Partial<Record<string, {
        noHeading?: boolean;
    }>>;
};
export declare const createCaseStoryFactory: (sampleById: Record<string, DdlSampleCase>, options?: DdlCaseStoryFactoryOptions) => (caseId: string) => DdlSamplesStoryObj;
