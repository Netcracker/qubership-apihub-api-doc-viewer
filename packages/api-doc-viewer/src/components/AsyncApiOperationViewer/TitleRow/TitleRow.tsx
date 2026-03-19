import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { INLINE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { FC, memo } from "react"
import { TitleRowContainer } from "./TitleRowContainer"
import type { TitleRowProps } from "./types"
export { TitleVariant } from "./types"

export const TitleRow: FC<TitleRowProps> = memo<TitleRowProps>(props => {
  const layoutMode = useLayoutMode()

  if (layoutMode === INLINE_DIFFS_LAYOUT_MODE) {
    return (
      <div style={{ fontSize: 12, marginTop: 4, marginBottom: 4 }}>
        This layout mode ({layoutMode}) is not supported.
      </div>
    )
  }

  return <TitleRowContainer {...props} />
})
