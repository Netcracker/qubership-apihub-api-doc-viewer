import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration";
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext";
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext";
import { LevelContext } from "@apihub/contexts/LevelContext";
import { DisplayMode } from "@apihub/types/DisplayMode";
import { DOCUMENT_LAYOUT_MODE } from "@apihub/types/LayoutMode";
import { AsyncApiTreeBuilder } from "@netcracker/qubership-apihub-next-data-model";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, memo } from "react";
import { ErrorBoundary } from "../services/ErrorBoundary";
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback";
import { OperationNodeViewer } from "./OperationNodeViewer";

import { isOperationNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import '../../index.css';

type AsyncApiOperationViewerProps = {
  source: unknown
  operationType?: string // send, receive
  operationName?: string // e.g. send-fruit, receive-fruit
  displayMode?: DisplayMode
}

export const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps> =
  memo<AsyncApiOperationViewerProps>(props => {
    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="Async API Operation Viewer" />}>
        <AsyncApiOperationViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const AsyncApiOperationViewerInner: FC<AsyncApiOperationViewerProps> =
  memo<AsyncApiOperationViewerProps>(props => {
    const { source, operationType, operationName, displayMode = DEFAULT_DISPLAY_MODE } = props

    const treeBuilder = new AsyncApiTreeBuilder(source)
    const tree = treeBuilder.build()

    console.debug('[AsyncAPI] Source:', source)
    console.debug('[AsyncAPI] Tree:', tree)

    const root = tree.root
    if (!root) {
      return null
    }

    const operations = root.childrenNodes()
    const operationNode = operations.find(
      (current): current is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.OPERATION> => {
        if (!isOperationNode(current)) {
          return false
        }
        const value = current.value()
        return (
          !operationName || !operationType || (
            current.key === operationName &&
            value?.action === operationType
          )
        )
      }
    )
    if (!operationNode) {
      return null
    }

    return (
      <DisplayModeContext.Provider value={displayMode}>
        <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}> {/* Now only 1 layout mode is supported */}
          <LevelContext.Provider value={0}>
            <OperationNodeViewer
              node={operationNode}
            />
          </LevelContext.Provider>
        </LayoutModeContext.Provider>
      </DisplayModeContext.Provider>
    )
  })
