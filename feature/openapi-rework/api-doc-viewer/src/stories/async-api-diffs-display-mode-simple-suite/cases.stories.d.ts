import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../async-api-diffs-suite/AsyncApiSecurityDiffSampleStory').AsyncApiSecurityDiffSampleStoryProps>;
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
export declare const Case_01_operation_summary: Story;
export declare const Case_02_operation_description: Story;
export declare const Case_03_message_summary: Story;
export declare const Case_04_message_description: Story;
export declare const Case_05_channel_summary: Story;
export declare const Case_06_channel_description: Story;
export declare const Case_07_server_summary: Story;
export declare const Case_08_server_description: Story;
export declare const Case_09_security_scheme_description: Story;
export declare const Case_10_security_scope_description: Story;
export declare const Case_11_payload_schema_description: Story;
export declare const Case_12_headers_schema_description: Story;
export declare const Case_13_channel_parameter_description: Story;
export declare const Case_14_channel_parameter_location: Story;
export declare const Case_15_bindings_schema_description: Story;
