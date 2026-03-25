import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DOCUMENT_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { FC, memo, ReactElement } from "react"
import { OneSideLayout } from "./Layout/OneSideLayout"
import { SideBySideLayout } from "./Layout/SideBySideLayout"

type ServerAddressRowProps = {
  renderProtocol: (layoutSide: LayoutSide) => ReactElement | null
  renderHost: (layoutSide: LayoutSide) => ReactElement | null
}

export const ServerAddressRow: FC<ServerAddressRowProps> = memo<ServerAddressRowProps>((props) => {
  const { renderProtocol, renderHost } = props

  const layoutMode = useLayoutMode()

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <SideBySideLayout
          left={
            <span className='server-address-container server-address server-subheader'>
              {renderProtocol(ORIGIN_LAYOUT_SIDE)}
              ://
              {renderHost(ORIGIN_LAYOUT_SIDE)}
            </span>
          }
          right={
            <span className='server-address-container server-address server-subheader'>
              {renderProtocol(CHANGED_LAYOUT_SIDE)}
              ://
              {renderHost(CHANGED_LAYOUT_SIDE)}
            </span>
          }
        />
      )
    case DOCUMENT_LAYOUT_MODE:
      return (
        <OneSideLayout
          content={
            <span className='server-address-container server-address server-subheader'>
              {renderProtocol(CHANGED_LAYOUT_SIDE)}
              ://
              {renderHost(CHANGED_LAYOUT_SIDE)}
            </span>
          }
        />
      )
  }

  return null
})
