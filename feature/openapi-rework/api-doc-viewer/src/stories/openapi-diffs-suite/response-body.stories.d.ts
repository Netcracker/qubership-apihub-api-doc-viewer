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
export declare const Case_01_body_added: Story;
export declare const Case_02_body_removed: Story;
export declare const Case_08_media_type_added: Story;
export declare const Case_09_media_type_removed: Story;
export declare const Case_10_media_type_renamed: Story;
export declare const Case_15_schema_added: Story;
export declare const Case_16_schema_removed: Story;
export declare const Case_17_schema_property_added: Story;
export declare const Case_18_schema_property_removed: Story;
export declare const Case_19_schema_type_changed: Story;
export declare const Case_22_media_type_extension_added: Story;
export declare const Case_23_media_type_extension_removed: Story;
export declare const Case_25_media_type_extension_shadows_schema_root: Story;
