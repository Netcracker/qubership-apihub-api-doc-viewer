# Vertical gaps: every gap is a separator row

Status: **approved and implemented 2026-10-16** (decision points §10: all as recommended — 8px
between sub-blocks, 8px between cards, flow parts 8px apart, border → content 12px, the viewer keeps
its 4px top / bottom). It replaces the numbers of [block-separators.md](block-separators.md) §1, §4
and §9.1, the frame-row outer half of §3, and the §10 proposal (its problem disappears, §5 below). The colouring principle of §2, the
badge stubs of §9.2 and the data / viewer split of §7 stay. JSON Schema and JSO viewers are **not**
changed: they keep their own rows and paddings.

## 1. Requirements (as given)

| # | Element(s) | Spacing |
| --- | --- | --- |
| 1 | **Block 1**: summary, operation ID, address, description, external docs rows | ≥ 4px above, ≥ 4px below each |
| 2 | **Block 2**: Security header, security toolbar, security card(s) | ≥ 4px above / below each; ≥ 4px between cards |
| 4 | **Block 3**: Extensions header, JSO viewer | ≥ 4px above / below |
| 6 | **Block 4**: Request header; path / query / header / cookie parameter and Body sub-blocks (header + JSON Schema viewer) | ≥ 4px above / below |
| 8 | **Block 5**: Responses header, response description, Headers / Body sub-blocks | ≥ 4px above / below |
| 3, 5, 7, 9 | between blocks 1–2, 2–3, 3–4, 4–5 | **12px** |

Plus: every vertical gap in OpenAPI is a separator row (or a set of separator rows) coloured by what
changed; everything stays configurable.

## 2. Inferred rule

**R1 — no row padding.** OpenAPI rows (title, text, address, external docs, toolbar, card rows, …)
get **no vertical padding**: a row is its content only. Every vertical gap between two OpenAPI
elements is **one separator row made of bands** — the "set of separator rows".

**R2 — each element owns a half-gap above and below.** An *element* is anything the OpenAPI layer
stacks: a row, a security card (seen from outside), a nested JSON Schema / JSO viewer.

| Element | Owned half-gap (above and below) | Why |
| --- | --- | --- |
| OpenAPI row | **4px** | the "≥ 4px above / below" of every row |
| Security card (outside its border) | **4px** | "≥ 4px around the cards" |
| Nested JSON Schema / JSO viewer | **0px** | its first / last row already insets its text by ≥ 4px (JSON Schema: 4px row body, overridden for OpenAPI; JSO: 26px min-height centring) — the "≥" |

**R3 — a level gap between top-level blocks.** Between two blocks of the **operation level**
(blocks 1–5 above) the gap gets an extra **4px**, always split into **two 2px halves**: the upper
half continues the element above, the lower half the element below (§3). Inside a block (rows of
block 1, sub-blocks of Request / Responses, cards) the level gap is **0**.

**R4 — gap = owned half of the element above + level gap + owned half of the element below.**

| Between | Gap | Today |
| --- | --- | --- |
| two rows of one block (summary → operation ID → address → description → external docs; Security header → toolbar; Request header → first sub-block header; Responses header → description) | 4 + 0 + 4 = **8** | 8 (operation ID: 16) |
| two sub-blocks (Path Parameters → Query Parameters, Headers → Body, …) | nested 0 + 0 + 4 = **4** below the viewer's own ≥ 4 inset → **8 visible** | 20 |
| a sub-block header → its nested viewer | 4 + 0 + 0 → **4** above the viewer's own ≥ 4 inset → **8 visible** | 8 |
| toolbar → first card border; card border → card border | 4 + 0 + 4 = **8** | 16; 24 |
| two top-level blocks (1–2, 2–3, 3–4, 4–5) | 4 + **4** + 4 = **12** (after a nested viewer: 0 + 4 + 4 = 8 below its own ≥ 4 inset → 12 visible) | 20 |
| top / bottom of the viewer | the first / last element's own 4px half (§7, D5) | 4 (row padding) |

## 3. Colouring

Each band of a separator takes a tone **per side**, as in block-separators §2:

| Band | Tone on a side |
| --- | --- |
| owned half of an element | that element's own background on that side (the row diff that paints the row; a card: its whole-card diff; a nested viewer has a 0px half, but its tone — the whole add / remove of the block that owns it, as block-separators §2.6 — feeds the level half next to it) |
| upper level half (2px) | the tone of the element **above** (the same as its owned half) |
| lower level half (2px) | the tone of the element **below** |

So a gap between top-level blocks is, per side, `4 + 2` in the tone of the element above and
`2 + 4` in the tone of the element below — two 6px halves. Neighbouring bands with the same tone
render as one band (rendering only). Badge stubs follow the same bands: an owned half and the level
half next to it carry their element's badge.

