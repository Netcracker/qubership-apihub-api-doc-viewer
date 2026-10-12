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
export declare const Case_001_examples_two_added: Story;
export declare const Case_002_examples_two_removed: Story;
export declare const Case_003_examples_one_appended: Story;
export declare const Case_004_examples_one_removed: Story;
export declare const Case_005_examples_two_unchanged: Story;
