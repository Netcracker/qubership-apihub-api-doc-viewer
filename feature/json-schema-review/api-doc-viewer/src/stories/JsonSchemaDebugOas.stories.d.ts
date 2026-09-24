import { JsonSchemaNextViewer } from '../components/JsonSchemaNextViewer/JsonSchemaNextViewer';
import type { StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof JsonSchemaNextViewer> & {
    oasText: string;
    refToSchema: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('../components/JsonSchemaNextViewer/JsonSchemaNextViewer').JsonSchemaNextViewerProps>;
    parameters: {};
    argTypes: {
        oasText: {
            control: "text";
        };
        refToSchema: {
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
        oasText: string;
        refToSchema: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const DebugOas30: Story;
