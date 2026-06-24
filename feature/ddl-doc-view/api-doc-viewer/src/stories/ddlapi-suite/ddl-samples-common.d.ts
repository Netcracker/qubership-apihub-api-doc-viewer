import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
import type { StoryObj } from "@storybook/react";
import type { DdlSampleCase } from "../utils/ddl-samples-cases";
export type DdlSamplesStoryObj = StoryObj<typeof DdlTableViewer>;
export declare const createCaseStoryFactory: (sampleById: Record<string, DdlSampleCase>) => (caseId: string) => DdlSamplesStoryObj;
