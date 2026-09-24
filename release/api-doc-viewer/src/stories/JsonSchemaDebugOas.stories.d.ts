import type { StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../../node_modules/react';
import { JsonSchemaViewer } from '../components/JsonSchemaViewer/JsonSchemaViewer';
type StoryArgs = ComponentProps<typeof JsonSchemaViewer> & {
    oasText: string;
    refToSchema: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import("..").JsonSchemaViewerProps>;
    parameters: {};
    argTypes: {
        oasText: {
            control: "text";
        };
        refToSchema: {
            control: "text";
        };
    };
    args: {
        oasText: string;
        refToSchema: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const DebugOas30: Story;
