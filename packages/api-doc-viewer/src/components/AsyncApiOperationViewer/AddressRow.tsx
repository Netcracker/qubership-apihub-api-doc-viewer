import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC } from "react"
import { OneSideLayout } from "./Layout/OneSideLayout"
import { SideBySideLayout } from "./Layout/SideBySideLayout"
import { TextValue } from "./TextValue/TextValue"
import { TextValueVariant } from "./TextValue/types"

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

  return (
    <div className='address-row font-Inter-Medium'>
      <div className='flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3' style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div className={`font-bold px-1 py-0 ${ACTION_COLOR_MAP[action]} text-white rounded-md`}>
          {action.toUpperCase()}
        </div>
        <div className='text-slate-500'>
          <TextValue
            value={address}
            variant={TextValueVariant.body}
            layoutSide={layoutSide}
            diff={diff}
          />
        </div>
      </div>
    </div>
  )
}
