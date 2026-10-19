import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { OpenApiSchemaViewer } from "./OpenApiSchemaViewer"

type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>

type ParametersNodeViewerProps = {
  node: ParametersNode
  title: string
  testId: string
}

/**
 * A parameter group / response Headers as a layout block: its h3 title row, then the synthesized
 * object schema (a nested viewer) when there is one. Design: entities/parameters.md.
 */
export function buildParametersBlock(id: string, props: ParametersNodeViewerProps): OpenApiBlock {
  const { node, title, testId } = props
  const schema = node.value()?.schema
  const elements: [OpenApiBlock, ...OpenApiBlock[]] = [
    { id: 'title', ...OpenApiBlockEdges.single(OpenApiBlockEdges.sectionTitleRow(node)), payload: () => <ParametersTitleRow key="title" node={node} title={title} /> },
    ...(schema !== undefined
      ? [{ id: 'schema', ...OpenApiBlockEdges.single(OpenApiBlockEdges.nested(node)), payload: () => <OpenApiSchemaViewer key="schema" schema={schema} /> }]
      : []),
  ]
  return {
    id,
    ...OpenApiBlockEdges.container(elements),
    payload: () => (
      <div key={id} data-testid={testId} className="flex flex-col">
        <OpenApiLayout blocks={elements} level="section" />
      </div>
    ),
  }
}

const ParametersTitleRow: FC<{ node: ParametersNode, title: string }> = ({ node, title }) => (
  <TitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={title}
    expandable={false}
    variant={TextValueVariant.h3}
    diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
    diffsSeverities={takeOpenApiSeverities(node)}
  />
)
