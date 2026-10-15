import { OpenApiSelection } from "@apihub/utils/openapi/view-selection"
import { createContext, useContext } from "react"

/**
 * The operation viewer's view state, shared by every container: the layout of one level depends on
 * the selections of the levels below it (a Body's selected media type decides where Request ends).
 * Owned by `OperationNodeViewer`, reset when the operation node changes.
 * Design: docs/design/openapi/features/block-separators.md -> "Cost and collapsible blocks".
 */
export type OpenApiViewState = {
  readonly selection: OpenApiSelection
  readonly select: (ownerNodeId: string, selectedNodeId: string) => void
}

export const OpenApiViewStateContext = createContext<OpenApiViewState>({ selection: new Map(), select: () => undefined })

export function useOpenApiViewState(): OpenApiViewState {
  return useContext(OpenApiViewStateContext)
}
