import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, displayMode, }: import('./json-schema-diffs-utils').JsonSchemaDiffCaseStoryComponentProps) => import("react").JSX.Element;
    argTypes: {
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly import('../..').DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
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
export declare const Case_001_pattern_added: Story;
export declare const Case_002_pattern_removed: Story;
export declare const Case_003_pattern_replaced: Story;
