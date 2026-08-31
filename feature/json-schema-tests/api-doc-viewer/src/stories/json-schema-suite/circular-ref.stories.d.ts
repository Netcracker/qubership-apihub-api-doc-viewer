import type { StoryObj } from "@storybook/react";
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/JsonSchemaViewer/JsonSchemaViewer').JsonSchemaViewerProps>;
    parameters: {};
    argTypes: {};
    args: {
        schema: unknown;
        expandedDepth: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Cycled: Story;
