/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import '../../index.css'

import { createGraphApiDiffTree, DiffMetaKeys, DiffNodeMeta, GraphApiDiffNodeData, GraphApiDiffNodeMeta, GraphApiNodeKind, ModelTree } from '@netcracker/qubership-apihub-api-data-model'
import { aggregateDiffsWithRollup, DiffType } from "@netcracker/qubership-apihub-api-diff"
import { GraphApiState, isGraphApiOperationNode } from '@netcracker/qubership-apihub-api-state-model'
import type { FC } from 'react'
import { useMemo } from 'react'
import { DEFAULT_EXPANDED_DEPTH, DEFAULT_LAYOUT_MODE } from '../../consts/configuration'
import { ChangeSeverityFiltersContext } from '../../contexts/ChangeSeverityFiltersContext'
import { DisplayModeContext } from '../../contexts/DisplayModeContext'
import { LayoutModeContext } from '../../contexts/LayoutModeContext'
import { LevelContext } from '../../contexts/LevelContext'
import { useLogRenderCompleted } from "../../hooks/debug-hook"
import { DETAILED_DISPLAY_MODE, DisplayMode } from '../../types/DisplayMode'
import { LayoutMode } from '../../types/LayoutMode'
import { GraphCombinerNodeViewer } from '../GraphSchemaViewer/GraphCombinerNodeViewer/GraphCombinerNodeViewer'
import { GraphPropNodeViewer } from '../GraphSchemaViewer/GraphPropNodeViewer/GraphPropNodeViewer'
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { CustomDirectivesSectionRow } from './CustomDirectivesSectionRow'
import { isCombinerNodeState, isPropNodeState } from './types/nodes.guards'
import { isDirectiveNode, isOperationNode } from './utils/nodes'

// FIXME 28.09.23 // Fix generic types

export type GraphQLOperationDiffViewerProps = {
  source: unknown
  operationType?: string // query, mutation, subscription
  operationName?: string // e.g. getFruit
  expandedDepth?: number
  displayMode?: DisplayMode
  // diffs
  layoutMode?: LayoutMode,
  filters?: ReadonlyArray<DiffType>,
  metaKeys: DiffMetaKeys
}

export const GraphQLOperationDiffViewer: FC<GraphQLOperationDiffViewerProps> = (props) => {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="GraphQL Operation Diff Viewer" />}>
      <GraphQLOperationDiffViewerInner {...props} />
    </ErrorBoundary>
  )
}

const GraphQLOperationDiffViewerInner: FC<GraphQLOperationDiffViewerProps> = (props) => {
  useLogRenderCompleted()

  const {
    source,
    operationType,
    operationName,
    expandedDepth = DEFAULT_EXPANDED_DEPTH,
    displayMode = DETAILED_DISPLAY_MODE,
    // diffs
    layoutMode = DEFAULT_LAYOUT_MODE,
    filters = [],
    metaKeys
  } = props

  console.debug('GraphAPI Schema:', source)

  aggregateDiffsWithRollup(source, metaKeys.diffsMetaKey, metaKeys.aggregatedDiffsMetaKey)

  const tree = useMemo(
    () => {
      const windowAsGlobalContainer = window ? window as unknown as Record<PropertyKey, unknown> : undefined
      if (!windowAsGlobalContainer) {
        console.debug('Create tree model and return it as-is')
        return createGraphApiDiffTree(source, metaKeys)
      }
      if (!windowAsGlobalContainer.__advTree__) {
        console.debug('Create tree model and bind it to global variable "window"')
        windowAsGlobalContainer.__advTree__ = createGraphApiDiffTree(source, metaKeys)
      }
      console.debug('Return cached tree model already saved in global variable "window"')
      return windowAsGlobalContainer.__advTree__ as ModelTree<GraphApiDiffNodeData, GraphApiNodeKind, GraphApiDiffNodeMeta>
    },
    [metaKeys, source],
  )

  const [firstOperationType, firstOperationName] = useMemo(() => {
    if (!tree.root) {
      return [undefined, undefined]
    }
    const rootChildren = tree.root.children().filter(isGraphApiOperationNode)
    const firstOperation = rootChildren[0]
    if (!firstOperation) {
      return [undefined, undefined]
    }
    return [firstOperation.kind, firstOperation.key]
  }, [tree])

  console.debug('Diff Tree Model:', tree)

  // TODO 27.12.23 // Diff State!
  const state = useMemo(
    // TODO 09.10.25 // Get rid of "any"
    () => new GraphApiState(
      tree as any,
      expandedDepth,
      (node) => {
        if (!node) {
          return true
        }
        if (!isGraphApiOperationNode(node)) {
          return false
        }
        if (!operationType || !operationName) {
          return (
            node.kind !== firstOperationType ||
            node.key !== firstOperationName
          )
        }
        return (
          node.kind !== operationType ||
          node.key !== operationName
        )
      },
    ),
    [expandedDepth, firstOperationName, firstOperationType, operationName, operationType, tree]
  )

  console.debug('Diff State Model:', state)

  const root = state.root

  if (!root) {
    return null
  }

  return (
    <ChangeSeverityFiltersContext.Provider value={filters}>
      <DisplayModeContext.Provider value={displayMode}>
        <LayoutModeContext.Provider value={layoutMode}>
          <LevelContext.Provider value={0}>
            <div style={{ marginLeft: 0 }}>
              {root.children.map((child, index) => {
                const key = `root-children-${index}`

                if (isPropNodeState(child)) {
                  const $childMeta = child.meta as DiffNodeMeta

                  if (isOperationNode(child.node)) {
                    return (
                      <GraphPropNodeViewer
                        key={key}
                        state={child}
                        $nodeChange={$childMeta?.$nodeChange}
                      />
                    )
                  }

                  if (isDirectiveNode(child.node) && child.first) {
                    return (
                      <div key={key}>
                        <CustomDirectivesSectionRow layoutMode={layoutMode} />
                        <GraphPropNodeViewer
                          state={child}
                          $nodeChange={$childMeta?.$nodeChange}
                        />
                      </div>
                    )
                  }

                  return (
                    <GraphPropNodeViewer
                      key={key}
                      state={child}
                      $nodeChange={$childMeta?.$nodeChange}
                    />
                  )
                }

                if (isCombinerNodeState(child)) {
                  return (
                    <GraphCombinerNodeViewer
                      key={key}
                      state={child}
                      onGlobalSelectNestedNode={() => null}
                    />
                  )
                }

                return null
              })}
            </div>
          </LevelContext.Provider>
        </LayoutModeContext.Provider>
      </DisplayModeContext.Provider>
    </ChangeSeverityFiltersContext.Provider>
  )
}
