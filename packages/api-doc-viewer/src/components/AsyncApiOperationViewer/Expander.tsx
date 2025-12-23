import { FC } from "react";
import { ExpandingCaret } from "../common/layout/Expander/ExpandingCaret";
import { NestingHorizontalIndicator } from "../common/NestingIndicator";

type ExpanderProps = {
  expandable: boolean
  expanded?: boolean
  level: number
}

const EMPTY_CALLBACK = () => {}

export const Expander: FC<ExpanderProps> = (props) => {
  const { expandable, expanded, level } = props

  const hasHorizontalLine = level > 0

  if (!expandable && !hasHorizontalLine) {
    return null
  }

  return (
    <div className={`flex flex-row items-center justify-center ${hasHorizontalLine ? 'gap-3' : ''}`}>
      {hasHorizontalLine && <NestingHorizontalIndicator short={expandable} />}
      {expandable && expanded !== undefined && (
        <ExpandingCaret onToggle={EMPTY_CALLBACK} expanded={expanded} />
      )}
    </div>
  )
}
