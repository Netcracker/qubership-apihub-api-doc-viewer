import { JsonSchemaDiffsViewer } from '../components/JsonSchemaViewer/JsonSchemaDiffsViewer';
import { StoryObj } from '@storybook/react-vite';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof JsonSchemaDiffsViewer> & {
    beforeSchemaText: string;
    afterSchemaText: string;
    beforeComponentsText?: string;
    afterComponentsText?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('../components/JsonSchemaViewer/JsonSchemaDiffsViewer').JsonSchemaDiffsViewerProps>;
    parameters: {};
    argTypes: {
        beforeSchemaText: {
            control: "text";
        };
        afterSchemaText: {
            control: "text";
        };
        beforeComponentsText: {
            control: "text";
        };
        afterComponentsText: {
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
        diffMetaKeys: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
    };
    args: {
        beforeSchemaText: string;
        afterSchemaText: string;
        beforeComponentsText: string;
        afterComponentsText: string;
        diffMetaKeys: {
            diffsMetaKey: symbol;
            aggregatedDiffsMetaKey: symbol;
        };
        hideUnchangedNodes: false;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
