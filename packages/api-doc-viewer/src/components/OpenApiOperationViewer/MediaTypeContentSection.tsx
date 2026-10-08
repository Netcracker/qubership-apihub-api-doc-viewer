import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { wrapJsonSchemaForDiffsViewer, wrapJsonSchemaForViewer } from "@apihub/utils/jso/prepare-json-schema-to-jso-viewers"
import { ChangedPropertyMetaData, NodeDiffsSeverities } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC, ReactElement, useMemo } from "react"
import { TagsWithDiffs } from "../shared-components/diffs/TagsWithDiffs"
import { Selector, SelectorOption } from "../shared-components/Selector/Selector"
import { SelectorVariant } from "../shared-components/Selector/types"
import { TextValue } from "../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { OpenApiSchemaViewer } from "./OpenApiSchemaViewer"

export type MediaTypeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>

export const BODY_SECTION_TITLE = 'Body'
/** Root property name of a wrapped body schema (AsyncAPI parity). */
export const WRAPPED_BODY_SCHEMA_TITLE = 'Type'

type MediaTypeContentSectionProps = {
  precededBy: PrecededBy
  testId: string
  mediaTypes: readonly MediaTypeNode[]
  /** Selected media-type node id; `undefined` = the first option. */
  selectedId: string | undefined
  onSelect: (mediaTypeNodeId: string) => void
  headerDiff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
  /** Request body only: the side-exclusive `*` after the title. */
  isRequiredOnSide?: (layoutSide: LayoutSide) => boolean
  /** Request body only: the `required` tag of a required change. */
  requiredTagDiff?: ChangedPropertyMetaData
  /** Rows between the header and the schema (the body description). */
  renderBeforeSchema?: () => ReactElement | null
}

/**
 * "Body" (h3) with the media-type selector in its subheader, then the selected media type's schema
 * wrapped under a `Type` root. Request body and response body share it.
 * Design: entities/request-body.md, entities/responses.md -> "Body".
 */
export const MediaTypeContentSection: FC<MediaTypeContentSectionProps> = (props) => {
  const {
    precededBy, testId, mediaTypes, selectedId, onSelect, headerDiff, diffsSeverities,
    isRequiredOnSide, requiredTagDiff, renderBeforeSchema,
  } = props
  const layoutMode = useLayoutMode()
  const diffMetaKeys = useDiffMetaKeys()

  const options: SelectorOption<MediaTypeNode>[] = useMemo(() => mediaTypes.map(mediaType => ({
    node: mediaType,
    title: (side: LayoutSide) => OpenApiRowDiffs.MediaType.resolveSideTitle(mediaType, side),
    testId: `media-type-${String(mediaType.key)}`,
    ...(isOpenApiTreeNodeWithDiffs(mediaType)
      ? { diffs: mediaType.diffs, diffsSummary: mediaType.diffsSummary, descendantDiffsSummary: mediaType.descendantDiffsSummary }
      : {}),
  })), [mediaTypes])
  const selectedOption = options.find(option => option.node.id === selectedId) ?? options[0] ?? null
  const selected = selectedOption?.node

  const schema = useMemo(() => {
    const value = selected?.value()
    if (!selected || !value || typeof value.schema !== 'object' || value.schema === null) {
      return undefined
    }
    return layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE
      ? wrapJsonSchemaForDiffsViewer(WRAPPED_BODY_SCHEMA_TITLE, value.schema, OpenApiRowDiffs.Section.takeHeaderRowDiff(selected), diffMetaKeys)
      : wrapJsonSchemaForViewer(WRAPPED_BODY_SCHEMA_TITLE, value.schema)
  }, [selected, layoutMode, diffMetaKeys])

  const renderTitle = (layoutSide: LayoutSide): ReactElement => (
    <div className="flex flex-row items-baseline">
      <TextValue value={BODY_SECTION_TITLE} variant={TextValueVariant.h3} layoutSide={layoutSide} diff={headerDiff} />
      {isRequiredOnSide?.(layoutSide) && <sup className="ml-0.5 text-red-500">*</sup>}
    </div>
  )

  const renderSubheader = (layoutSide: LayoutSide): ReactElement => (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {requiredTagDiff && (
        <TagsWithDiffs
          requiredChanged={true}
          requiredDiff={requiredTagDiff}
          readOnly={false}
          writeOnly={false}
          layoutSide={layoutSide}
        />
      )}
      <Selector
        options={options}
        selectedOption={selectedOption}
        onSelectOption={(option) => onSelect(option.node.id)}
        variant={SelectorVariant.Secondary}
        layoutSide={layoutSide}
      />
    </div>
  )

  const beforeSchema = renderBeforeSchema?.() ?? null
  return (
    <div data-testid={testId} className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={BODY_SECTION_TITLE}
        titleContent={renderTitle}
        expandable={false}
        variant={TextValueVariant.h3}
        subheader={renderSubheader}
        diff={headerDiff}
        diffsSeverities={diffsSeverities}
      />
      {beforeSchema}
      <OpenApiSchemaViewer schema={schema} />
    </div>
  )
}
