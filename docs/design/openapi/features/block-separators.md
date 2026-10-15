# Block separators

Status: **approved and implemented 2026-10-15** — calculation (§1–§6), algorithm (§7),
implementation map (§8). Replaced the earlier "split gaps" model; summary in
[operation-viewer.md](operation-viewer.md#spacing-data-precededby).

## 1. Rule

- Every row has **symmetric** vertical padding: **4px top, 4px bottom** — the title (h1), operation
  ID, address, description, external docs, section headers (h2 / h3), the security toolbar, card
  rows, descriptions. A highlighted row's band is always 4px above and 4px below its content.
- Inside a block, rows touch: the gap is 4 + 4 = **8px**.
- Between blocks there is a **separator row**: a content-less, full-width row of **12px**, so the
  gap is 4 + 12 + 4 = **20px**.
- Nested JSON Schema / JSO viewers keep their own rows; their last row already ends with its own
  ~4px, so the separator after them is the same 12px — no compensation, no "tails".
- Padding is still the only spacing inside a row; separators are rows of their own (like the
  card's opening / closing rows below), never margins.

Legend for the drawings: `▒G` green (added), `▒R` red (removed), `▒Y` yellow (replaced), `░░` gray
(side where the block does not exist), blank = unchanged (white). Left = origin, right = changed.
`┄┄` marks a separator.

## 2. Separator colouring

A separator takes the colour of the rows it touches, **per side**:

| Row above | Row below | Separator on that side |
| --- | --- | --- |
| same colour (both white, both green, …) | | **one** 12px band of that colour |
| different colours | | **two** 6px bands: the upper one coloured like the row above, the lower one like the row below |

The row's colour is its own row background on that side (the same diff that paints the row).

### 2.1 Nothing changed

```text
Replaces the order.                     │ Replaces the order.
┄┄ 12 white ┄┄                          │ ┄┄ 12 white ┄┄
Security                                │ Security
```

### 2.2 Row above changed, row below not

`operation/09-description-changed`: the description is yellow, the Security header is not.

```text
▒Y Replaces the order.                  │ ▒Y Replaces the whole order.
▒Y ┄┄ 6 ┄┄                              │ ▒Y ┄┄ 6 ┄┄
   ┄┄ 6 ┄┄                              │    ┄┄ 6 ┄┄
   Security                             │    Security
```

### 2.3 A wholly added section between unchanged ones

`query-parameters/19-all-added`: Query Parameters exists only on the changed side.

```text
   orderId* string                      │    orderId* string            ← last row of Path Parameters
   ┄┄ 6 ┄┄                              │    ┄┄ 6 ┄┄
░░ ┄┄ 6 ┄┄                              │ ▒G ┄┄ 6 ┄┄
░░                                      │ ▒G Query Parameters
░░                                      │ ▒G dryRun boolean
░░                                      │ ▒G expand string
░░ ┄┄ 6 ┄┄                              │ ▒G ┄┄ 6 ┄┄
   ┄┄ 6 ┄┄                              │    ┄┄ 6 ┄┄
   Headers                              │    Headers
```

### 2.4 Removed above, added below

A removed block directly followed by an added one (e.g. the response `400` Body removed, the
Responses Extensions added):

```text
▒R type string                          │ ░░
▒R ┄┄ 6 ┄┄                              │ ░░ ┄┄ 6 ┄┄
░░ ┄┄ 6 ┄┄                              │ ▒G ┄┄ 6 ┄┄
░░                                      │ ▒G Extensions
```

### 2.5 Two added blocks in a row

```text
░░ ┄┄ 12 gray ┄┄                        │ ▒G ┄┄ 12 green ┄┄
```

### 2.6 Next to a nested viewer

The OpenAPI layer does not know the colour of a nested JSON Schema / JSO viewer's last (or first)
row. **Proposal:** use the colour of the block that owns the nested viewer when that block is wholly
added / removed (green / red, gray on the absent side), white otherwise. A changed last property
inside an unchanged section therefore meets a white separator half:

```text
   Query Parameters                     │    Query Parameters
   dryRun boolean                       │    dryRun boolean
▒R expand string                        │ ░░                            ← nested row (JSON Schema)
   ┄┄ 12 white ┄┄                       │    ┄┄ 12 white ┄┄             ← section not wholly changed
   Headers                              │    Headers
```

## 3. Security cards (point 5)

The card's top and bottom frame edges become two content-less rows of their own: an **opening
row** and a **closing row**. The horizontal border is drawn at the **vertical middle** of the
row. Their colour is **only the whole-card diff**: green / red when the card is wholly added /
removed (gray on the absent side), otherwise unchanged — never the colour of the title row or of
the last content row.

Proposed height: **24px** (12 above the border, 12 below). With the title row's own 4px the
content starts 16px below the border — the same 16px as the horizontal inner padding. The frame
rows replace separators at the card's edges:

```text
   ‹ oauth  api_key ›                   toolbar, padding 4/4
   (12)                                 opening row, upper half (outside the frame)
   ┌─────────────────────────┐          border at the middle of the opening row
   │ (12)                    │          opening row, lower half (inside the frame)
   │ oauth  OAuth 2.0        │          title row, padding 4/4
   │ Flow type Client Cred.  │          card rows, padding 4/4 (8px apart)
   │ Token URL   https://…   │
   │ (12)                    │          closing row, upper half
   └─────────────────────────┘          border at the middle of the closing row
   (12)                                 closing row, lower half
   (12)                                 opening row of the next card, upper half
   ┌─────────────────────────┐
```

Distances: toolbar → border 4 + 12 = 16; border → card text 12 + 4 = 16; card → card (border to
border) 12 + 12 = 24; last card → next section header 12 + 4 = 16.

Type change (`security/15-scheme-type-changed`): the title row is yellow, the opening row is not:

```text
   ┌─────────────────────────┐          │    ┌─────────────────────────┐
   │ (12 white)              │          │    │ (12 white)              │
▒Y │ api_key  API key        │          │ ▒Y │ api_key  HTTP           │
```

A card added to an existing alternative (`security/09-scheme-added-to-alternative`):

```text
   └─────────────────────────┘          │    └─────────────────────────┘
   (12 white)                           │    (12 white)                 ← previous card's closing row
░░ (12 gray)                            │ ▒G (12 green)                 ← opening row, upper half
░░                                      │ ▒G ┌─────────────────────────┐
░░                                      │ ▒G │ basic  HTTP             │
```

Inside a card, flow parts after the first one (and the trailing required-scopes list after flow
parts) are sub-blocks: a 12px separator **inside** the frame (side borders continue through it),
coloured by the separator rule above.

## 4. Other rows

| Row | Now | Proposed |
| --- | --- | --- |
| Summary (h1) | 10 / 4 | 4 / 4 |
| Operation ID | 4 / 4 | 4 / 4 |
| Address | 4 / 4 (+ the method chip's own 8px plate padding) | 4 / 4 |
| Description, external docs | 4 / 10 when last in the header block | 4 / 4, then a separator |
| Security toolbar | 4 / 10 + 6px decoration inset | 4 / 4 + 6px decoration inset (diff markers overhang the option boxes inside the scrolling strip) |
| Section headers | 10 / 4 or 16 / 4 | 4 / 4, separator above |

## 5. What goes away

`data-block-last-row`, the 10 / 16px top paddings, section `tail` / `closing` promises, the frame's
outer half-gap padding (`--frame-outer-gap`). `data-precededby` stays for the nested viewers' first
row (`OPENAPI_NESTED_VIEWER_START`). The one-pass chain now emits a separator between two blocks
and hands it the colours of the rows around it.

## 6. Decided points (approved 2026-10-15)

1. Separator colouring next to a nested viewer: whole-block colour only (§2.6).
2. Card frame rows 24px (12 / 12) and the resulting distances (§3).
3. Viewer top / bottom edge: no separator — the first row starts with its own 4px.

## 7. Algorithm

Two goals drive it: the data for every synthetic row (separators, card frame rows) is **computed in
next-data-model**, and every number or rule that may change later is **one entry in a config
object** or **one replaceable strategy function** — the viewer only renders what it is given.

### 7.1 Responsibilities

| Layer | Owns | Does not own |
| --- | --- | --- |
| next-data-model `model/openapi/layout/` | spacing config; tones of block edges per block kind; the separator / frame-row data (heights, per-side bands and their tones); the one-pass planner that interleaves blocks and separators | React, CSS, view state |
| api-doc-viewer `OpenApiOperationViewer/` | which blocks are visible, in the configured section order (`OPENAPI_SECTION_ORDER`), and the view state that decides them (selected alternative / response / media type); rendering of the planned items | any colour, height or "is a separator needed" decision |

View state stays in React; it is passed **into** the data-layer functions as plain arguments (the
selected node), so they remain pure and unit-testable on fixtures.

### 7.2 Data types (`model/openapi/layout/types.ts`)

```typescript
/** Background of a row on one side: green / red / yellow / gray, or undefined = unchanged. */
type OpenApiSideTone = HighlightVariant | undefined

type OpenApiEdgeTones = { readonly before: OpenApiSideTone, readonly after: OpenApiSideTone }

/** The top or bottom edge of a block: a plain row, or a card frame row (already holds outer space). */
type OpenApiBlockEdge = { readonly kind: 'row' | 'frame', readonly tones: OpenApiEdgeTones }

/** What the planner needs to know about a block; `TPayload` is the viewer's render data. */
type OpenApiLayoutBlock<TPayload> = {
  readonly id: string
  readonly head: OpenApiBlockEdge
  readonly tail: OpenApiBlockEdge
  readonly payload: TPayload
}

type OpenApiBand = { readonly height: number, readonly tone: OpenApiSideTone }

/** A separator row: per side a stack of bands; both stacks always sum to the same height. */
type OpenApiSeparatorRow = { readonly id: string, readonly before: readonly OpenApiBand[], readonly after: readonly OpenApiBand[] }

/** A card frame row (opening / closing): its height, where the border runs, its tones. */
type OpenApiFrameRow = { readonly height: number, readonly borderOffset: number, readonly tones: OpenApiEdgeTones }

type OpenApiLayoutItem<TPayload> =
  | { readonly type: 'block', readonly block: OpenApiLayoutBlock<TPayload> }
  | { readonly type: 'separator', readonly separator: OpenApiSeparatorRow }
```

### 7.3 Config (`model/openapi/layout/spacing-config.ts`)

One object; numbers and rules side by side. Derived values are computed, never duplicated.

```typescript
type OpenApiSpacingConfig = {
  readonly rowPadding: number            // 4 — every row, top and bottom
  readonly blockGap: number              // 20 — between two blocks (text box to text box of rows)
  readonly frameRowHeight: number        // 24 — card opening / closing row
  readonly frameBorderOffset: number     // 12 — border position inside a frame row (middle)
  /** Whether two neighbouring block edges get a separator (default: none next to a frame edge). */
  readonly needsSeparator: (above: OpenApiBlockEdge, below: OpenApiBlockEdge) => boolean
  /** Bands of one side of a separator (default: one band if the tones match, else two halves). */
  readonly splitBands: (above: OpenApiSideTone, below: OpenApiSideTone, height: number) => OpenApiBand[]
}

const DEFAULT_OPENAPI_SPACING_CONFIG: OpenApiSpacingConfig = { … }

/** separatorHeight = blockGap - 2 * rowPadding (12). */
class OpenApiSpacing { static separatorHeight(config): number }
```

Changing the look later is a one-line edit of the default (or a partial override merged over it —
an `OpenApiSpacing.withOverrides(partial)` helper; not exposed to hosts in v1). The viewer receives
the config through `OpenApiViewerContext` and writes the numbers to CSS custom properties on the
viewer root (`--openapi-row-padding`, …), so CSS never hard-codes them.

### 7.4 Block edge tones (`model/openapi/layout/block-edges.ts`)

One static accessor per **block kind** on a class `OpenApiBlockEdges`, built from the existing row
diff accessors (`OpenApiRowDiffs`) — the same diff that paints the row:

```text
tones(diff)                     = { before: diff?.styles.before.backgroundColor, after: diff?.styles.after.backgroundColor }
rowEdge(diff)                   = { kind: 'row',   tones: tones(diff) }
frameEdge(card)                 = { kind: 'frame', tones: tones(Section.takeHeaderRowDiff(card)) }   // whole card only
nestedEdge(owner)               = { kind: 'row',   tones: tones(Section.takeHeaderRowDiff(owner)) }  // §2.6: whole block only
```

| Block kind | head | tail |
| --- | --- | --- |
| Operation header (title … external docs) | first visible header row's diff | last visible header row's diff |
| Security header (title + toolbar) | Security title row | toolbar row |
| "No authentication" text | its row | its row |
| Security card | `frameEdge(card)` | `frameEdge(card)` |
| Card flow part / required-scopes list (inside a card) | its first row (flow header / `Scopes` toggle) | its last scope row (or the toggle when collapsed) |
| Extensions section | its title row | `nestedEdge(extensions)` |
| Parameter group / response Headers | its title row | `nestedEdge(group)`, or the title row without a schema |
| Body (request / response) | its title row | `nestedEdge(owner)` with a schema, else the last of title / description |
| Response description | its row | its row |
| Container (Request, Responses, Security) | its header row | the **tail of its last child block**, or its header row when it has no children |

A new block kind = one new accessor; nothing else changes.

### 7.5 Planner (`model/openapi/layout/planner.ts`) — one pass per container level

```text
plan(blocks, config):
  items = []
  for i in 0 … blocks.length - 1:
    if i > 0 and config.needsSeparator(blocks[i-1].tail, blocks[i].head):
      items.push(separator(id = blocks[i-1].id + '|' + blocks[i].id, above = blocks[i-1].tail.tones, below = blocks[i].head.tones))
    items.push(block(blocks[i]))
  return items

separator(above, below):
  h = OpenApiSpacing.separatorHeight(config)                       // 12
  before = config.splitBands(above.before, below.before, h)          // per side, independently
  after  = config.splitBands(above.after,  below.after,  h)
  return { before, after }

default splitBands(a, b, h) = a === b ? [{ h, a }] : [{ h/2, a }, { h/2, b }]
default needsSeparator(x, y) = x.kind !== 'frame' and y.kind !== 'frame'

frameRow(card, config) = { height: config.frameRowHeight, borderOffset: config.frameBorderOffset, tones: frameEdge(card).tones }
```

Levels that call `plan` (each over its own visible children, in the configured order):

| Level | Blocks |
| --- | --- |
| Operation | header block, Security, operation Extensions, Request, Responses |
| Request | parameter groups, Body (the h2 title row is the container's header: 8px to the first child, no separator) |
| Responses | selected response's sections (description, Headers, Extensions, Body), Responses Extensions (same: h2 + selector is the header) |
| Security | security header (title + toolbar), "No authentication" text or the cards |
| Card | scheme rows block, flow parts, required-scopes list — inside the frame, between the opening and closing rows |

A container is itself one block of its parent level: its `head` is its header row, its `tail` the
tail of its last child (§7.4), so separators between levels compose without special cases.

### 7.6 Viewer rendering

- Each container builds its `OpenApiLayoutBlock<render function>[]` (visibility + config order +
  view state), calls `OpenApiLayoutPlanner.plan`, and maps the items: a block → its rows, a separator
  → `SeparatorRow` component (`OpenApiLayout` does this).
- `SeparatorRow` (`shared-components/Separator/`): a `SideBySideLayout` / `OneSideLayout`
  row whose sides render their bands as stacked divs with `height` from the data and the background
  class of the band's tone (`DiffsClassesBuilder.background`). No padding, no margin, no text.
  Inside a card it also carries `data-frame-position="middle"`, so the side borders continue.
- Card opening / closing rows: `SecurityFrameRow` with `height` from `frameRow(...)`; it passes the
  border position as `--frame-border-top` (opening) / `--frame-border-bottom` (closing) and
  `frame.css` draws the border there (both rows get their tone from the whole card).
- All OpenAPI content rows use one member `PrecededBy.OPENAPI_ROW` whose rule is
  `padding: var(--openapi-row-padding) 0`; `OPENAPI_NESTED_VIEWER_START` stays for the first row of a
  nested viewer.

### 7.7 Removed by this change

`data-block-last-row` (`ATTRIBUTE_BLOCK_LAST_ROW`), `OPENAPI_VIEWER_START` / `OPENAPI_BLOCK_ROW` /
`OPENAPI_BLOCK_START` / `OPENAPI_AFTER_NESTED_VIEWER`, section `tail` / `closing`,
`resolveBlockRowsSpacing`, `resolveRequestTail`, `resolveParametersTail`, `CardRow.startsBlock`, and
the frame's outer-gap padding. No re-export shims.

### 7.8 Tests

| Where | What |
| --- | --- |
| `next-data-model/tests/unit-tests/openapi-layout.test.ts` | `splitBands` (same tone → one band; different → two halves; per side independently), `needsSeparator` (frame edges), planner interleaving and ids, a config override changes the output; block edges on fixtures: `operation/09` (yellow description tail), `query-parameters/19` (green / gray nested edge), `security/09` (green frame edge), `security/15` (title yellow, frame edge unchanged) |
| api-doc-viewer | Puppeteer spacing audit (every content row 4 / 4; separators 12 or 6 + 6 with the right tones; frame rows 24 with the border at 12), then screenshot regeneration on a Docker machine |
| Design | `operation-viewer.md` → "Spacing" replaced by a link to this file; security entity docs; authoring and testing skills |

### 7.9 Cost and collapsible blocks

**Cost — no crawl.** The algorithm reads only the operation tree that is already built (one
`OpenApiTreeBuilder` / `OpenApiTreeWithDiffsBuilder` pass, unchanged):

| Step | Work |
| --- | --- |
| Edge tones | O(1) per block: one diff lookup on one node (`node.diffs[...]` through `OpenApiRowDiffs`) — the same accessors the rows call to paint themselves |
| Nested viewers | **never entered**: their edges use the owning block's whole-block diff (§2.6), so JSON Schema / JSO trees (properties, combiners, `$ref`s) are not walked |
| Planner | one linear pass per container level over its visible blocks (≈ 5 at operation level, ≤ 5 in Request / Responses / Security / a card); container tails recurse at most 3 levels |
| Data size | a separator = two band lists of 1–2 bands; a frame row = 3 numbers; nothing is cached in the tree |

Per render this is a few dozen constant-time steps — negligible next to rendering the rows. Each
container memoises its plan (`useMemo` over the node, the selection and the collapsed state).

**View state is input.** Selections (security alternative, response, media type per body) live in
one view-state store of the operation viewer (`OpenApiViewStateContext`: owner node id → selected
node id), read by every container. The parent level needs them too: the selected media type decides
a Body's tail, which is the Request's tail, which touches the separator before Responses. The store
resets when the operation node changes (a rebuilt tree), as the per-container states did.

**Collapsible blocks (planned, e.g. `Path Parameters`).** Collapsing is one more view-state input —
a map block id → expanded in the same store — passed to the edge accessors:

| Effect of collapsing | Handled by |
| --- | --- |
| The block shows its title row only, so its `tail` becomes the title row instead of the nested viewer | the block's edge accessor takes `expanded` (e.g. `OpenApiBlockEdges.parameters(node, { expanded })`) |
| The parent's tail may change (Request ends with that block) | container tails are recomputed from the children in the same pass |
| Heights | none: separators are always 12 (or 6 + 6) and frame rows 24, so collapsing only removes the block's own rows — nothing jumps |
| Nested JSON Schema expanders | no effect on OpenAPI separators (whole-block tones only) |

The card's `Scopes` toggle already follows this pattern: the card plans its segments with the
collapsed scopes as input, so a collapsed flow part ends with its `Scopes` row.

## 8. Implementation map

| Piece | Where |
| --- | --- |
| Types, config, edges, planner | next-data-model `src/model/openapi/layout/` (`types.ts`, `spacing-config.ts`, `block-edges.ts`, `planner.ts`, `index.ts`) |
| Header row order | `OpenApiNodeVisibility.resolveOperationHeaderRows` (`OPENAPI_OPERATION_HEADER_ROWS`) and `OpenApiRowDiffs.Operation.takeHeaderRowDiff` |
| Unit tests | next-data-model `tests/unit-tests/openapi-layout.test.ts`; api-doc-viewer `tests/openapi-view-selection.test.ts` |
| View state | api-doc-viewer `OpenApiViewStateContext.ts` (store in `OperationNodeViewer`), `src/utils/openapi/view-selection.ts` (resolvers with the defaults) |
| Rendering | `OpenApiLayout.tsx` (plans one level), `shared-components/Separator/SeparatorRow.tsx`, `SecurityFrameRow` in `shared-components/Security/SecurityRows.tsx` |
| Block builders | `buildSecurityBlock`, `buildExtensionsBlock`, `buildRequestBlock`, `buildParametersBlock`, `buildResponsesBlock`, `buildResponseBlocks` (`response-blocks.tsx`), card segments in `SecuritySchemeCard` |
| CSS | `preceded-by.css` → "OpenAPI operation viewer" (`--openapi-row-padding`, set on the viewer root from the config); `frame.css` (`--frame-border-top` / `--frame-border-bottom`); `SeparatorRow.css` |
| Config entry point | `OpenApiViewerContext.spacing` (= `DEFAULT_OPENAPI_SPACING_CONFIG`); not a public prop in v1 |
