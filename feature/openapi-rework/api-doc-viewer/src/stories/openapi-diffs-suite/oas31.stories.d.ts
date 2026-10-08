import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes }: import('./OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_nullable_via_type_array: Story;
export declare const Case_02_mutual_tls_alternative_added: Story;
export declare const Case_03_role_scopes_on_api_key: Story;