**Consequence:**

| Row that changed alone | Band above / below |
| --- | --- |
| inside a block (every gap 4 + 4) | **4 / 4** |
| at the edge of a top-level block (the last row of block 1, a block's h2 title, the last row before the next block) | **4 / 6** or **6 / 4** — 2px more on the side of the 12px gap |

A wholly added / removed block is coloured through its elements and their halves; at the operation
level its colour reaches 6px beyond its edge rows' content.

## 4. Visual examples

Notation: one line per band or row; `(4)` a 4px band, `▒G` green, `▒R` red, `▒Y` yellow, `░░` gray
(absent side), blank = white; `▌` the floating badge / badge stub of the row's diff type (`▌a`
annotation, `▌n` non-breaking where the fixture's type is known), leftmost. Left = origin, right = changed. Nested JSON Schema / JSO rows are marked `·`.

### 4.1 Plain operation (one column)

```text
(4)                                        viewer top: first row's own half
Update an order                            summary (h1)
(4)(4)                                     8
Operation ID: updateOrder
(4)(4)                                     8
[POST] /orders/{orderId}
(4)(4)                                     8
Replaces the order.                        description
(4)(4)                                     8
Order docs ↗                               external docs
(4)(2)(2)(4)                               12 ── block 1 → block 2: 4 + 2 | 2 + 4
Security                                   h2
(4)(4)                                     8
‹ oauth  api_key ›                         toolbar
(4)(4)                                     8
┌ oauth  OAuth 2.0 ───────────┐            card 1 (its border; inside: §6)
└─────────────────────────────┘
(4)(4)                                     8 between cards
┌ api_key  API Key ───────────┐            card 2
└─────────────────────────────┘
(4)(2)(2)(4)                               12 ── block 2 → block 3
Extensions                                 h2
(4)                                        4 + JSO row's own inset
· x-rate-limit  100                        JSO viewer
(2)(2)(4)                                  JSO inset + 8 = 12 ── block 3 → block 4: 0 + 2 | 2 + 4
Request                                    h2
(4)(4)                                     8
Path Parameters                            h3
(4)                                        4 + JSON Schema inset
· orderId* string                          JSON Schema viewer
(4)                                        inset + 4 ── sub-block → sub-block (today 20)
Query Parameters
(4)
· dryRun boolean
(4)
Body*  [application/json]
(4)
· Type object
(2)(2)(4)                                  inset + 8 = 12 ── block 4 → block 5
Responses  [200] [400]                     h2 + code selector
(4)(4)                                     8
Updated order.                             response description
(4)(4)                                     8
Headers                                    h3
(4)
· ETag string
(4)
Body  [application/json]
(4)
· Type object                              viewer bottom: nested viewer's own inset
```

### 4.2 A row that changed alone — 4 / 4 inside a block, 4 / 6 at a top-level edge

`operation/09-description-changed` (description replaced, annotation; the description is the last
row of block 1, so the 12px gap to Security is below it):

```text
      [POST] /orders/{orderId}       │    [POST] /orders/{orderId}
      (4)                            │    (4)                       address's half
▌a ▒Y (4)                            │ ▒Y (4)                       description's half
▌a ▒Y Replaces the order.            │ ▒Y Replaces the whole order.
▌a ▒Y (4)                            │ ▒Y (4)                       description's half
▌a ▒Y (2)                            │ ▒Y (2)                       upper level half: continues the description
      (2)                            │    (2)                       lower level half: continues Security
      (4)                            │    (4)                       Security's half
      Security                       │    Security
```

Band: 4 above, 6 below (a middle row such as the address would be 4 / 4).

`operation/05-operation-id-removed` (a middle row of block 1):

```text
      Update an order                │    Update an order
      (4)                            │    (4)
▌  ▒R (4)                            │ ░░ (4)
▌  ▒R Operation ID: updateOrder      │ ░░
▌  ▒R (4)                            │ ░░ (4)
      (4)                            │    (4)
      [POST] /orders/{orderId}       │    [POST] /orders/{orderId}
```

`request-body/03-required-added` (the Body title row is yellow; Body is not the first sub-block):

```text
      · session string               │    · session string          Cookies' viewer: its own inset, half 0
▌  ▒Y (4)                            │ ▒Y (4)                       Body title's half
▌  ▒Y Body  [application/json]       │ ▒Y Body*  [application/json] [required]
▌  ▒Y (4)                            │ ▒Y (4)                       Body title's half
      (4)                            │    (4)                       description's half
      New order state.               │    New order state.
```

`responses/15-code-case-renamed` (the Responses h2 is yellow; it starts block 5):

```text
      · Type object                  │    · Type object             Request's last nested row (half 0)
      (2)                            │    (2)                       upper level half: continues the nested viewer (Request unchanged)
▌  ▒Y (2)                            │ ▒Y (2)                       lower level half: continues the Responses title
▌  ▒Y (4)                            │ ▒Y (4)                       Responses title's half
▌  ▒Y Responses [200] [400] [4xx]    │ ▒Y Responses [200] [400] [4XX]
▌  ▒Y (4)                            │ ▒Y (4)
      (4)                            │    (4)
      Updated order.                 │    Updated order.
```

### 4.3 A wholly added / removed block

`query-parameters/19-all-added` (a sub-block inside Request):

```text
      · orderId* string              │    · orderId* string         Path Parameters' viewer
▌n ░░ (4)                            │ ▒G (4)                       Query Parameters title's half
▌n ░░                                │ ▒G Query Parameters
▌n ░░ (4)                            │ ▒G (4)
▌n ░░ ·                              │ ▒G · dryRun boolean          nested rows (painted by JSON Schema)
▌n ░░ ·                              │ ▒G · expand string
      (4)                            │    (4)                       Headers title's half
      Headers                        │    Headers
```

A top-level block wholly added — the Security section added between block 1 and Extensions:

```text
      Replaces the order.            │    Replaces the order.
      (4)                            │    (4)                       description's half
      (2)                            │    (2)                       upper level half: continues the description
▌n ░░ (2)                            │ ▒G (2)                       lower level half: continues the Security title
▌n ░░ (4)                            │ ▒G (4)                       Security title's half
▌n ░░                                │ ▒G Security
   …                                 │    …
▌n ░░ └ card ┘                       │ ▒G └ card ┘
▌n ░░ (4)                            │ ▒G (4)                       card's half
▌n ░░ (2)                            │ ▒G (2)                       upper level half: continues the card
      (2)                            │    (2)                       lower level half: continues the Extensions title
      (4)                            │    (4)
      Extensions                     │    Extensions
```

A removed block directly above an added one (both at the operation level):

```text
▌  ▒R (4)                            │ ░░ (4)                       last element's half of the removed block
▌  ▒R (2)                            │ ░░ (2)                       upper level half
▌n ░░ (2)                            │ ▒G (2)                       lower level half
▌n ░░ (4)                            │ ▒G (4)
▌n ░░                                │ ▒G Extensions
```

### 4.4 Cards

A card wholly added after an unchanged one:

```text
      └ card 1 ┘                     │    └ card 1 ┘
      (4)                            │    (4)                       card 1's half
▌n ░░ (4)                            │ ▒G (4)                       card 2's half
▌n ░░ ┌ card 2 ┐                     │ ▒G ┌ card 2 ┐
```

## 5. What this does to the open questions

- **block-separators §10 (asymmetric band of a row that changed alone):** gone inside a block
  (4 / 4); at a top-level block edge it is 4 / 6 by choice — each 12px gap splits into two halves
  that continue their neighbours (§3) — instead of today's 4 / 10.
- **Your earlier request (separators between the block-1 rows, 8 = 4 + 4):** this is R4 for block 1.
- **Operation ID padding (§9.1):** gone — the row is 8px from its neighbours like every row.

## 6. Security cards (inside)

From outside a card is one element with a 4px half (§2). Inside, today's frame rows (24px, border in
the middle) lose their outer 12px — that space is now the card's half in the separator outside.
They keep the inner part: **`cardInnerInset`** between the border and the first / last content row's
own 4px half. Default **8**, so border → content stays **12px** as today. Rows inside a card follow
R4 with level gap 0: 8px between rows and between card segments (flow parts) — see D3.

