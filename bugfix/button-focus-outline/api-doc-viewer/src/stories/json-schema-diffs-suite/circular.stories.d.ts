import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: import('./json-schema-diffs-utils').JsonSchemaDiffCaseStoryComponentProps) => import("react").JSX.Element;
    argTypes: {
        beforeYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        afterYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        hideUnchangedNodes: {
            control: {
                type: "boolean";
            };
            table: {
                category: string;
            };
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_001_self_object_description_updated: Story;
export declare const Case_002_self_object_cycle_removed: Story;
export declare const Case_003_self_object_cycle_added: Story;
export declare const Case_004_self_array_description_updated: Story;
export declare const Case_005_self_array_cycle_removed: Story;
export declare const Case_006_self_array_cycle_added: Story;
export declare const Case_007_chain_three_hop_description_updated: Story;
export declare const Case_008_chain_three_hop_cycle_removed: Story;
export declare const Case_009_chain_three_hop_cycle_added: Story;
export declare const Case_010_combiner_variant_cycle_description_updated: Story;
export declare const Case_011_combiner_variant_cycle_cycle_removed: Story;
export declare const Case_012_combiner_variant_cycle_cycle_added: Story;
