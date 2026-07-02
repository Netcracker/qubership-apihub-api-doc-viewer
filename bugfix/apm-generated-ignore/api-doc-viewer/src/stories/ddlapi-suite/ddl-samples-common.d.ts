import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
import type { DisplayMode } from '../../types/DisplayMode';
import type { StoryObj } from "@storybook/react";
import type { DdlSampleCase } from "../utils/ddl-samples-cases";
export type DdlSamplesStoryObj = StoryObj<typeof DdlTableViewer>;
export type DdlCaseStoryFactoryOptions = {
    displayMode?: DisplayMode;
};
export declare const createCaseStoryFactory: (sampleById: Record<string, DdlSampleCase>, options?: DdlCaseStoryFactoryOptions) => (caseId: string) => DdlSamplesStoryObj;
