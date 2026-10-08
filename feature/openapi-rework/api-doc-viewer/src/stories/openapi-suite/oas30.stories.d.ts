import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ sampleYaml, path, method, displayMode, noHeading }: import('./OpenApiSampleStory').OpenApiSampleStoryProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_full_operation: Story;
export declare const Case_01_full_operation_simple_mode: Story;
export declare const Case_01_full_operation_no_heading: Story;
export declare const Case_02_minimal_operation: Story;
export declare const Case_03_security_inherited_from_document: Story;
export declare const Case_03_security_three_alternatives: Story;
export declare const Case_03_security_disabled_deprecated: Story;
export declare const Case_04_parameters_sources: Story;
export declare const Case_05_response_codes_palette: Story;
