import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { getOpenApiChildren, isOpenApiResponseNode } from "@apihub/utils/openapi/node-type-checkers"
import { resolveResponseCodeTone } from "@apihub/utils/openapi/response-code-tone"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { OpenApiResponseCodeClasses } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/response-code"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { Selector, SelectorOption } from "../shared-components/Selector/Selector"
import { SelectorVariant } from "../shared-components/Selector/types"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiExtensionsNodeViewer } from "./OpenApiExtensionsNodeViewer"
import { ResponseNodeViewer } from "./ResponseNodeViewer"
import { chainSectionsPrecededBy, OpenApiSectionEntry } from "./section-preceded-by"

export const RESPONSES_SECTION_TITLE = 'Responses'

type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>

type ResponsesNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>
  /** Responses Object `x-*`: a child of the operation node, rendered inside this section. */
  extensionsNode?: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>
}

/** First 2XX response, else the first one (design: features/response-code-selector.md). */
function resolveInitialResponse(responses: readonly ResponseNode[]): ResponseNode | undefined {
  return responses.find(response => response.value()?.codeClass === OpenApiResponseCodeClasses.SUCCESS) ?? responses[0]
}

/**
 * "Responses" (h2) with the toned response-code selector in its subheader, the selected response,
 * and the Responses Object extensions - in config order.
 */
export const ResponsesNodeViewer: FC<ResponsesNodeViewerProps> = (props) => {
  const { node, extensionsNode, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const responses = useMemo(() => getOpenApiChildren(node, isOpenApiResponseNode), [node])

  const options: SelectorOption<ResponseNode>[] = useMemo(() => responses.map(response => ({
    node: response,
    title: (side: LayoutSide) => OpenApiRowDiffs.Response.resolveSideCode(response, side),
    testId: `response-code-${String(response.key)}`,
    tone: resolveResponseCodeTone(response.value()?.codeClass),
    // Markers show inner changes only: no own-diff summary, the descendant summary of the accessor.
    ...(isOpenApiTreeNodeWithDiffs(response)
      ? { diffs: response.diffs, descendantDiffsSummary: OpenApiRowDiffs.Response.takeChangesMarkerSummary(response) }
      : {}),
  })), [responses])

  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  // Media-type selection per response: switching codes back and forth keeps each choice.
  const [mediaTypeSelection, setMediaTypeSelection] = useState<Readonly<Record<string, string>>>({})
  useEffect(() => {
    setSelectedId(undefined)
    setMediaTypeSelection({})
  }, [node])

  const initialResponse = useMemo(() => resolveInitialResponse(responses), [responses])
  const selectedOption = options.find(option => option.node.id === (selectedId ?? initialResponse?.id)) ?? null
  const selected = selectedOption?.node
  const onSelectMediaType = useCallback((mediaTypeId: string) => {
    if (selected) {
      setMediaTypeSelection(current => ({ ...current, [selected.id]: mediaTypeId }))
    }
  }, [selected])

  const sections = chainSectionsPrecededBy(
    OPENAPI_SECTION_ORDER.responses.flatMap((sectionId): OpenApiSectionEntry[] => {
      if (sectionId === 'selectedResponse') {
        return selected
          ? [{
            id: sectionId,
            tail: PrecededBy.JSON_SCHEMA_VIEWER,
            render: (sectionPrecededBy) => (
              <ResponseNodeViewer
                key={selected.id}
                data-precededby={sectionPrecededBy}
                node={selected}
                selectedMediaTypeId={mediaTypeSelection[selected.id]}
                onSelectMediaType={onSelectMediaType}
              />
            ),
          }]
          : []
      }
      return extensionsNode
        ? [{
          id: sectionId,
          tail: PrecededBy.JSO_VIEWER,
          render: (sectionPrecededBy) => (
            <OpenApiExtensionsNodeViewer
              key={sectionId}
              data-precededby={sectionPrecededBy}
              node={extensionsNode}
              variant={TextValueVariant.h3}
              testId="openapi-responses-extensions-section"
            />
          ),
        }]
        : []
    }),
    PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL,
  )

  return (
    <div data-testid="openapi-responses-section" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={RESPONSES_SECTION_TITLE}
        expandable={false}
        variant={TextValueVariant.h2}
        subheader={(layoutSide) => (
          <Selector
            options={options}
            selectedOption={selectedOption}
            onSelectOption={(option) => setSelectedId(option.node.id)}
            variant={SelectorVariant.Secondary}
            layoutSide={layoutSide}
          />
        )}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={takeOpenApiSeverities(node)}
      />
      {sections}
    </div>
  )
}
