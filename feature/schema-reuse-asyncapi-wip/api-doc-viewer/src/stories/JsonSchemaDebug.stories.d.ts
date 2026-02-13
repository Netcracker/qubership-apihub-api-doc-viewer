import type { StoryObj } from '@storybook/react';
import { JsonSchemaViewer } from '../components/JsonSchemaViewer/JsonSchemaViewer';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof JsonSchemaViewer> & {
    schemaText: string;
    componentsText?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import("../components/JsonSchemaViewer/JsonSchemaViewer").JsonSchemaViewerProps>;
    parameters: {};
    argTypes: {
        schemaText: {
            control: "text";
        };
        componentsText: {
            control: "text";
        };
        schema: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
    };
    args: {
        schemaText: string;
        componentsText: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
