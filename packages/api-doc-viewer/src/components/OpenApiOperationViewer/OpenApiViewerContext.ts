import { createContext, useContext } from "react"

/** Values the nested OpenAPI containers need from the root viewer. */
export type OpenApiViewerContextValue = {
  readonly devMode: boolean
  /** Forwarded to nested JSON Schema viewers; their own default when omitted. */
  readonly expandedDepth?: number
  /** Forwarded to nested `JsonSchemaDiffsViewer`s; their own default when omitted. */
  readonly hideUnchangedNodes?: boolean
}

export const OpenApiViewerContext = createContext<OpenApiViewerContextValue>({ devMode: false })

export function useOpenApiViewerContext(): OpenApiViewerContextValue {
  return useContext(OpenApiViewerContext)
}
