import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, useCallback, useMemo, useState } from "react"
import { Selector, SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { SelectorVariant } from "@apihub/components/shared-components/Selector/types"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { CHANGED_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { resolvePlainCombinerNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { JsonSchemaNodeViewerWithDiffs } from "../JsonSchemaNodeViewerWithDiffs"

export type CombinerNodeViewerWithDiffsProps = WithPrecededByProps & {
  node: JsonSchemaTreeNodeWithDiffs
}

export const CombinerNodeViewerWithDiffs: FC<CombinerNodeViewerWithDiffsProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const level = useLevelContext()
  const nestedNodes = node.nestedNodes() as JsonSchemaTreeNodeWithDiffs[]
  const visibility = useMemo(() => resolvePlainCombinerNodeVisibility(node), [node])

  const options = useMemo<SelectorOption<JsonSchemaTreeNodeWithDiffs>[]>(
    () => nestedNodes.map((nestedNode, index) => ({
      title: resolveJsonSchemaTypeLabel(nestedNode.value(), nestedNode.meta()),
      node: nestedNode,
      testId: `json-schema-combiner-option-${index}`,
    })),
    [nestedNodes],
  )

  const [selectedOption, setSelectedOption] = useState<SelectorOption<JsonSchemaTreeNodeWithDiffs> | null>(
    () => options[0] ?? null,
  )

  const renderSelector = useCallback((layoutSide: LayoutSide) => (
    <Selector
      options={options}
      selectedOption={selectedOption}
      onSelectOption={setSelectedOption}
      variant={SelectorVariant.Primary}
      layoutSide={layoutSide}
    />
  ), [options, selectedOption])

  if (node.isCycle || nestedNodes.length === 0) {
    return null
  }

  const activeNode = visibility.showSelector
    ? selectedOption?.node
    : nestedNodes[0]

  if (!activeNode) {
    return null
  }

  return (
    <div data-testid="json-schema-combiner-node-viewer" className="flex flex-col">
      {visibility.showSelector && (
        <div className="px-4 py-1">
          {renderSelector(CHANGED_LAYOUT_SIDE)}
        </div>
      )}
      <LevelContext.Provider value={level + 1}>
        <JsonSchemaNodeViewerWithDiffs
          data-precededby={precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER}
          node={activeNode}
        />
      </LevelContext.Provider>
    </div>
  )
}
