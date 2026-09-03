import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import {
  resolvePlainPropertyExpanderExpanded,
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import { resolveJsonSchemaPropertyInitiallyExpandedWithDiffs } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property-expand"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { takeJsonSchemaNestingIndicatorRowColorizingDiff } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { useAsyncLevelContext } from "@apihub/contexts/AsyncLevelContext/AsyncLevelContext"
import { AsyncLevelContextProvider } from "@apihub/contexts/AsyncLevelContext/AsyncLevelContextProvider"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import { useJsonSchemaNextViewerContext } from "../JsonSchemaNextViewerContext"
import {
  applyCombinerSelection,
  CombinerSelections,
  resolveActiveLeafNode,
  resolveCombinerSelectorLevels,
} from "../utils/resolve-combiner-selection"
import {
  resolveCombinerBranchDisplayValue,
  resolveCombinerLeafStructuralChildren,
} from "../utils/resolve-combiner-display"
import {
  buildCombinerSelectorOption,
  buildCombinerSelectorRowPresentation,
  resolveCombinerSelectorLevelReductionAction,
} from "../utils/resolve-combiner-node-diffs"
import { resolveNextLevelPair } from "../utils/resolve-nesting-level"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { JsonSchemaNodeViewerWithDiffs } from "../JsonSchemaNodeViewerWithDiffs"
import { useOptionalUnchangedBlocksContext } from "../UnchangedBlocksContext"
import { SchemaNodeChildrenListWithDiffs } from "../SchemaNodeViewer/SchemaNodeChildrenListWithDiffs"
import { SchemaNodePlainContent } from "../SchemaNodeViewer/SchemaNodePlainContent"
import { SchemaNodeTitleRow } from "../SchemaNodeViewer/SchemaNodeTitleRow"
import { SchemaNodeTitleRowWithDiffs } from "../SchemaNodeViewer/SchemaNodeTitleRowWithDiffs"
import { CombinerSelectorRow } from "./CombinerSelectorRow"

function isJsonSchemaPropertyNodeWithDiffs(
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): node is JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY> {
  return isJsonSchemaTreeNodeWithDiffs(node) && node.kind === JsonSchemaTreeNodeKinds.PROPERTY
}

export type CombinerNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  isLastInList?: boolean
}

