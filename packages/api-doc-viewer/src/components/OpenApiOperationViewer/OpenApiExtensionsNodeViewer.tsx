import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC } from "react"
import { ExtensionsSection } from "../shared-components/ExtensionsSection/ExtensionsSection"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock } from "./OpenApiLayout"

type OpenApiExtensionsNodeViewerProps = {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>
  variant: TextValueVariant
  testId: string
}

/** An Extensions section as a layout block (title row + JSO viewer). */
export function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps): OpenApiBlock {
  return {
    id,
    ...OpenApiBlockEdges.extensions(props.node),
    payload: () => <OpenApiExtensionsNodeViewer key={id} {...props} />,
  }
}

/** Operation (h2), Response (h3) and Responses Object (h3) extensions; always ends with the JSO viewer. */
export const OpenApiExtensionsNodeViewer: FC<OpenApiExtensionsNodeViewerProps> = (props) => {
  const { node, variant, testId } = props
  const value = node.value()
  const headerDiff = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
  return (
    <ExtensionsSection
      data-precededby={PrecededBy.OPENAPI_ROW}
      rawValues={value?.rawValues ?? {}}
      variant={variant}
      testId={testId}
      contentPrecededBy={PrecededBy.OPENAPI_NESTED_VIEWER_START}
      titleRowDiffProps={{
        diff: headerDiff,
        diffsSeverities: takeOpenApiSeverities(node),
        highlightingMode: isOpenApiTreeNodeWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY]?.highlightingMode : undefined,
      }}
    />
  )
}
