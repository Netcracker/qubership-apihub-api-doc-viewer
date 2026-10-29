import { StoryObj } from '@storybook/react-vite';
/**
 * Response Codes strip: one option (both arrows disabled) and every option (the strip overflows; the ITs click
 * the right arrow to the median option and to the right edge). Cases are built in
 * `packages/samples/src/openapi-arrow-buttons.ts`, not stored as YAML.
 * Design: docs/design/shared/features/arrow-scroll-strip.md
 */
declare const meta: {
    title: string;
    component: ({ sampleYaml, path, method, methodTemplate, displayMode, noHeading }: import('../openapi-suite/OpenApiSampleStory').OpenApiSampleStoryProps) => import("react").JSX.Element;
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
export declare const Case_01_single_option: Story;
export declare const Case_02_every_option: Story;
