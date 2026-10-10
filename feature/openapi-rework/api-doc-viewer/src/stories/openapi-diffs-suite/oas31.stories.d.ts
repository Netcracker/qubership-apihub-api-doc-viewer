import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, displayMode, hideUnchangedNodes }: import('./OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
    argTypes: {
        readonly displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly import('../..').DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
    };
    args: {
        displayMode: import('../..').DisplayMode;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_nullable_via_type_array: Story;
export declare const Case_02_mutual_tls_alternative_added: Story;
export declare const Case_03_mutual_tls_alternative_removed: Story;
export declare const Case_04_role_scopes_added: Story;
export declare const Case_05_role_scopes_removed: Story;
export declare const Case_06_responses_added: Story;
export declare const Case_07_responses_removed: Story;
