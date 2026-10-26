import { StoryObj } from '@storybook/react-vite';
/**
 * Security scheme cards with "hide unchanged nodes": every scheme kind unchanged (title row plus the
 * three-dots row) and changed (every row), plus cards of one alternative decided one by one.
 * Cases are built from one template and per-scheme fragments (`hasChanges`) in
 * `packages/samples/src/openapi-diffs-hiding-unchanged-nodes.ts`, not stored as YAML.
 * Design: docs/design/openapi/features/hiding-unchanged-nodes.md
 */
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, displayMode, hideUnchangedNodes }: import('../openapi-diffs-suite/OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
    argTypes: {
        hideUnchangedNodes: {
            control: {
                type: "boolean";
            };
            table: {
                category: string;
            };
        };
        displayMode: {
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
        hideUnchangedNodes: true;
        displayMode: import('../..').DisplayMode;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_api_key_header_unchanged: Story;
export declare const Case_02_api_key_header_changed: Story;
export declare const Case_03_api_key_query_unchanged: Story;
export declare const Case_04_api_key_query_changed: Story;
export declare const Case_05_api_key_cookie_unchanged: Story;
export declare const Case_06_api_key_cookie_changed: Story;
export declare const Case_07_http_basic_unchanged: Story;
export declare const Case_08_http_basic_changed: Story;
export declare const Case_09_http_bearer_unchanged: Story;
export declare const Case_10_http_bearer_changed: Story;
export declare const Case_11_openid_connect_unchanged: Story;
export declare const Case_12_openid_connect_changed: Story;
export declare const Case_13_oauth2_single_flow_unchanged: Story;
export declare const Case_14_oauth2_single_flow_changed: Story;
export declare const Case_15_oauth2_all_flows_unchanged: Story;
export declare const Case_16_oauth2_all_flows_changed: Story;
export declare const Case_17_mutual_tls_unchanged: Story;
export declare const Case_18_mutual_tls_changed: Story;
export declare const Case_19_two_schemes_first_unchanged_second_changed: Story;
export declare const Case_20_two_schemes_first_changed_second_unchanged: Story;
export declare const Case_21_three_schemes_all_unchanged: Story;
