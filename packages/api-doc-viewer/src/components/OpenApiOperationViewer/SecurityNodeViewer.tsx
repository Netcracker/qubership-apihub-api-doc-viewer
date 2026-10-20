import { resolveSelectedAlternative } from "@apihub/utils/openapi/view-selection"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OPENAPI_SECURITY_DISPLAY_LABELS } from "@netcracker/qubership-apihub-next-data-model/model/openapi/security-presentation"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { buildSecurityContentBlocks, buildSecurityToolbarBlock, SECURITY_SECTION_TITLE, SecurityToolbarRow } from "../shared-components/Security/SecuritySectionBase"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { OpenApiSecuritySchemeCard } from "./OpenApiSecuritySchemeCard"
import { OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"

type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>

/**
 * The Security section as a layout block. Its elements: the title row, the toolbar row, then the
 * selected alternative's "No authentication" text or its scheme cards (each card one element; 4px
 * outside its border). The toolbar and content come from `SecuritySectionBase`; the selection lives
 * in the operation view state.
 */
export function buildSecurityBlock(node: SecurityNode, view: OpenApiViewState): OpenApiBlock {
  const selected = resolveSelectedAlternative(node, view.selection)
  const children: [OpenApiBlock, ...OpenApiBlock[]] = [
    { id: 'security-title', ...OpenApiBlockEdges.single(OpenApiBlockEdges.sectionTitleRow(node)), payload: () => <SecurityTitleRow key="security-title" node={node} /> },
    buildSecurityToolbarBlock(node, () => <OpenApiSecurityToolbarRow key="security-toolbar" node={node} />),
    ...buildSecurityContentBlocks(selected, scheme => <OpenApiSecuritySchemeCard key={scheme.id} node={scheme} />),
  ]
  return {
    id: 'security',
    ...OpenApiBlockEdges.container(children),
    payload: () => <SecurityNodeViewer key="security" blocks={children} />,
  }
}

/** "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND). */
export const SecurityNodeViewer: FC<{ blocks: readonly OpenApiBlock[] }> = ({ blocks }) => (
  <div data-testid="openapi-security-section" className="flex flex-col">
    <OpenApiLayout blocks={blocks} level="security" />
  </div>
)

const SecurityTitleRow: FC<{ node: SecurityNode }> = ({ node }) => (
  <TitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={SECURITY_SECTION_TITLE}
    expandable={false}
    variant={TextValueVariant.h2}
    diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
    diffsSeverities={takeOpenApiSeverities(node)}
  />
)

/** The alternatives toolbar; the selection lives in the operation view state. */
const OpenApiSecurityToolbarRow: FC<{ node: SecurityNode }> = ({ node }) => {
  const { selection, select } = useOpenApiViewState()
  return (
    <SecurityToolbarRow
      node={node}
      labels={OPENAPI_SECURITY_DISPLAY_LABELS}
      selected={resolveSelectedAlternative(node, selection)}
      onSelect={(alternative) => select(node.id, alternative.id)}
    />
  )
}