export const CombinerNodeViewer: FC<CombinerNodeViewerProps> = (props) => {
  const {
    node,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const { expandedDepth, materializeChildren, treeRevision } = useJsonSchemaNextViewerContext()
  const nodeWithDiffs = isJsonSchemaTreeNodeWithDiffs(node) ? node : undefined
  const unchangedBlocksContext = useOptionalUnchangedBlocksContext()
  const nestedNodes = node.nestedNodes()

  const [selections, setSelections] = useState<CombinerSelections>(() => new Map())

  const selectorLevels = useMemo(
    () => resolveCombinerSelectorLevels(node, selections),
    [node, selections],
  )

  const activeLeaf = useMemo(
    () => resolveActiveLeafNode(node, selections),
    [node, selections],
  )

  const activeLeafDisplayValue = useMemo(
    () => resolveCombinerBranchDisplayValue(activeLeaf),
    [activeLeaf],
  )

  const activeLeafWithDiffs = isJsonSchemaTreeNodeWithDiffs(activeLeaf) ? activeLeaf : undefined
  const activeLeafPropertyWithDiffs = isJsonSchemaPropertyNodeWithDiffs(activeLeaf)
    ? activeLeaf
    : undefined

  const contentVisibility = useMemo(
    () => {
      if (activeLeafPropertyWithDiffs) {
        return resolveJsonSchemaPropertyNodeVisibility(activeLeafPropertyWithDiffs, displayMode)
      }

      const visibilityNode = {
        value: () => activeLeafDisplayValue,
      } as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>

      return resolvePlainPropertyNodeVisibility(visibilityNode, displayMode)
    },
    [activeLeafDisplayValue, activeLeafPropertyWithDiffs, displayMode],
  )

  const leafChildren = useMemo(
    () => resolveCombinerLeafStructuralChildren(activeLeaf),
    // treeRevision: lazy materialization mutates tree in place
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [activeLeaf, treeRevision],
  )

  const expandable = useMemo(
    () => leafChildren.length > 0,
    [leafChildren.length],
  )

  const initiallyExpanded = useMemo(
    () => {
      if (node.isCycle) {
        return false
      }
      if (leafChildren.length === 0) {
        return false
      }
      if (activeLeafWithDiffs && unchangedBlocksContext?.hideUnchangedNodes) {
        return resolveJsonSchemaPropertyInitiallyExpandedWithDiffs(activeLeafWithDiffs, {
          expandedDepth,
          level,
          hideUnchangedNodes: true,
        })
      }
      return resolvePlainPropertyInitiallyExpanded(activeLeaf, { expandedDepth, level })
    },
    [
      node.isCycle,
      activeLeaf,
      activeLeafWithDiffs,
      unchangedBlocksContext?.hideUnchangedNodes,
      expandedDepth,
      leafChildren.length,
      level,
    ],
  )

  const effectiveInitiallyExpanded = useMemo(
    () => resolvePlainPropertyExpanderExpanded(activeLeaf, initiallyExpanded),
    // treeRevision: lazy materialization adds children without changing node identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [activeLeaf, initiallyExpanded, treeRevision],
  )

  const [expanded, setExpanded] = useState(effectiveInitiallyExpanded)

  useEffect(() => {
    setExpanded(resolvePlainPropertyExpanderExpanded(activeLeaf, initiallyExpanded))
  }, [activeLeaf.id, activeLeaf, initiallyExpanded])

  useEffect(() => {
    setExpanded((currentExpanded) => resolvePlainPropertyExpanderExpanded(activeLeaf, currentExpanded))
  }, [activeLeaf, treeRevision])

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(activeLeaf)
      }
      return resolvePlainPropertyExpanderExpanded(activeLeaf, nextExpanded)
    })
  }, [activeLeaf, materializeChildren])

  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaTypeLabel(activeLeafDisplayValue, activeLeaf.meta()),
    [activeLeaf, activeLeafDisplayValue],
  )

  const nestingIndicatorRowColorizingDiff = useMemo(
    () => activeLeafWithDiffs ? takeJsonSchemaNestingIndicatorRowColorizingDiff(activeLeafWithDiffs) : undefined,
    [activeLeafWithDiffs],
  )

  const asyncLevel = useAsyncLevelContext()
  const currentBeforeLevel = asyncLevel?.beforeLevel ?? level
  const currentAfterLevel = asyncLevel?.afterLevel ?? level

  const ownerNestingIndicatorRowColorizingDiff = useMemo(
    () => nodeWithDiffs ? takeJsonSchemaNestingIndicatorRowColorizingDiff(nodeWithDiffs) : undefined,
    [nodeWithDiffs],
  )
  const { beforeLevel: selectorBeforeLevel, afterLevel: selectorAfterLevel } = useMemo(
    () => resolveNextLevelPair(currentBeforeLevel, currentAfterLevel, ownerNestingIndicatorRowColorizingDiff),
    [currentBeforeLevel, currentAfterLevel, ownerNestingIndicatorRowColorizingDiff],
  )
  const { beforeLevel: leafBeforeLevel, afterLevel: leafAfterLevel } = useMemo(
    () => resolveNextLevelPair(selectorBeforeLevel, selectorAfterLevel, nestingIndicatorRowColorizingDiff),
    [selectorBeforeLevel, selectorAfterLevel, nestingIndicatorRowColorizingDiff],
  )

  const onSelectOption = useCallback((
    combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
    option: SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>,
  ) => {
    setSelections((previousSelections) => applyCombinerSelection(
      node,
      previousSelections,
      combinerNode.id,
      option.node.id,
    ))
  }, [node])

  if (nestedNodes.length === 0) {
    return null
  }

  const showLeafChildren = expanded && leafChildren.length > 0
  const useHideUnchangedLeafChildren = Boolean(nodeWithDiffs && unchangedBlocksContext)
  const ChildNodeViewer = nodeWithDiffs
    ? JsonSchemaNodeViewerWithDiffs
    : JsonSchemaNodeViewer

  return (
    <div
      data-testid="json-schema-combiner-node-viewer"
      className="json-schema-property flex flex-col"
    >
      {nodeWithDiffs && activeLeafWithDiffs ? (
        <SchemaNodeTitleRowWithDiffs
          data-precededby={precededBy}
          ownerNode={nodeWithDiffs}
          displayNode={activeLeafWithDiffs}
          displayValue={activeLeafDisplayValue}
          contentVisibility={contentVisibility}
          isLastInList={isLastInList && !contentVisibility.showContentSection && !expandable}
          expandable={expandable}
          expanded={expanded}
          onClickExpander={onClickExpander}
        />
      ) : (
        <SchemaNodeTitleRow
          data-precededby={precededBy}
          ownerNode={node}
          displayNode={activeLeaf}
          displayValue={activeLeafDisplayValue}
          contentVisibility={contentVisibility}
          isLastInList={isLastInList && !contentVisibility.showContentSection && !expandable}
          expandable={expandable}
          expanded={expanded}
          onClickExpander={onClickExpander}
        />
      )}

      <SchemaNodePlainContent
        node={activeLeaf}
        displayValue={activeLeafDisplayValue}
        isLastInList={isLastInList && !expandable && selectorLevels.every((selectorLevel) => !selectorLevel.showSelector)}
      />

      <LevelContext.Provider value={level + 1}>
        <AsyncLevelContextProvider beforeLevel={selectorBeforeLevel} afterLevel={selectorAfterLevel}>
          {selectorLevels.map((selectorLevel) => {
            const options = selectorLevel.nestedNodes.map((nestedNode, index) => (
              buildCombinerSelectorOption(nestedNode, index)
            ))

            const selectedOption = options.find(
              (option) => option.node.id === selectorLevel.selectedNestedNode.id,
            ) ?? options[0] ?? null

            const selectorRowPresentation = buildCombinerSelectorRowPresentation(selectorLevel.combinerNode)
            const levelReductionAction = resolveCombinerSelectorLevelReductionAction(selectorLevel.combinerNode)

            return (
              <CombinerSelectorRow
                key={selectorLevel.combinerNode.id}
                combinerKindLabel={selectorLevel.combinerKindLabel}
                showSelector={selectorLevel.showSelector}
                options={options}
                selectedOption={selectedOption}
                onSelectOption={(option) => onSelectOption(selectorLevel.combinerNode, option)}
                selectorRowDiff={selectorRowPresentation.selectorRowDiff}
                diffsSeverities={selectorRowPresentation.diffsSeverities}
                levelReductionAction={levelReductionAction}
              />
            )
          })}

          {showLeafChildren && (
            <AsyncLevelContextProvider beforeLevel={leafBeforeLevel} afterLevel={leafAfterLevel}>
              <NestingIndicatorTitleRow
                title={propertyNestingIndicatorTitle}
                usage={NestingIndicatorTitleRowUsage.JsonSchema}
                lastInvisible
                diff={nestingIndicatorRowColorizingDiff}
                diffsSeverities={activeLeafWithDiffs?.diffsSeverities}
                diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.NestingIndicatorRow}
              />
              {useHideUnchangedLeafChildren ? (
                <SchemaNodeChildrenListWithDiffs
                  children={leafChildren as JsonSchemaTreeNodeWithDiffs[]}
                />
              ) : (
                leafChildren.map((child, index) => (
                  <ChildNodeViewer
                    key={child.id}
                    data-precededby={PrecededBy.JSON_SCHEMA_PROPERTY}
                    node={child as never}
                    isLastInList={index === leafChildren.length - 1}
                  />
                ))
              )}
            </AsyncLevelContextProvider>
          )}
        </AsyncLevelContextProvider>
      </LevelContext.Provider>
    </div>
  )
}
