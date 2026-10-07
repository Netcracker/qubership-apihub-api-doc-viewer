# OpenAPI — viewer, plain

Status: **planned**. Paths are relative to
`packages/api-doc-viewer/src/components/OpenApiOperationViewer/`. Abstract layer:
[../../shared/architecture/viewer-plain.md](../../shared/architecture/viewer-plain.md). Row stack:
[../features/operation-viewer.md](../features/operation-viewer.md#row-stack).

```mermaid
flowchart TB
  Root["OpenApiOperationViewer.tsx<br/>OpenApiTreeBuilder · OpenApiViewerContext ·<br/>DisplayModeContext · LayoutModeContext (DOCUMENT) · LevelContext"]
  Operation["OperationNodeViewer.tsx<br/>title (h1) · AddressRow · ExternalDocsRow · description<br/>section data-precededby (one pass)"]
  Security["SecurityNodeViewer.tsx<br/>Security (h2) · alternatives Selector row"]
  Card["SecuritySchemeCard/SecuritySchemeCard.tsx<br/>title (h4) + type badge · description · detail AdditionalInfoRows"]
  Flow["SecuritySchemeCard/OAuthFlowRows.tsx<br/>flow title (h5) · URL rows · Available scopes"]
  Extensions["shared-components/ExtensionsSection<br/>Extensions (h2)"]
  Request["RequestNodeViewer.tsx<br/>Request (h2)"]
  Params["ParametersNodeViewer.tsx<br/>Path Parameters · Query Parameters · Headers · Cookies (h3)"]
  Body["RequestBodyNodeViewer.tsx<br/>Body (h3) + media-type Selector · description"]
  Responses["ResponsesNodeViewer.tsx<br/>Responses (h2) + toned code Selector"]
  Response["ResponseNodeViewer.tsx<br/>media-type Selector row · description · Headers (h3) · Body (h3)"]
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
  Body --> MediaSchema
  Responses --> Response
  Response --> Params
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
