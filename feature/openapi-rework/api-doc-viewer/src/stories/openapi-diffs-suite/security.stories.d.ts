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
export declare const Case_01_security_added: Story;
export declare const Case_02_security_removed: Story;
export declare const Case_03_document_security_overridden: Story;
export declare const Case_04_document_security_override_removed: Story;
export declare const Case_05_alternative_added: Story;
export declare const Case_06_alternative_removed: Story;
export declare const Case_07_anonymous_alternative_added: Story;
export declare const Case_08_anonymous_alternative_removed: Story;
export declare const Case_09_scheme_added_to_alternative: Story;
export declare const Case_10_scheme_removed_from_alternative: Story;
export declare const Case_11_required_scope_added: Story;
export declare const Case_12_required_scope_removed: Story;
export declare const Case_13_scheme_description_added: Story;
export declare const Case_14_scheme_description_removed: Story;
export declare const Case_15_scheme_type_changed: Story;
export declare const Case_16_scheme_definition_added: Story;
export declare const Case_17_scheme_definition_removed: Story;
export declare const Case_18_api_key_location_changed: Story;
export declare const Case_19_api_key_name_changed: Story;
export declare const Case_20_http_scheme_changed: Story;
export declare const Case_21_bearer_format_added: Story;
export declare const Case_22_bearer_format_removed: Story;
export declare const Case_23_openid_connect_url_changed: Story;
export declare const Case_24_oauth_flow_added: Story;
export declare const Case_25_oauth_flow_removed: Story;
export declare const Case_26_token_url_changed: Story;
export declare const Case_27_refresh_url_added: Story;
export declare const Case_28_refresh_url_removed: Story;
export declare const Case_29_flow_scope_added: Story;
export declare const Case_30_flow_scope_removed: Story;
export declare const Case_31_flow_scope_description_changed: Story;
