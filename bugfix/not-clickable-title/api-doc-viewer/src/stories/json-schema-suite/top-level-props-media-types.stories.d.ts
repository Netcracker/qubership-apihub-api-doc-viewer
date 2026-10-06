import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/JsonSchemaViewer/JsonSchemaViewer').JsonSchemaViewerProps>;
    args: {
        schema: {
            type: string;
            required: string[];
            properties: {
                simple: {
                    type: string;
                    description: string;
                };
                complex: {
                    type: string;
                    description: string;
                    deprecated: boolean;
                };
                nested: {
                    type: string;
                    description: string;
                    properties: {
                        complex: {
                            type: string;
                            description: string;
                        };
                    };
                };
            };
        };
        expandedDepth: number;
        topLevelPropsMediaTypes: {
            complex: string;
            nested: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DetailedMode: Story;
export declare const SimpleMode: Story;
