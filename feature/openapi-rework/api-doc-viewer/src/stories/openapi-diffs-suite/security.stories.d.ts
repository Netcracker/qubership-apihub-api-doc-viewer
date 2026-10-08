import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes }: import('./OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_alternative_added: Story;
export declare const Case_02_scope_added: Story;
export declare const Case_03_scheme_added_to_alternative: Story;
export declare const Case_04_scheme_definition_changed: Story;
export declare const Case_05_root_security_overridden: Story;
export declare const Case_06_security_removed: Story;
