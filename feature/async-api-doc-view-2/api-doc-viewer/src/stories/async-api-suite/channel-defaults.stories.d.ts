/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/AsyncApiOperationViewer/AsyncApiOperationViewer').AsyncApiOperationViewerProps>;
    parameters: {};
    argTypes: {
        source: {
            control: "object";
        };
    };
    args: {
        source: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultChannelTitle: Story;
export declare const DefaultChannelDescriptionIfNothing: Story;
export declare const DefaultChannelDescriptionIfSummary: Story;
export declare const DefaultChannelDescriptionIfSummaryAndDescription: Story;
