import { getOpenApiChildren, isOpenApiSecurityRequirementNode, isOpenApiSecuritySchemeNode } from "@apihub/utils/openapi/node-type-checkers"
import { resolveSelectedAlternative } from "@apihub/utils/openapi/view-selection"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_NO_AUTHENTICATION_TEXT, OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC, useMemo } from "react"
import { SecurityToolbar } from "../shared-components/Security/SecurityToolbar"
import { SelectorOption } from "../shared-components/Selector/Selector"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { useOpenApiViewerContext } from "./OpenApiViewerContext"
import { OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"
import { SecuritySchemeCard } from "./SecuritySchemeCard/SecuritySchemeCard"

export const SECURITY_SECTION_TITLE = 'Security'

type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>
type AlternativeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_REQUIREMENT>

/**
 * The Security section as a layout block. Its sub-blocks: the title + toolbar, then the selected
 * alternative's "No authentication" text or its scheme cards (each card a block of its own, framed:
 * no separators next to it).
 */
export function buildSecurityBlock(node: SecurityNode, view: OpenApiViewState): OpenApiBlock {
  const selected = resolveSelectedAlternative(node, view.selection)
  const content: OpenApiBlock[] = selected?.value()?.isAnonymous
    ? [{ id: 'no-authentication', ...OpenApiBlockEdges.noAuthentication(selected), payload: () => <NoAuthenticationRow key="no-authentication" alternative={selected} /> }]
    : getOpenApiChildren(selected, isOpenApiSecuritySchemeNode).map(scheme => ({
      id: scheme.id,
      ...OpenApiBlockEdges.card(scheme),
      payload: () => <SecuritySchemeCard key={scheme.id} node={scheme} />,
    }))
  const children: OpenApiBlock[] = [
    { id: 'security-header', ...OpenApiBlockEdges.securityHeader(node), payload: () => <SecurityHeaderRows key="security-header" node={node} /> },
    ...content,
  ]
  return {
    id: 'security',
    ...OpenApiBlockEdges.section(node, children),
    payload: () => <SecurityNodeViewer key="security" blocks={children} />,
  }
}

/** "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND). */
export const SecurityNodeViewer: FC<{ blocks: readonly OpenApiBlock[] }> = ({ blocks }) => {
  const { spacing } = useOpenApiViewerContext()
  return (
    <div data-testid="openapi-security-section" className="flex flex-col">
      <OpenApiLayout blocks={blocks} spacing={spacing} />
    </div>
  )
}

/** Title + toolbar: one block. The selection lives in the operation view state. */
const SecurityHeaderRows: FC<{ node: SecurityNode }> = ({ node }) => {
  const { selection, select } = useOpenApiViewState()
  const alternatives = useMemo(() => getOpenApiChildren(node, isOpenApiSecurityRequirementNode), [node])
  const options: SelectorOption<AlternativeNode>[] = useMemo(() => alternatives.map((alternative, index) => ({
    node: alternative,
    title: OpenApiDisplayLabels.securityRequirementTitle(alternative.value()?.schemeNames ?? []),
    testId: `security-alternative-${index}`,
    // A wholly added / removed option shows only its green / red border; any other changed option
    // gets the round marker of its strongest change.
    ...(isOpenApiTreeNodeWithDiffs(alternative)
      ? OpenApiRowDiffs.Section.takeHeaderRowDiff(alternative)
        ? { diffs: alternative.diffs }
        : { diffs: alternative.diffs, diffsSummary: alternative.diffsSummary, descendantDiffsSummary: alternative.descendantDiffsSummary }
      : {}),
  })), [alternatives])
  const selected = resolveSelectedAlternative(node, selection)
  const selectedOption = options.find(option => option.node.id === selected?.id) ?? null
  const severities = takeOpenApiSeverities(node)

  return (
    <>
      <TitleRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        value={SECURITY_SECTION_TITLE}
        expandable={false}
        variant={TextValueVariant.h2}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={severities}
      />
      <SecurityToolbar
        data-precededby={PrecededBy.OPENAPI_ROW}
        options={options}
        selectedOption={selectedOption}
        onSelectOption={(option) => select(node.id, option.node.id)}
        diff={OpenApiRowDiffs.Security.takeToolbarRowDiff(node)}
        severity={severities?.[NodeDiffsSeverityPlacemennt.SelectorRow]}
      />
    </>
  )
}

const NoAuthenticationRow: FC<{ alternative: AlternativeNode }> = ({ alternative }) => (
  <TextRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={OPENAPI_NO_AUTHENTICATION_TEXT}
    variant={TextValueVariant.body2}
    textFontWeight="normal"
    textColor="#8F9EB4"
    diff={OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(alternative)}
  />
)
