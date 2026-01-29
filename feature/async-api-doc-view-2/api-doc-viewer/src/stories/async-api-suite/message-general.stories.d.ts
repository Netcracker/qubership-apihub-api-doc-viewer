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
export declare const SendOperationWithMessageWithNothing: Story;
export declare const SendOperationWithMessageWithName: Story;
export declare const SendOperationWithMessageWithTitle: Story;
export declare const SendOperationWithMessageWithDescription: Story;
export declare const SendOperationWithMessageWithNameAndDescription: Story;
export declare const SendOperationWithMessageWithTitleAndDescription: Story;
export declare const SendOperationWithMessageWithNameAndTitleAndDescription: Story;
export declare const SendOperationWithMessageWithPrimitiveHeaders: Story;
export declare const SendOperationWithMessageWithObjectiveHeaders: Story;
export declare const SendOperationWithMessageWithPrimitivePayload: Story;
export declare const SendOperationWithMessageWithObjectivePayload: Story;
export declare const SendOperationWithMessageWithPrimitiveHeadersAndPayload: Story;
export declare const SendOperationWithMessageWithObjectiveHeadersAndPayload: Story;
export declare const SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload: Story;
export declare const SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload: Story;
export declare const SendOperationWithMessageWithDescriptionAndHeaders: Story;
export declare const SendOperationWithMessageWithDescriptionAndPayload: Story;
export declare const SendOperationWithTwoMessagesWithNames: Story;
export declare const SendOperationWithDescriptionAndMessageWithNothing: Story;
export declare const SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty: Story;
