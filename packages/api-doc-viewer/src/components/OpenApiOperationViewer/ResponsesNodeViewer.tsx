import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { getOpenApiChildren, isOpenApiResponseNode } from "@apihub/utils/openapi/node-type-checkers"
import { resolveResponseCodeTone } from "@apihub/utils/openapi/response-code-tone"
import { resolveSelectedResponse } from "@apihub/utils/openapi/view-selection"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC, useMemo } from "react"
import { Selector, SelectorOption } from "../shared-components/Selector/Selector"
import { SelectorVariant } from "../shared-components/Selector/types"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { buildExtensionsBlock } from "./OpenApiExtensionsNodeViewer"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { useOpenApiViewerContext } from "./OpenApiViewerContext"
import { OptionKeyText } from "./OptionKeyText"
import { OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"
import { buildResponseBlocks } from "./response-blocks"

export const RESPONSES_SECTION_TITLE = 'Responses'

type ResponsesNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>
type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>

/** The Responses section as a layout block: its h2 title row with the code selector, then its sub-blocks. */
export function buildResponsesBlock(node: ResponsesNode, extensionsNode: ExtensionsNode | undefined, view: OpenApiViewState): OpenApiBlock {
  const children = OPENAPI_SECTION_ORDER.responses.flatMap((sectionId): OpenApiBlock[] => {
    if (sectionId === 'selectedResponse') {
      const selected = resolveSelectedResponse(node, view.selection)
      return selected ? buildResponseBlocks(selected, view) : []
    }
    return extensionsNode
      ? [buildExtensionsBlock(sectionId, { node: extensionsNode, variant: TextValueVariant.h3, testId: 'openapi-responses-extensions-section' })]
      : []
  })
  return {
    id: 'responses',
    ...OpenApiBlockEdges.responses(node, children),
    payload: () => <ResponsesNodeViewer key="responses" node={node} blocks={children} />,
  }
}

type ResponsesNodeViewerProps = {
  node: ResponsesNode
  /** Its sub-blocks, built by `buildResponsesBlock` (the parent needs them for the section's own edges). */
  blocks: readonly OpenApiBlock[]
}

/**
 * "Responses" (h2) with the toned response-code selector in its subheader, the selected response's
 * sections, and the Responses Object extensions - in config order.
 */
export const ResponsesNodeViewer: FC<ResponsesNodeViewerProps> = (props) => {
  const { node, blocks } = props
  const { spacing } = useOpenApiViewerContext()
  const { selection, select } = useOpenApiViewState()
  const responses = useMemo(() => getOpenApiChildren(node, isOpenApiResponseNode), [node])

  const options: SelectorOption<ResponseNode>[] = useMemo(() => responses.map(response => ({
    node: response,
    title: (side: LayoutSide) => (
      <OptionKeyText
        text={OpenApiRowDiffs.Response.resolveSideCode(response, side)}
        highlight={OpenApiRowDiffs.Response.resolveSideCodeHighlight(response, side)}
      />
    ),
    testId: `response-code-${String(response.key)}`,
    // A wholly added / removed code keeps the default look: only its green / red border shadow.
    tone: OpenApiRowDiffs.Response.keepsCodeTone(response) ? resolveResponseCodeTone(response.value()?.codeClass) : undefined,
    // Markers show inner changes only: no own-diff summary, the descendant summary of the accessor.
    ...(isOpenApiTreeNodeWithDiffs(response)
      ? { diffs: response.diffs, descendantDiffsSummary: OpenApiRowDiffs.Response.takeChangesMarkerSummary(response) }
      : {}),
  })), [responses])
  const selected = resolveSelectedResponse(node, selection)
  const selectedOption = options.find(option => option.node.id === selected?.id) ?? null

  return (
    <div data-testid="openapi-responses-section" className="flex flex-col">
      <TitleRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        value={RESPONSES_SECTION_TITLE}
        expandable={false}
        variant={TextValueVariant.h2}
        subheader={(layoutSide) => (
          <Selector
            options={options}
            selectedOption={selectedOption}
            onSelectOption={(option) => select(node.id, option.node.id)}
            variant={SelectorVariant.Secondary}
            layoutSide={layoutSide}
          />
        )}
        diff={OpenApiRowDiffs.Responses.takeTitleRowDiff(node)}
        diffsSeverities={takeOpenApiSeverities(node)}
      />
      <OpenApiLayout blocks={blocks} spacing={spacing} />
    </div>
  )
}
