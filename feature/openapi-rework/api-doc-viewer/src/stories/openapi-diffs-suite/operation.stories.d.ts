import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes }: import('./OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_summary_changed: Story;
export declare const Case_02_description_added: Story;
export declare const Case_03_external_docs_added: Story;
export declare const Case_04_external_docs_url_changed: Story;
export declare const Case_05_path_parameter_renamed: Story;
export declare const Case_06_whole_operation_added: Story;
export declare const Case_07_extensions_changed: Story;
export declare const Case_08_operation_id_changed: Story;
export declare const Case_09_deprecated_added: Story;
export declare const Case_10_deprecated_added_without_summary: Story;
