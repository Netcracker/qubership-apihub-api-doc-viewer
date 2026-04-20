import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, memo, useCallback, useMemo } from "react"

import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { isBindingsNode } from "@apihub/utils/async-api/node-type-checkers"
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers"
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNodeValueTypeServer } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { BrokenRefViewer } from "./BrokenRefViewer"
import { ServerAddressRow } from "./ServerAddressRow"
import './styles/MessageChannelServer.css'
import { TextRow } from "./TextRow/TextRow"
import { TextRowProps } from "./TextRow/types"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"
import { SizeVariant } from "./types/SizeVariant"

type MessageChannelServerNodeViewerProps = {
  node:
  | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
  | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>
}

export const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps> = memo(props => {
  const { node } = props

  const value = useMemo(() => node.value(), [node])
  const meta = useMemo(() => node.meta(), [node])

  const brokenRef = useMemo(() => meta?.brokenRef, [meta])

  const children: AsyncApiTreeNode[] | AsyncApiTreeNodeWithDiffs[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)

  const nodeDiffs = useMemo(() => isServerNodeWithDiffs(node) ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => isServerNodeWithDiffs(node) ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => isServerNodeWithDiffs(node) ? node.diffsSeverities : undefined, [node])

  const titleRowDiffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['title'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDescendantDiffs, nodeDiffs, nodeDiffsSeverities])

  const descriptionRowDiffProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['description'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
      }
    }
    return {}
  }, [nodeDescendantDiffs, nodeDiffs, nodeDiffsSeverities])

  const summaryRowDiffProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['summary'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.SummaryRow,
      }
    }
    return {}
  }, [nodeDescendantDiffs, nodeDiffs, nodeDiffsSeverities])

  const renderProtocol = useCallback((layoutSide: LayoutSide) => {
    if (!value) {
      return null
    }
    if (!(isServerNodeWithDiffs(node))) {
      return <>{value.protocol}</>
    }
    const diffProtocol = node.diffs?.['protocol']
    if (!diffProtocol) {
      return <>{value.protocol}</>
    }
    const diffsClasses = []
    const { data, styles } = diffProtocol
    let resolvedValue = value.protocol
    let isInvisible = false
    if (layoutSide === ORIGIN_LAYOUT_SIDE) {
      if (isDiffRemove(data) || isDiffReplace(data)) {
        resolvedValue = data.beforeValue as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      } else if (isDiffRename(data)) {
        resolvedValue = data.beforeKey as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      }
      if (isDiffAdd(data)) {
        isInvisible = true
      }
    }
    if (layoutSide === CHANGED_LAYOUT_SIDE) {
      if (isDiffAdd(data) || isDiffReplace(data)) {
        resolvedValue = data.afterValue as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      } else if (isDiffRename(data)) {
        resolvedValue = data.afterKey as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      }
      if (isDiffRemove(data)) {
        isInvisible = true
      }
    }
    if (isInvisible) {
      return null
    }
    return (
      <span className={diffsClasses.join(' ')}>
        {resolvedValue}
      </span>
    )
  }, [node, value])

  const renderHost = useCallback((layoutSide: LayoutSide) => {
    if (!value) {
      return null
    }
    if (!(isServerNodeWithDiffs(node))) {
      return <>{value.host}</>
    }
    const diffHost = node.diffs?.['host']
    if (!diffHost) {
      return <>{value.host}</>
    }
    const diffsClasses = []
    const { data, styles } = diffHost
    let resolvedValue = value.host
    let isInvisible = false
    if (layoutSide === ORIGIN_LAYOUT_SIDE) {
      if (isDiffRemove(data) || isDiffReplace(data)) {
        resolvedValue = data.beforeValue as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      } else if (isDiffRename(data)) {
        resolvedValue = data.beforeKey as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      }
      if (isDiffAdd(data)) {
        isInvisible = true
      }
    }
    if (layoutSide === CHANGED_LAYOUT_SIDE) {
      if (isDiffAdd(data) || isDiffReplace(data)) {
        resolvedValue = data.afterValue as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      } else if (isDiffRename(data)) {
        resolvedValue = data.afterKey as string
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      }
      if (isDiffRemove(data)) {
        isInvisible = true
      }
    }
    if (isInvisible) {
      return null
    }
    return (
      <span className={diffsClasses.join(' ')}>
        {resolvedValue}
      </span>
    )
  }, [node, value])

  const renderAddress = useCallback((layoutSide: LayoutSide) => {
    function renderAddressContent(diffClasses: string[] = []) {
      return <span className={`server-address-container server-address server-subheader ${diffClasses.join(' ')}`}>
        {renderProtocol(layoutSide)}
        ://
        {renderHost(layoutSide)}
      </span>
    }
    if (!(isServerNodeWithDiffs(node))) {
      return renderAddressContent()
    }
    const diffNode = node.diffs?.['']
    if (!diffNode) {
      return renderAddressContent()
    }
    const { data, styles } = diffNode
    const diffsClasses: string[] = []
    let isInvisible = false
    if (layoutSide === ORIGIN_LAYOUT_SIDE) {
      if (isDiffRemove(data) || isDiffReplace(data)) {
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      } else if (isDiffRename(data)) {
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
      }
      if (isDiffAdd(data)) {
        isInvisible = true
      }
    }
    if (layoutSide === CHANGED_LAYOUT_SIDE) {
      if (isDiffAdd(data) || isDiffReplace(data)) {
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      } else if (isDiffRename(data)) {
        diffsClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
      }
      if (isDiffRemove(data)) {
        isInvisible = true
      }
    }
    if (isInvisible) {
      return null
    }
    return renderAddressContent(diffsClasses)
  }, [node, renderHost, renderProtocol])

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeServer>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeServer>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeServer>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className='flex flex-col gap-2'>
      {brokenRef && <BrokenRefViewer value={brokenRef} />}
      {!brokenRef && value && <>
        {isTitleDisplayed && (
          <TitleRow
            value={value.title}
            expandable={false}
            expanded={true}
            variant={TextValueVariant.h4}
            // diffs
            {...titleRowDiffsProps}
          />
        )}
        {!isTitleDisplayed && (
          <TitleRow
            value={node.key.toString()}
            expandable={false}
            expanded={true}
            variant={TextValueVariant.h4}
            // diffs
            {...titleRowDiffsProps}
          />
        )}
        <ServerAddressRow
          renderAddress={renderAddress}
        />
        {isDescriptionDisplayed && (
          <TextRow
            value={value?.description ?? ''}
            variant={TextValueVariant.body}
            // diffs
            {...descriptionRowDiffProps}
          />
        )}
        {isSummaryDisplayed && (
          <TextRow
            value={value?.summary ?? ''}
            variant={TextValueVariant.body}
            // diffs
            {...summaryRowDiffProps}
          />
        )}
      </>}
      {!brokenRef && children.length > 0 && bindingsChild && (
        <div className="flex flex-col gap-2">
          <BindingsNodeViewer
            node={bindingsChild}
            variant={SizeVariant.SECONDARY}
          />
        </div>
      )}
    </div>
  )
})

function isServerNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER> {
  return node.kind == AsyncApiTreeNodeKinds.SERVER && node instanceof SimpleTreeNodeWithDiffs
}
