# Request body

The request **Body** subsection: header with the media-type selector, the request body
description, and the schema of the selected media type. Status: **planned**.

## Nodes

| Kind | Complexity | Key | Value | Children / nested |
| --- | --- | --- | --- | --- |
| `requestBody` | simple | `requestBody` | `{ description?: string; required?: boolean }` | child: `content` |
| `content` | complex | `content` | `null` | nested: `mediaType` per media type, document order |
| `mediaType` | simple | the media type (`application/json`) | `{ mediaType: string; schema?: object \| boolean }` | — |

`required` is displayed in v1 ([Required marker](#required-marker), Q11). `content` and `mediaType`
are shared with responses.
Media type `examples` / `example` / `encoding` / `x-*` are not copied (Q11).

## Header row (h3) with the media-type selector

| Item | Rule |
| --- | --- |
| Component | `TitleRow` "Body" (+ required `*`, [below](#required-marker)), **h3**, `expandable={false}`, `subheader={(side) => <><Selector …/>{requiredTag}</>}` — the `BindingsNodeViewer` pattern |
| Selector | options = nested `mediaType` nodes of `content` that **have a `schema`** (a media type without `schema` is not content — [presence](../features/diffs.md#section-presence-and-whole-section-changes)); title = media type text; `SelectorVariant.Secondary`; default tone; `layoutSide` forwarded |
| No options | the subheader is empty; the header is still shown when the Body is present through its `description` alone |
| Option test id | `request-media-type-<index>` |
| Initial selection | first option (document order) |
| Diff | header `diff` from the `requestBody` node: a raw whole-body add / remove, or the synthetic one written when the Body's presence flips; options carry the `mediaType` node diffs (add / remove / rename, incl. synthetic add / remove when only the `schema` appeared / disappeared) and summaries |

A renamed media type (`apiDiff` maps `application/json` ↔ `application/json; charset=utf-8` and
wildcard-compatible keys, E6) has one option whose title differs per side: the option `title` is a
`(layoutSide) => ReactNode` returning `OpenApiRowDiffs.MediaType.resolveSideTitle(node, side)` —
`beforeKey` on the origin side, `afterKey` on the changed side, yellow text highlighter on both.

## Required marker

Mirrors JSON Schema's `required` rendering ([meta flags and required](../../json-schema/features/meta-flags-and-required.md)).

| Element | Plain | With diffs |
| --- | --- | --- |
| Red `*` after "Body" (shared `RequiredStar`, via `TitleRow` `titleContent` per side) | shown when `required === true` | **side-exclusive**: shown only on the side where the body is required (`OpenApiRowDiffs.RequestBody.isRequiredStarVisibleOnSide(node, side)`); unchanged required → both sides |
| **required** tag in the subheader, after the media-type selector (`TagsWithDiffs`) | never | shown only when the required status changed **and** the body was not wholly added / removed; colored by its own diff (`OpenApiRowDiffs.RequestBody.takeRequiredTagDiff(node)`) — green when it became required, red when it became optional |
| Title row background | — | yellow synthetic replace when the required status changed (JSON Schema title-row priority: whole add / remove wins) |

Diff shape: `requestBody[M].required`. A missing `required` is `false` (`api-unifier` default, E5),
so "became optional" can arrive as `true → false` replace **or** as a `remove` of `required: true`;
normalize both to boolean semantics in `KindRequestBody` (`add` → became required, `remove` →
became optional) and drop diffs whose effective value did not change. Severity: `TitleRow`.

## Description row

`MarkdownTextRow`, body2, `description` of the request body (**not** the schema description).
Diff key `description`, severity `DescriptionRow`. Shown in both display modes, like the AsyncAPI
message and section descriptions; only security card detail rows are `detailed`-only.

## Schema

`MediaTypeSchemaViewer` (shared with responses):

| Item | Rule |
| --- | --- |
| Shown when | an option is selected — every option has a `schema` on at least one side by definition |
| Wrapping | `wrapJsonSchemaForViewer('Type', schema)` / `wrapJsonSchemaForDiffsViewer('Type', schema, mediaTypeNode.diffs[NODE_LEVEL_DIFF_KEY], diffMetaKeys)` from `utils/jso/prepare-json-schema-to-jso-viewers.ts`, `SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS` — exactly the AsyncAPI payload rendering (Q4). Extract the `'Type'` title into one shared constant used by both stacks. |
| Diffs | a wholly added / removed / renamed media type passes its node-level diff to the wrapper so the root property is painted; diffs inside the schema are already on the merged schema |
## Presence

The Body is **present on a side** when it has, on that side, a non-empty `description` **or** at
least one media type with a `schema`. `required` alone does not make it present, and neither do
media types without `schema`. Shared rule and resolver:
[../features/diffs.md](../features/diffs.md#section-presence-and-whole-section-changes).

| Before | After | Body |
| --- | --- | --- |
| media type with schema | `requestBody` removed | wholly removed (raw diff) — `request/23` |
| one media type with schema, no description | `content: {}` (media type removed) | wholly removed (synthetic) — `request/19` |
| one media type with schema, no description | the same media type without `schema` | wholly removed (synthetic); the option is removed too — `request/20` |
| media type without schema, no description | the same media type with `schema` | wholly added (synthetic) — `request/21` |
| media type with schema + description | `content: {}`, description kept | present on both sides: description unchanged, option removed, header uncolored — `request/22` |
| `required: true` + schema-less media type | anything that is still not present | Body not rendered on either side |

A wholly added / removed Body paints every row through `KindAny` inheritance: header, required
marker, description, options, and the schema (wrapped root painted by the passed node-level diff)
are green / red on the side that has them and hidden on the other.

## Visibility

`OpenApiNodeVisibilityManagerKindRequestBody`:

| Flag | Plain | With diffs: row rendered | With diffs: per side |
| --- | --- | --- | --- |
| `showHeader` | Body present | present on either side | hidden on the side where the Body is not present (whole-section diff styles) |
| `showDescription` | `description` non-empty | `description` on either side, or a `description` diff | per its own diff, or inherited from a whole-section diff |
| `showSchema` | an option is selected | same | per the option's diff (option add / remove hides the schema on the other side) |

A row is never rendered on a side just because `requestBody` exists there as an object.

## Related documents

- [responses.md](responses.md) — the same `content` / `mediaType` nodes
- [../features/diffs.md](../features/diffs.md#request-body-and-responses)
- Fixtures: `packages/samples/openapi-diffs/request/06-…` to `10-…`, `19-…` to `23-…`
