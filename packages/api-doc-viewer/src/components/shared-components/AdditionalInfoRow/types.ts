import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type {
  ChangedPropertyMetaData,
  NodeDiffsSeverities,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import type { ReactElement } from "react"
import { WithListLastRowProps, WithPrecededByProps } from "../WithPrecededByProps"

export enum AdditionalInfoRowUsage {
  Default = 'default',
  DdlApiProperty = 'ddlapi-property',
  JsonSchemaValidation = 'json-schema-validation',
}

export type AdditionalInfoRowLayoutOverrides = {
  xPaddingClass?: string
  bodyClass?: string
  minHeightClass?: string
}

export type AdditionalInfoRowProps = WithPrecededByProps & WithListLastRowProps & AdditionalInfoRowLayoutOverrides & {
  label: string
  subheader?: (layoutSide: LayoutSide) => ReactElement
  diff?: ChangedPropertyMetaData
  colorizingDiff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
  hideLevelIndicatorWhenSideEmpty?: boolean
  usage?: AdditionalInfoRowUsage
}

export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
  layoutSide: LayoutSide
}
