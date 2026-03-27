import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { FC, ReactElement } from "react"
import { UxDiffFloatingBadge } from "../../kit/ux/UxFloatingBadge/UxDiffFloatingBadge"

type DiffFloatingBadgeWrapperProps = {
  children: ReactElement
  diffType: DiffType
  diffTypeCause: string
  hidden?: boolean
}

export const DiffFloatingBadgeWrapper: FC<DiffFloatingBadgeWrapperProps> = (props) => {
  const { children, diffType, diffTypeCause, hidden = false } = props

  if (hidden) {
    return children
  }

  return (
    <div className="flex flex-row relative">
      <UxDiffFloatingBadge variant={diffType} message={diffTypeCause} />
      {children}
    </div>
  )
}