## 7. Configuration

All numbers and rules in one object (next-data-model `model/openapi/layout/spacing-config.ts`),
replacing `rowPadding` / `blockGap`:

```typescript
type OpenApiSpacingConfig = {
  /** R2: owned half-gap above and below, per element kind (px). */
  readonly halfGap: { readonly row: number, readonly card: number, readonly nested: number }   // 4 / 4 / 0
  /** R3: extra gap between two siblings, per container level (px); split in two halves that continue the neighbours. */
  readonly levelGap: {
    readonly operation: number          // 4  — blocks 1–5
    readonly operationHeader: number    // 0  — rows of block 1
    readonly security: number           // 0  — Security header, toolbar, cards
    readonly request: number            // 0  — Request sub-blocks (D1)
    readonly responses: number          // 0  — Responses sub-blocks (D1)
    readonly section: number            // 0  — rows of a parameter group / Body / Extensions
    readonly card: number               // 0  — card rows and segments (D3)
  }
  /** Border → first / last card content row's half (px). */
  readonly cardInnerInset: number       // 8
  /** A nested JSON Schema viewer's first-row inset under an OpenAPI row (px; CSS --openapi-nested-viewer-inset). */
  readonly nestedViewerInset: number    // 4
  /** Keep the first / last element's half at the viewer's top / bottom. */
  readonly viewerEdges: boolean         // true (D5)
  /** Unchanged rules (block-separators §7.3): */
  readonly splitBands: (above, below, height) => OpenApiBand[]
  readonly splitBadge: (above, below, height) => OpenApiBadgeSegment[]
  readonly frameRowBadge: boolean
}
```

