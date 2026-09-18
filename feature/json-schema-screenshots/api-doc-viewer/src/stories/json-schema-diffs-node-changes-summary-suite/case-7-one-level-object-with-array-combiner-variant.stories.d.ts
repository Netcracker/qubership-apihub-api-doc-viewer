/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/
 * Object with 2 `oneOf(string, array)` properties, where the array variant is Case 3's schema
 * (first property) and Case 4's schema (second property) - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md. `string` is the combiner's
 * default selection; the "chosen array" stories use `createNodeChangesSummaryCaseStoryWithChangedVariant`
 * so both properties' combiners auto-switch to their changed (array) variant on mount, via the
 * shared `switchCombinerNodesToChangedVariant` (index-based `json-schema-combiner-option-{index}`
 * testids on CombinerSelectorRow, discovered generically rather than scoped per-property - see
 * that function's own doc comment for why index collisions across properties/diff panes don't
 * matter for it). "Default choice" and "Collapsed root" intentionally keep the plain
 * `createNodeChangesSummaryCaseStory` (no switch) - they exist specifically to show the
 * combiner's default, unswitched selection. There is no items-expand step: a combiner-leaf array
 * never gets an expandable `items` child in the current JsonSchemaNextViewer (see the IT test's
 * comment), so "expanded items" and "collapsed items" are expected to render identically for now.
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
