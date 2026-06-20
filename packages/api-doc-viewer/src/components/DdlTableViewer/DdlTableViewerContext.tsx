import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-callback"
import { createContext, useContext } from "react"

export type DdlTableViewerContextValue = {
  navigationCallback: NavigationCallback
}

export const DdlTableViewerContext = createContext<DdlTableViewerContextValue | null>(null)

export function useDdlTableViewerContext(): DdlTableViewerContextValue {
  const context = useContext(DdlTableViewerContext)
  if (!context) {
    throw new Error('useDdlTableViewerContext must be used within DdlTableViewer')
  }
  return context
}
