# Test fixtures

Fixtures for Storybook stories and screenshot ITs in `packages/api-doc-viewer`, plus inline cases
for next-data-model unit tests (`src/`, published to tests as `@netcracker/qubership-apihub-samples`).

## Catalogue layout

Every fixture catalogue is a `README.md` next to its fixtures:

| Level | File | Required sections |
| --- | --- | --- |
| Sample root | `<root>/README.md` | `Categories`, `Storybook and screenshot tests`, `Regenerate` |
| Category (when it needs detail) | `<root>/<category>/README.md` | `Cases`, `Storybook and screenshot tests`, `Regenerate` |

Titles read `<API type> fixtures`, `<API type> diff fixtures`, or `… fixtures — <category>`.
A catalogue written by a generator is changed through the generator. A generator that recreates
its output folder must not share it with hand-written files.

## Sample roots

| Root | API type | Mode | Catalogue |
| --- | --- | --- | --- |
| `json-schema/` | JSON Schema | plain | [json-schema/README.md](json-schema/README.md) |
| `json-schema-diffs/` | JSON Schema | with diffs | [json-schema-diffs/README.md](json-schema-diffs/README.md) |
| `async-api/` | AsyncAPI (Security only) | plain | [async-api/security/README.md](async-api/security/README.md) |
| `async-api-diffs/` | AsyncAPI | with diffs | [async-api-diffs/README.md](async-api-diffs/README.md) |
| `openapi/` | OpenAPI (3.0, 3.1) | plain | [openapi/README.md](openapi/README.md) |
| `openapi-diffs/` | OpenAPI (3.0, 3.1) | with diffs | [openapi-diffs/README.md](openapi-diffs/README.md) |
| `ddlapi/` | DDL API | plain | [ddlapi/README.md](ddlapi/README.md) |
| `ddlapi-diffs/` | DDL API | with diffs | [ddlapi-diffs/README.md](ddlapi-diffs/README.md) |
| `jso-diffs/` | JSO | with diffs | [jso-diffs/README.md](jso-diffs/README.md) |

Plain AsyncAPI stories (except Security) and plain JSO stories use inline data under
`packages/api-doc-viewer/src/stories/`. The AsyncAPI Security fixtures (`async-api/security/`,
`async-api-diffs/security/`) are written by `packages/api-doc-viewer/bin/generate-async-api-security-suite.mjs`.
`*.generated.*` compatibility-suite artifacts come from the external
`qubership-apihub-compatibility-suites` repository and are not stored here.

## Programmatic cases (`src/`)

| Module | API type | Mode | Cases |
| --- | --- | --- | --- |
| `src/async-api-diffs.ts` | AsyncAPI | with diffs | Inline YAML pairs for next-data-model unit tests. |
| `src/openapi-diffs-hiding-unchanged-nodes.ts` | OpenAPI | with diffs | Security scheme cards with hidden unchanged rows ([design](../../docs/design/openapi/features/hiding-unchanged-nodes.md)). |

### OpenAPI hiding unchanged nodes

One operation template (`buildOpenApiHidingUnchangedDocument`) plus one fragment per scheme kind
(`OPENAPI_SECURITY_SCHEME_FRAGMENTS`); a fragment renders its scheme for `hasChanges: false` (before,
and after when unchanged) or `hasChanges: true` (after, one or two content rows changed, never the
title row). A case lists fragments with a flag each; all schemes of a case are cards of one security
alternative.

| Cases | Content |
| --- | --- |
| `01`–`18` | Each scheme kind unchanged, then changed: API key in header / query / cookie, HTTP basic, HTTP bearer, OpenID Connect, OAuth 2.0 with one flow, OAuth 2.0 with all four flows (one scope of one flow changed), Mutual TLS (OAS 3.1). |
| `19`, `20` | Two cards, one changed and one unchanged, in both orders. |
| `21` | Three cards, all unchanged. |

**Storybook and screenshot tests:** `OpenAPI Operation Diffs Suite (Hiding Unchanged Nodes)/Security Schemes`
(`packages/api-doc-viewer/src/stories/openapi-diffs-hiding-unchanged-nodes-suite/security-schemes.stories.tsx`),
ITs `packages/api-doc-viewer/src/it/openapi-diffs-hiding-unchanged-nodes-suite.security-schemes.it-test.ts`;
unit tests `packages/next-data-model/tests/unit-tests/openapi-security-hiding-unchanged.test.ts`.

**Regenerate:** nothing is written to disk — edit the module. When the case list changes, update the
story exports and the IT `CASES` list (story ids via `bin/storybook-story-id-utils.mjs`), then
`node bin/run-screenshot-test-suite.mjs regenerate openapi-diffs-hiding-unchanged-nodes-suite`.

## Workflow

Fixtures come first when building a feature (see `docs/design/README.md` → Workflow): add the
cases and update the catalogue, then stories and ITs, then the implementation.
