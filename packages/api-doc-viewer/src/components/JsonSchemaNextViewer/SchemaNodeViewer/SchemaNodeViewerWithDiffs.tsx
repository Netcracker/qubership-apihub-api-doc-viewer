import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC } from "react"
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { SchemaNodeViewer, SchemaNodeViewerProps } from "./SchemaNodeViewer"

export type SchemaNodeViewerWithDiffsProps = Omit<SchemaNodeViewerProps, "node"> & {
  node: JsonSchemaTreeNodeWithDiffs
}

export const SchemaNodeViewerWithDiffs: FC<SchemaNodeViewerWithDiffsProps> = (props) => (
  <SchemaNodeViewer {...props} />
)
