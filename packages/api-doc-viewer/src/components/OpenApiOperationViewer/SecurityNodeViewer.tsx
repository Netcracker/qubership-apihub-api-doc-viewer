import { OPENAPI_SECURITY_OPTIONAL_BADGE_COLOR_SCHEMA, OPENAPI_SECURITY_OPTIONAL_BADGE_SIZE_CLASS } from "../../consts/tags"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { resolveSelectedAlternative } from "@apihub/utils/openapi/view-selection"
import { getSecurityChildren, isSecurityRequirementNode } from "@apihub/utils/security/node-type-checkers"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OPENAPI_SECURITY_DISPLAY_LABELS } from "@netcracker/qubership-apihub-next-data-model/model/openapi/security-presentation"
import { SECURITY_OPTIONAL_BADGE_TEXT } from "@netcracker/qubership-apihub-next-data-model/model/security/display/labels"
import { SecurityRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/security/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, ReactElement, useCallback } from "react"
import { BadgeWithDiffs } from "../shared-components/diffs/BadgeWithDiffs"
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
 * The Security section as a layout block. Its elements: the title row (with the `Optional` badge of
 * anonymous access), the toolbar row when there is an alternative, then the selected alternative's
 * scheme cards (each card one element; 4px outside its border). The toolbar and content come from
 * `SecuritySectionBase`; the selection lives in the operation view state.
 */
export function buildSecurityBlock(node: SecurityNode, view: OpenApiViewState): OpenApiBlock {
  const selected = resolveSelectedAlternative(node, view.selection)
  // An anonymous-only list (`[{}]`) has no alternative: the title row alone.
  const hasAlternatives = getSecurityChildren(node, isSecurityRequirementNode).length > 0
  const children: [OpenApiBlock, ...OpenApiBlock[]] = [
    { id: 'security-title', ...OpenApiBlockEdges.single(OpenApiBlockEdges.securityTitleRow(node)), payload: () => <SecurityTitleRow key="security-title" node={node} /> },
    ...(hasAlternatives ? [buildSecurityToolbarBlock(node, () => <OpenApiSecurityToolbarRow key="security-toolbar" node={node} />)] : []),
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

/** "Security" (h2) with the `Optional` badge when anonymous access (`{}`) is allowed on that side. */
const SecurityTitleRow: FC<{ node: SecurityNode }> = ({ node }) => {
  const layoutMode = useLayoutMode()
  const badgeDiff = SecurityRowDiffs.Security.takeOptionalBadgeDiff(node)
  const renderOptionalBadge = useCallback((layoutSide: LayoutSide): ReactElement => (
    badgeDiff || SecurityRowDiffs.Security.isAnonymousAllowedOnSide(node, layoutSide)
      ? (
        <BadgeWithDiffs
          label={SECURITY_OPTIONAL_BADGE_TEXT}
          colorSchema={OPENAPI_SECURITY_OPTIONAL_BADGE_COLOR_SCHEMA}
          sizeClassName={OPENAPI_SECURITY_OPTIONAL_BADGE_SIZE_CLASS}
          layoutMode={layoutMode}
          layoutSide={layoutSide}
          diff={badgeDiff?.data}
        />
      )
      : <></>
  ), [badgeDiff, layoutMode, node])
  return (
    <TitleRow
      data-precededby={PrecededBy.OPENAPI_ROW}
      value={SECURITY_SECTION_TITLE}
      expandable={false}
      variant={TextValueVariant.h2}
      subheader={renderOptionalBadge}
      diff={SecurityRowDiffs.Security.takeTitleRowDiff(node)}
      diffsSeverities={takeOpenApiSeverities(node)}
    />
  )
}

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
