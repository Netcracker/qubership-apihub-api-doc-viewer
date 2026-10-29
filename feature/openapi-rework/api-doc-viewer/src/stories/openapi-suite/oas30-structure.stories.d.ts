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
export declare const Case_01_path_item_parameters_with_override: Story;
export declare const Case_02_ref_parameter_body_response: Story;
export declare const Case_03_ignored_headers_shown: Story;
export declare const Case_04_response_code_order: Story;
export declare const Case_05_security_inherited_from_document: Story;
export declare const Case_06_security_disabled: Story;
export declare const Case_07_security_anonymous_alternative: Story;
export declare const Case_08_deprecated_operation: Story;
export declare const Case_09_deprecated_operation_without_summary: Story;
export declare const Case_10_security_anonymous_only: Story;
