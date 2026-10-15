import { getOpenApiChildren, isOpenApiSecurityRequirementNode, isOpenApiSecuritySchemeNode } from "@apihub/utils/openapi/node-type-checkers"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_NO_AUTHENTICATION_TEXT, OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC, useEffect, useMemo, useState } from "react"
import { SecurityToolbar } from "../shared-components/Security/SecurityToolbar"
import { SelectorOption } from "../shared-components/Selector/Selector"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { SecuritySchemeCard } from "./SecuritySchemeCard/SecuritySchemeCard"
import { isBlockClosing, OpenApiSectionTail } from "./section-preceded-by"

export const SECURITY_SECTION_TITLE = 'Security'

type SecurityNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>
  /** What the row after the section assumes about its end (see `OpenApiSectionEntry`). */
  closing: OpenApiSectionTail
}

type AlternativeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_REQUIREMENT>

/**
 * "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND).
 * Title and toolbar form one block; the "No authentication" text and every card are blocks of their
 * own (a card keeps the outer half-gaps inside its first / last row, frame.css).
 */
export const SecurityNodeViewer: FC<SecurityNodeViewerProps> = (props) => {
  const { node, closing, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
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

  const [selectedId, setSelectedId] = useState<string | null>(null)
  useEffect(() => setSelectedId(null), [node])
  const selectedOption = options.find(option => option.node.id === selectedId) ?? options[0] ?? null
  const selected = selectedOption?.node

  const schemes = useMemo(() => getOpenApiChildren(selected, isOpenApiSecuritySchemeNode), [selected])
  const headerDiff = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
  const severities = takeOpenApiSeverities(node)

  return (
    <div data-testid="openapi-security-section" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={SECURITY_SECTION_TITLE}
        expandable={false}
        variant={TextValueVariant.h2}
        diff={headerDiff}
        diffsSeverities={severities}
      />
      <SecurityToolbar
        data-precededby={PrecededBy.OPENAPI_BLOCK_ROW}
        data-block-last-row={true}
        options={options}
        selectedOption={selectedOption}
        onSelectOption={(option) => setSelectedId(option.node.id)}
        diff={OpenApiRowDiffs.Security.takeToolbarRowDiff(node)}
        severity={severities?.[NodeDiffsSeverityPlacemennt.SelectorRow]}
      />
      {selected && selected.value()?.isAnonymous && (
        <TextRow
          data-precededby={PrecededBy.OPENAPI_BLOCK_START}
          data-block-last-row={isBlockClosing(closing)}
          value={OPENAPI_NO_AUTHENTICATION_TEXT}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor="#8F9EB4"
          diff={OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(selected)}
        />
      )}
      {schemes.map(scheme => <SecuritySchemeCard key={scheme.id} node={scheme} />)}
    </div>
  )
}
