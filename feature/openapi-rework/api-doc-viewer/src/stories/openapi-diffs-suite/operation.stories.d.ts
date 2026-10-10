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
export declare const Case_01_summary_added: Story;
export declare const Case_02_summary_removed: Story;
export declare const Case_03_summary_changed: Story;
export declare const Case_04_operation_id_added: Story;
export declare const Case_05_operation_id_removed: Story;
export declare const Case_06_operation_id_changed: Story;
export declare const Case_07_description_added: Story;
export declare const Case_08_description_removed: Story;
export declare const Case_09_description_changed: Story;
export declare const Case_10_external_docs_added: Story;
export declare const Case_11_external_docs_removed: Story;
export declare const Case_12_external_docs_url_changed: Story;
export declare const Case_13_external_docs_description_changed: Story;
export declare const Case_14_deprecated_added: Story;
export declare const Case_15_deprecated_removed: Story;
export declare const Case_16_deprecated_added_without_summary: Story;
export declare const Case_17_deprecated_removed_without_summary: Story;
export declare const Case_18_extension_added: Story;
export declare const Case_19_extension_removed: Story;
export declare const Case_20_extension_changed: Story;
export declare const Case_21_extensions_added: Story;
export declare const Case_22_extensions_removed: Story;
export declare const Case_23_operation_added: Story;
export declare const Case_24_operation_removed: Story;
