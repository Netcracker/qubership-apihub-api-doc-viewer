import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC } from "react"
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { CombinerNodeViewer, CombinerNodeViewerProps } from "./CombinerNodeViewer"

export type CombinerNodeViewerWithDiffsProps = Omit<CombinerNodeViewerProps, "node"> & {
  node: JsonSchemaTreeNodeWithDiffs
} & WithPrecededByProps

export const CombinerNodeViewerWithDiffs: FC<CombinerNodeViewerWithDiffsProps> = (props) => (
  <CombinerNodeViewer {...props} />
)
