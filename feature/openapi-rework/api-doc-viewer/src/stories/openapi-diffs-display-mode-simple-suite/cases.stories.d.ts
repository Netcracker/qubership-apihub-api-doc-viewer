import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    id: string;
    title: string;
    component: ({ beforeYaml, afterYaml, displayMode, hideUnchangedNodes }: import('../openapi-diffs-suite/OpenApiDiffSampleStory').OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
    argTypes: {
        readonly hideUnchangedNodes: {
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
        hideUnchangedNodes: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_operation_description: Story;
export declare const Case_02_request_body_description: Story;
export declare const Case_03_response_description: Story;
export declare const Case_04_security_scheme_description: Story;
export declare const Case_05_security_scope_description: Story;
export declare const Case_06_parameter_description: Story;
export declare const Case_07_parameter_media_type: Story;
export declare const Case_08_body_schema_description: Story;
export declare const Case_09_response_header_description: Story;
