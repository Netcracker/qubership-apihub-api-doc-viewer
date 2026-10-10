# Security

The **Security** section: effective security requirements, the alternatives selector (logical
**OR**), and one card per security scheme of the selected alternative (logical **AND**). Status: **implemented** (first iteration; deviations in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md)).

## OpenAPI semantics

| Concept | Specification | Viewer |
| --- | --- | --- |
| `security` (list of Security Requirement Objects) | Any **one** requirement satisfies the request. | Alternatives selector (OR). |
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

## Alternatives selector

| Item | Rule |
| --- | --- |
| Shown when | ≥1 alternative — always, also for a single alternative (Q6), like the AsyncAPI bindings selector |
| Row | standalone selector row under the header — copy `MessageSectionsViewer.renderSelectorRow` (selector inside `OneSideLayout` / `SideBySideLayout` + `DiffFloatingBadgeWrapper`), `SelectorVariant.Secondary`, default tone |
| Option title | scheme names joined with ` + ` (`api_key + request_signature`); `No authentication` for `{}`. Resolved in next-data-model (`OpenApiSecurityRequirementTitle.resolve(value)`). |
| Option test id | `security-alternative-<index>` |
| Diffs | option `diffs` / `diffsSummary` / `descendantDiffsSummary` from the `securityRequirement` node (selector markers and per-side visibility are already handled by `Selector`); row severity: new placement `SelectorRow` from the `security` node |

## Scheme card

One card per `securityScheme` child of the selected alternative, in requirement order: a
**framed box** (Q8, [Card frame](#card-frame)) whose first row is the **h4** title. Component
`SecuritySchemeCard`, test id `security-scheme-<name>`.

Rows, top to bottom (each row has its own severity placement, D7):

| Row | Component | Shown when | Content | Severity placement |
| --- | --- | --- | --- | --- |
| Title (h4) | `TitleRow` | always | scheme name; subheader: `UxBadge` (`default`) with the type label | `TitleRow` |
| Unresolved | `TextRow` (muted) | `!isResolved` | `Security scheme is not defined in components.` | — |
| Description | `MarkdownTextRow` | `description` | markdown | `DescriptionRow` |
| `In` | `AdditionalInfoRow` | apiKey, `in` | `header` / `query` / `cookie` chip | `SecuritySchemeLocationRow` |
| `Name` | `AdditionalInfoRow` | apiKey, `parameterName` | chip | `SecuritySchemeParameterNameRow` |
| `Scheme` | `AdditionalInfoRow` | http, `scheme` | chip (`basic`, `bearer`, …) | `SecuritySchemeHttpSchemeRow` |
| `Bearer format` | `AdditionalInfoRow` | http, `bearerFormat` | chip | `SecuritySchemeBearerFormatRow` |
| `OpenID Connect URL` | `AdditionalInfoRow` | openIdConnect, `openIdConnectUrl` | chip with the URL | `SecuritySchemeOpenIdConnectUrlRow` |
| `Required scopes` / `Required roles` | `AdditionalInfoRow` | `requiredScopes.length > 0` and `requiredScopesKind !== 'ignored'` | one chip per scope | `SecurityRequiredScopesRow` |
| OAuth flows | `OAuthFlowRows` × n | oauth2 | see below | per flow node |

Type labels (`OpenApiSecuritySchemeTypeLabel.resolve(type)`): `apiKey` → `API key`, `http` →
`HTTP`, `oauth2` → `OAuth 2.0`, `openIdConnect` → `OpenID Connect`, `mutualTLS` → `Mutual TLS`;
any other string is shown as is. An `http` scheme shows `HTTP` in the badge and the concrete scheme
in the `Scheme` row.

Label of the scopes row: `requiredScopesKind === 'scopes'` → `Required scopes`; `'roles'` →
`Required roles`.

### OAuth flow rows (`OAuthFlowRows`)

Flows in fixed order: `implicit`, `password`, `clientCredentials`, `authorizationCode`.

| Row | Shown when | Content | Severity placement |
| --- | --- | --- | --- |
| Flow title (h5) | always | `Implicit flow`, `Password flow`, `Client credentials flow`, `Authorization code flow` | `TitleRow` |
| `Authorization URL` | `authorizationUrl` | chip | `OAuthFlowAuthorizationUrlRow` |
| `Token URL` | `tokenUrl` | chip | `OAuthFlowTokenUrlRow` |
| `Refresh URL` | `refreshUrl` | chip | `OAuthFlowRefreshUrlRow` |
| `Available scopes` | non-empty `scopes` | one chip per scope **name**; the scope description is the chip tooltip (`title` attribute) | `OAuthFlowScopesRow` |

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
| Section header, selector, card titles, flow titles | shown | shown |
| Descriptions, all `AdditionalInfoRow`s | hidden | shown |

Rules live in `OpenApiNodeVisibilityManagerKindSecurityScheme` / `…KindOAuthFlow`
(`resolveNodeVisibility(node, displayMode)`), not in JSX.

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
| Section header | presence rule over the alternatives ([Section header](#section-header), [../features/diffs.md](../features/diffs.md#section-presence-and-whole-section-changes)) |
| Selector option | `Selector` hides the option on the side where its alternative does not exist and shows the change marker from `diffsSummary` ∪ `descendantDiffsSummary` |
| Card of an added / removed scheme | every row inherits the whole-node diff (KindAny inheritance) — green / red rows on one side, hidden on the other |
| Field rows | `colorizingDiff` = the field diff (add green, remove red, replace yellow); chip highlight per the DDL / JSON Schema chip contract: replace → yellow `textHighlighterColor`, add / remove → row background only |
| Scope rows | side items from `resolveListSideItems` (`model/abstract/tree-with-diffs/list-side-display.ts`); a whole-list add / remove paints the row and keeps chips plain (JSON Schema "whole-list add/remove" rule) |

## Related documents

- [../features/oas-versions.md](../features/oas-versions.md#security) — 3.0 vs 3.1 differences
- [../features/diffs.md](../features/diffs.md) — aggregators and severities
- Fixtures: `packages/samples/openapi/oas30/03-security-alternatives/`, `oas31/03-security-mutual-tls-and-roles/`, `packages/samples/openapi-diffs/security/`
