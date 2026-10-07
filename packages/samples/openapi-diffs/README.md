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
| `operation/` | 7 | summary, description, external docs, path rename (address partial replace), whole operation added, extensions |
| `security/` | 6 | alternative added, scope added, scheme added to an alternative, scheme definition changed, document security overridden, security removed |
| `request/` | 9 | parameters added / removed / moved / required, uniform vs mixed header changes, request body media types, body description and schema, whole body added |
| `responses/` | 6 | response added, code case rename, description, header added, media type removed, body schema property added |
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
| `security/01-alternative-added` | second alternative | selector shown; new option green on the changed side |
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

Planned (implementation plan step 6): `OpenAPI Operation Diffs Suite/<Category> Samples`, stories
under `packages/api-doc-viewer/src/stories/openapi-diffs-suite/`, ITs under
`packages/api-doc-viewer/src/it/openapi-diffs-suite/`. Story ids come from the built
`index.json`, not from case folder names.

## Regenerate

Hand-written fixtures; there is no generator. After visual changes run
`npm run regenerate-screenshots` in `packages/api-doc-viewer/`.
