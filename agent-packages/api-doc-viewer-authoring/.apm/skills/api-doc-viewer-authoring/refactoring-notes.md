# Refactoring notes — candidates for later systemization

A running log of deliberate **ad hoc** fixes applied as quick, low-risk patches, together with a
**more systematic alternative that was considered but not applied**, kept here so a later
refactoring pass can review the accumulated candidates and decide whether/how to consolidate them
into one consistent pattern — instead of rediscovering the same trade-off from scratch each time.

Entries are additive: append a new dated/titled section per case rather than editing prior ones,
unless a later systemization pass actually acts on an entry (then update it in place to say what
was done and why, or move it to "Resolved" once superseded).

---

## 1. Shared row-body padding overrides in `preceded-by.css` — specificity bump vs. CSS custom-property slots

**Where the quick fix landed:** `packages/api-doc-viewer/src/components/shared-styles/preceded-by.css`,
new rule added after the existing `.json-schema-property .title-row-content[data-precededby="json-schema-viewer"] > .json-schema-property-row-body`
block (~line 183):

```css
.json-schema-property .json-schema-combiner-selector-row-content > .json-schema-property-row-body {
  padding-top: 12px;
  padding-bottom: 12px;
}
```

**Problem it solves:** `CombinerSelectorControlsRow` (`JsonSchemaNextViewer/CombinerNodeViewer/CombinerSelectorRow.tsx`)
needed 12px vertical padding on its `.json-schema-property-row-body` div instead of the 4px every
other JSON-Schema row body gets from the base rule at `preceded-by.css:173-176`
(`.json-schema-property .json-schema-property-row-body { padding-top: 4px; padding-bottom: 4px; }`,
specificity `(0,2,0)`). A Tailwind utility class (`py-3`, specificity `(0,1,0)`) cannot beat that —
confirmed pure CSS specificity, no cascade layers or `!important` involved anywhere in this
package (`tailwind.config.js` uses plain Tailwind v3 `@tailwind` directives, not v4's
`@layer`-emitting form; `grep "@layer"` across `packages/api-doc-viewer/src` → zero matches).

**Approach actually applied — specificity bump, matching the file's existing idiom:** add a rule
whose selector is at least as specific as `(0,2,0)`, scoped through an ancestor class the target
component already renders (`.json-schema-combiner-selector-row-content`, `(0,3,0)` total). This is
the *exact same technique* already used one block above it in the same file, for the analogous
`TitleRowContent` case (`preceded-by.css:178-181`) — zero new concepts, smallest possible diff,
zero risk to the three other viewer families (DDL/JSO/AsyncAPI) that also consume
`.json-schema-property-row-body`-adjacent classes from this shared file, since the selector only
matches a class unique to this one component.

**Alternative considered, not applied — CSS custom properties as override "slots":** instead of
racing specificity, make the *base* rule read a variable, and let any ancestor override just the
variable's value:

```css
.json-schema-property .json-schema-property-row-body {
  padding-top: var(--json-schema-row-body-padding-y, 4px);
  padding-bottom: var(--json-schema-row-body-padding-y, 4px);
}

.json-schema-combiner-selector-row-content {
  --json-schema-row-body-padding-y: 12px;
}
```

Custom properties inherit down the DOM independent of the specificity of whichever rule declares
`padding-top`/`padding-bottom` — the *value that variable resolves to* is what changes, not which
rule "wins." So the overriding rule can be as low-specificity as a single class (`(0,1,0)`,
`.json-schema-combiner-selector-row-content { --json-schema-row-body-padding-y: 12px; }`) and still
take effect, because it isn't competing with the base rule at all — it's just supplying the value
the base rule already reads.

**Why not applied now:**
- It's a genuinely *new* idiom for `preceded-by.css` (367 lines, currently 100% "plain
  property + specificity/attribute scoping," no custom properties anywhere in the file) — adopting
  it for one call site is a bigger review surface than mirroring an existing adjacent line.
  `grep --  "--" preceded-by.css` (or any `var(--` usage) currently returns nothing.
- The specificity-bump approach was sufficient, minimal, and immediately verifiable (confirmed via
  `getComputedStyle` in Storybook: both `.json-schema-property-row-body` instances under
  `.json-schema-combiner-selector-row-content` now compute to `12px`/`12px`, while the unrelated
  `.title-row-content > .json-schema-property-row-body` override stayed at `8px`/`4px`,
  unaffected).
- Introducing the pattern for a single call site risks looking arbitrary next to ~15 other
  attribute/ancestor-scoped overrides in the same file that don't use it — a systemization pass
  should decide *whether and where* custom properties replace the existing idiom wholesale (or for
  a well-defined subset, e.g. "all row-body vertical padding"), not per-caller.

**When to reconsider (systemization triggers):**
- A **third or fourth** row-body variant needing its own padding value shows up — at that point the
  "one compound-selector rule per variant" pattern starts repeating the same `> .json-schema-property-row-body`
  suffix enough times that a shared token/variable becomes clearly worth it.
