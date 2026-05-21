import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, useCallback } from "react"
import "./AddressRow.css"
import { OneSideLayout } from "../../shared-components/Layout/OneSideLayout"
import { SideBySideLayout } from "../../shared-components/Layout/SideBySideLayout"
import { TextValue } from "../../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../../shared-components/TextValue/types"
import { isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

type AddressRowProps = {
  action: string
  address: string
  diff?: ChangedPropertyMetaData
}

export const AddressRow: FC<AddressRowProps> = (props) => {
  const layoutMode = useLayoutMode()

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <SideBySideLayout
          left={<AddressRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />}
          right={<AddressRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
        />
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
    if (!partialReplaceCase) {
      return (
        <TextValue
          value={address}
          variant={TextValueVariant.h4}
          layoutSide={layoutSide}
          diff={diff}
          fontWeight='normal'
          fontColor='#626D82'
        />
      )
    }
    const { prefix, beforeSuffix, afterSuffix } = partialReplaceCase
    return <>
      <TextValue
        value={prefix}
        variant={TextValueVariant.h4}
        layoutSide={layoutSide}
        fontWeight='normal'
        fontColor='#626D82'
      />
      <TextValue
        value={layoutSide === ORIGIN_LAYOUT_SIDE ? beforeSuffix : afterSuffix}
        variant={TextValueVariant.h4}
        layoutSide={layoutSide}
        diff={diff}
        fontWeight='normal'
        fontColor='#626D82'
      />
    </>
  }, [address, diff, layoutSide])

  return (
    <div className='address-row font-Inter-Medium px-2'>
      <div className='flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3' style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div className={`font-bold px-1 py-0 ${ACTION_COLOR_MAP[action]} text-white rounded-md`}>
          {action.toUpperCase()}
        </div>
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