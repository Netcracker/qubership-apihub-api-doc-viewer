# Review brief — OpenAPI

Shared rules: [../SKILL.md](../SKILL.md).

## Scope

| Layer | Paths |
| --- | --- |
| Viewers | `packages/api-doc-viewer/src/components/OpenApiOperationViewer/` (`OpenApiOperationViewer`, `OpenApiOperationDiffsViewer`) |
| Viewer utilities | `packages/api-doc-viewer/src/utils/openapi/`, `shared-styles/colors/openapi.css` (`buildOpenApiDiffCause` in `utils/common/changes.ts` is a legacy GraphQL / annotation helper, not part of this stack) |
| Shared UI introduced for OpenAPI | `shared-components/Security/`, `Separator/`, `ExternalDocsRow/`, `Selector` tone, `TitleRowUsage.OpenApiSection`, `OPENAPI_*` preceded-by kinds, `shared-styles/frame.css` |
| Data model | `packages/next-data-model/src/{model,building-service,shared}/openapi/` and the spec-neutral `{model,building-service}/security/` |

Out of scope: `stories/`, `it/`, `samples/`, `bin/`, and the nested JSON Schema and JSO viewers
(review them with their own briefs). The security module is shared with AsyncAPI: report its
findings here, but check every fix against the AsyncAPI security sections too.

## Design

- Index, decisions D1–D17, open questions: `docs/design/openapi/README.md`
- Coverage: `docs/design/openapi/display-coverage.md`
- Architecture: `docs/design/openapi/architecture/`
- Deviations from the design (I1–I12, V1–V11): `docs/design/openapi/notes/2026-10-implementation-decisions.md`
  — plan step 9 (rewriting entities and diagrams to match them) is still pending, so expect drift.
- Security: `docs/design/openapi/features/security-redesign.md`, `docs/design/async-api/features/security.md`
- Shared features: `docs/design/shared/features/`

## Focus

- **Layout as a cross-API contract.** `model/openapi/layout/` (`OpenApiLayoutPlanner`, block edges,
  spacing config) in next-data-model is an approved convention (`next-data-model-authoring`,
  `features/block-separators.md`); check that its generic part and the viewer's `OpenApiLayout` are
  not imported from OpenAPI folders by shared components or AsyncAPI (2026-10 review, F1).
- **OpenAPI types in shared components.** `Separator/` imports `OpenApiSeparatorRow` /
  `OpenApiBadgeSegment`; `TitleRow` has an `OpenApiSection` usage; `WithPrecededByProps` has
  `OPENAPI_ROW` kinds. Either generalize the types or move the pieces into the OpenAPI container
  layer.
- **Large transformer classes.** `openapi-spec-with-diffs-transformer.ts` (~540 lines),
  `openapi-spec-transformer.ts` (~400), `object-schema-with-diffs-synthesizer.ts` (~310),
  `model/openapi/tree-with-diffs/row-diffs.ts`: check single responsibility; section presence (I3)
  lives inside the transformer.
- **Catch-all aggregation.** One `KindAny` aggregator per family driven by tables (I2): check
  it against the Strategy-by-kind rule and against `building-service/security/tree-with-diffs/`.
- **Two security builders.** `openapi-security-spec-builder.ts` / `-with-diffs-builder.ts` next to
  the spec-neutral `security-spec-builder.ts` / `security-spec-diffs-decorator.ts`: duplication,
  and the decorator vs subclass choice against D2.
- **Visibility as free functions.** `model/openapi/node-visibility.ts` and
  `model/security/node-visibility.ts` (I5) — verify they are one class per concern, not a set of
  functions, and that no visibility check remains in containers.
- **Diff work in the viewer.** `diff-state.ts`, `response-blocks.tsx`, `buildOpenApiDiffCause`,
  per-response media-type state (V8), and `SecuritySchemeCardBase` (~490 lines) frame positions
  (V6): anything derived from raw diffs belongs in `OpenApiRowDiffs` accessors.
- **One component set for plain and with diffs (D5).** Check that branching on `*WithDiffs` stays
  thin and does not repeat per container.
- **Design drift.** Diagrams were refreshed by the 2026-10 review; entity tables and
  `features/diffs.md` may still describe complex nodes, per-kind aggregators,
  `OpenApiSectionPresenceResolver`, and per-kind visibility managers (I1–I3, I5, V1) until plan
  step 9 lands. Report each disagreement.
- Previous review: `docs/design/openapi/notes/2026-10-architecture-review.md` — start from its open
  findings.
