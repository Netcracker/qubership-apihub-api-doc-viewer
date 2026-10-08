# OpenAPI fixtures

Plain OpenAPI documents for `OpenApiOperationViewer`: `<dialect>/<case-id>/sample.yaml`, one
document per case. Stories normalize them (`normalize` + `denormalize`) and pick the operation
named in the case table. Design: `docs/design/openapi/`.

## Categories

| Category | Cases | Covers |
| --- | ---: | --- |
| `oas30/` | 5 | OAS 3.0: full operation, minimal operation, security alternatives, parameter sources, response-code palette |
| `oas31/` | 4 | OAS 3.1: full operation, no `responses`, `mutualTLS` and role scopes, Reference Object overrides and `components.pathItems` |

### `oas30/`

| Case | Operation | Covers |
| --- | --- | --- |
| `01-full-operation` | `POST /pets/{petId}/photos` | every row: title, operation ID, address, external docs, required request body (`Body*`), markdown description, two security alternatives (OAuth2 with two flows; API key AND HTTP bearer), extensions, path parameter from the path item, query / header / cookie parameters (deprecated, `nullable`), two request media types, six response codes incl. a range and `default`, response headers, `$ref` schemas with OAS 3.0 `nullable` and boolean `exclusiveMinimum` |
| `02-minimal-operation` | `GET /health` | only address and one `204` response; no title row (no `summary`), no operation ID row |
| `03-security-alternatives` | `GET`, `POST`, `DELETE /reports` | `GET`: inherited document security, selector with one alternative; `POST`: three alternatives incl. `{}` and `openIdConnect` scopes; `DELETE`: `security: []` (no section), **deprecated** tag |
| `04-parameters-sources` | `GET /orders/{orderId}` | path-item parameters merged by the unifier, operation override of a path-item header, `$ref` parameter, `content`-described parameter (media type annotation), the ignored `Accept` header |
| `05-response-codes-palette` | `GET /palette` | 1XX–5XX, ranges, `default`; canonical order (`500` declared first) |

### `oas31/`

| Case | Operation | Covers |
| --- | --- | --- |
| `01-full-operation` | `PATCH /pets/{petId}` | type arrays (`[string, 'null']`), numeric `exclusiveMinimum`, schema `examples`, `const`, enum without `type`, `contentMediaType` / `contentEncoding`, OAuth2 implicit flow |
| `02-no-responses` | `POST /events` | no `responses` (Responses section hidden), boolean schema `data: true` |
| `03-security-mutual-tls-and-roles` | `POST /admin/keys` | `mutualTLS`, `Required roles` on `http` and `apiKey` schemes |
| `04-reference-overrides-and-path-items` | `GET /invoices/{invoiceId}` | `components.pathItems`, Reference Object `description` overrides on a parameter and a response, `$ref` request body |

## Storybook and screenshot tests

`OpenAPI Operation Suite/OAS 3.0` and `OpenAPI Operation Suite/OAS 3.1`: stories under
`packages/api-doc-viewer/src/stories/openapi-suite/` (one story per operation; `01-full-operation`
also in *simple mode* and *no heading*), ITs `packages/api-doc-viewer/src/it/openapi-suite.*.it-test.ts`.
Non-default selections (other response code, other alternative) are captured by ITs clicking the
selector test ids.

## Regenerate

Hand-written fixtures; there is no generator. After visual changes run
`npm run regenerate-screenshots` in `packages/api-doc-viewer/`.
