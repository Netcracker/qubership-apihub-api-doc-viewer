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
export declare const Case_01_required_1_media_type: Story;
export declare const Case_02_optional_1_media_type: Story;
export declare const Case_03_deprecated_1_media_type: Story;
export declare const Case_04_required_2_media_types: Story;
export declare const Case_05_optional_2_media_types: Story;
export declare const Case_06_deprecated_2_media_types: Story;
export declare const Case_07_body_and_schema_descriptions: Story;
