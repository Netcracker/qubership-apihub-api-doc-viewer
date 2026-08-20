import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import {
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { FC, useCallback, useMemo, useState } from "react"
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
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { JsonSchemaNodeViewerWithDiffs } from "../JsonSchemaNodeViewerWithDiffs"
import { SchemaNodePlainContent } from "../SchemaNodeViewer/SchemaNodePlainContent"
import { SchemaNodeTitleRow } from "../SchemaNodeViewer/SchemaNodeTitleRow"
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
    () => !node.isCycle && leafChildren.length > 0,
    [leafChildren.length, node.isCycle],
  )

  const initiallyExpanded = useMemo(
    () => resolvePlainPropertyInitiallyExpanded(activeLeaf, { expandedDepth, level }),
    [activeLeaf, expandedDepth, level],
  )

  const [expanded, setExpanded] = useState(initiallyExpanded)

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(activeLeaf)
      }
      return nextExpanded
    })
  }, [activeLeaf, materializeChildren])

  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaTypeLabel(activeLeafDisplayValue, activeLeaf.meta()),
    [activeLeaf.meta, activeLeafDisplayValue],
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

  if (node.isCycle || nestedNodes.length === 0) {
    return null
  }

  const rowPrecededBy = precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER
  const showLeafChildren = expanded && !activeLeaf.isCycle && leafChildren.length > 0
  const ChildNodeViewer = isJsonSchemaTreeNodeWithDiffs(node)
    ? JsonSchemaNodeViewerWithDiffs
    : JsonSchemaNodeViewer

  return (
    <div data-testid="json-schema-combiner-node-viewer" className="flex flex-col">
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

      <SchemaNodePlainContent
        data-precededby={rowPrecededBy}
        node={activeLeaf}
        displayValue={activeLeafDisplayValue}
        isLastInList={isLastInList && !expandable && selectorLevels.every((selectorLevel) => !selectorLevel.showSelector)}
      />

      <LevelContext.Provider value={level + 1}>
        {selectorLevels.map((selectorLevel) => {
          const options = selectorLevel.nestedNodes.map((nestedNode, index) => ({
            title: resolveJsonSchemaTypeLabel(
              resolveCombinerBranchDisplayValue(nestedNode),
              nestedNode.meta(),
            ),
            node: nestedNode,
            testId: `json-schema-combiner-option-${index}`,
          }))

          const selectedOption = options.find(
            (option) => option.node.id === selectorLevel.selectedNestedNode.id,
          ) ?? options[0] ?? null

          return (
            <div key={selectorLevel.combinerNode.id} className="flex flex-col">
              {selectorLevel.combinerKindLabel && (
                <NestingIndicatorTitleRow
                  data-precededby={rowPrecededBy}
                  title={selectorLevel.combinerKindLabel}
                  usage={NestingIndicatorTitleRowUsage.JsonSchema}
                  lastInvisible
                />
              )}
              {selectorLevel.showSelector && (
                <CombinerSelectorRow
                  data-precededby={rowPrecededBy}
                  options={options}
                  selectedOption={selectedOption}
                  onSelectOption={(option) => onSelectOption(selectorLevel.combinerNode, option)}
                />
              )}
            </div>
          )
        })}

        {showLeafChildren && (
          <>
            <NestingIndicatorTitleRow
              data-precededby={rowPrecededBy}
              title={propertyNestingIndicatorTitle}
              usage={NestingIndicatorTitleRowUsage.JsonSchema}
              lastInvisible
            />
            {leafChildren.map((child, index) => (
              <ChildNodeViewer
                key={child.id}
                data-precededby={rowPrecededBy}
                node={child as never}
                isLastInList={index === leafChildren.length - 1}
              />
            ))}
          </>
        )}
      </LevelContext.Provider>
    </div>
  )
}
