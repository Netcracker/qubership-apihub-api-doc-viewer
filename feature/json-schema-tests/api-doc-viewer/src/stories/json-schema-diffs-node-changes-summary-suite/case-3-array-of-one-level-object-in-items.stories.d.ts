/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/
 * Array whose `items` schema is Case 1 - see
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
export declare const Expanded_root: Story;
export declare const Collapsed_root: Story;
