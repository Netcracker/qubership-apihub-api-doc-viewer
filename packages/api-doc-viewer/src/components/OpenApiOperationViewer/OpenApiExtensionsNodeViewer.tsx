import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC } from "react"
import { ExtensionsSection } from "../shared-components/ExtensionsSection/ExtensionsSection"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"

type OpenApiExtensionsNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>
  variant: TextValueVariant
  testId: string
}

/** Operation (h2), Response (h3) and Responses Object (h3) extensions. */
export const OpenApiExtensionsNodeViewer: FC<OpenApiExtensionsNodeViewerProps> = (props) => {
  const { node, variant, testId, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const value = node.value()
  const headerDiff = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
  return (
    <ExtensionsSection
      data-precededby={precededBy}
      rawValues={value?.rawValues ?? {}}
      variant={variant}
      testId={testId}
      titleRowDiffProps={{
        diff: headerDiff,
        diffsSeverities: takeOpenApiSeverities(node),
        highlightingMode: isOpenApiTreeNodeWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY]?.highlightingMode : undefined,
      }}
    />
  )
}
