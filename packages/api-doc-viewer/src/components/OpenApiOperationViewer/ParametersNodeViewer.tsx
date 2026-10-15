import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock } from "./OpenApiLayout"
import { OpenApiSchemaViewer } from "./OpenApiSchemaViewer"

type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>

type ParametersNodeViewerProps = {
  node: ParametersNode
  title: string
  testId: string
}

/** A parameter group / response Headers as a layout block (title row + synthesized schema). */
export function buildParametersBlock(id: string, props: ParametersNodeViewerProps): OpenApiBlock {
  return {
    id,
    ...OpenApiBlockEdges.parameters(props.node),
    payload: () => <ParametersNodeViewer key={id} {...props} />,
  }
}

/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export const ParametersNodeViewer: FC<ParametersNodeViewerProps> = (props) => {
  const { node, title, testId } = props
  return (
    <div data-testid={testId} className="flex flex-col">
      <TitleRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        value={title}
        expandable={false}
        variant={TextValueVariant.h3}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={takeOpenApiSeverities(node)}
      />
      <OpenApiSchemaViewer schema={node.value()?.schema} />
    </div>
  )
}
