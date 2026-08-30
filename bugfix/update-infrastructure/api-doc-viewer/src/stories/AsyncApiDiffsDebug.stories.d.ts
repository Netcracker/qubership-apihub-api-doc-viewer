import { AsyncApiOperationDiffsViewer } from '../components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer';
import { StoryObj } from '@storybook/react-vite';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof AsyncApiOperationDiffsViewer> & {
    beforeSourceText: string;
    afterSourceText: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('..').AsyncApiOperationDiffsViewerProps>;
    argTypes: {
        mergedSource: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
        beforeSourceText: {
            control: "text";
        };
        afterSourceText: {
            control: "text";
        };
        displayMode: {
            control: "select";
            options: string[];
            defaultValue: string;
        };
    };
    args: {
        beforeSourceText: string;
        afterSourceText: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
