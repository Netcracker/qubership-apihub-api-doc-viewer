import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiSchemaViewer } from "./OpenApiSchemaViewer"
import { isBlockClosing, OpenApiSectionTail } from "./section-preceded-by"

type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>

type ParametersNodeViewerProps = WithPrecededByProps & {
  node: ParametersNode
  /** What the row after the section assumes about its end (see `OpenApiSectionEntry`). */
  closing: OpenApiSectionTail
  title: string
  testId: string
}

/** How a parameter group / response headers section ends: with its schema, or with its title row. */
export function resolveParametersTail(node: ParametersNode): OpenApiSectionTail {
  return node.value()?.schema === undefined ? PrecededBy.OPENAPI_BLOCK_START : PrecededBy.OPENAPI_AFTER_NESTED_VIEWER
}

/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export const ParametersNodeViewer: FC<ParametersNodeViewerProps> = (props) => {
  const { node, closing, title, testId, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const schema = node.value()?.schema
  return (
    <div data-testid={testId} className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        data-block-last-row={schema === undefined && isBlockClosing(closing)}
        value={title}
        expandable={false}
        variant={TextValueVariant.h3}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={takeOpenApiSeverities(node)}
      />
      <OpenApiSchemaViewer schema={schema} />
    </div>
  )
}

