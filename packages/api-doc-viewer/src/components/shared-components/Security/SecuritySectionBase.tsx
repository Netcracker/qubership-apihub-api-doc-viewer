import { takeSecuritySeverities } from "@apihub/utils/security/diff-state"
import { getSecurityChildren, isSecurityRequirementNode, isSecuritySchemeNode } from "@apihub/utils/security/node-type-checkers"
import { hasNodeDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/row-diffs-base"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { SECURITY_NO_AUTHENTICATION_TEXT, SecurityDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/security/display/labels"
import { SecurityRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/security/tree-with-diffs/row-diffs"
import { SecurityTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/security/types/aliases"
import { SecurityTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/security/types/node-kind"
import { FC, ReactElement, useMemo } from "react"
import { OpenApiBlock } from "../../OpenApiOperationViewer/OpenApiLayout"
import { SelectorOption } from "../Selector/Selector"
import { TextRow } from "../TextRow/TextRow"
import { TextValueVariant } from "../TextValue/types"
import { PrecededBy } from "../WithPrecededByProps"
import { SecuritySchemeNode } from "./SecuritySchemeCardBase"
import { SecurityToolbar } from "./SecurityToolbar"

/** The Security section title of every API type. */
export const SECURITY_SECTION_TITLE = 'Security'

export type SecuritySectionNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>
export type SecurityAlternativeNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT>

/**
 * Building blocks of a Security section, shared by the API types: the toolbar row (alternatives, OR,
 * always shown), the selected alternative's content ("No authentication" text or its framed scheme
 * cards, AND) as layout elements. Each API type composes them with its own title row, card
 * (`OpenApiSecuritySchemeCard` / `AsyncApiSecuritySchemeCard`) and selection state.
 * Design: docs/design/openapi/entities/security.md, docs/design/async-api/features/security.md.
 */

/** The toolbar row as a layout element; `render` draws the API type's `SecurityToolbarRow` (it owns the selection). */
export function buildSecurityToolbarBlock(node: SecuritySectionNode, render: () => ReactElement): OpenApiBlock {
  return {
    id: 'security-toolbar',
    ...OpenApiBlockEdges.single(OpenApiBlockEdges.securityToolbarRow(node)),
    payload: render,
  }
}

/**
 * The selected alternative's content as layout elements: its "No authentication" row or one element
 * per card (4px outside its border). `renderCard` draws the API type's card (keyed by the scheme id).
 */
export function buildSecurityContentBlocks(selected: SecurityAlternativeNode | undefined, renderCard: (scheme: SecuritySchemeNode) => ReactElement): OpenApiBlock[] {
  if (selected?.value()?.isAnonymous) {
    return [{
      id: 'no-authentication',
      ...OpenApiBlockEdges.single(OpenApiBlockEdges.noAuthenticationRow(selected)),
      payload: () => <SecurityNoAuthenticationRow key="no-authentication" alternative={selected} />,
    }]
  }
  return getSecurityChildren(selected, isSecuritySchemeNode).map(scheme => ({
    id: scheme.id,
    ...OpenApiBlockEdges.single(OpenApiBlockEdges.card(scheme)),
    payload: () => renderCard(scheme),
  }))
}

export type SecurityToolbarRowProps = {
  node: SecuritySectionNode
  labels: SecurityDisplayLabels
  /** The shown alternative (`resolveSelectedSecurityAlternative`). */
  selected: SecurityAlternativeNode | undefined
  onSelect: (alternative: SecurityAlternativeNode) => void
}

/** The alternatives toolbar; the selection lives with the API type's viewer. */
export const SecurityToolbarRow: FC<SecurityToolbarRowProps> = ({ node, labels, selected, onSelect }) => {
  const alternatives = useMemo(() => getSecurityChildren(node, isSecurityRequirementNode), [node])
  const options: SelectorOption<SecurityAlternativeNode>[] = useMemo(() => alternatives.map((alternative, index) => ({
    node: alternative,
    title: labels.securityRequirementTitle(alternative.value()?.schemeNames ?? []),
    testId: `security-alternative-${index}`,
    // A wholly added / removed option shows only its green / red border; any other changed option
    // gets the round marker of its strongest change.
    ...(hasNodeDiffs(alternative)
      ? SecurityRowDiffs.Section.takeHeaderRowDiff(alternative)
        ? { diffs: alternative.diffs }
        : { diffs: alternative.diffs, diffsSummary: alternative.diffsSummary, descendantDiffsSummary: alternative.descendantDiffsSummary }
      : {}),
  })), [alternatives, labels])
  const selectedOption = options.find(option => option.node.id === selected?.id) ?? null

  return (
    <SecurityToolbar
      data-precededby={PrecededBy.OPENAPI_ROW}
      options={options}
      selectedOption={selectedOption}
      onSelectOption={(option) => onSelect(option.node)}
      diff={SecurityRowDiffs.Security.takeToolbarRowDiff(node)}
      severity={takeSecuritySeverities(node)?.[NodeDiffsSeverityPlacemennt.SelectorRow]}
    />
  )
}

const SecurityNoAuthenticationRow: FC<{ alternative: SecurityAlternativeNode }> = ({ alternative }) => (
  <TextRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={SECURITY_NO_AUTHENTICATION_TEXT}
    variant={TextValueVariant.body2}
    textFontWeight="normal"
    textColor="#8F9EB4"
    diff={SecurityRowDiffs.NodeLevel.takeWholeNodeDiff(alternative)}
  />
)
