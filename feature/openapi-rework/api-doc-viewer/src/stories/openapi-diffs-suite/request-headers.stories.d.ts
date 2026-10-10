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
export declare const Case_01_entry_added: Story;
export declare const Case_02_entry_removed: Story;
export declare const Case_03_entry_renamed: Story;
export declare const Case_04_required_added: Story;
export declare const Case_05_required_removed: Story;
export declare const Case_06_description_added: Story;
export declare const Case_07_description_removed: Story;
export declare const Case_08_description_changed: Story;
export declare const Case_09_deprecated_added: Story;
export declare const Case_10_deprecated_removed: Story;
export declare const Case_11_schema_to_content: Story;
export declare const Case_12_content_to_schema: Story;
export declare const Case_13_content_media_type_renamed: Story;
export declare const Case_14_extension_added: Story;
export declare const Case_15_extension_removed: Story;
export declare const Case_16_extension_changed: Story;
export declare const Case_17_extension_moved_to_schema: Story;
export declare const Case_18_extension_moved_to_entry: Story;
export declare const Case_19_all_added: Story;
export declare const Case_20_all_removed: Story;
export declare const Case_21_description_moved_entry_to_schema: Story;
export declare const Case_22_description_moved_schema_to_entry: Story;
export declare const Case_23_description_entry_removed_schema_added: Story;
export declare const Case_24_description_schema_removed_entry_added: Story;
export declare const Case_25_description_both_places_changed: Story;
export declare const Case_26_description_schema_changed_under_entry: Story;
