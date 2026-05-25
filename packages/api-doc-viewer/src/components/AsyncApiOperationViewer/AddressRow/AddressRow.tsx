import { DiffFloatingBadgeWrapper } from "@apihub/components/shared-components/DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, useCallback, useMemo } from "react"
import { OneSideLayout } from "../../shared-components/Layout/OneSideLayout"
import { SideBySideLayout } from "../../shared-components/Layout/SideBySideLayout"
import { TextValue } from "../../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../../shared-components/TextValue/types"
import "./AddressRow.css"

export type AddressRowProps = {
  action: string
  address: string
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
}

export const AddressRow: FC<AddressRowProps> = (props) => {
  const layoutMode = useLayoutMode()

  // diffs
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { diff, descendantDiffs, diffsSeverities } = props

  const diffType = useMemo(() => diff?.data.type, [diff])
  const diffTypeCause = useMemo(() => {
    // TODO: Extract to shared utility function
    const path = diffsSeverities?.["address-row"]?.causedAt?.join('.')
    return path ? `caused by ${path} change` : undefined
  }, [diffsSeverities])

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <DiffFloatingBadgeWrapper
          diffType={diffType}
          diffTypeCause={diffTypeCause}
          hidden={false} // TODO: Implement diffs severities filters
        >
          <SideBySideLayout
            left={<AddressRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />}
            right={<AddressRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
          />
        </DiffFloatingBadgeWrapper>
      )
    default:
      return (
        <OneSideLayout
          content={<AddressRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
        />
      )
  }
}

const ACTION_COLOR_MAP: Record<string, string> = {
  send: 'bg-sky-400',
  receive: 'bg-green-500',
}

type AddressRowContentProps = AddressRowProps & {
  layoutSide: LayoutSide
}

const AddressRowContent: FC<AddressRowContentProps> = (props) => {
  const { action, address, layoutSide, diff } = props

  const renderAddress = useCallback(() => {
    const partialReplaceCase = diff && detectPartialReplaceCase(diff)

    let actionElement: React.ReactNode = (
      <div className={`font-bold px-1 py-0 ${ACTION_COLOR_MAP[action]} text-white rounded-md`}>
        {action.toUpperCase()}
      </div>
    )
    if (diff) {
      if (isDiffAdd(diff.data) && layoutSide === ORIGIN_LAYOUT_SIDE) {
        actionElement = null
      }
      if (isDiffRemove(diff.data) && layoutSide === CHANGED_LAYOUT_SIDE) {
        actionElement = null
      }
    }

    if (!partialReplaceCase) {
      return <>
        {actionElement}
        <TextValue
          value={address}
          variant={TextValueVariant.h4}
          layoutSide={layoutSide}
          diff={diff}
          fontWeight='normal'
          fontColor='#626D82'
        />
      </>
    }
    const { prefix, beforeSuffix, afterSuffix } = partialReplaceCase
    const suffix = layoutSide === ORIGIN_LAYOUT_SIDE ? beforeSuffix : afterSuffix
    return <>
      {actionElement}
      <TextValue
        value={prefix}
        variant={TextValueVariant.h4}
        layoutSide={layoutSide}
        fontWeight='normal'
        fontColor='#626D82'
      />
      <TextValue
        value={suffix}
        variant={TextValueVariant.h4}
        layoutSide={layoutSide}
        diff={diff}
        fontWeight='normal'
        fontColor='#626D82'
      />
    </>
  }, [action, address, diff, layoutSide])

  const diffStyles = useMemo(() => {
    const diffStyles: Set<string> = new Set()
    if (diff) {
      const { styles } = diff
      if (layoutSide === ORIGIN_LAYOUT_SIDE) {
        diffStyles.add(DiffsClassesBuilder.background(styles.before.backgroundColor))
      } else {
        diffStyles.add(DiffsClassesBuilder.background(styles.after.backgroundColor))
      }
    }
    return Array.from(diffStyles)
  }, [diff, layoutSide])

  return (
    <div className={`address-row font-Inter-Medium h-full px-2 ${diffStyles.join(' ')}`}>
      <div
        className='flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3'
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {renderAddress()}
      </div>
    </div>
  )
}

type PartialReplaceCase = {
  prefix: string
  beforeSuffix: string
  afterSuffix: string
}

function detectPartialReplaceCase(
  changedPropertyMetaData: ChangedPropertyMetaData,
): false | PartialReplaceCase {
  const { data } = changedPropertyMetaData
  if (!isDiffReplace(data)) {
    return false
  }
  const { beforeValue, afterValue } = data
  if (typeof beforeValue !== 'string' || typeof afterValue !== 'string') {
    return false
  }
  const beforeBraceIndex = beforeValue.indexOf('{')
  const afterBraceIndex = afterValue.indexOf('{')
  const prefix = beforeBraceIndex === -1 ? beforeValue : beforeValue.slice(0, beforeBraceIndex)
  const afterPrefix = afterBraceIndex === -1 ? afterValue : afterValue.slice(0, afterBraceIndex)
  if (prefix !== afterPrefix) {
    return false
  }
  return {
    prefix,
    beforeSuffix: beforeBraceIndex === -1 ? '' : beforeValue.slice(beforeBraceIndex),
    afterSuffix: afterBraceIndex === -1 ? '' : afterValue.slice(afterBraceIndex),
  }
}