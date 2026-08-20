import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { takeDiffSideBorderShadowColor } from "@apihub/utils/diffs/take-diff-side-border-shadow-color"
import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolvePlainPropertyListLastRowFlags,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
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
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { FC, useCallback, useMemo } from "react"
import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRowUsage } from "@apihub/components/shared-components/TextRow/types"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
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
import { JsonSchemaExtensionsSection } from "./JsonSchemaExtensionsSection"
import { JsonSchemaValidationChips } from "./JsonSchemaValidationChips"
import { buildRowDiffProps, useNodeDiffState } from "../../shared-components/diffs/node-diff-props"

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

export type SchemaNodePlainContentProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  displayValue?: JsonSchemaTreeNodeValue | null
  isLastInList?: boolean
}

export const SchemaNodePlainContent: FC<SchemaNodePlainContentProps> = (props) => {
  const {
    node,
    displayValue,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const value = displayValue ?? node.value()
  const propertyNodeWithDiffs = isJsonSchemaPropertyNodeWithDiffs(node) ? node : undefined

  const visibility = useMemo(
    () => {
      if (propertyNodeWithDiffs && displayValue === undefined) {
        return resolveJsonSchemaPropertyNodeVisibility(propertyNodeWithDiffs, displayMode)
      }

      const visibilityNode = displayValue !== undefined
        ? { value: () => displayValue } as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>
        : node as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>

      return resolvePlainPropertyNodeVisibility(visibilityNode, displayMode)
    },
    [displayMode, displayValue, node, propertyNodeWithDiffs],
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

  const nodeDiffState = useNodeDiffState(node, isJsonSchemaTreeNodeWithDiffs)
  const descriptionRowDiffProps = useMemo(
    () => buildRowDiffProps<JsonSchemaTreeNodeValue>(nodeDiffState, {
      diffKey: "description" as keyof JsonSchemaTreeNodeValue,
      diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
    }),
    [nodeDiffState],
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

  const rowPrecededBy = precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER

  return (
    <>
      {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
        <MarkdownTextRow
          data-precededby={rowPrecededBy}
          usage={TextRowUsage.JsonSchemaDescription}
          value={`**Deprecation reason:** ${visibility.deprecationReason}`}
        />
      )}

      {visibility.showDescription && (value?.description || descriptionRowDiffProps.diff) && (
        <MarkdownTextRow
          data-precededby={rowPrecededBy}
          usage={TextRowUsage.JsonSchemaDescription}
          value={value?.description ?? ""}
          {...descriptionRowDiffProps}
        />
      )}

      {visibility.showEnumValuesRow && (
        <AdditionalInfoRow
          data-precededby={rowPrecededBy}
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
              ? rowPrecededBy
              : rowPrecededBy
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
          data-precededby={rowPrecededBy}
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
          data-precededby={rowPrecededBy}
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
    </>
  )
}
