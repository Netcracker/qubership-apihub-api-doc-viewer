import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { resolvePlainCombinerNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { FC, useCallback, useMemo, useState } from "react"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { resolveJsonSchemaCombinerNestingIndicatorTitle } from "../utils/resolve-json-schema-nesting-indicator-title"
import { CombinerSelectorRow } from "./CombinerSelectorRow"

export type CombinerNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode
}

export const CombinerNodeViewer: FC<CombinerNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const level = useLevelContext()
  const nestedNodes = node.nestedNodes()
  const visibility = useMemo(() => resolvePlainCombinerNodeVisibility(node), [node])
  const combinerNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaCombinerNestingIndicatorTitle(node),
    [node],
  )

  const options = useMemo<SelectorOption<JsonSchemaTreeNode>[]>(
    () => nestedNodes.map((nestedNode, index) => ({
      title: resolveJsonSchemaTypeLabel(nestedNode.value(), nestedNode.meta()),
      node: nestedNode,
      testId: `json-schema-combiner-option-${index}`,
    })),
    [nestedNodes],
  )

  const [selectedOption, setSelectedOption] = useState<SelectorOption<JsonSchemaTreeNode> | null>(
    () => options[0] ?? null,
  )

  const onSelectOption = useCallback((option: SelectorOption<JsonSchemaTreeNode>) => {
    setSelectedOption(option)
  }, [])

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
      <LevelContext.Provider value={level + 1}>
        {visibility.showSelector && combinerNestingIndicatorTitle && (
          <NestingIndicatorTitleRow
            data-precededby={precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER}
            title={combinerNestingIndicatorTitle}
            usage={NestingIndicatorTitleRowUsage.JsonSchema}
            lastInvisible
          />
        )}
        {visibility.showSelector && (
          <CombinerSelectorRow
            data-precededby={precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER}
            options={options}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
          />
        )}
        <JsonSchemaNodeViewer
          data-precededby={precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER}
          node={activeNode}
        />
      </LevelContext.Provider>
    </div>
  )
}
