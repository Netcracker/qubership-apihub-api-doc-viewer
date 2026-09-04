/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/
 * Object with 2 `oneOf(string, array)` properties, where the array variant is Case 3's schema
 * (first property) and Case 4's schema (second property) - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md. `string` is the combiner's
 * default selection; the "chosen array" stories' variant selection (and, for the "expanded
 * items" story, the array's own `items` expand toggle) is scripted in the paired IT test
 * (case-7-one-level-object-with-array-combiner-variant.it-test.ts) via `page.click()` on the
 * `data-testid`s added to `SelectNestedNodeRow`'s option buttons and `ExpandingCaret` - see the
 * README.
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
export declare const Expanded_root_chosen_array_expanded_items: Story;
export declare const Expanded_root_chosen_array_collapsed_items: Story;
export declare const Expanded_root_default_choice: Story;
export declare const Collapsed_root: Story;
