/**
 * Fixture: packages/samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/
 * Object with 2 `oneOf(string, object)` properties, where the object variant is Case 1's schema
 * (first property) and Case 2's schema (second property) - see
 * packages/samples/json-schema-diffs/node-changes-summary/README.md. `string` is the combiner's
 * default selection; the "chosen object" story's variant selection is scripted in the paired IT
 * test (case-6-one-level-object-with-object-combiner-variant.it-test.ts) via `page.click()` on
 * the `data-testid` added to `SelectNestedNodeRow`'s option buttons - see the README.
 */
import type { Meta, StoryObj } from "@storybook/react";
import { NodeChangesSummarySampleStory, createNodeChangesSummaryCaseStory } from "./node-changes-summary-utils";

const CASE_SLUG = "6-oneof-wrapping-object-cases";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "JSON Schema Diffs Suite (Node Changes Summary)/Case 6 — One Level Object With Object Combiner Variant",
  component: NodeChangesSummarySampleStory,
} satisfies Meta<typeof NodeChangesSummarySampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// The "chosen object" variant selection is scripted in the IT test (click by testid).
export const Expanded_root_chosen_object: Story = createNodeChangesSummaryCaseStory(
  CASE_SLUG, "Expanded root, chosen object", 2,
);
export const Collapsed_root: Story = createNodeChangesSummaryCaseStory(CASE_SLUG, "Collapsed root", 0);
