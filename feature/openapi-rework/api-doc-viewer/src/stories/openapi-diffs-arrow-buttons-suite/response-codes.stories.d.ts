import { StoryObj } from '@storybook/react-vite';
/**
 * Response Codes strip with diffs: one option → every option (the changed side overflows) and back (the origin
 * side overflows); each side scrolls on its own. Cases are built in
 * `packages/samples/src/openapi-arrow-buttons.ts`, not stored as YAML.
 * Design: docs/design/shared/features/arrow-scroll-strip.md
 */
declare const meta: {
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
export declare const Case_01_single_to_every_option: Story;
export declare const Case_02_every_to_single_option: Story;
