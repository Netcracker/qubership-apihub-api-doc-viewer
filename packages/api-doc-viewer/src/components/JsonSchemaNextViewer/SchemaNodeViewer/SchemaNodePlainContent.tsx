import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeStoredValue, JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { asJsonSchemaTypedNodeValue } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/schema-value"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyListLastRowFlags,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  resolveJsonSchemaPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/node-visibility-data/kind-property"
import {
  resolveJsonSchemaDefaultSideEntries,
  resolveJsonSchemaEnumSideEntries,
  resolveJsonSchemaExamplesSideEntries,
  resolveJsonSchemaValidationRowSideEntries,
  takeJsonSchemaDefaultDiff,
  takeJsonSchemaDefaultRowColorizingDiff,
  takeJsonSchemaEnumDiff,
  takeJsonSchemaEnumRowColorizingDiff,
  takeJsonSchemaEnumValueDiffs,
  takeJsonSchemaExamplesDiff,
  takeJsonSchemaExamplesRowColorizingDiff,
  takeJsonSchemaExamplesValueDiffs,
  takeJsonSchemaListValueDiffAtKey,
  hasJsonSchemaValidationRowSemanticDiffs,
  takeJsonSchemaValidationRowColorizingDiff,
  takeJsonSchemaValidationRowDiff,
  takeJsonSchemaValidationRowValueDiffs,
  takeJsonSchemaValueRangeCrawlDiffs,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaValidationRowKey, JsonSchemaValidationRowKeys } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { FC, useCallback, useMemo } from "react"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRowUsage } from "@apihub/components/shared-components/TextRow/types"
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
  return isJsonSchemaTreeNodeWithDiffs(node) && (
    node.kind === JsonSchemaTreeNodeKinds.PROPERTY ||
    node.kind === JsonSchemaTreeNodeKinds.ROOT
  )
}

export type SchemaNodePlainContentProps = {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  displayValue?: JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null
  isLastInList?: boolean
}