Changing a gap later is a one-number edit: e.g. `levelGap.request: 4` gives 12px between Request
sub-blocks; `halfGap.row: 6` gives 12px between rows everywhere.

## 8. Algorithm

Data layer (`model/openapi/layout/`):

| Piece | Change |
| --- | --- |
| `OpenApiBlockEdge` | `{ halfGap: number, tones, badge }` — `halfGap` from the element kind (R2); `tones` / `badge` the element's own (row diff, whole card; nested viewer: its owner's whole add / remove) |
| `OpenApiBlockEdges` | `row(painted)`, `card(card)`, `nested(owner)`, `single(edge)`, `container(children)`, `body(title, description, selectedMediaType)`; painted-row accessors per row kind (`sectionTitleRow`, `operationHeaderRow`, `securityToolbarRow`, `noAuthenticationRow`, `responsesTitleRow`, `requestBodyTitleRow`, `responseBodyTitleRow`, `descriptionRow`) |
| Planner `plan(blocks, level, config, { outerHalves })` | between two siblings, per side: `[ owned(above.tail), splitBands(above, below, levelGap[level]), owned(below.head) ]` — the default `splitBands` gives two halves in the neighbours' tones (one piece when equal); empty bands dropped, equal neighbours merged; the badge stub the same way (`splitBadge`). `outerHalves` (the root with `viewerEdges`, the inside of a card) adds the first element's upper half and the last element's lower half |
| Frame rows | `cardInnerInset` high, border at the outer edge; outside space comes from the card's half in the separator |

Viewer (`OpenApiOperationViewer/`):

| Piece | Change |
| --- | --- |
| Containers | every row is its own block of its container (block 1: one block per header row; Security: header, toolbar, each card) — no "rows touching" any more |
| `OpenApiLayout` | `+ level`; renders the leading / trailing separators the planner returns |
| CSS | OpenAPI row padding rules (`--openapi-row-padding`, `openapi-operation-id-row`) removed; nested-viewer first-row override stays (it is the viewer's ≥ 4 inset) |
| `SeparatorRow` / `BadgeStub` | render any stack of bands; frame positions passed as resolved values |
| Memoisation | the planner interns separators by `signature` (equal separators are one object); `SeparatorRow` and `SecurityFrameRow` are `memo` with value comparators; `renderSeparatorRow` returns one cached element per look and frame positions, so React skips them on re-render |

## 9. Cost

| Aspect | Estimate |
| --- | --- |
| Data layer | medium: new edge shape, planner with levels and three-part separators, config, frame rows; unit tests (band stacks for every §4 example, config overrides) |
| Viewer | medium: header / Security / card rows as blocks, `level` on every `OpenApiLayout`, CSS padding removed |
| Runtime | negligible (a few more separator rows per operation: one per row instead of one per block) |
| Screenshots | **all** OpenAPI suites, plain and diffs (every gap changes); JSON Schema / JSO suites unchanged |
| Risk | nested viewers' inset differs slightly (JSON Schema 4px, JSO ≈ 5px from centring) — within "≥ 4"; verified by the vertical spacing audit |

Roughly one working day including tests, the audit and screenshot regeneration.

## 10. Decision points

1. **Sub-blocks inside Request / Responses** (Path Parameters → Query Parameters, Headers → Body):
   **8px** as the requirements read (today 20), or `levelGap.request / responses = 4` → 12px.
2. **Between cards:** **8px** (4 + 4, each card ≥ 4 around it — recommended), or exactly 4px
   (`halfGap.card = 2`, which also makes toolbar → first card 6px).
3. **Inside a card:** flow parts / required-scopes list **8px** apart (rule, level gap 0), or keep a
   larger gap (`levelGap.card = 4` → 12px).
4. **Card inner inset:** border → content **12px** as today (`cardInnerInset = 8`), or tighter.
5. **Viewer top / bottom:** keep the first / last element's **4px** half (as today's row padding) —
   recommended — or start flush.
