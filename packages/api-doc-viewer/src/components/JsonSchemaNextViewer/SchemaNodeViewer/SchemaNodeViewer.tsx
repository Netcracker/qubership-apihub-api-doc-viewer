import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyIsExpandable,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import { FC, useCallback, useMemo, useState } from "react"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { useJsonSchemaNextViewerContext } from "../JsonSchemaNextViewerContext"
import { resolveJsonSchemaPropertyNestingIndicatorTitle } from "../utils/resolve-json-schema-nesting-indicator-title"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { SchemaNodePlainContent } from "./SchemaNodePlainContent"
import { SchemaNodeTitleRow } from "./SchemaNodeTitleRow"

function isJsonSchemaPropertyNodeWithDiffs(
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): node is JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY> {
  return isJsonSchemaTreeNodeWithDiffs(node) && node.kind === JsonSchemaTreeNodeKinds.PROPERTY
}

export type SchemaNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  isLastInList?: boolean
}

export const SchemaNodeViewer: FC<SchemaNodeViewerProps> = (props) => {
  const {
    node,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const { expandedDepth, materializeChildren, treeRevision } = useJsonSchemaNextViewerContext()
  const propertyNodeWithDiffs = isJsonSchemaPropertyNodeWithDiffs(node) ? node : undefined

  const visibility = useMemo(
    () => propertyNodeWithDiffs
      ? resolveJsonSchemaPropertyNodeVisibility(propertyNodeWithDiffs, displayMode)
      : resolvePlainPropertyNodeVisibility(node as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>, displayMode),
    [displayMode, node, propertyNodeWithDiffs],
  )

  const children = useMemo(
    () => node.childrenNodes(),
    // treeRevision: lazy materialization mutates tree in place
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const expandable = useMemo(
    () => resolvePlainPropertyIsExpandable(node),
    // treeRevision: lazy materialization adds children without changing node identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const initiallyExpanded = useMemo(
    () => resolvePlainPropertyInitiallyExpanded(node, { expandedDepth, level }),
    [node, expandedDepth, level],
  )

  const [expanded, setExpanded] = useState(initiallyExpanded)

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(node)
      }
      return nextExpanded
    })
  }, [materializeChildren, node])

  const showNodeBody = !expandable || expanded

  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaPropertyNestingIndicatorTitle(node),
    [node],
  )

  return (
    <div data-testid="json-schema-node-viewer" data-name="JsonNode" className="flex flex-col">
      <SchemaNodeTitleRow
        data-precededby={precededBy}
        ownerNode={node}
        contentVisibility={visibility}
        isLastInList={isLastInList}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
      />

      {showNodeBody && (
        <>
          <SchemaNodePlainContent
            data-precededby={precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER}
            node={node}
            isLastInList={isLastInList && children.length === 0}
          />

          {!node.isCycle && children.length > 0 && (
            <LevelContext.Provider value={level + 1}>
              <NestingIndicatorTitleRow
                data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
                title={propertyNestingIndicatorTitle}
                usage={NestingIndicatorTitleRowUsage.JsonSchema}
                lastInvisible
              />
              {children.map((child, index) => (
                <JsonSchemaNodeViewer
                  key={child.id}
                  data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
                  node={child}
                  isLastInList={index === children.length - 1}
                />
              ))}
            </LevelContext.Provider>
          )}
        </>
      )}
    </div>
  )
}
