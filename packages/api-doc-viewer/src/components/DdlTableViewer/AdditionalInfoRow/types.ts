import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type { ReactElement } from "react"
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps"

export type AdditionalInfoRowProps = WithPrecededByProps & {
  label: string
  subheader?: (layoutSide: LayoutSide) => ReactElement
}

export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
  layoutSide: LayoutSide
}
