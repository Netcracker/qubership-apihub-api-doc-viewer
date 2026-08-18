import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { takeDiffSideBorderShadowColor } from "@apihub/utils/diffs/take-diff-side-border-shadow-color"
import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolvePlainPropertyIsExpandable,
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyListLastRowFlags,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolveJsonSchemaPropertyListLastRowFlags,
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import {
  resolveJsonSchemaDefaultSideDisplay,
  resolveJsonSchemaListValueSideItems,
  takeJsonSchemaDefaultDiff,
  takeJsonSchemaDefaultRowColorizingDiff,
  takeJsonSchemaEnumRowColorizingDiff,
  takeJsonSchemaEnumValueDiffs,
  takeJsonSchemaExamplesRowColorizingDiff,
  takeJsonSchemaExamplesValueDiffs,
  takeJsonSchemaValidationRowColorizingDiff,
  takeJsonSchemaValidationRowDiff,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaValidationRowKey } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { FC, useCallback, useMemo, useState } from "react"
import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { TextRowUsage } from "@apihub/components/shared-components/TextRow/types"
import { TextValueVariant } from "@apihub/components/shared-components/TextValue/types"
import { TitleRow } from "@apihub/components/shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "@apihub/components/shared-components/TitleRow/types"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { resolveValidationRows } from "../utils/validation-rows"
import { JsonSchemaValidationRowKey as ViewerValidationRowKey } from "../utils/validation-row-keys"
import {
  ITEMS_COUNT_LABEL,
  PROPERTIES_COUNT_LABEL,
  UNIQUE_ITEMS_LABEL,
  VALUE_LENGTH_LABEL,
  VALUE_MULTIPLE_OF_LABEL,
  VALUE_PATTERN_LABEL,
  VALUE_RANGE_LABEL,
} from "../../../consts/validations"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { JsonSchemaExtensionsSection } from "./JsonSchemaExtensionsSection"
import { JsonSchemaNodeTitle } from "./JsonSchemaNodeTitle"
import { JsonSchemaTitleSubheader } from "./JsonSchemaTitleSubheader"
import { JsonSchemaValidationChips } from "./JsonSchemaValidationChips"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { buildRowDiffProps, useNodeDiffState } from "../../shared-components/diffs/node-diff-props"
import { TitleRowProps } from "../../shared-components/TitleRow/types"
import {
  isDiffSideHeaderVisible,
  takeAddRemoveDiffIfPresent,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"

import { useJsonSchemaNextViewerContext } from "../JsonSchemaNextViewerContext"
import { resolveJsonSchemaPropertyNestingIndicatorTitle } from "../utils/resolve-json-schema-nesting-indicator-title"

const VALIDATION_ROW_LABELS: Record<ViewerValidationRowKey, string> = {
  valueLength: VALUE_LENGTH_LABEL,
  valuePattern: VALUE_PATTERN_LABEL,
  valueRange: VALUE_RANGE_LABEL,
  valueMultipleOf: VALUE_MULTIPLE_OF_LABEL,
  propertiesCount: PROPERTIES_COUNT_LABEL,
  itemsCount: ITEMS_COUNT_LABEL,
  uniqueItems: UNIQUE_ITEMS_LABEL,
}

function isJsonSchemaPropertyNodeWithDiffs(
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): node is JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY> {
  return isJsonSchemaTreeNodeWithDiffs(node) && node.kind === JsonSchemaTreeNodeKinds.PROPERTY
}

export type SchemaNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  isLastInList?: boolean
}

