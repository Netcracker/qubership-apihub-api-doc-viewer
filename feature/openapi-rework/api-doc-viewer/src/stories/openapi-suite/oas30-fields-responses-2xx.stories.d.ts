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
export declare const Case_01_status_only: Story;
export declare const Case_02_description_only: Story;
export declare const Case_03_headers_only: Story;
export declare const Case_04_body_1_media_type: Story;
export declare const Case_05_body_2_media_types: Story;
export declare const Case_06_body_deprecated_1_media_type: Story;
export declare const Case_07_body_deprecated_2_media_types: Story;
export declare const Case_08_description_and_headers: Story;
export declare const Case_09_description_and_body: Story;
export declare const Case_10_headers_and_body: Story;
export declare const Case_11_description_and_body_schema_description: Story;
