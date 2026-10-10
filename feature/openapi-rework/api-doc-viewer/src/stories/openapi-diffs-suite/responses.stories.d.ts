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
export declare const Case_01_response_1xx_added: Story;
export declare const Case_02_response_1xx_removed: Story;
export declare const Case_03_response_2xx_added: Story;
export declare const Case_04_response_2xx_removed: Story;
export declare const Case_05_response_3xx_added: Story;
export declare const Case_06_response_3xx_removed: Story;
export declare const Case_07_response_4xx_added: Story;
export declare const Case_08_response_4xx_removed: Story;
export declare const Case_09_response_5xx_added: Story;
export declare const Case_10_response_5xx_removed: Story;
export declare const Case_11_response_range_added: Story;
export declare const Case_12_response_range_removed: Story;
export declare const Case_13_response_default_added: Story;
export declare const Case_14_response_default_removed: Story;
export declare const Case_15_code_case_renamed: Story;
export declare const Case_16_code_renamed_and_description_changed: Story;
export declare const Case_17_description_changed: Story;
export declare const Case_18_description_changed_non_initial_code: Story;
export declare const Case_19_response_extension_added: Story;
export declare const Case_20_response_extension_removed: Story;
export declare const Case_21_response_extension_changed: Story;
export declare const Case_22_responses_extension_added: Story;
export declare const Case_23_responses_extension_removed: Story;
export declare const Case_24_responses_and_response_extensions_changed: Story;
export declare const Case_25_changes_of_different_severity: Story;
