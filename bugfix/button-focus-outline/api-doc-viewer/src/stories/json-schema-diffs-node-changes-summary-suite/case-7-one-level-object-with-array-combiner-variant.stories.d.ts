import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml }: {
        beforeYaml: string;
        afterYaml: string;
    }) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Expanded_root_chosen_array_expanded_items: Story;
export declare const Expanded_root_chosen_array_collapsed_items: Story;
export declare const Expanded_root_default_choice: Story;
export declare const Collapsed_root: Story;
