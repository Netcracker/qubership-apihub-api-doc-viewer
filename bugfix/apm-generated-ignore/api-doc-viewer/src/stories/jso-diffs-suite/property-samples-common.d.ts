import type { Meta, StoryObj } from "@storybook/react";
declare const sampleCases: import("../utils/diffs-samples-cases").SampleCase[];
export declare const sampleById: Record<string, (typeof sampleCases)[number]>;
export type JsoPropertySamplesStoryProps = {
    caseId: string;
};
export declare const JsoPropertySamplesStory: ({ caseId }: JsoPropertySamplesStoryProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export type JsoPropertySamplesStoryMeta = Meta<typeof JsoPropertySamplesStory>;
export type JsoPropertySamplesStoryObj = StoryObj<JsoPropertySamplesStoryMeta>;
export declare const createCaseStory: (caseId: string) => JsoPropertySamplesStoryObj;
export {};
