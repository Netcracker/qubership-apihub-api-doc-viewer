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
export declare const DefaultMessageTitleIfNothing: Story;
export declare const DefaultMessageTitleIfName: Story;
export declare const DefaultMessageTitleIfTitleAndName: Story;
export declare const DefaultMessageDescriptionIfNothing: Story;
export declare const DefaultMessageDescriptionIfSummary: Story;
export declare const DefaultMessageDescriptionIfSummaryAndDescription: Story;
export declare const DefaultOperationBindingVersionIfNothing: Story;
export declare const DefaultChannelBindingVersionIfNothing: Story;
export declare const DefaultMessageBindingVersionIfNothing: Story;
