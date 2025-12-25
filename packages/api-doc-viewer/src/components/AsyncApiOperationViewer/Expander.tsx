import { FC } from "react";
import { ExpandingCaret } from "../common/layout/Expander/ExpandingCaret";
import { NestingHorizontalIndicator } from "../common/NestingIndicator";

type ExpanderProps = {
  expandable: boolean
  expanded?: boolean
  onClick?: () => void
  level: number
}

const EMPTY_CALLBACK = () => { console.warn('Expander callback is not provided.') }

export const Expander: FC<ExpanderProps> = (props) => {
  const { expandable, expanded, onClick, level } = props

  const hasHorizontalLine = level > 0

  if (!expandable && !hasHorizontalLine) {
    return null
  }

  return (
    <div className={`flex flex-row items-center justify-center ${hasHorizontalLine ? 'gap-1' : ''}`}>
      {hasHorizontalLine && <NestingHorizontalIndicator short={expandable} />}
      {expandable && expanded !== undefined && (
        <ExpandingCaret onToggle={onClick ?? EMPTY_CALLBACK} expanded={expanded} />
      )}
    </div>
  )
}
