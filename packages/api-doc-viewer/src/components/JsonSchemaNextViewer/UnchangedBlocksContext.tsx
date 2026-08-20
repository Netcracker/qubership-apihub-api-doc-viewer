import { NodeId } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { createContext, useCallback, useContext, useMemo, useState } from "react"

export type UnchangedBlocksContextValue = {
  hideUnchangedNodes: boolean
  revealedBlockIds: ReadonlySet<NodeId>
  revealBlock: (unchangedBlockId: NodeId) => void
}

export const UnchangedBlocksContext = createContext<UnchangedBlocksContextValue | null>(null)

export function useUnchangedBlocksContext(): UnchangedBlocksContextValue {
  const context = useContext(UnchangedBlocksContext)
  if (!context) {
    throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer")
  }
  return context
}

export function useOptionalUnchangedBlocksContext(): UnchangedBlocksContextValue | null {
  return useContext(UnchangedBlocksContext)
}

export function useUnchangedBlocksContextValue(hideUnchangedNodes: boolean): UnchangedBlocksContextValue {
  const [revealedBlockIds, setRevealedBlockIds] = useState<ReadonlySet<NodeId>>(() => new Set())

  const revealBlock = useCallback((unchangedBlockId: NodeId) => {
    setRevealedBlockIds((previous) => {
      if (previous.has(unchangedBlockId)) {
        return previous
      }
      const next = new Set(previous)
      next.add(unchangedBlockId)
      return next
    })
  }, [])

  return useMemo(
    () => ({
      hideUnchangedNodes,
      revealedBlockIds,
      revealBlock,
    }),
    [hideUnchangedNodes, revealedBlockIds, revealBlock],
  )
}
