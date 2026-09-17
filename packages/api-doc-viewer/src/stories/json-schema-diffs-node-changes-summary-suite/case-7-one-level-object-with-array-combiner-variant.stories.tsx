/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/
 * Object with 2 `oneOf(string, array)` properties, where the array variant is Case 3's schema
 * (first property) and Case 4's schema (second property) - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md. `string` is the combiner's
 * default selection; the "chosen array" stories' variant selection is scripted in the paired IT
 * test (case-7-one-level-object-with-array-combiner-variant.it-test.ts) via `page.click()` on
 * the Next viewer's `json-schema-combiner-option-{index}` testid (CombinerSelectorRow), scoped
 * to the right property's `json-schema-combiner-node-viewer` container - see the README. There
 * is no items-expand step: a combiner-leaf array never gets an expandable `items` child in the
 * current JsonSchemaNextViewer (see the IT test's comment), so "expanded items" and "collapsed
 * items" are expected to render identically for now.
 */
import type { Meta, StoryObj } from "@storybook/react";
import { NodeChangesSummarySampleStory, createNodeChangesSummaryCaseStory } from "./node-changes-summary-utils";

const CASE_SLUG = "7-oneof-wrapping-array-cases";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSON Schema Diffs Suite (Node Changes Summary)/Case 7 — One Level Object With Array Combiner Variant",
  component: NodeChangesSummarySampleStory,
} satisfies Meta<typeof NodeChangesSummarySampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// The "chosen array" variant selection is scripted in the IT test (click by testid).
export const Expanded_root_chosen_array_expanded_items: Story = createNodeChangesSummaryCaseStory(
  CASE_SLUG, "Expanded root, chosen array, expanded items", 3,
);
export const Expanded_root_chosen_array_collapsed_items: Story = createNodeChangesSummaryCaseStory(
  CASE_SLUG, "Expanded root, chosen array, collapsed items", 2,
);
export const Expanded_root_default_choice: Story = createNodeChangesSummaryCaseStory(
  CASE_SLUG, "Expanded root, default choice", 1,
);
export const Collapsed_root: Story = createNodeChangesSummaryCaseStory(CASE_SLUG, "Collapsed root", 0);
