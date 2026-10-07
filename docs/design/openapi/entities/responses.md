# Responses

The **Responses** section: the toned response-code selector, then for the selected response its
description, headers, and body (whose header carries the media-type selector). Status: **planned**.

## Nodes

| Kind | Complexity | Key | Value | Children / nested |
| --- | --- | --- | --- | --- |
| `responses` | complex | `responses` | `null` | nested: `response` per code, **canonical order** |
| `response` | simple | the code as in the document (`200`, `2XX`, `default`) | `{ code: string; codeClass: OpenApiResponseCodeClass; description?: string }` | children: `responseHeaders`?, `content`? |
| `responseHeaders` | simple | `headers` | `{ schema: OpenApiSynthesizedObjectSchema }` | — |
| `content` / `mediaType` | as in [request-body.md](request-body.md#nodes) | | | |

`responses` is absent when the operation has no `responses` (allowed in OAS 3.1; invalid but
tolerated in OAS 3.0 — [../features/oas-versions.md](../features/oas-versions.md#responses)).
`x-*` keys of the Responses Object are not response codes and are skipped.

## Response codes

Shared helpers in `packages/next-data-model/src/shared/openapi/types/response-code.ts`:

```typescript
export const OpenApiResponseCodeClasses = {
  INFORMATIONAL: '1XX',
  SUCCESS: '2XX',
  REDIRECTION: '3XX',
  CLIENT_ERROR: '4XX',
  SERVER_ERROR: '5XX',
  DEFAULT: 'default',
  UNKNOWN: 'unknown',
} as const
export type OpenApiResponseCodeClass = typeof OpenApiResponseCodeClasses[keyof typeof OpenApiResponseCodeClasses]
```

| Key | Class | Kind |
| --- | --- | --- |
| `100`–`199` | `1XX` | explicit |
| `1XX`, `1xx` | `1XX` | range |
| … same for 2–5 … | | |
| `default` | `default` | — |
| anything else | `unknown` | — |

`OpenApiResponseCode.resolveClass(key)` and `OpenApiResponseCode.compare(a, b)` live in
next-data-model (the transformer orders the nested nodes); the viewer only maps a class to a tone.

**Canonical order** (`compare`): by class `1XX` → `5XX`; inside a class explicit codes ascending,
then the range; then `unknown` keys in document order; `default` last. Document order is ignored on
purpose — fixture `oas30/05-response-codes-palette` declares `500` first.

## Section header with the code selector

| Item | Rule |
| --- | --- |
| Component | `TitleRow` "Responses", **h2**, `subheader={(side) => <Selector …/>}` |
| Options | one per `response` node; title = the code text (`OpenApiRowDiffs.Response.resolveSideCode(node, side)` for a renamed code, e.g. `4xx` → `4XX`, E6) |
| Tone | `resolveResponseCodeTone(codeClass)` — [../features/response-code-selector.md](../features/response-code-selector.md) |
| Option test id | `response-code-<code>` |
| Initial selection | first `2XX` option, else the first option (Q13) |
| Diff | header from the `responses` node (section colorizing over the codes); options carry `response` node diffs and summaries |

## Description row

Directly under the section header. `MarkdownTextRow`, body2, `response.description` (required by
the specification; may still be missing). It belongs to the **response**, not to the media type:
the Media Type Object has no description (Q3), so the row does not change with the media-type
selection. Diff key `description`, severity `DescriptionRow`. Not the schema description.

## Headers

| Item | Rule |
| --- | --- |
| Source | `response.headers` (map name → Header Object); synthesized by the same `OpenApiObjectSchemaSynthesizer` as parameters ([parameters.md](parameters.md#schema-synthesizer)) — entry name = map key, no `in` |
| Header row | `TitleRow` "Headers", **h3**, test id `openapi-response-headers` |
| Content | `ParametersNodeViewer` (same component as request parameter groups) |
| Shown when | ≥1 header (either side in diffs); `api-unifier` drops the default `headers: {}` from denormalized / merged documents (E13), but an explicit empty map must hide the section too |
| `Content-Type` header | shown (Q5) |

## Body

| Item | Rule |
| --- | --- |
| Header row | `TitleRow` "Body", **h3**, test id `openapi-response-body`, media-type `Selector` in the subheader (Q2) — identical to the request Body header ([request-body.md](request-body.md#header-row-h3-with-the-media-type-selector)) except that responses have no `required` marker |
| Selector options | nested `mediaType` nodes of the response's `content`, document order; renamed media types show a per-side title; default tone, `SelectorVariant.Secondary`; option test id `response-media-type-<index>` |
| Selection | per response, kept when switching codes ([../features/operation-viewer.md](../features/operation-viewer.md#view-state)) |
| Shown when | the response has ≥1 media type (either side in diffs) |
| Diff | header from the `content` node's section diff (whole content added / removed); options carry `mediaType` node diffs and summaries |
| Schema | `MediaTypeSchemaViewer` for the selected media type — same wrapping and diff rules as the request body ([request-body.md](request-body.md#schema)) |

The request and response Body headers are one component, `MediaTypeContentHeader`
(`OpenApiOperationViewer/MediaTypeContentHeader.tsx`): title, optional required marker, media-type
selector. `RequestBodyNodeViewer` and `ResponseNodeViewer` own the selection state and pass it in.

## Response without content

`204`-style responses: no Body subsection; the description and headers still render.

## Visibility

`OpenApiNodeVisibilityManagerKindResponse` (plain and with-diffs variants) returns
`{ showDescription, showHeaders, showBody }` for the selected response;
`…KindResponses` returns `{ showSection }`.

## Related documents

- [../features/response-code-selector.md](../features/response-code-selector.md)
- [../features/diffs.md](../features/diffs.md#request-body-and-responses)
- Fixtures: `packages/samples/openapi/oas30/05-response-codes-palette/`, `packages/samples/openapi-diffs/responses/`
