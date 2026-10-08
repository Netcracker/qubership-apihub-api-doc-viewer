import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ sampleYaml, path, method, displayMode, noHeading }: import('./OpenApiSampleStory').OpenApiSampleStoryProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_01_full_operation: Story;
export declare const Case_02_no_responses: Story;
export declare const Case_03_security_mutual_tls_and_roles: Story;
export declare const Case_04_reference_overrides_and_path_items: Story;
