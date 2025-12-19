import { DisplayMode } from "@apihub/types/DisplayMode";
import { FC } from "react";
import { memo } from "react";
import { ErrorBoundary } from "../services/ErrorBoundary";
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback";
import { AsyncApiTreeBuilder } from "@netcracker/qubership-apihub-next-data-model";

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
    const { source, operationType, operationName, displayMode } = props

    const treeBuilder = new AsyncApiTreeBuilder(source)
    const tree = treeBuilder.build()

    console.debug('[AsyncAPI] Tree:', tree)

    return <div>Hello, Async API!</div>
  })
