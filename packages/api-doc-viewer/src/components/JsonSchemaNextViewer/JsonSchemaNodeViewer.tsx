import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC } from "react"
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { CombinerNodeViewer } from "./CombinerNodeViewer/CombinerNodeViewer"
import { SchemaNodeViewer } from "./SchemaNodeViewer/SchemaNodeViewer"
import { isJsonSchemaCombinerOwnerNode } from "./utils/node-type-checkers"

export type JsonSchemaNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode
  isLastInList?: boolean
}

export const JsonSchemaNodeViewer: FC<JsonSchemaNodeViewerProps> = (props) => {
  const { node } = props

  if (isJsonSchemaCombinerOwnerNode(node)) {
    return <CombinerNodeViewer {...props} />
  }

  return <SchemaNodeViewer {...props} />
}
