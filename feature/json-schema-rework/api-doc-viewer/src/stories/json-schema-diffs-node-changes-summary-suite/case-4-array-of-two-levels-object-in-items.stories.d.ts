/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/
 * Array whose `items` schema is Case 2 - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md.
 */
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml }: {
        beforeYaml: string;
        afterYaml: string;
    }) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Expanded_root_expanded_items: Story;
export declare const Expanded_root_collapsed_items: Story;
export declare const Collapsed_root: Story;
