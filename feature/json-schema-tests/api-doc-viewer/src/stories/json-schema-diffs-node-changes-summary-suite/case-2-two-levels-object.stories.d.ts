/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/
 * Object with 2 properties - the first is Case 1's schema, the second is unchanged - see
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
export declare const Expanded_root_expanded_first_property: Story;
export declare const Expanded_root_collapsed_first_property: Story;
export declare const Collapsed_root: Story;
