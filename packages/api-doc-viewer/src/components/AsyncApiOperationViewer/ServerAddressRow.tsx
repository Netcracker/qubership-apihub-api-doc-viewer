import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DOCUMENT_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { FC, memo, ReactElement } from "react"
import { OneSideLayout } from "./Layout/OneSideLayout"
import { SideBySideLayout } from "./Layout/SideBySideLayout"

export type RenderFunction = (layoutSide: LayoutSide) => ReactElement | null

type ServerAddressRowProps = {
  renderAddress: RenderFunction
}

export const ServerAddressRow: FC<ServerAddressRowProps> = memo<ServerAddressRowProps>((props) => {
  const { renderAddress } = props

  const layoutMode = useLayoutMode()

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <SideBySideLayout
          left={renderAddress(ORIGIN_LAYOUT_SIDE)}
          right={renderAddress(CHANGED_LAYOUT_SIDE)}
        />
      )
    case DOCUMENT_LAYOUT_MODE:
      return (
        <OneSideLayout
          content={
            renderAddress(CHANGED_LAYOUT_SIDE)
          }
        />
      )
  }

  return null
})
