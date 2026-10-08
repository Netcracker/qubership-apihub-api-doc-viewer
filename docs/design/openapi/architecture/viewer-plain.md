# OpenAPI — viewer, plain

Status: **implemented** (first iteration; deviations in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md)). Paths are relative to
`packages/api-doc-viewer/src/components/OpenApiOperationViewer/`. Abstract layer:
[../../shared/architecture/viewer-plain.md](../../shared/architecture/viewer-plain.md). Row stack:
[../features/operation-viewer.md](../features/operation-viewer.md#row-stack).

```mermaid
flowchart TB
  Root["OpenApiOperationViewer.tsx<br/>OpenApiTreeBuilder · OpenApiViewerContext ·<br/>DisplayModeContext · LayoutModeContext (DOCUMENT) · LevelContext"]
  Operation["OperationNodeViewer.tsx<br/>title (h1) + deprecated tag · 'Operation ID:' + value (TextRow label) · AddressRow ·<br/>ExternalDocsRow · description · section data-precededby (one pass)"]
  Security["SecurityNodeViewer.tsx<br/>Security (h2) · alternatives Selector row (always)"]
  Card["SecuritySchemeCard/SecuritySchemeCard.tsx<br/>framed (per-row framePosition) · title (h4) + type badge ·<br/>description · detail AdditionalInfoRows"]
  Flow["SecuritySchemeCard/OAuthFlowRows.tsx<br/>flow title (h5) · URL rows · Available scopes"]
  Extensions["shared-components/ExtensionsSection<br/>Extensions (h2)"]
  Request["RequestNodeViewer.tsx<br/>Request (h2)"]
  Params["ParametersNodeViewer.tsx<br/>Path Parameters · Query Parameters · Headers · Cookies (h3)"]
  Body["RequestBodyNodeViewer.tsx<br/>Body header · description"]
  BodyHeader["MediaTypeContentHeader.tsx<br/>Body (h3) + required * · media-type Selector (+ required tag)"]
  Responses["ResponsesNodeViewer.tsx<br/>Responses (h2) + toned code Selector"]
  Response["ResponseNodeViewer.tsx<br/>description · Headers (h3) · Body header"]
  MediaSchema["MediaTypeSchemaViewer.tsx<br/>wrapJsonSchemaForViewer('Type', …)"]
  Visibility["next-data-model<br/>OpenApiNodeVisibilityManagerKind* · display labels"]
  JsonSchema["JsonSchemaViewer<br/>(SUPPRESS_ROOT_NESTING_INDICATOR)"]
  Jso["JsoViewer"]
  SharedRows["shared-components<br/>TitleRow · MarkdownTextRow · AdditionalInfoRow · TextRow ·<br/>AddressRow · ExternalDocsRow · Selector (tone)"]

  Root --> Operation
  Operation --> Security
  Operation --> Extensions
  Operation --> Request
  Operation --> Responses
  Security --> Card
  Card --> Flow
  Request --> Params
  Request --> Body
  Body --> BodyHeader
  Body --> MediaSchema
  Responses --> Response
  Response --> Params
  Response --> BodyHeader
  Response --> MediaSchema
  Params --> JsonSchema
  MediaSchema --> JsonSchema
  Extensions --> Jso
  Operation --> Visibility
  Security --> Visibility
  Card --> Visibility
  Response --> Visibility
  Operation --> SharedRows
  Card --> SharedRows
  Response --> SharedRows
```

## Notes

- Containers read node values, visibility flags, and display labels from next-data-model; they
  compute neither visibility nor labels.
- Child lists go through guard helpers (`utils/openapi/node-type-checkers.ts`), never
  `childrenNodes() as …`.
- All hooks run before any early `return` (outer component returns `null` for a missing source,
  inner component checks the root kind after its hooks).
