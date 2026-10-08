import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiSchemaViewer } from "./OpenApiSchemaViewer"

type ParametersNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>
  title: string
  testId: string
}

/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export const ParametersNodeViewer: FC<ParametersNodeViewerProps> = (props) => {
  const { node, title, testId, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  return (
    <div data-testid={testId} className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
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

