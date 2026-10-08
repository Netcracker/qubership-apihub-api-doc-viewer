# OpenAPI diff fixtures

Before/after OpenAPI documents for `OpenApiOperationDiffsViewer`:
`<category>/<case-id>/{before,after}.yaml`. Every pair starts from the same OAS 3.0 base document
(`POST /orders/{orderId}`) and changes one thing. Stories merge the two whole documents with
`mergeOpenApiDocuments` (`packages/api-doc-viewer/src/stories/preprocess.ts`) — `components` must
be kept. Design: `docs/design/openapi/features/diffs.md`; the diff location each case produces is
recorded in `docs/design/openapi/notes/2026-10-design-analysis.md`.

## Categories

| Category | Cases | Covers |
| --- | ---: | --- |
| `operation/` | 10 | summary, description, external docs, path rename (address partial replace), whole operation added, extensions, operation ID, deprecated (with and without a title row) |
| `security/` | 6 | alternative added, scope added, scheme added to an alternative, scheme definition changed, document security overridden, security removed |
| `request/` | 28 | parameters added / removed / moved / required, uniform vs mixed header changes, request body media types, body description and schema, whole body added / removed, body became optional, parameter description moved between the entry and the schema root, parameter `schema` ↔ `content` and `content` media-type changes, Body presence flips (only media type / only schema removed or added), parameter, request body, and media type `x-*` extensions |
| `responses/` | 13 | response added, code case rename, description, header added, media type removed, body schema property added, response Body / Headers presence flips, response-code change markers, Responses / Response / media type extensions |
| `oas31/` | 3 | OAS 3.1 base: nullable via type array, `mutualTLS` alternative added, role scopes on an API key |

### Cases

