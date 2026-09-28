import { JsonSchemaNextViewer } from '../components/JsonSchemaNextViewer/JsonSchemaNextViewer';
import type { StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof JsonSchemaNextViewer> & {
    schemaText: string;
    componentsText?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('../components/JsonSchemaNextViewer/JsonSchemaNextViewer').JsonSchemaNextViewerProps>;
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
