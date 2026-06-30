import { NavigationLinkBuilder } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-link-builder"
import { createContext, useContext } from "react"

export type DdlTableViewerContextValue = {
  navigationLinkBuilder: NavigationLinkBuilder
}

export const DdlTableViewerContext = createContext<DdlTableViewerContextValue | null>(null)

export function useDdlTableViewerContext(): DdlTableViewerContextValue {
  const context = useContext(DdlTableViewerContext)
  if (!context) {
    throw new Error('useDdlTableViewerContext must be used within DdlTableViewer')
  }
  return context
}
