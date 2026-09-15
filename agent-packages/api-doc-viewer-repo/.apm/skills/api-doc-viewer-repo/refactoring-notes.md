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
`json-schema-nesting-indicator-row-diffs.md` session-lesson doc (unrelated bug, same viewer family,
same "verify with computed styles in Storybook, don't assume" verification habit).