import type { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type {
  ChangedPropertyMetaData,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import type { ReactNode } from "react"
import { WithPrecededByProps } from "../WithPrecededByProps"

export enum NestingIndicatorTitleRowUsage {
  Default = "default",
  JsonSchema = "json-schema",
}

export type NestingIndicatorTitleRowProps = WithPrecededByProps & {
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  usage?: NestingIndicatorTitleRowUsage
  lastInvisible?: boolean
  diff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
  diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt
}

export type NestingIndicatorTitleRowContentProps = NestingIndicatorTitleRowProps & {
  layoutSide: LayoutSide
}
