import { DiffStyles } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { FC, memo } from "react";

type TextValueProps = {
  diffStyles?: DiffStyles
  value?: string
}

export const TextValue: FC<TextValueProps> = memo<TextValueProps>((props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { diffStyles = {}, value = '' } = props

  return null
})
