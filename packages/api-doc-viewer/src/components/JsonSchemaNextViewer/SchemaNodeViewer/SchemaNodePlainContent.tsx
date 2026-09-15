import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { DETAILED_DISPLAY_MODE } from "@apihub/types/DisplayMode"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import {
  JsonSchemaTreeNodeStoredValue,
  JsonSchemaTreeNodeValue,
  JsonSchemaTreeNodeValueTypeObject,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
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
  resolveJsonSchemaAllowedAdditionalPropertyNamesSideEntries,
  resolveJsonSchemaDefaultSideEntries,
  resolveJsonSchemaEnumSideEntries,
  resolveJsonSchemaExamplesSideEntries,
  resolveJsonSchemaValidationRowSideEntries,
  takeJsonSchemaAllowedAdditionalPropertyNamesDiff,
  takeJsonSchemaAllowedAdditionalPropertyNamesRowColorizingDiff,
  takeJsonSchemaAllowedAdditionalPropertyNamesValueDiffs,
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
import {
  JSON_SCHEMA_VALIDATION_ROW_SEVERITY_PLACEMENTS,
  JsonSchemaValidationRowKey,
  JsonSchemaValidationRowKeys,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { FC, useCallback, useMemo } from "react"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRowUsage } from "@apihub/components/shared-components/TextRow/types"
import { resolveValidationRows } from "../utils/validation-rows"
import { JsonSchemaValidationRowKey as ViewerValidationRowKey } from "../utils/validation-row-keys"
import { sortValidationRowsByType } from "../utils/sort-validation-rows-by-type"
import { isJsonSchemaAdditionalPropertiesNode } from "../utils/node-type-checkers"
import {
  ALLOWED_ADDITIONAL_PROPERTY_NAMES_LABEL,
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
  // Validation-constraint rows (`Value range`, `Items count`, ...) are aggregated for every
  // node kind - including oneOf/anyOf/allOf combiner variants - not just property/root.
  const validationDiffsNode = isJsonSchemaTreeNodeWithDiffs(node) ? node : undefined

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

  // Default/enum/examples are not PROPERTY/ROOT-specific either - any schema-bearing node
  // (additionalProperties, items, combiner variants, ...) can carry its own, and the data layer
  // now aggregates them for every kind (see JsonSchemaNodeDiffsAggregatorFactory). Gate on the
  // same generic `validationDiffsNode` the validation-constraint rows already use below, not the
  // PROPERTY/ROOT-only `propertyNodeWithDiffs` (kept only for visibility resolution above).
  const enumDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaEnumDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const enumValueDiffs = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaEnumValueDiffs(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const enumRowColorizingDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaEnumRowColorizingDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const examplesDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaExamplesDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const examplesValueDiffs = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaExamplesValueDiffs(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const examplesRowColorizingDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaExamplesRowColorizingDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const defaultValueDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaDefaultDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const defaultValueRowColorizingDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaDefaultRowColorizingDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
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
    if (!validationDiffsNode) {
      return baseRows
    }

    const presentKeys = new Set(baseRows.map((row) => row.key))
    const diffOnlyRows = (Object.keys(VALIDATION_ROW_LABELS) as ViewerValidationRowKey[])
      .filter((rowKey) => !presentKeys.has(rowKey))
      .filter((rowKey) => hasJsonSchemaValidationRowSemanticDiffs(
        validationDiffsNode,
        rowKey as JsonSchemaValidationRowKey,
      ))
      .map((rowKey) => ({
        key: rowKey,
        label: VALIDATION_ROW_LABELS[rowKey],
        values: [] as string[],
      }))

    return sortValidationRowsByType([...baseRows, ...diffOnlyRows])
  }, [validationDiffsNode, typedValue])

  // `propertyNames` constrains the containing object's property names, so legacy sources it from
  // the *parent* object schema and displays it only on the `additionalProperties` child node - not
  // as a validation of this node's own value. Diffs mirror `required`: parent-derived, taken from
  // the aggregated node.diffs of *this* (additionalProperties) node, not the parent's own diffs.
  const allowedAdditionalPropertyNames = useMemo(() => {
    if (!isJsonSchemaAdditionalPropertiesNode(node)) {
      return undefined
    }
    // ITreeNode.parent is typed as the generic base ITreeNode, losing the JsonSchemaTreeNode
    // value/meta type params - narrow it back, mirroring how legacy reads `node.parent.value()`.
    const parentNode = node.parent as JsonSchemaTreeNode | null
    const parentValue = asJsonSchemaTypedNodeValue(parentNode?.value() ?? null)
    return (parentValue as JsonSchemaTreeNodeValueTypeObject | undefined)?.propertyNames?.enum
  }, [node])

  const allowedAdditionalPropertyNamesDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaAllowedAdditionalPropertyNamesDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const allowedAdditionalPropertyNamesValueDiffs = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaAllowedAdditionalPropertyNamesValueDiffs(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )
  const allowedAdditionalPropertyNamesRowColorizingDiff = useMemo(
    () => (validationDiffsNode ? takeJsonSchemaAllowedAdditionalPropertyNamesRowColorizingDiff(validationDiffsNode) : undefined),
    [validationDiffsNode],
  )

  const showAllowedAdditionalPropertyNamesRow = displayMode === DETAILED_DISPLAY_MODE
    && Boolean(allowedAdditionalPropertyNames?.length)

  const allowedAdditionalPropertyNamesSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideEntries = resolveJsonSchemaAllowedAdditionalPropertyNamesSideEntries(
        allowedAdditionalPropertyNames ?? [],
        allowedAdditionalPropertyNamesDiff,
        allowedAdditionalPropertyNamesValueDiffs,
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
            diff: takeJsonSchemaListValueDiffAtKey(allowedAdditionalPropertyNamesValueDiffs, valueDiffKey),
          }))}
        />
      )
    },
    [allowedAdditionalPropertyNames, allowedAdditionalPropertyNamesDiff, allowedAdditionalPropertyNamesValueDiffs],
  )

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
      const sideEntries = resolveJsonSchemaDefaultSideEntries(mergedDefault, defaultValueDiff, layoutSide)
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
    [defaultValueDiff, typedValue?.default],
  )

  const buildValidationRowSubheader = useCallback(
    (rowKey: JsonSchemaValidationRowKey, rowValues: string[]) => (
      layoutSide: LayoutSide,
    ) => {
      const validationRowDiff = validationDiffsNode
        ? takeJsonSchemaValidationRowDiff(validationDiffsNode, rowKey)
        : undefined
      const validationRowValueDiffs = validationDiffsNode
        ? takeJsonSchemaValidationRowValueDiffs(validationDiffsNode, rowKey)
        : undefined
      const sideEntries = resolveJsonSchemaValidationRowSideEntries(
        rowKey,
        rowValues,
        validationRowDiff,
        validationRowValueDiffs,
        layoutSide,
        rowKey === JsonSchemaValidationRowKeys.VALUE_RANGE && validationDiffsNode
          ? {
            nodeValue: value as {
              minimum?: number
              maximum?: number
              exclusiveMinimum?: number | boolean
              exclusiveMaximum?: number | boolean
            },
            crawlDiffs: takeJsonSchemaValueRangeCrawlDiffs(validationDiffsNode) ?? {},
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
    [validationDiffsNode, value],
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

      {visibility.showDefaultRow && (
        <AdditionalInfoRow
          label="Default"
          usage={AdditionalInfoRowUsage.JsonSchemaValidation}
          subheader={defaultAdditionalInfoSubheader}
          colorizingDiff={defaultValueRowColorizingDiff}
          diffsSeverities={defaultValueDiff || defaultValueRowColorizingDiff ? nodeDiffState?.nodeDiffsSeverities : undefined}
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.DefaultRow}
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
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.ExamplesRow}
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
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.EnumRow}
          {...resolvePlainPropertyListLastRowFlags(
            isLastInList,
            { ...visibility, showDefaultRow: false, showExamplesRow: false },
          )}
        />
      )}

      {showAllowedAdditionalPropertyNamesRow && (
        <AdditionalInfoRow
          label={ALLOWED_ADDITIONAL_PROPERTY_NAMES_LABEL}
          usage={AdditionalInfoRowUsage.JsonSchemaValidation}
          subheader={allowedAdditionalPropertyNamesSubheader}
          diff={allowedAdditionalPropertyNamesDiff}
          colorizingDiff={allowedAdditionalPropertyNamesRowColorizingDiff}
          diffsSeverities={
            allowedAdditionalPropertyNamesDiff
              || allowedAdditionalPropertyNamesValueDiffs
              || allowedAdditionalPropertyNamesRowColorizingDiff
              ? nodeDiffState?.nodeDiffsSeverities
              : undefined
          }
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.AllowedAdditionalPropertyNamesRow}
        />
      )}

      {visibility.showValidationsSection && validationRows.map((row) => {
        const validationRowKey = row.key as JsonSchemaValidationRowKey
        const validationRowDiff = validationDiffsNode
          ? takeJsonSchemaValidationRowDiff(validationDiffsNode, validationRowKey)
          : undefined
        const validationRowColorizingDiff = validationDiffsNode
          ? takeJsonSchemaValidationRowColorizingDiff(validationDiffsNode, validationRowKey)
          : undefined

        return (
          <AdditionalInfoRow
            key={row.key}
            label={row.label}
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={buildValidationRowSubheader(validationRowKey, row.values)}
            diff={validationRowDiff}
            colorizingDiff={validationRowColorizingDiff}
            diffsSeverities={validationDiffsNode && hasJsonSchemaValidationRowSemanticDiffs(
              validationDiffsNode,
              validationRowKey,
            ) ? nodeDiffState?.nodeDiffsSeverities : undefined}
            diffsSeverityPlacement={JSON_SCHEMA_VALIDATION_ROW_SEVERITY_PLACEMENTS[validationRowKey]}
          />
        )
      })}

      {visibility.showExtensionsRow && typedValue?.extensions && (
        <JsonSchemaExtensionsSection extensions={typedValue.extensions} />
      )}
    </>
  )
}