export const SchemaNodeViewer: FC<SchemaNodeViewerProps> = (props) => {
  const {
    node,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const { expandedDepth, materializeChildren, treeRevision } = useJsonSchemaNextViewerContext()
  const customizationOptions = useCustomizationOptions()
  const value = node.value()
  const meta = node.meta()

  const propertyNodeWithDiffs = isJsonSchemaPropertyNodeWithDiffs(node) ? node : undefined

  const visibility = useMemo(
    () => propertyNodeWithDiffs
      ? resolveJsonSchemaPropertyNodeVisibility(propertyNodeWithDiffs, displayMode)
      : resolvePlainPropertyNodeVisibility(node as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>, displayMode),
    [displayMode, node, propertyNodeWithDiffs],
  )
  const listLastRowFlags = useMemo(
    () => propertyNodeWithDiffs
      ? resolveJsonSchemaPropertyListLastRowFlags(isLastInList, visibility)
      : resolvePlainPropertyListLastRowFlags(isLastInList, visibility),
    [isLastInList, propertyNodeWithDiffs, visibility],
  )

  const enumValueDiffs = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaEnumValueDiffs(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const enumRowColorizingDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaEnumRowColorizingDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const examplesValueDiffs = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaExamplesValueDiffs(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const examplesRowColorizingDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaExamplesRowColorizingDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const defaultValueDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaDefaultDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const defaultValueRowColorizingDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaDefaultRowColorizingDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )

  const children = useMemo(
    () => node.childrenNodes(),
    // treeRevision: lazy materialization mutates tree in place
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const expandable = useMemo(
    () => resolvePlainPropertyIsExpandable(node),
    // treeRevision: lazy materialization adds children without changing node identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const initiallyExpanded = useMemo(
    () => resolvePlainPropertyInitiallyExpanded(node, { expandedDepth, level }),
    [node, expandedDepth, level],
  )

  const [expanded, setExpanded] = useState(initiallyExpanded)

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(node)
      }
      return nextExpanded
    })
  }, [materializeChildren, node])

  const showNodeBody = !expandable || expanded

  const titleDisplay = useMemo(
    () => resolveJsonSchemaNodeTitleDisplay({
      node,
      meta,
      headerRowTitle: customizationOptions?.headerRowTitle,
    }),
    [customizationOptions?.headerRowTitle, meta, node],
  )

  const titleContent = useMemo(
    () => <JsonSchemaNodeTitle display={titleDisplay} />,
    [titleDisplay],
  )

  const showTypeSubheader = useMemo(
    () => !isJsonSchemaBooleanAdditionalPropertiesNode(node, meta),
    [meta, node],
  )

  const nodeDiffState = useNodeDiffState(node, isJsonSchemaTreeNodeWithDiffs)
  const titleRowDiffProps: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities"> = useMemo(
    () => buildRowDiffProps(nodeDiffState),
    [nodeDiffState],
  )

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!isDiffSideHeaderVisible(takeAddRemoveDiffIfPresent(titleRowDiffProps.diff), layoutSide)) {
        return <></>
      }

      return (
        <JsonSchemaTitleSubheader
          value={value}
          meta={meta}
          isCycle={node.isCycle}
          layoutSide={layoutSide}
          showTypeLabel={showTypeSubheader}
        />
      )
    },
    [meta, node.isCycle, showTypeSubheader, titleRowDiffProps.diff, value],
  )

  const validationRows = useMemo(() => {
    const baseRows = resolveValidationRows(value)
    if (!propertyNodeWithDiffs) {
      return baseRows
    }

    const presentKeys = new Set(baseRows.map((row) => row.key))
    const diffOnlyRows = (Object.keys(VALIDATION_ROW_LABELS) as ViewerValidationRowKey[])
      .filter((rowKey) => !presentKeys.has(rowKey))
      .filter((rowKey) => (
        !!takeJsonSchemaValidationRowDiff(propertyNodeWithDiffs, rowKey as JsonSchemaValidationRowKey)
        || !!takeJsonSchemaValidationRowColorizingDiff(propertyNodeWithDiffs, rowKey as JsonSchemaValidationRowKey)
      ))
      .map((rowKey) => ({
        key: rowKey,
        label: VALIDATION_ROW_LABELS[rowKey],
        values: [] as string[],
      }))

    return [...baseRows, ...diffOnlyRows]
  }, [propertyNodeWithDiffs, value])

  const resolveAdditionalInfoRowUsesAfterRowPrecededBy = propertyNodeWithDiffs
    ? resolveJsonSchemaPropertyAdditionalInfoRowUsesAfterRowPrecededBy
    : resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy

  const enumValuesAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideItems = resolveJsonSchemaListValueSideItems(
        value?.enum ?? [],
        enumValueDiffs,
        layoutSide,
      )
      if (sideItems.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips layoutSide={layoutSide} sideItems={sideItems} />
      )
    },
    [enumValueDiffs, value?.enum],
  )

  const examplesAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideItems = resolveJsonSchemaListValueSideItems(
        value?.examples ?? [],
        examplesValueDiffs,
        layoutSide,
      )
      if (sideItems.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips layoutSide={layoutSide} sideItems={sideItems} />
      )
    },
    [examplesValueDiffs, value?.examples],
  )

  const defaultAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const defaultValue = propertyNodeWithDiffs
        ? resolveJsonSchemaDefaultSideDisplay(propertyNodeWithDiffs, layoutSide)
        : (value && "default" in value ? String(value.default) : undefined)
      if (defaultValue === undefined) {
        return <></>
      }

      return (
        <AdditionalInfoPiece
          isVisible={true}
          value={defaultValue}
          usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
          textHighlighterColor={takeDiffSideTextHighlighterColor(defaultValueDiff, layoutSide)}
          borderShadowColor={takeDiffSideBorderShadowColor(defaultValueDiff, layoutSide)}
        />
      )
    },
    [defaultValueDiff, propertyNodeWithDiffs, value],
  )

  const buildValidationRowSubheader = useCallback(
    (_rowKey: ViewerValidationRowKey, rowValues: string[]) => (
      layoutSide: LayoutSide,
    ) => {
      const sideItems = resolveJsonSchemaListValueSideItems(
        rowValues,
        undefined,
        layoutSide,
      )
      if (sideItems.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips layoutSide={layoutSide} sideItems={sideItems} />
      )
    },
    [],
  )
  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaPropertyNestingIndicatorTitle(node),
    [node],
  )

  const descriptionRowDiffProps = useMemo(
    () => buildRowDiffProps<JsonSchemaTreeNodeValue>(nodeDiffState, {
      diffKey: "description" as keyof JsonSchemaTreeNodeValue,
      diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
    }),
    [nodeDiffState],
  )

  return (
    <div data-testid="json-schema-node-viewer" data-name="JsonNode" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        {...listLastRowFlags}
        titleContent={titleContent}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={expandable ? onClickExpander : undefined}
        variant={TextValueVariant.body2}
        subheader={subheader}
        usage={TitleRowUsage.JsonSchemaProperty}
        {...titleRowDiffProps}
      />

      {showNodeBody && (
      <>
        {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={`**Deprecation reason:** ${visibility.deprecationReason}`}
          />
        )}

        {visibility.showDescription && (value?.description || descriptionRowDiffProps.diff) && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={value?.description ?? ""}
            {...descriptionRowDiffProps}
          />
        )}

        {visibility.showEnumValuesRow && (
          <AdditionalInfoRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label="Allowed values"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={enumValuesAdditionalInfoSubheader}
            colorizingDiff={enumRowColorizingDiff}
            diffsSeverities={enumValueDiffs || enumRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
            {...resolvePlainPropertyListLastRowFlags(
              isLastInList,
              { ...visibility, showDefaultRow: false, showExamplesRow: false },
            )}
          />
        )}

        {visibility.showDefaultRow && (
          <AdditionalInfoRow
            data-precededby={
              resolveAdditionalInfoRowUsesAfterRowPrecededBy(visibility, "default")
                ? PrecededBy.JSON_SCHEMA_VIEWER
                : PrecededBy.JSON_SCHEMA_VIEWER
            }
            label="Default"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={defaultAdditionalInfoSubheader}
            colorizingDiff={defaultValueRowColorizingDiff}
            diffsSeverities={defaultValueDiff || defaultValueRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
          />
        )}

        {visibility.showExamplesRow && (
          <AdditionalInfoRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label="Examples"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={examplesAdditionalInfoSubheader}
            colorizingDiff={examplesRowColorizingDiff}
            diffsSeverities={examplesValueDiffs || examplesRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
          />
        )}

        {visibility.showValidationsSection && validationRows.map((row) => (
          <AdditionalInfoRow
            key={row.key}
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label={row.label}
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={buildValidationRowSubheader(row.key, row.values)}
            colorizingDiff={propertyNodeWithDiffs
              ? takeJsonSchemaValidationRowColorizingDiff(propertyNodeWithDiffs, row.key as JsonSchemaValidationRowKey)
              : undefined}
            diffsSeverities={propertyNodeWithDiffs && (
              takeJsonSchemaValidationRowDiff(propertyNodeWithDiffs, row.key as JsonSchemaValidationRowKey)
              || takeJsonSchemaValidationRowColorizingDiff(propertyNodeWithDiffs, row.key as JsonSchemaValidationRowKey)
            ) ? nodeDiffState?.nodeDiffsSeverities : undefined}
          />
        ))}

        {visibility.showExtensionsRow && value?.extensions && (
          <JsonSchemaExtensionsSection extensions={value.extensions} />
        )}

        {!node.isCycle && children.length > 0 && (
          <LevelContext.Provider value={level + 1}>
            <NestingIndicatorTitleRow
              data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
              title={propertyNestingIndicatorTitle}
              usage={NestingIndicatorTitleRowUsage.JsonSchema}
              lastInvisible
            />
            {children.map((child, index) => (
              <JsonSchemaNodeViewer
                key={child.id}
                data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
                node={child}
                isLastInList={index === children.length - 1}
              />
            ))}
          </LevelContext.Provider>
        )}
      </>
      )}
    </div>
  )
}