export const SchemaNodePlainContent: FC<SchemaNodePlainContentProps> = (props) => {
  const {
    node,
    displayValue,
    isLastInList = false,
  } = props

  const displayMode = useDisplayMode()
  const value = displayValue ?? node.value()
  const typedValue = asJsonSchemaTypedNodeValue(value)
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

  const enumDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaEnumDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const enumValueDiffs = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaEnumValueDiffs(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const enumRowColorizingDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaEnumRowColorizingDiff(propertyNodeWithDiffs) : undefined),
    [propertyNodeWithDiffs],
  )
  const examplesDiff = useMemo(
    () => (propertyNodeWithDiffs ? takeJsonSchemaExamplesDiff(propertyNodeWithDiffs) : undefined),
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
    const baseRows = resolveValidationRows(typedValue)
    if (!propertyNodeWithDiffs) {
      return baseRows
    }

    const presentKeys = new Set(baseRows.map((row) => row.key))
    const diffOnlyRows = (Object.keys(VALIDATION_ROW_LABELS) as ViewerValidationRowKey[])
      .filter((rowKey) => !presentKeys.has(rowKey))
      .filter((rowKey) => hasJsonSchemaValidationRowSemanticDiffs(
        propertyNodeWithDiffs,
        rowKey as JsonSchemaValidationRowKey,
      ))
      .map((rowKey) => ({
        key: rowKey,
        label: VALIDATION_ROW_LABELS[rowKey],
        values: [] as string[],
      }))

    return [...baseRows, ...diffOnlyRows]
  }, [propertyNodeWithDiffs, typedValue])

  const enumValuesAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideEntries = resolveJsonSchemaEnumSideEntries(
        typedValue?.enum ?? [],
        enumDiff,
        enumValueDiffs,
        layoutSide,
      )
      if (sideEntries.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips
          layoutSide={layoutSide}
          sideItems={sideEntries.map(({ text, valueDiffKey }) => ({
            text,
            diff: takeJsonSchemaListValueDiffAtKey(enumValueDiffs, valueDiffKey),
          }))}
        />
      )
    },
    [enumDiff, enumValueDiffs, typedValue?.enum],
  )

  const examplesAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideEntries = resolveJsonSchemaExamplesSideEntries(
        typedValue?.examples ?? [],
        examplesDiff,
        examplesValueDiffs,
        layoutSide,
      )
      if (sideEntries.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips
          layoutSide={layoutSide}
          sideItems={sideEntries.map(({ text, valueDiffKey }) => ({
            text,
            diff: takeJsonSchemaListValueDiffAtKey(examplesValueDiffs, valueDiffKey),
          }))}
        />
      )
    },
    [examplesDiff, examplesValueDiffs, typedValue?.examples],
  )

  const defaultAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const mergedDefault = typedValue?.default
      const sideEntries = propertyNodeWithDiffs
        ? resolveJsonSchemaDefaultSideEntries(
          mergedDefault,
          takeJsonSchemaDefaultDiff(propertyNodeWithDiffs),
          layoutSide,
        )
        : resolveJsonSchemaDefaultSideEntries(mergedDefault, undefined, layoutSide)
      if (sideEntries.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips
          layoutSide={layoutSide}
          sideItems={sideEntries.map(({ text }) => ({
            text,
            diff: defaultValueDiff,
          }))}
        />
      )
    },
    [defaultValueDiff, propertyNodeWithDiffs, value],
  )

  const buildValidationRowSubheader = useCallback(
    (rowKey: JsonSchemaValidationRowKey, rowValues: string[]) => (
      layoutSide: LayoutSide,
    ) => {
      const validationRowDiff = propertyNodeWithDiffs
        ? takeJsonSchemaValidationRowDiff(propertyNodeWithDiffs, rowKey)
        : undefined
      const validationRowValueDiffs = propertyNodeWithDiffs
        ? takeJsonSchemaValidationRowValueDiffs(propertyNodeWithDiffs, rowKey)
        : undefined
      const sideEntries = resolveJsonSchemaValidationRowSideEntries(
        rowKey,
        rowValues,
        validationRowDiff,
        validationRowValueDiffs,
        layoutSide,
        rowKey === JsonSchemaValidationRowKeys.VALUE_RANGE && propertyNodeWithDiffs
          ? {
            nodeValue: value as {
              minimum?: number
              maximum?: number
              exclusiveMinimum?: number | boolean
              exclusiveMaximum?: number | boolean
            },
            crawlDiffs: takeJsonSchemaValueRangeCrawlDiffs(propertyNodeWithDiffs) ?? {},
          }
          : undefined,
      )
      if (sideEntries.length === 0) {
        return <></>
      }

      return (
        <JsonSchemaValidationChips
          layoutSide={layoutSide}
          sideItems={sideEntries.map(({ text, valueDiffKey }) => ({
            text,
            diff: takeJsonSchemaListValueDiffAtKey(validationRowValueDiffs, valueDiffKey),
          }))}
        />
      )
    },
    [propertyNodeWithDiffs, value],
  )

  return (
    <>
      {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
        <MarkdownTextRow
          usage={TextRowUsage.JsonSchemaDescription}
          value={`**Deprecation reason:** ${visibility.deprecationReason}`}
        />
      )}

      {visibility.showDescription && (typedValue?.description || descriptionRowDiffProps.diff) && (
        <MarkdownTextRow
          usage={TextRowUsage.JsonSchemaDescription}
          value={typedValue?.description ?? ""}
          {...descriptionRowDiffProps}
        />
      )}

      {visibility.showEnumValuesRow && (
        <AdditionalInfoRow
          label="Allowed values"
          usage={AdditionalInfoRowUsage.JsonSchemaValidation}
          subheader={enumValuesAdditionalInfoSubheader}
          diff={enumDiff}
          colorizingDiff={enumRowColorizingDiff}
          diffsSeverities={enumDiff || enumValueDiffs || enumRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
          {...resolvePlainPropertyListLastRowFlags(
            isLastInList,
            { ...visibility, showDefaultRow: false, showExamplesRow: false },
          )}
        />
      )}

      {visibility.showDefaultRow && (
        <AdditionalInfoRow
          label="Default"
          usage={AdditionalInfoRowUsage.JsonSchemaValidation}
          subheader={defaultAdditionalInfoSubheader}
          colorizingDiff={defaultValueRowColorizingDiff}
          diffsSeverities={defaultValueDiff || defaultValueRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
        />
      )}

      {visibility.showExamplesRow && (
        <AdditionalInfoRow
          label="Examples"
          usage={AdditionalInfoRowUsage.JsonSchemaValidation}
          subheader={examplesAdditionalInfoSubheader}
          diff={examplesDiff}
          colorizingDiff={examplesRowColorizingDiff}
          diffsSeverities={examplesDiff || examplesValueDiffs || examplesRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
        />
      )}

      {visibility.showValidationsSection && validationRows.map((row) => {
        const validationRowKey = row.key as JsonSchemaValidationRowKey
        const validationRowDiff = propertyNodeWithDiffs
          ? takeJsonSchemaValidationRowDiff(propertyNodeWithDiffs, validationRowKey)
          : undefined
        const validationRowColorizingDiff = propertyNodeWithDiffs
          ? takeJsonSchemaValidationRowColorizingDiff(propertyNodeWithDiffs, validationRowKey)
          : undefined

        return (
          <AdditionalInfoRow
            key={row.key}
            label={row.label}
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={buildValidationRowSubheader(validationRowKey, row.values)}
            diff={validationRowDiff}
            colorizingDiff={validationRowColorizingDiff}
            diffsSeverities={propertyNodeWithDiffs && hasJsonSchemaValidationRowSemanticDiffs(
              propertyNodeWithDiffs,
              validationRowKey,
            ) ? nodeDiffState?.nodeDiffsSeverities : undefined}
          />
        )
      })}

      {visibility.showExtensionsRow && typedValue?.extensions && (
        <JsonSchemaExtensionsSection extensions={typedValue.extensions} />
      )}
    </>
  )
}
