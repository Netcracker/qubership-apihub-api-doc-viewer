import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyExpanderExpanded,
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyIsExpandable,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import { resolveJsonSchemaPropertyInitiallyExpandedWithDiffs } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property-expand"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
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
import { JsonSchemaNodeViewerWithDiffs } from "../JsonSchemaNodeViewerWithDiffs"
import { useOptionalUnchangedBlocksContext } from "../UnchangedBlocksContext"
import { SchemaNodeChildrenListWithDiffs } from "./SchemaNodeChildrenListWithDiffs"
import { SchemaNodePlainContent } from "./SchemaNodePlainContent"
import { SchemaNodeTitleRow } from "./SchemaNodeTitleRow"
import { SchemaNodeTitleRowWithDiffs } from "./SchemaNodeTitleRowWithDiffs"

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
  const nodeWithDiffs = isJsonSchemaTreeNodeWithDiffs(node) ? node : undefined
  const unchangedBlocksContext = useOptionalUnchangedBlocksContext()

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
    () => {
      if (nodeWithDiffs && unchangedBlocksContext?.hideUnchangedNodes) {
        return resolveJsonSchemaPropertyInitiallyExpandedWithDiffs(nodeWithDiffs, {
          expandedDepth,
          level,
          hideUnchangedNodes: true,
          isRoot: node.kind === JsonSchemaTreeNodeKinds.ROOT,
        })
      }
      return resolvePlainPropertyInitiallyExpanded(node, { expandedDepth, level })
    },
    [expandedDepth, level, node, nodeWithDiffs, unchangedBlocksContext?.hideUnchangedNodes],
  )

  const effectiveInitiallyExpanded = useMemo(
    () => resolvePlainPropertyExpanderExpanded(node, initiallyExpanded),
    // treeRevision: lazy materialization adds children without changing node identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [initiallyExpanded, node, treeRevision],
  )

  const [expanded, setExpanded] = useState(effectiveInitiallyExpanded)

  useEffect(() => {
    setExpanded((currentExpanded) => resolvePlainPropertyExpanderExpanded(node, currentExpanded))
  }, [node, treeRevision])

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(node)
      }
      return resolvePlainPropertyExpanderExpanded(node, nextExpanded)
    })
  }, [materializeChildren, node])

  const showNodeBody = !expandable || expanded

  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaPropertyNestingIndicatorTitle(node),
    [node],
  )

  return (
    <div
      data-testid="json-schema-node-viewer"
      data-name="JsonNode"
      className="json-schema-property flex flex-col"
    >
      {nodeWithDiffs ? (
        <SchemaNodeTitleRowWithDiffs
          data-precededby={precededBy}
          ownerNode={nodeWithDiffs}
          contentVisibility={visibility}
          isLastInList={isLastInList}
          expandable={expandable}
          expanded={expanded}
          onClickExpander={onClickExpander}
        />
      ) : (
        <SchemaNodeTitleRow
          data-precededby={precededBy}
          ownerNode={node}
          contentVisibility={visibility}
          isLastInList={isLastInList}
          expandable={expandable}
          expanded={expanded}
          onClickExpander={onClickExpander}
        />
      )}

      {showNodeBody && (
        <>
          <SchemaNodePlainContent
            node={node}
            isLastInList={isLastInList && children.length === 0}
          />

          {!node.isCycle && children.length > 0 && (
            <LevelContext.Provider value={level + 1}>
              <NestingIndicatorTitleRow
                title={propertyNestingIndicatorTitle}
                usage={NestingIndicatorTitleRowUsage.JsonSchema}
                lastInvisible
              />
              {nodeWithDiffs && unchangedBlocksContext ? (
                <SchemaNodeChildrenListWithDiffs
                  children={children as JsonSchemaTreeNodeWithDiffs[]}
                />
              ) : (
                children.map((child, index) => (
                  nodeWithDiffs ? (
                    <JsonSchemaNodeViewerWithDiffs
                      key={child.id}
                      data-precededby={PrecededBy.JSON_SCHEMA_PROPERTY}
                      node={child as JsonSchemaTreeNodeWithDiffs}
                      isLastInList={index === children.length - 1}
                    />
                  ) : (
                    <JsonSchemaNodeViewer
                      key={child.id}
                      data-precededby={PrecededBy.JSON_SCHEMA_PROPERTY}
                      node={child}
                      isLastInList={index === children.length - 1}
                    />
                  )
                ))
              )}
            </LevelContext.Provider>
          )}
        </>
      )}
    </div>
  )
}
