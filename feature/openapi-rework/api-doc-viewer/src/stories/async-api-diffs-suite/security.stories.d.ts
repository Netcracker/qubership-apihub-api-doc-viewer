import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./AsyncApiSecurityDiffSampleStory').AsyncApiSecurityDiffSampleStoryProps>;
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
export declare const Case_1_1_operation_security_added: Story;
export declare const Case_1_2_operation_security_removed: Story;
export declare const Case_1_3_alternative_added: Story;
export declare const Case_1_4_alternative_removed: Story;
export declare const Case_1_5_scheme_description_added: Story;
export declare const Case_1_6_scheme_description_removed: Story;
export declare const Case_1_7_scheme_description_changed: Story;
export declare const Case_1_8_scheme_type_changed: Story;
export declare const Case_1_9_http_api_key_location_changed: Story;
export declare const Case_1_10_http_api_key_name_changed: Story;
export declare const Case_1_11_api_key_location_changed: Story;
export declare const Case_1_12_http_scheme_changed: Story;
export declare const Case_1_13_bearer_format_added: Story;
export declare const Case_1_14_bearer_format_removed: Story;
export declare const Case_1_15_openid_connect_url_changed: Story;
export declare const Case_1_16_required_scope_added: Story;
export declare const Case_1_17_required_scope_removed: Story;
export declare const Case_1_18_oauth_flow_added: Story;
export declare const Case_1_19_oauth_flow_removed: Story;
export declare const Case_1_20_token_url_changed: Story;
export declare const Case_1_21_refresh_url_added: Story;
export declare const Case_1_22_refresh_url_removed: Story;
export declare const Case_1_23_flow_scope_added: Story;
export declare const Case_1_24_flow_scope_removed: Story;
export declare const Case_1_25_flow_scope_description_changed: Story;
export declare const Case_2_1_server_security_added: Story;
export declare const Case_2_2_server_security_removed: Story;
export declare const Case_2_3_server_alternative_added: Story;
export declare const Case_2_4_server_alternative_removed: Story;
export declare const Case_2_5_server_scheme_description_changed: Story;
export declare const Case_2_6_server_scheme_type_changed: Story;
export declare const Case_2_7_server_with_security_added: Story;
export declare const Case_2_8_server_with_security_removed: Story;