- Any case where the override needs to be set **dynamically at runtime** (e.g. a value computed in
  JS, not a fixed design constant) — custom properties support that naturally via inline
  `style={{ '--x': value }}` on a wrapper (still not an inline style *on the styled property
  itself*, so it doesn't reintroduce the "inline style" problem this fix was asked to avoid);
  static specificity-bump rules cannot.
- If/when `preceded-by.css` itself gets a deliberate refactor (e.g. as part of introducing LESS —
  see the LESS cost/impact estimate produced alongside this fix, kept in the plan history for this
  session, not duplicated here) — that would be the natural point to decide on one token/variable
  strategy file-wide instead of rule-by-rule.

**Related:** `preceded-by.css:173-181` (the base rule and its one existing precedent override);
`CombinerSelectorRow.tsx` `CombinerSelectorControlsRow` (the call site); this repo's
`next-data-model-authoring` → `json-schema/json-schema-nesting-indicator-row-diffs.md` session-lesson doc (unrelated bug, same viewer family,
same "verify with computed styles in Storybook, don't assume" verification habit).

---

## 2. "Showing/hiding unchanged nodes" feature toggle — boolean today, modeled as a mode for a planned third variant

**Where the change landed:**
- New file: `packages/api-doc-viewer/src/components/JsonSchemaNextViewer/JsonSchemaDiffsNodesVisibilityMode.ts`
  — `SHOW_ALL_NODES_MODE = "show-all"`, `SHOW_ONLY_CHANGED_NODES_MODE = "show-only-changed-nodes"`,
  a `JsonSchemaDiffsNodesVisibilityMode` union, `resolveJsonSchemaDiffsNodesVisibilityMode(hideUnchangedNodes: boolean)`
  (the boundary conversion) and `isHideUnchangedNodesMode(mode)` (`mode !== "show-all"`).
- `UnchangedBlocksContext.tsx`: `UnchangedBlocksContextValue` now carries `mode` (source of truth)
  *and* a derived `hideUnchangedNodes: boolean` field (`isHideUnchangedNodesMode(mode)`, kept for
  the three existing consumers). `useUnchangedBlocksContextValue` now takes `mode` instead of a raw
  boolean.
- `JsonSchemaNextDiffsViewer.tsx`: public prop `hideUnchangedNodes?: boolean` (default `true`)
  **unchanged in shape** — converted to `mode` once, right where the prop is destructured, via
  `resolveJsonSchemaDiffsNodesVisibilityMode`.
- **Zero changes** to `SchemaNodeViewer.tsx`, `CombinerNodeViewer.tsx`,
  `SchemaNodeChildrenListWithDiffs.tsx`, or any `next-data-model` file — they still read
  `unchangedBlocksContext?.hideUnchangedNodes` exactly as before; it's just computed differently now.

**What was asked:** make the "show/hide unchanged nodes" feature toggleable via a boolean in
`JsonSchemaNextDiffsViewer`'s public API (it already was — `hideUnchangedNodes?: boolean`, default
`true`) while designing the toggle so it can become a 3-way variant later without a disruptive
rewrite: `show-all`, `show-only-changed-nodes` (today's `hideUnchangedNodes: true`), and a **planned,
not-yet-designed** `show-only-nodes-with-filtered-changes` — hide a node unless it has a diff whose
type is in a caller-supplied `diffTypes` list; a node with no diffs, or only diffs of filtered-out
types, should be hidden the same way an unchanged node is today.

**Design chosen:** keep the public prop a plain boolean (mirrors `LayoutMode`/`DisplayMode` — see
`packages/api-doc-viewer/src/types/{LayoutMode,DisplayMode}.ts` for the established "named string
constants + union type" pattern in this codebase), but stop threading the raw boolean through
`UnchangedBlocksContext`/consumers directly — convert it to the `JsonSchemaDiffsNodesVisibilityMode`
union at the one boundary point (`JsonSchemaNextDiffsViewer.tsx`), and let the context be the single
place that *derives* the boolean consumers actually need. This means only the boundary conversion
function and the public prop's *type* need to change when the third mode is added — no consumer
files, no next-data-model call sites.

**Key discovery — most of the planned third mode's *hiding* behavior already exists today,
independent of this change:** `JsonSchemaNextDiffsViewer.tsx` already has a second, currently
unrelated-looking public prop, `diffTypes?: ReadonlyArray<DiffType>` (feeds `DiffTypesContext`).
`SchemaNodeChildrenListWithDiffs.tsx` already reads both `hideUnchangedNodes` (from
`UnchangedBlocksContext`) *and* `diffTypes` (via `useDiffTypes()`) and passes **both** into
`resolveJsonSchemaUnchangedBlocks(children, { hideUnchangedNodes, diffTypes: diffTypesSet })` — and
that next-data-model function's options type, `ResolveJsonSchemaUnchangedBlocksOptions =
JsonSchemaNodeChangedOptions & { hideUnchangedNodes?: boolean }` (`JsonSchemaNodeChangedOptions =
{ diffTypes?: ReadonlySet<DiffType> }`), already threads `diffTypes` into the underlying
"is this node changed" predicate (`hasOwnChangeSignals`/`isJsonSchemaNodeChanged`) used for block
grouping. In other words: **passing `hideUnchangedNodes={true}` together with a non-empty
`diffTypes` today already hides nodes whose only diffs are outside that list** — exactly the hiding
semantics described for `show-only-nodes-with-filtered-changes`. No next-data-model work is needed
for that half of the third mode; it was already built (for a different-looking purpose) before this
task.

**What's still missing for the third mode — the *highlighting* half:** the user's description also
requires "highlighting diffs is applied to only diffs of these diff types" — i.e. diffs of a
filtered-out type should not just leave nodes visible-but-hidden, they should stop being colored/
badged too. Today, in the JSON Schema **Next** viewer, `diffTypes`/`useDiffTypes()` is consumed in
exactly one place (`SchemaNodeChildrenListWithDiffs.tsx`, for hiding only) — nowhere else in
`JsonSchemaNextViewer/**` reads it, so row/title colorizing (`SchemaNodePlainContent.tsx`,
`SchemaNodeTitleRow*.tsx`, etc.) is entirely unfiltered by `diffTypes` right now. (A superficially
similar `filters={diffTypes}` prop exists on the **legacy** `JsonSchemaDiffViewer`, wired from
AsyncAPI's `MessageContentNodeViewer.tsx` — that's a different, legacy component with its own
filtering implementation; not reusable here, and out of scope for the Next viewer per the
`api-doc-viewer-authoring` skill's "don't touch legacy viewers" rule.) Making highlighting
diffType-aware in the Next viewer would mean threading a `diffTypes` filter into the diff-severity/
colorizing aggregation path (`next-data-model`'s `node-diffs-severities` factories) or the viewer's
consumption of `diffsSeverities`/`colorizingDiff` props — genuinely new design work, not done here.

**Migration path when `show-only-nodes-with-filtered-changes` is actually implemented:**
1. Add `SHOW_ONLY_NODES_WITH_FILTERED_CHANGES_MODE = "show-only-nodes-with-filtered-changes"` to
   `JsonSchemaDiffsNodesVisibilityMode.ts`'s union. `isHideUnchangedNodesMode` needs **no change** —
   it already returns `true` for any non-`"show-all"` mode, which is the correct hiding behavior for
   this mode too (per the key discovery above, that's the *only* thing `hideUnchangedNodes`-derived
   consumers currently need).
2. Decide the public API shape: either widen `JsonSchemaNextDiffsViewerProps.hideUnchangedNodes`
   into a mode-typed prop (breaking rename) or add a **new** optional prop (e.g.
   `nodesVisibilityMode?: JsonSchemaDiffsNodesVisibilityMode`) that takes precedence over the
   boolean when set, keeping `hideUnchangedNodes` as a deprecated boolean shorthand for the first
   two modes — the latter avoids a breaking change; not decided here, flagged for whoever designs
   the third mode's API.
3. The existing `diffTypes` prop's hide/show effect needs no data-layer change (see key discovery);
   confirm intent though — currently `diffTypes` always filters hiding whenever it's non-empty,
   *regardless* of the resolved mode. If `show-only-changed-nodes` (mode 2) is expected to ignore
   `diffTypes` entirely (show any change, unfiltered) while only mode 3 respects it, that's a
   **behavior change** to `SchemaNodeChildrenListWithDiffs.tsx` (gate the `diffTypes` it passes to
   `resolveJsonSchemaUnchangedBlocks` on `mode === SHOW_ONLY_NODES_WITH_FILTERED_CHANGES_MODE`, not
   just forward whatever `useDiffTypes()` returns) — verify which behavior is actually wanted before
   assuming today's "always apply `diffTypes` if present" is correct for mode 2 too.
4. Design and implement the highlighting-filter half (see "what's still missing" above) — this is
   the one part with no existing plumbing to lean on.

**Related:** `packages/api-doc-viewer/src/components/JsonSchemaNextViewer/UnchangedBlocksContext.tsx`,
`JsonSchemaNextDiffsViewer.tsx`, `JsonSchemaDiffsNodesVisibilityMode.ts`;
`packages/next-data-model/src/building-service/json-schema/tree-with-diffs/changed-only/` (`resolve-json-schema-unchanged-blocks.ts`,
`has-own-change-signals.ts`, `is-node-changed.ts`, `types.ts`) for the already-`diffTypes`-aware
data layer; `packages/api-doc-viewer/src/contexts/DiffTypesContext.ts`; Storybook suite
`JSON Schema Diffs Suite (Hiding Unchanged Nodes)` (`src/stories/json-schema-diffs-hiding-unchanged-nodes-suite/`)
for interactive verification of the hide/reveal behavior.