| Case | Change | Expected highlight |
| --- | --- | --- |
| `operation/01-summary-changed` | `summary` replaced | title row yellow |
| `operation/02-description-added` | `description` added | description row green |
| `operation/03-external-docs-added` | `externalDocs` added | external docs row green |
| `operation/04-external-docs-url-changed` | `externalDocs.url` replaced | external docs row yellow |
| `operation/05-path-parameter-renamed` | path `/orders/{orderId}` → `/orders/{id}` | address row partial replace; `orderId` → `id` property rename in Path Parameters |
| `operation/06-whole-operation-added` | `POST` added next to an existing `GET` | every row green on the changed side |
| `operation/07-extensions-changed` | `x-rate-limit` replaced, `x-audience` added | Extensions header uncolored (mixed); JSO rows |
| `operation/08-operation-id-changed` | `operationId` replaced | operation ID row yellow |
| `operation/09-deprecated-added` | `deprecated: true` added | `deprecated` tag green on the changed side; title row yellow |
| `operation/10-deprecated-added-without-summary` | as 09, no `summary` on either side | no title row; `deprecated` tag on the address row |
| `request/10-request-body-became-optional` | `requestBody.required` `true` → `false` | `*` on the origin side only; red `required` tag; Body title row yellow |
| `request/11-description-moved-entry-to-schema` | `dryRun` description moved from the entry to the schema root, same text | **no** description diff |
| `request/12-description-entry-removed-schema-added` | entry text removed, other text added to the schema root | description `replace` |
| `request/13-description-schema-removed-entry-added` | schema-root text removed, other text added to the entry | description `replace` |
| `request/14-description-both-places-changed` | entry and schema-root texts both changed | description `replace` of the entry text; schema change shadowed |
| `request/15-description-schema-changed-under-entry` | only the schema-root text changed; entry text unchanged | **no** description diff (shadowed) |
| `request/16-parameter-schema-to-content` | `schema: boolean` → `content: application/json` (`object`) | description `replace`, `type` replace, `properties` add, `Media type` add |
| `request/17-parameter-content-media-type-renamed` | `application/json` → `application/json; charset=utf-8`, same schema | only `Media type` value `replace` |
| `request/18-parameter-content-media-type-replaced` | `application/json` (`object`) → `text/plain` (`string`) | description `replace`, `type` replace, `Media type` value `replace` |
| `request/19-body-only-media-type-removed` | the only media type removed; no body description | Body wholly removed (synthetic) |
| `request/20-body-only-schema-removed` | the only media type loses its `schema`; no body description | option and Body wholly removed (synthetic) |
| `request/21-body-only-schema-added` | the only media type gains a `schema`; no body description | option and Body wholly added (synthetic) |
| `request/22-body-media-type-removed-description-kept` | the only media type removed; description kept | Body on both sides, header uncolored; option removed |
| `request/23-body-removed` | `requestBody` removed | Body wholly removed (raw diff) |
| `responses/07-response-body-only-media-type-removed` | `200` `content` removed | response Body wholly removed; `200` option still present |
| `responses/08-response-body-only-schema-removed` | the only `200` media type loses its `schema` | response Body wholly removed (synthetic) |
| `responses/09-response-all-headers-removed` | `200` `headers` deleted (arrives as per-header removes) | response Headers wholly removed |
| `request/24-parameter-extension-added-and-changed` | `dryRun`: `x-owner` replaced, `x-internal` added on the entry | property Extensions sub-tree: replace + add |
| `request/25-parameter-extension-moved-to-schema` | `x-owner` moved from the entry to the schema root, same value | no diff |
| `request/26-parameter-extension-nested-change` | item added inside `x-audience.owners` | nested add in the property's Extensions sub-tree |
| `request/27-body-and-media-type-extensions-changed` | Request Body `x-max-size` replaced, media type `x-codec` added, `x-not-a-media-type` string key in `content` | body root Extensions: replace + add; the `content` key dropped by the unifier |
| `request/28-media-type-extension-shadows-schema-root` | media type `x-codec: gzip` added over schema root `x-codec: none` | `x-codec` replace `none` → `gzip` |
| `responses/13-responses-and-response-extensions-changed` | Responses `x-rate-limited` added; `200` `x-cache` replaced; `200` media type `x-codec` added | Responses Extensions: add; response Extensions (between Headers and Body): replace; body root Extensions: add; `200` marker counts `x-cache` and `x-codec` (inside the response), not the Responses-level `x-rate-limited` |
| `responses/10-response-added-with-headers-and-body` | `404` added with headers and a body | `404` option green, **no** change marker |
| `responses/11-response-code-renamed-and-description-changed` | `4xx` → `4XX` and its description replaced | per-side title; `annotation` marker (description only) |
| `responses/12-response-changes-of-different-severity` | `200`: header added, body property removed, `application/xml` removed, description replaced | `breaking` marker on `200` (strongest) |
| `security/01-alternative-added` | second alternative | new option green on the changed side (selector shown on both sides) |
| `security/02-scope-added` | `orders:read` added to the OAuth requirement | `Required scopes` chip added |
| `security/03-scheme-added-to-alternative` | `basic` added to the first alternative | new card green |
| `security/04-scheme-definition-changed` | token URL replaced, scope added in `components` | `Token URL` row yellow, `Available scopes` chip added |
| `security/05-root-security-overridden` | before inherits `api_key` from the document; after overrides with OAuth | synthetic: `oauth` alternative added, `api_key` alternative removed |
| `security/06-security-removed` | `security: []` | Security header red (all alternatives removed) |
| `request/01-query-parameter-added` | `notify` query parameter | property added in Query Parameters |
| `request/02-all-headers-removed` | both header parameters removed | Headers subsection header red (uniform) |
| `request/03-mixed-header-changes` | one header removed, one added | Headers subsection header **uncolored** (mixed directions) |
| `request/04-parameter-required-changed` | `dryRun` becomes required | required `*` added |
| `request/05-parameter-moved-query-to-header` | `dryRun` (query) → `X-Dry-Run` (header) | removed in Query Parameters, added in Headers |
| `request/06-body-media-type-added` | `application/xml` added | new media-type option |
| `request/07-body-media-type-renamed` | `application/json` → `application/json; charset=utf-8` | one option, title differs per side |
| `request/08-body-description-and-schema-changed` | body description replaced, `maxLength` and enum value added | description row yellow; JSON Schema rows |
| `request/09-request-body-added` | whole request body added | Body subsection green |
| `responses/01-response-added` | `404` added | new code option (orange tone) green on the changed side |
| `responses/02-response-code-case-renamed` | `4xx` → `4XX` | one option, title differs per side |
| `responses/03-response-description-changed` | `200` description replaced | response description row yellow |
| `responses/04-response-header-added` | `X-Rate-Limit-Remaining` added | property added in response Headers |
| `responses/05-response-media-type-removed` | `application/xml` removed from `200` | option hidden on the changed side |
| `responses/06-response-schema-property-added` | `updatedAt` added to the `200` body | JSON Schema row added; change marker on `200` |
| `oas31/01-nullable-via-type-array` | `note: string` → `[string, 'null']` | JSON Schema `anyOf` branch added |
| `oas31/02-mutual-tls-alternative-added` | `mtls` scheme and alternative added | new alternative, `Mutual TLS` card |
| `oas31/03-role-scopes-on-api-key` | `admin` role added to an API key requirement | `Required roles` chip added |

## Storybook and screenshot tests

`OpenAPI Operation Diffs Suite/<Category> Samples` (Operation, Security, Request, Responses,
OAS 3.1): stories under `packages/api-doc-viewer/src/stories/openapi-diffs-suite/` (one file per
category, globbing this folder; export `Case_<case id>`), ITs
`packages/api-doc-viewer/src/it/openapi-diffs-suite.<category>.it-test.ts`. Stories pick `POST` and
the first `paths` key of the after document. When adding a case, add the story export and the
matching `it(...)`; check the story id in the built `index.json`.

## Regenerate

Hand-written fixtures; there is no generator. After visual changes run
`npm run regenerate-screenshots` in `packages/api-doc-viewer/`.
