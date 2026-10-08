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
Media type `examples` / `example` / `encoding` are not copied (Q11). Request Body and Media Type
`x-*` are cloned into the body schemas ([Extensions](#extensions)).

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
## Extensions

Approved split (2026-10-08). The request side has **no separate Extensions subsection**: every
request-level extension describes the body or one of its media types, so it is cloned into the body
schemas and shown in the JSON Schema **Extensions** sub-tree of the body's root (`Type`) row —
the same mechanism as parameter extensions ([parameters.md](parameters.md#entry-extensions)).

| Level | Extensible? | Meaning of its `x-*` | Placement |
| --- | --- | --- | --- |
| `requestBody` — Request Body Object | yes | the whole body: holds equally for every media type | **cloned into every** media type's schema root |
| `requestBody.content` — map | **no** (a map of media types) | — | ignored: an `x-*` key there is a media type name, not an extension; the unifier's validation drops it when its value is not an object (E22); with an object value it is a (strange) media type and follows the media-type rules |
| `requestBody.content[mt]` — Media Type Object | yes | this media type only | **cloned into this** media type's schema root |

Rules (shared with response media types, [responses.md](responses.md#body)):

1. **Flat keys on the schema root.** The `x-*` keys are written as flat keys on a shallow copy of the
   media type's schema (never mutate the resolved source schema — it may be shared through
   `$ref`). `transformJsonSchemaExtensions` gathers them into the root node's `extensions`.
2. **Precedence on a name collision** (same `x-k` on several levels): Media Type Object > Request Body
   Object > schema root — OpenAPI objects beat the schema root (as a parameter entry does), and the
   more specific object wins. Shadowed values are not shown.
3. **Diffs**, per key, from the value **shown** on each side (per-side reconstruction as in
   [parameters.md, step 1](parameters.md#step-1--reconstruct-each-side-from-the-merged-entry)):
   equal → no diff (a key moved between levels with the same value), absent → value `add`, value →
   absent `remove`, otherwise `replace`; written to the schema root's diff record under the key.
   Keys that exist on one level only keep their raw diff as is; diffs nested inside a value pass
   through. Raw diffs arrive per level (E22): `requestBody[M]['x-…']`, `content[mt][M]['x-…']`.
4. **One raw change, several schemas.** A Request Body `x-*` change is written to every media type's
   schema. Only one media type is visible at a time; change markers count diff **types**, so the
   repetition never shows.
5. **No schema, no extensions.** A media type without `schema` is not content
   ([Presence](#presence)), so its extensions — and Request Body extensions, when no media type has
   a schema — are not shown. An OAS 3.1 `schema: true` becomes `{}` to hold the keys; on
   `schema: false` the extensions are not shown.
6. **Not counted for presence.** Extensions never make the Body present on their own: they only
   decorate a schema that is already shown.

| Fixture | Change | Shown |
| --- | --- | --- |
| `request/27-body-and-media-type-extensions-changed` | Request Body `x-max-size` replaced; media type `x-codec` added; an `x-not-a-media-type` string key added to `content` | root row Extensions: `x-max-size` replace, `x-codec` add; the `content` key is dropped by the unifier |
| `request/28-media-type-extension-shadows-schema-root` | schema root `x-codec: none` on both sides; media type `x-codec: gzip` added | `x-codec` replace `none` → `gzip` (the shown value changed) |

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
