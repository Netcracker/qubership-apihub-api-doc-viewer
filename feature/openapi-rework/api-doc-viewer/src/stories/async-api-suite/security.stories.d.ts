import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./AsyncApiSecuritySampleStory').AsyncApiSecuritySampleStoryProps>;
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
export declare const Case_01_user_password: Story;
export declare const Case_02_api_key_in_user: Story;
export declare const Case_03_api_key_in_password: Story;
export declare const Case_04_x509: Story;
export declare const Case_05_symmetric_encryption: Story;
export declare const Case_06_asymmetric_encryption: Story;
export declare const Case_07_http_api_key_header: Story;
export declare const Case_08_http_api_key_query: Story;
export declare const Case_09_http_api_key_cookie: Story;
export declare const Case_10_http_basic: Story;
export declare const Case_11_http_bearer_format: Story;
export declare const Case_12_oauth2_implicit_required_scope: Story;
export declare const Case_13_oauth2_password_no_required_scopes: Story;
export declare const Case_14_oauth2_client_credentials_required_scope: Story;
export declare const Case_15_oauth2_authorization_code_all_urls: Story;
export declare const Case_16_oauth2_several_flows_undeclared_scope: Story;
export declare const Case_17_openid_connect_required_scopes: Story;
export declare const Case_18_sasl_plain: Story;
export declare const Case_19_scram_sha_256: Story;
export declare const Case_20_scram_sha_512: Story;
export declare const Case_21_gssapi: Story;
export declare const Case_22_scheme_description: Story;
export declare const Case_23_several_alternatives: Story;
export declare const Case_24_inline_scheme: Story;
export declare const Case_25_server_security: Story;
export declare const Case_26_operation_and_server_security: Story;
