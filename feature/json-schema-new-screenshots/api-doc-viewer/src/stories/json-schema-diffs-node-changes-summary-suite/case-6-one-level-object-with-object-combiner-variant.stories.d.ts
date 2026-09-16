/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/
 * Object with 2 `oneOf(string, object)` properties, where the object variant is Case 1's schema
 * (first property) and Case 2's schema (second property) - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md. `string` is the combiner's
 * default selection; the "chosen object" story's variant selection is scripted in the paired IT
 * test (case-6-one-level-object-with-object-combiner-variant.it-test.ts) via `page.click()` on
 * the `data-testid` added to `SelectNestedNodeRow`'s option buttons - see the README.
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
export declare const Expanded_root_chosen_object: Story;
export declare const Collapsed_root: Story;
