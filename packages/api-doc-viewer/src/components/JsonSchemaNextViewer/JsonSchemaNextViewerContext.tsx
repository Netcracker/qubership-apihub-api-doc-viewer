import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { createContext, useContext } from "react"

export type JsonSchemaNextViewerContextValue = {
  expandedDepth: number
  materializeChildren: (node: JsonSchemaTreeNode) => void
  /** Bumped after lazy materialization so viewers re-read `childrenNodes()`. */
  treeRevision: number
}

export const JsonSchemaNextViewerContext = createContext<JsonSchemaNextViewerContextValue | null>(null)

export function useJsonSchemaNextViewerContext(): JsonSchemaNextViewerContextValue {
  const context = useContext(JsonSchemaNextViewerContext)
  if (!context) {
    throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer")
  }
  return context
}
