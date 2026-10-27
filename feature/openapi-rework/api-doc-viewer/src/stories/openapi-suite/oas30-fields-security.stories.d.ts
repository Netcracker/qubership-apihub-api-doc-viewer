import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ sampleYaml, path, method, methodTemplate, displayMode, noHeading }: import('./OpenApiSampleStory').OpenApiSampleStoryProps) => import("react").JSX.Element;
    argTypes: {
        readonly autoSwitch: {
            readonly control: {
                readonly type: "boolean";
            };
            readonly description: "Select the options the case covers (`switchTo`) on mount.";
            readonly table: {
                readonly category: "Case";
            };
        };
        readonly noHeading: {
            readonly control: {
                readonly type: "boolean";
            };
            readonly table: {
                readonly category: "Viewer";
            };
        };
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
        autoSwitch: boolean;
        noHeading: boolean;
    };
    play: (context: {
        canvasElement: HTMLElement;
        args: {
            switchTo?: readonly string[];
            autoSwitch?: boolean;
        };
    }) => Promise<void>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_api_key_header: Story;
export declare const Case_02_api_key_query: Story;
export declare const Case_03_api_key_cookie: Story;
export declare const Case_04_http_basic: Story;
export declare const Case_05_http_bearer: Story;
export declare const Case_06_http_bearer_format: Story;
export declare const Case_07_oauth2_implicit_required_scope: Story;
export declare const Case_08_oauth2_implicit_optional_scope: Story;
export declare const Case_09_oauth2_password_required_scope: Story;
export declare const Case_10_oauth2_password_optional_scope: Story;
export declare const Case_11_oauth2_client_credentials_required_scope: Story;
export declare const Case_12_oauth2_client_credentials_optional_scope: Story;
export declare const Case_13_oauth2_authorization_code_required_scope: Story;
export declare const Case_14_oauth2_authorization_code_optional_scope: Story;
export declare const Case_15_openid_connect_required_scope: Story;
export declare const Case_16_openid_connect_no_required_scopes: Story;
export declare const Case_17_scheme_description: Story;
