import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration";
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext";
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext";
import { LevelContext } from "@apihub/contexts/LevelContext";
import { DisplayMode } from "@apihub/types/DisplayMode";
import { DOCUMENT_LAYOUT_MODE } from "@apihub/types/LayoutMode";
import { AsyncApiTreeBuilder } from "@netcracker/qubership-apihub-next-data-model";
import { FC, memo, useMemo } from "react";
import { ErrorBoundary } from "../services/ErrorBoundary";
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback";
import { MessageNodeViewer } from "./MessageNodeViewer";

import '../../index.css';
import { isMessageNode } from "@apihub/utils/async-api/node-type-checkers";

export type AsyncApiOperationViewerProps = {
  source: unknown
  operationType?: string // send, receive
  operationKey?: string // e.g. send-fruit, receive-fruit
  messageKey?: string // e.g. send-fruit-message, receive-fruit-message
  displayMode?: DisplayMode
  referenceNamePropertyKey?: symbol
}

export const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps> =
  memo<AsyncApiOperationViewerProps>(props => {
    if (props.source === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="Async API Operation Viewer" />}>
        <AsyncApiOperationViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const AsyncApiOperationViewerInner: FC<AsyncApiOperationViewerProps> =
  memo<AsyncApiOperationViewerProps>(props => {
    const {
      source,
      operationType,
      operationKey,
      messageKey,
      displayMode = DEFAULT_DISPLAY_MODE,
      referenceNamePropertyKey,
    } = props

    const treeBuilder = useMemo(
      () => new AsyncApiTreeBuilder(source, { operationType, operationKey, messageKey }, referenceNamePropertyKey),
      [source, operationType, operationKey, messageKey, referenceNamePropertyKey]
    )
    const tree = useMemo(() => treeBuilder?.build() ?? null, [treeBuilder])

    console.debug('[AsyncAPI] Original Source:', source)
    console.debug('[AsyncAPI] Tree:', tree)

    const messageNode = tree?.root
    if (!messageNode || !isMessageNode(messageNode)) {
      return null
    }

    return (
      <DisplayModeContext.Provider value={displayMode}>
        <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}> {/* Now only 1 layout mode is supported */}
          <LevelContext.Provider value={0}>
            <MessageNodeViewer
              node={messageNode}
            />
          </LevelContext.Provider>
        </LayoutModeContext.Provider>
      </DisplayModeContext.Provider>
    )
  })
