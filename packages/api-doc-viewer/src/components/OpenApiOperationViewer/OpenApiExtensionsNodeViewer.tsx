import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC } from "react"
import { ExtensionsSectionContent, ExtensionsSectionTitleRow } from "../shared-components/ExtensionsSection/ExtensionsSection"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { OpenApiSectionTitleRowProps, useOpenApiSectionTitleRowProps } from "./CollapsibleSection"
import { takeOpenApiSeverities } from "./diff-state"

type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>

type ExtensionsTitleRowProps = {
  node: ExtensionsNode
  variant: TextValueVariant
}

type ExtensionsTitleRowContentProps = ExtensionsTitleRowProps & {
  section?: OpenApiSectionTitleRowProps
}

type ExtensionsValuesProps = {
  node: ExtensionsNode
}

/** Operation (h2), Response (h3) and Responses Object (h3) extensions title. Layout block: `extensions-blocks.tsx`. */
export const ExtensionsTitleRow: FC<ExtensionsTitleRowContentProps> = ({ node, variant, section }) => (
  <ExtensionsSectionTitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    variant={variant}
    section={section}
    titleRowDiffProps={{
      diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(node),
      diffsSeverities: takeOpenApiSeverities(node),
      highlightingMode: isOpenApiTreeNodeWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY]?.highlightingMode : undefined,
    }}
  />
)

/** The same title with the section expander (expanded state from the operation view state). */
export const CollapsibleExtensionsTitleRow: FC<ExtensionsTitleRowProps> = (props) => {
  const section = useOpenApiSectionTitleRowProps(props.node.id)
  return <ExtensionsTitleRow {...props} section={section} />
}

/** The `x-*` values (JSO viewer); its first row keeps the nested-viewer inset. */
export const ExtensionsValues: FC<ExtensionsValuesProps> = ({ node }) => (
  <ExtensionsSectionContent rawValues={node.value()?.rawValues ?? {}} contentPrecededBy={PrecededBy.OPENAPI_NESTED_VIEWER_START} />
)
