import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { DisplayMode } from "../.."
import { FC, memo } from "react";

export type MetaKeys = {
  entityKeyMetaKey: symbol;
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}

export type AsyncApiOperationDiffViewerProps = {
  source: unknown
  operationType?: string // send, receive
  operationKey?: string // e.g. send-fruit, receive-fruit
  messageKey?: string // e.g. send-fruit-message, receive-fruit-message
  displayMode?: DisplayMode
  metaKeys: MetaKeys
  displayedDiffTypes?: ReadonlyArray<DiffType>, // empty list === show all diffs
}

// eslint-disable-next-line
export const AsyncApiOperationDiffViewer: FC<AsyncApiOperationDiffViewerProps> = memo((props) => {
  return (
    <div>
      <h1>Async API Operation Diff Viewer</h1>
    </div>
  )
})
