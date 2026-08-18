import { FC, memo } from "react"

type NestingIndicatorTitleLabelProps = {
  title: string
}

export const NestingIndicatorTitleLabel: FC<NestingIndicatorTitleLabelProps> = memo<NestingIndicatorTitleLabelProps>((props) => {
  const { title } = props

  return (
    <div
      className="nesting-indicator-title-label text-xs text-slate-400 border-b border-slate-400 w-max pt-1"
      style={{ marginLeft: "-1px" }}
    >
      {title}
    </div>
  )
})
