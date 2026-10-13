# Security

The **Security** section: effective security requirements, the alternatives selector (logical
**OR**), and one card per security scheme of the selected alternative (logical **AND**). Status: **implemented** (first iteration; deviations in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md)).

## OpenAPI semantics

| Concept | Specification | Viewer |
| --- | --- | --- |
| `security` (list of Security Requirement Objects) | Any **one** requirement satisfies the request. | Security toolbar (OR). |
| Security Requirement Object (`{ schemeName: [scopes] }`) | **All** schemes of one object must be satisfied. | One card per scheme (AND). |
| Empty requirement `{}` | Anonymous access is allowed. | An alternative titled `No authentication` (Q7). |
| Operation `security` absent | The document-level `security` applies. | Effective security = document `security`. |
| Operation `security: []` | Overrides the document: no security. | No Security section. |
| Scheme reference | By **name**, into `components.securitySchemes`; not a `$ref`. | The transformer resolves names (D11). |
| Scopes list | OAuth2 / OpenID Connect: required scopes. OAS 3.1 also: role names for every other type. OAS 3.0: must be empty for other types. | `Required scopes` / `Required roles` row — [../features/oas-versions.md](../features/oas-versions.md#security). |

## Effective security (`OpenApiSpecTransformer.resolveEffectiveSecurity`)

```text
operation.security !== undefined  →  operation.security     (isInheritedFromDocument = false)
otherwise                         →  document.security ?? []  (isInheritedFromDocument = true)
```

`isInheritedFromDocument` is kept on the `security` node value (`ndm-reserved`; a hint row is a
possible follow-up). The with-diffs variant is below ([With diffs](#with-diffs)).

## Transformed shape

```typescript
// data.security in the operation-oriented spec
type OpenApiSecuritySpec = {
  isInheritedFromDocument: boolean
  alternatives: OpenApiSecurityAlternativeSpec[]          // index = node key
}
type OpenApiSecurityAlternativeSpec = {
  schemes: Record<string, OpenApiSecuritySchemeSpec>     // key = scheme name, requirement order
}
type OpenApiSecuritySchemeSpec = {
  name: string
  isResolved: boolean                                     // false: name not in components.securitySchemes
  type?: string                                           // apiKey | http | oauth2 | openIdConnect | mutualTLS (3.1) | unknown string
  description?: string
  in?: string                                             // apiKey
  parameterName?: string                                  // apiKey `name` (renamed: `name` is the scheme key)
  scheme?: string                                         // http
  bearerFormat?: string                                   // http bearer
  openIdConnectUrl?: string                               // openIdConnect
  requiredScopes: string[]                                // from the requirement
  requiredScopesKind: 'scopes' | 'roles' | 'ignored'      // dialect decision
  flows?: Record<OpenApiOAuthFlowType, OpenApiOAuthFlowSpec> // oauth2
}
type OpenApiOAuthFlowSpec = {
  flowType: 'implicit' | 'password' | 'clientCredentials' | 'authorizationCode'
  authorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  scopes: Record<string, string>                          // available scopes: name → description
}
```

The scheme spec is a **merge** of the requirement entry (name, scopes) and the scheme definition
(everything else). Unknown scheme fields (including `x-*`) are not copied.

## Nodes

| Kind | Complexity | Key | Value | Children / nested |
| --- | --- | --- | --- | --- |
| `security` | complex | `security` | `{ isInheritedFromDocument }`¹ | nested: `securityRequirement` per alternative |
| `securityRequirement` | simple | alternative index | `{ schemeNames: string[]; isAnonymous: boolean }` | children: `securityScheme` per scheme |
| `securityScheme` | simple | scheme name | the scheme spec without `flows` | children: `oauthFlow` per flow |
| `oauthFlow` | simple | flow type | `OpenApiOAuthFlowSpec` | — |

¹ Complex AsyncAPI nodes carry `value: null`; `security` needs a value, so `createNodeFromRaw`
must create values for complex kinds listed in an allow-list (`OPENAPI_COMPLEX_KINDS_WITH_VALUE`).
Alternatively keep `security` simple with one complex child `securityAlternatives`; pick one in
implementation and record it in the diagram. The rest of this document is neutral to the choice.

`meta.unresolvedSecurityScheme = name` is set when `isResolved` is false.

## Section header

`TitleRow` "Security", **h2**, `expandable={false}`. **Present** on a side when the effective list
has at least one alternative there; an anonymous-only list (`[{}]`) is present (it shows the
`No authentication` content). With diffs the section is rendered when present on either side and,
per side, follows the [presence rule](../features/diffs.md#section-presence-and-whole-section-changes):

| Before | After | Section |
| --- | --- | --- |
| ≥1 alternative | `security: []` (one `remove` per alternative, E7) | wholly removed — `security/02-security-removed` |
| no operation `security`, document list empty | operation `security` with alternatives | wholly added |
| document list inherited | operation override with other alternatives | present on both sides; synthetic alternative diffs ([below](#synthetic-alternative-diffs-on-override-changes-q15)); header uncolored |

A **card** is present on a side when its scheme is in the selected alternative there; a scheme
added to / removed from an alternative makes the card wholly added / removed. A scheme whose
definition is missing from `components.securitySchemes` is still present (it renders the
`unresolved` row).

## Security toolbar

Sketches: [../features/security-redesign.md](../features/security-redesign.md) §1 (approved 2026-10-13).

| Item | Rule |
| --- | --- |
| Shown when | ≥1 alternative — always, also for a single alternative (Q6) |
| Row | shared `SecurityToolbar` (`shared-components/Security/`): `‹ [option] [option] … ›` — the options are one non-wrapping line (`Selector` `noWrap`) in a horizontally scrolling strip |
| Arrows | `‹` / `›` scroll the strip by exactly one option (`resolveStripScrollTarget`, `utils/common/strip-scroll.ts`). At the left / right edge the arrow is disabled: gray, no hover, no pointer, not clickable; otherwise blue, hoverable, clickable. Both arrows are always shown (disabled when everything fits) so the row never jumps (Q-S5). |
| Long titles | an option never grows wider than the strip and is cropped with an ellipsis; `min-width` keeps one character + `…` visible |
| Option title | scheme names joined with ` + ` (`api_key + request_signature`); `No authentication` for `{}` (`OpenApiDisplayLabels.securityRequirementTitle`) |
| Option test id | `security-alternative-<index>`; arrows `security-toolbar-arrow-{left,right}` |
| Diffs | option `diffs` / `diffsSummary` / `descendantDiffsSummary` from the `securityRequirement` node (border shadow, markers, per-side visibility by `Selector`). Row background: `OpenApiRowDiffs.Security.takeToolbarRowDiff` — the section's whole add / remove, else a yellow `replace` row when any alternative was wholly added / removed. Severity placement `SelectorRow`. |
| Reuse | the same toolbar, cards, and rows serve AsyncAPI server security later (smaller section header there); the AsyncAPI data layer does not exist yet |

## Scheme card

One card per `securityScheme` child of the selected alternative, in requirement order: a
**framed box** (Q8, [Card frame](#card-frame)). Component `SecuritySchemeCard`, test id
`security-scheme-<name>`; its rows are the shared blocks of `shared-components/Security/SecurityRows.tsx`.
Sketches: [../features/security-redesign.md](../features/security-redesign.md) §2–§4.

| Row | Shown when (`detailed`) | Content | Severity placement |
| --- | --- | --- | --- |
| Title (h4) | always | scheme name; subheader: **gray type text** (JSON Schema / DDL type-label look), not a badge | `TitleRow` |
| Unresolved | `!isResolved` | muted `Security scheme is not defined in components.` | — |
| Description | `description` | markdown, right after the title | `DescriptionRow` |
| `<Place> parameter name` | apiKey, `name` | value `name`; the label prefix comes from `in` per side: `Header` / `Query` / `Cookie` / `Path` (`OpenApiDisplayLabels.apiKeyParameterNameLabel`) — the former `In` and `Name` rows merged | `SecuritySchemeParameterNameRow` (an `in` change counts here) |
| `HTTP Authorization Scheme` | http, `scheme` | `basic`, `bearer`, … from the scheme, never hard-coded | `SecuritySchemeHttpSchemeRow` |
| `Bearer Format` | http, `bearerFormat` | `JWT`, `PAT`, … | `SecuritySchemeBearerFormatRow` |
| `OpenID Connect URL` | openIdConnect | link | `SecuritySchemeOpenIdConnectUrlRow` |
| `Required scopes` / `Required roles` | non-oauth2, `requiredScopes` non-empty, kind not `ignored` | comma-separated list; in diffs added items green / removed items red (Q-S3) | `SecurityRequiredScopesRow` |
| Flow parts | oauth2 | [OAuth flow parts](#oauth-flow-parts) | per flow node |
| Trailing `Scopes` | oauth2, required scopes that no flow declares | 2nd-level scope rows, all required (`resolveUndeclaredRequiredScopeRows`) | — |

`mutualTLS` cards have title, type, and description only.

**Security props** (label / value rows) use one grid shape per card: `grid-template-columns:
var(--security-label-width) minmax(0, 1fr)` with a fixed 40px column gap (Q-S1). The card sets
`--security-label-width` to the longest label of its props in `ch`, so values of every prop of the
card start at the same x. Labels use the JSON Schema node-title font (`TextValue` `body2`).

Type labels (`OpenApiDisplayLabels.securitySchemeType`): `apiKey` → `API key`, `http` → `HTTP`,
`oauth2` → `OAuth 2.0`, `openIdConnect` → `OpenID Connect`, `mutualTLS` → `Mutual TLS`; any
other string is shown as is.

### OAuth flow parts

Flows in fixed order: `implicit`, `password`, `clientCredentials`, `authorizationCode`; a fixed
spacer row separates flow parts.

| Row | Shown when | Content | Severity placement |
| --- | --- | --- | --- |
| Flow header | always (`detailed`) | `Flow type **Authorization Code**` on a `#EDF1F5` plate (`OpenApiDisplayLabels.oauthFlowName`) | `TitleRow` of the flow (not when the whole diff is inherited from the card) |
| `Authorization URL` / `Token URL` / `Refresh URL` | the field exists | link | `OAuthFlow*UrlRow` |
| `Scopes ▾` | non-empty `scopes` | label + expander, no value; expanded by default; collapsing hides the scope rows | — |
| Scope (2nd level) | expanded | `<20px indent> name <* if required> <gap> <gray description> [required badge in diffs]`, own grid `--security-scope-width` | the scope's own diff type |

A scope is **required** when the selected requirement lists it (Q-S2): the separate
`Required scopes` row is not shown for oauth2. Scope rows come from
`OpenApiRowDiffs.OAuthFlow.resolveScopeRows(flow, scheme)`: the union of both sides' scopes, each
with per-side description and required status, a row diff (scope added / removed / description
replaced — derived from the flow's `scopes` map diff), and a required diff (status changed on a
scope present on both sides — derived from the scheme's `requiredScopes` diff).

### Card frame

Every shared row renders its own origin and changed halves (`SideBySideLayout`), so no single DOM
element wraps "the card" on one side. The frame is therefore drawn **per row and per side** (D12):

```text
 origin side                         changed side
┌───────────────────────────┐       ┌───────────────────────────┐   ← framePosition 'first'  (top + sides, top radius)
│ petstore_auth  [OAuth 2.0]│       │ petstore_auth  [OAuth 2.0]│
│ Required scopes  write:…  │       │ Required scopes  write:…  │   ← 'middle' (sides only)
│   Token URL  https://…    │       │   Token URL  https://…    │
└───────────────────────────┘       └───────────────────────────┘   ← 'last' (bottom + sides, bottom radius)
```

| Piece | Rule |
| --- | --- |
| Row API | `TitleRow`, `TextRow`, `MarkdownTextRow`, `AdditionalInfoRow` get an optional prop `framePosition?: (layoutSide: LayoutSide) => FramePosition \| undefined`, `FramePosition = 'single' \| 'first' \| 'middle' \| 'last'` (type in `shared-components/Frame/types.ts`). Undefined = no frame; existing callers are unaffected. |
| DOM | the row's per-side content div gets `data-frame-position="<position>"`; nothing else changes |
| CSS | `shared-styles/frame.css`: every position draws left / right borders (`1px solid #D5DCE3`, the selector border tone); `first` adds the top border and top radius (4px), `last` the bottom border and bottom radius, `single` both. Inner padding: a horizontal inset on the row body so text does not touch the border. |
| Positions | precomputed in **one pass** by `SecuritySchemeCard` over the rows it will actually render on that side (title, unresolved, description, detail rows, every OAuth flow row) — the DDL `buildColumnViewerContexts` pattern. Positions come from the visibility manager result, not from JSX order guesses. |
| Per side | a card absent on one side (scheme wholly added / removed) gets **no** frame on that side: `OpenApiRowDiffs.SecurityScheme.isCardPresentOnSide(node, side)`; rows there keep their whole-node diff styles (grey, hidden content). |
| Diff backgrounds | the row diff background fills the area **inside** the frame; the frame is drawn on the content div that already carries `flex w-full` (width contract), so the background still spans the full width. |
| Floating badges | `DiffFloatingBadgeWrapper` sits outside `SideBySideLayout` and is unaffected. |
| Spacing | gap between cards: the card title row uses `data-precededby={SECURITY_SCHEME_CARD}`; rows inside a card use their normal `data-precededby`. Vertical gaps inside the frame must be padding on the row body, never margin on the row (a margin would break the side borders — same reason as the DDL level-indicator rule). |
| OAuth flows | flow rows stay inside the scheme's frame; the flow title (h5) is a `middle` row. |
| Tests | a story with two cards, one wholly added (frame on the changed side only); DOM check that each side's frame width equals the column width. |

### Anonymous alternative content

When the selected alternative is `{}`: one `TextRow` (muted, body2) `Authentication is not
required.` instead of cards (Q7).

## Display modes

| Row | `simple` | `detailed` |
| --- | --- | --- |
| Section header, toolbar, card titles with type text | shown | shown |
| Descriptions, security props, flow parts, scopes | hidden | shown |

Rules live in `OpenApiNodeVisibility.resolveSecurityScheme` / `resolveOAuthFlow`
(`model/openapi/node-visibility.ts`), not in JSX (Q-S4).

## With diffs

### Where diffs come from

Measured on the fixtures (E7, E8, E9 in [../notes/2026-10-design-analysis.md](../notes/2026-10-design-analysis.md)):

| Change | Diff location in the merged document | Becomes |
| --- | --- | --- |
| Alternative added / removed | `operation.security[diffsMetaKey][index]` (`add` / `remove`); `apiDiff` maps alternatives **by index** | `securityRequirement` node-level diff (via `security` descendant diffs) |
| `security` set to `[]` | one `remove` per alternative (not a whole-list diff) | same as above |
| Scheme added to / removed from an alternative | `operation.security[i][diffsMetaKey][name]` (`add` / `remove`, value `[]` or the scopes) | `securityScheme` node-level diff |
| Scope added / removed | `operation.security[i][name][diffsMetaKey][j]` | list-item diffs of `requiredScopes` |
| Scheme definition field changed | `components.securitySchemes[name][diffsMetaKey][field]` and deeper (`flows.<type>[diffsMetaKey].tokenUrl`, `flows.<type>.scopes[diffsMetaKey][scope]`) | field diffs on `securityScheme` / `oauthFlow` |
| Scheme definition added / removed | `components.securitySchemes[diffsMetaKey][name]` | the card's field rows are painted added / removed; title row unchanged unless the requirement entry changed too |
| Operation starts overriding the document (`security` absent → present) | `operation[diffsMetaKey].security` (`add`, `afterValue` = the operation list) | synthetic alternative diffs (below) |
| Operation stops overriding | `operation[diffsMetaKey].security` (`remove`) | synthetic alternative diffs (below) |
| No override on either side | the document-level `security[diffsMetaKey]…` records | same relocation as for the operation list |

The with-diffs transformer copies every relocated record onto the transformed spec under
`diffsMetaKey` (scheme definition diffs onto the scheme spec, flow diffs onto the flow spec,
scope list diffs onto `requiredScopes`) — the aggregators then read only the transformed spec.

### Synthetic alternative diffs on override changes (Q15)

When the effective list switches between the document list `D` and the operation list `O`:

1. `before = D`, `after = O` for an `add` of `operation.security` (reverse for `remove`). Both are
   read from the merged document: the operation list from the diff's `afterValue` / `beforeValue`,
   the document list from the merged root `security` (with its own diffs ignored for this step).
2. Match alternatives by **deep equality** of the requirement objects (scheme-name set and scope
   sets, order-insensitive).
3. Merged list = `after` in order; every `before` alternative without a match is appended.
4. Matched alternatives carry no diff; unmatched `after` ones get an `add`, appended `before` ones a
   `remove`. The synthetic diffs reuse `type`, `scope`, and declaration paths of the
   `operation.security` diff.

### Painting

| Element | Rule |
| --- | --- |
| Section header | presence rule over the alternatives ([../features/diffs.md](../features/diffs.md#section-presence-and-whole-section-changes)) |
| Toolbar | yellow (`replace`) row when an alternative was wholly added / removed; the option keeps its green / red border; selecting it shows its content on one side only (the other side empty and gray) |
| Whole card / whole flow part added or removed | every row of the block (title or flow header, props, scopes toggle, scope rows, the spacer before it) is green / red on the present side and empty gray on the other; only the block's head row carries the severity badge |
| Prop rows | the row only: add green, remove red, replace yellow; a replaced **value** gets the `textHighlighterColor`, added / removed values do not |
| Type change | the gray type text is highlighted on both sides; the title row is not painted (the origin title would otherwise read the before type) (Q-S8) |
| Scope rows | scope added / removed: green / red row on one side; description replaced: yellow row + highlighted description; required changed: `*` on the origin side when removed, on the changed side when added, and the diff-colored `required` badge **after** the description |
| Spacing | vertical spacing is padding inside rows only (`SecurityRows.css`), so adjacent highlighted rows form one block without white seams |

## Related documents

- [../features/oas-versions.md](../features/oas-versions.md#security) — 3.0 vs 3.1 differences
- [../features/diffs.md](../features/diffs.md) — aggregators and severities
- Fixtures: `packages/samples/openapi/oas30/fields/security/*` (one per scheme type), `oas30/structure/05–07-security-*`, `oas31/fields/security/*`, `packages/samples/openapi-diffs/security/`
