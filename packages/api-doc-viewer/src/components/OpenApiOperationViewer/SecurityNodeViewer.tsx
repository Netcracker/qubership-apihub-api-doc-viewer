import { getOpenApiChildren, isOpenApiSecurityRequirementNode, isOpenApiSecuritySchemeNode } from "@apihub/utils/openapi/node-type-checkers"
import { OPENAPI_NO_AUTHENTICATION_TEXT, OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC, Fragment, useEffect, useMemo, useState } from "react"
import { SelectorOption } from "../shared-components/Selector/Selector"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { SecuritySchemeCard } from "./SecuritySchemeCard/SecuritySchemeCard"
import { StandaloneSelectorRow } from "./StandaloneSelectorRow"

export const SECURITY_SECTION_TITLE = 'Security'

type SecurityNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>
}

type AlternativeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_REQUIREMENT>

/** "Security" (h2), the alternatives selector (OR, always shown), framed scheme cards (AND). */
export const SecurityNodeViewer: FC<SecurityNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const alternatives = useMemo(() => getOpenApiChildren(node, isOpenApiSecurityRequirementNode), [node])

  const options: SelectorOption<AlternativeNode>[] = useMemo(() => alternatives.map((alternative, index) => ({
    node: alternative,
    title: OpenApiDisplayLabels.securityRequirementTitle(alternative.value()?.schemeNames ?? []),
    testId: `security-alternative-${index}`,
    ...(isOpenApiTreeNodeWithDiffs(alternative)
      ? {
        diffs: alternative.diffs,
        diffsSummary: alternative.diffsSummary,
        descendantDiffsSummary: alternative.descendantDiffsSummary,
      }
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
      <StandaloneSelectorRow
        data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
        options={options}
        selectedOption={selectedOption}
        onSelectOption={(option) => setSelectedId(option.node.id)}
        diff={headerDiff}
        diffsSeverities={severities}
      />
      {selected && selected.value()?.isAnonymous && (
        <TextRow
          data-precededby={PrecededBy.SECTION_SELECTOR_ROW}
          value={OPENAPI_NO_AUTHENTICATION_TEXT}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor="#8F9EB4"
          diff={OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(selected)}
        />
      )}
      {schemes.map((scheme, index) => (
        <Fragment key={scheme.id}>
          {index > 0 && <div className="openapi-security-card-gap h-3" aria-hidden="true" />}
          <SecuritySchemeCard
            node={scheme}
            precededBy={index > 0 ? PrecededBy.SECURITY_SCHEME_CARD : selected?.value()?.isAnonymous ? PrecededBy.DESCRIPTION_ROW : PrecededBy.SECTION_SELECTOR_ROW}
          />
        </Fragment>
      ))}
    </div>
  )
}
