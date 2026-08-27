import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyMetaData,
  HighlightVariant,
  ITreeNodeWithDiffs,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS,
  JSON_SCHEMA_VALIDATION_SOURCE_KEY_CHIP_INDEX,
  JsonSchemaValidationRowKey,
  JsonSchemaValidationRowKeys,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { filterValueRangeSemanticSourceKeys, classifyValueRangeWholeRowAction, buildValueRangeChipStringDiffs, resolveValueRangeSideInputFromNodeValue, isValueRangePartialBoundChange, VALUE_RANGE_LOWER_CHIP_DIFF_KEY, VALUE_RANGE_UPPER_CHIP_DIFF_KEY } from "@apihub/next-data-model/model/json-schema/value-range-diff-side-display"
import {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JsonSchemaListValueDiffs,
  JsonSchemaKindPropertyNodeDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isObject } from "@apihub/next-data-model/utilities"
import { NodeKey } from "@apihub/next-data-model/utility-types"
import {
  Diff,
  DiffAction,
  DiffAdd,
  DiffRemove,
  DiffReplace,
  DiffType,
  isDiffAdd,
  isDiffRemove,
  isDiffReplace,
} from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaNodeDiffsAggregatorKindAny } from "./kind-any"

export class JsonSchemaNodeDiffsAggregatorKindProperty
  extends JsonSchemaNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeValue | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeValue | null
    >,
  ): NodeDiffs<JsonSchemaTreeNodeValue | null> | undefined {
    const superNodeDiffs = super.aggregate(
      crawlValue,
      diffsMetaKeys,
      nodeKey,
      parentNode,
      containerNode,
    )

    if (!isObject(crawlValue)) {
      return superNodeDiffs
    }

    const { diffsMetaKey } = diffsMetaKeys
    const crawlDiffs = Reflect.get(crawlValue, diffsMetaKey)
    const hasCrawlDiffs = AbstractNodeDiffsAggregator.isDiffsRecord(crawlDiffs)
    const enumDiff = this.resolveWholeListFieldDiff(crawlValue, "enum", diffsMetaKey)
    const examplesDiff = this.resolveWholeListFieldDiff(crawlValue, "examples", diffsMetaKey)
    const enumValueDiffs = this.resolveListFieldItemDiffs(crawlValue, "enum", diffsMetaKey)
    const examplesValueDiffs = this.resolveListFieldItemDiffs(crawlValue, "examples", diffsMetaKey)
    const hasListDiffs = !!enumDiff || !!examplesDiff
      || Object.keys(enumValueDiffs).length > 0
      || Object.keys(examplesValueDiffs).length > 0

    if (!superNodeDiffs && !hasCrawlDiffs && !hasListDiffs) {
      const requiredMetaDiff = this.resolveRequiredMetaDiff(nodeKey, parentNode, diffsMetaKey)
      if (!requiredMetaDiff) {
        return undefined
      }
      const nodeDiffs: JsonSchemaKindPropertyNodeDiffs = { required: requiredMetaDiff }
      this.aggregatePropertyTitleRowDiff(nodeDiffs)
      return nodeDiffs
    }

    const nodeDiffs: JsonSchemaKindPropertyNodeDiffs = { ...(superNodeDiffs ?? {}) }

    if (hasCrawlDiffs) {
      const defaultDiff = crawlDiffs.default
      if (AbstractNodeDiffsAggregator.isDiff(defaultDiff)) {
        nodeDiffs.default = this.buildDefaultValueDiffMetadata(defaultDiff)
      }

      this.aggregateValidationRowDiffs(crawlValue, crawlDiffs, nodeDiffs)
    }

    if (enumDiff) {
      nodeDiffs.enumDiff = enumDiff
    }
    if (Object.keys(enumValueDiffs).length > 0) {
      nodeDiffs.enumValueDiffs = enumValueDiffs
    }
    if (examplesDiff) {
      nodeDiffs.examplesDiff = examplesDiff
    }
    if (Object.keys(examplesValueDiffs).length > 0) {
      nodeDiffs.examplesValueDiffs = examplesValueDiffs
    }

    this.aggregateEnumRowColorizingDiff(crawlValue, nodeDiffs)
    this.aggregateExamplesRowColorizingDiff(crawlValue, nodeDiffs)
    this.aggregateDefaultRowColorizingDiff(crawlValue, nodeDiffs)

    if (!this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
      const requiredMetaDiff = this.resolveRequiredMetaDiff(nodeKey, parentNode, diffsMetaKey)
      if (requiredMetaDiff) {
        nodeDiffs.required = requiredMetaDiff
      }
    } else {
      delete nodeDiffs.required
    }

    this.stripMetaFlagDiffsWhenWholeNode(nodeDiffs)
    this.aggregatePropertyTitleRowDiff(nodeDiffs)

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined
  }

  protected aggregatePropertyTitleRowDiff(
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = nodeLevelDiff
      return
    }

    for (const flagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
      const flagDiff = nodeDiffs[flagKey]
      if (flagDiff) {
        nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(flagDiff)
        return
      }
    }

    const requiredDiff = nodeDiffs.required
    if (requiredDiff) {
      nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(requiredDiff)
      return
    }

    this.aggregateTypeLabelTitleRowDiff(nodeDiffs)
  }

  protected override stripMetaFlagDiffsWhenWholeNode(
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    super.stripMetaFlagDiffsWhenWholeNode(nodeDiffs)
    if (this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
      delete nodeDiffs.required
    }
  }

  private resolveRequiredMetaDiff(
    nodeKey: NodeKey,
    parentNode: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeValue | null
    > | undefined,
    diffsMetaKey: symbol,
  ): ChangedPropertyMetaData | undefined {
    if (!parentNode || typeof nodeKey !== "string" || !nodeKey) {
      return undefined
    }

    const parentValue = parentNode.value()
    const parentCrawlValue = parentNode.meta()?._fragment
    if (!isObject(parentCrawlValue) && !isObject(parentValue)) {
      return undefined
    }

    const propertyKey = String(nodeKey)
    const parentCrawlDiffs = isObject(parentCrawlValue)
      ? Reflect.get(parentCrawlValue, diffsMetaKey)
      : undefined
    const crawlRequiredArray = isObject(parentCrawlValue)
      ? Reflect.get(parentCrawlValue, "required")
      : undefined
    const valueRequiredArray = isObject(parentValue) && "required" in parentValue
      ? parentValue.required
      : undefined
    const requiredArray = Array.isArray(crawlRequiredArray)
      ? crawlRequiredArray
      : Array.isArray(valueRequiredArray)
        ? valueRequiredArray
        : undefined

    if (AbstractNodeDiffsAggregator.isDiffsRecord(parentCrawlDiffs)) {
      const requiredFieldDiff = parentCrawlDiffs.required
      if (AbstractNodeDiffsAggregator.isDiff(requiredFieldDiff)) {
        const wholeArrayDiff = this.resolveRequiredMetaDiffFromWholeArrayDiff(
          requiredFieldDiff,
          propertyKey,
        )
        if (wholeArrayDiff) {
          return wholeArrayDiff
        }
      }
      if (AbstractNodeDiffsAggregator.isDiffsRecord(requiredFieldDiff)) {
        const indexedDiff = this.resolveRequiredMetaDiffFromIndexedDiffsRecord(
          requiredFieldDiff,
          propertyKey,
          requiredArray,
        )
        if (indexedDiff) {
          return indexedDiff
        }
      }
    }

    if (Array.isArray(requiredArray)) {
      const arrayAttachedDiff = this.resolveRequiredMetaDiffFromArrayAttachedDiffs(
        requiredArray,
        diffsMetaKey,
        propertyKey,
      )
      if (arrayAttachedDiff) {
        return arrayAttachedDiff
      }
    }

    return undefined
  }

  private resolveRequiredMetaDiffFromWholeArrayDiff(
    wholeRequiredDiff: Diff<DiffType>,
    propertyKey: string,
  ): ChangedPropertyMetaData | undefined {
    if (isDiffAdd(wholeRequiredDiff) && Array.isArray(wholeRequiredDiff.afterValue)
      && wholeRequiredDiff.afterValue.includes(propertyKey)) {
      return this.buildChangedPropertyMetaDataFromDiff(wholeRequiredDiff)
    }
    if (isDiffRemove(wholeRequiredDiff) && Array.isArray(wholeRequiredDiff.beforeValue)
      && wholeRequiredDiff.beforeValue.includes(propertyKey)) {
      return this.buildChangedPropertyMetaDataFromDiff(wholeRequiredDiff)
    }
    if (isDiffReplace(wholeRequiredDiff)) {
      const beforeRequired = Array.isArray(wholeRequiredDiff.beforeValue)
        ? wholeRequiredDiff.beforeValue
        : []
      const afterRequired = Array.isArray(wholeRequiredDiff.afterValue)
        ? wholeRequiredDiff.afterValue
        : []
      if (beforeRequired.includes(propertyKey) !== afterRequired.includes(propertyKey)) {
        return this.buildChangedPropertyMetaDataFromDiff(wholeRequiredDiff)
      }
    }
    return undefined
  }

  private resolveRequiredMetaDiffFromIndexedDiffsRecord(
    requiredIndexedDiffs: Partial<Record<string, Diff<DiffType>>>,
    propertyKey: string,
    requiredArray: unknown[] | undefined,
  ): ChangedPropertyMetaData | undefined {
    if (Array.isArray(requiredArray)) {
      const requiredIndex = requiredArray.indexOf(propertyKey)
      if (requiredIndex >= 0) {
        const indexDiff = requiredIndexedDiffs[String(requiredIndex)]
        if (AbstractNodeDiffsAggregator.isDiff(indexDiff)) {
          return this.buildChangedPropertyMetaDataFromDiff(indexDiff)
        }
      }
    }
    return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(requiredIndexedDiffs, propertyKey)
  }

  private resolveRequiredMetaDiffFromArrayAttachedDiffs(
    requiredArray: unknown[],
    diffsMetaKey: symbol,
    propertyKey: string,
  ): ChangedPropertyMetaData | undefined {
    const requiredArrayDiffs = Reflect.get(requiredArray, diffsMetaKey)
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(requiredArrayDiffs)) {
      return undefined
    }

    const requiredIndex = requiredArray.indexOf(propertyKey)
    if (requiredIndex >= 0) {
      const indexDiff = requiredArrayDiffs[String(requiredIndex)]
      if (AbstractNodeDiffsAggregator.isDiff(indexDiff)) {
        return this.buildChangedPropertyMetaDataFromDiff(indexDiff)
      }
    }

    return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(requiredArrayDiffs, propertyKey)
  }

  private resolveRequiredMetaDiffFromPropertyKeyDiffs(
    diffsRecord: Partial<Record<string, Diff<DiffType>>>,
    propertyKey: string,
  ): ChangedPropertyMetaData | undefined {
    for (const diff of Object.values(diffsRecord)) {
      if (!AbstractNodeDiffsAggregator.isDiff(diff)) {
        continue
      }
      if (isDiffAdd(diff) && diff.afterValue === propertyKey) {
        return this.buildChangedPropertyMetaDataFromDiff(diff)
      }
      if (isDiffRemove(diff) && diff.beforeValue === propertyKey) {
        return this.buildChangedPropertyMetaDataFromDiff(diff)
      }
    }
    return undefined
  }

  private buildDefaultValueDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }

    return this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  private resolveWholeListFieldDiff(
    crawlValue: object,
    fieldKey: "enum" | "examples",
    diffsMetaKey: symbol,
  ): ChangedPropertyMetaData | undefined {
    const crawlDiffs = Reflect.get(crawlValue, diffsMetaKey)
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(crawlDiffs)) {
      return undefined
    }

    const fieldDiff = crawlDiffs[fieldKey]
    if (!AbstractNodeDiffsAggregator.isDiff(fieldDiff)) {
      return undefined
    }

    if (isDiffAdd(fieldDiff) && Array.isArray(fieldDiff.afterValue)) {
      return this.buildChangedPropertyMetaDataFromDiff(fieldDiff)
    }

    if (isDiffRemove(fieldDiff) && Array.isArray(fieldDiff.beforeValue)) {
      return this.buildChangedPropertyMetaDataFromDiff(fieldDiff)
    }

    return undefined
  }

  private resolveListFieldItemDiffs(
    crawlValue: object,
    fieldKey: "enum" | "examples",
    diffsMetaKey: symbol,
  ): JsonSchemaListValueDiffs {
    const keyedDiffs: JsonSchemaListValueDiffs = {}

    const listValue = Reflect.get(crawlValue, fieldKey)
    if (!Array.isArray(listValue)) {
      return keyedDiffs
    }

    const arrayDiffs = Reflect.get(listValue, diffsMetaKey)
    if (AbstractNodeDiffsAggregator.isDiffsRecord(arrayDiffs)) {
      this.collectListItemDiffsFromDiffsRecord(arrayDiffs, keyedDiffs)
    }

    return keyedDiffs
  }

  private collectListItemDiffsFromDiffsRecord(
    diffsRecord: Partial<Record<string, Diff<DiffType>>>,
    keyedDiffs: JsonSchemaListValueDiffs,
  ): void {
    for (const [diffKey, diff] of Object.entries(diffsRecord)) {
      if (!diff || keyedDiffs[diffKey]) {
        continue
      }
      keyedDiffs[diffKey] = this.buildListValueDiffMetadata(diff)
    }
  }

  private buildListValueDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }

    return this.buildChipAddRemoveDiffMetadata(diff, {
      addAfter: { borderShadowColor: HighlightVariant.Green },
      removeBefore: { borderShadowColor: HighlightVariant.Red, isFontMuted: true },
    })
  }

  private aggregateEnumRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    this.aggregateListRowColorizingDiff(
      crawlValue,
      nodeDiffs,
      "enum",
      "enumDiff",
      "enumValueDiffs",
      "enumRowColorizingDiff",
    )
  }

  private aggregateExamplesRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    this.aggregateListRowColorizingDiff(
      crawlValue,
      nodeDiffs,
      "examples",
      "examplesDiff",
      "examplesValueDiffs",
      "examplesRowColorizingDiff",
    )
  }

  private aggregateListRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
    listFieldKey: "enum" | "examples",
    wholeFieldDiffKey: "enumDiff" | "examplesDiff",
    itemDiffsKey: "enumValueDiffs" | "examplesValueDiffs",
    colorizingDiffKey: "enumRowColorizingDiff" | "examplesRowColorizingDiff",
  ): void {
    const listValue = Reflect.get(crawlValue, listFieldKey)
    if (!Array.isArray(listValue) || listValue.length === 0) {
      return
    }

    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs[colorizingDiffKey] = nodeLevelDiff
      return
    }

    const wholeFieldDiff = nodeDiffs[wholeFieldDiffKey]
    if (wholeFieldDiff) {
      nodeDiffs[colorizingDiffKey] = wholeFieldDiff
      return
    }

    const itemDiffs = nodeDiffs[itemDiffsKey]
    if (!itemDiffs || Object.keys(itemDiffs).length === 0) {
      return
    }

    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...Object.values(itemDiffs),
    )
    if (!representativeDiff) {
      return
    }

    nodeDiffs[colorizingDiffKey] = this.asReplaceRowColorizingDiff(representativeDiff)
  }

  private aggregateDefaultRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    const defaultValue = Reflect.get(crawlValue, "default")
    const hasDefaultInMerged = defaultValue !== undefined && defaultValue !== null

    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      if (hasDefaultInMerged || nodeDiffs.default) {
        nodeDiffs.defaultRowColorizingDiff = nodeLevelDiff
      }
      return
    }

    const defaultValueDiff = nodeDiffs.default
    if (!defaultValueDiff) {
      return
    }

    const diff = defaultValueDiff.data
    if (isDiffAdd(diff) || isDiffRemove(diff)) {
      nodeDiffs.defaultRowColorizingDiff = this.buildChangedPropertyMetaDataFromDiff(diff)
      return
    }

    if (isDiffReplace(diff)) {
      nodeDiffs.defaultRowColorizingDiff = this.asReplaceRowColorizingDiff(defaultValueDiff)
    }
  }

  private aggregateValidationRowDiffs(
    crawlValue: object,
    crawlDiffs: Partial<Record<string, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
  ): void {
    for (const [rowKey, sourceKeys] of Object.entries(JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS)) {
      const activeSourceKeys = sourceKeys.filter((sourceKey) => crawlDiffs[sourceKey])
      if (activeSourceKeys.length === 0) {
        continue
      }

      const validationRowKey = rowKey as JsonSchemaValidationRowKey
      const valueRangeCrawlDiffs = validationRowKey === JsonSchemaValidationRowKeys.VALUE_RANGE
        ? {
          minimum: crawlDiffs.minimum,
          exclusiveMinimum: crawlDiffs.exclusiveMinimum,
          maximum: crawlDiffs.maximum,
          exclusiveMaximum: crawlDiffs.exclusiveMaximum,
        }
        : undefined

      if (valueRangeCrawlDiffs) {
        nodeDiffs.valueRangeCrawlDiffs = valueRangeCrawlDiffs
      }

      const semanticKeys = validationRowKey === JsonSchemaValidationRowKeys.VALUE_RANGE
        ? filterValueRangeSemanticSourceKeys(activeSourceKeys, crawlDiffs)
        : activeSourceKeys

      const rowDiffs = activeSourceKeys
        .map((sourceKey) => crawlDiffs[sourceKey])
        .filter((diff): diff is Diff<DiffType> => AbstractNodeDiffsAggregator.isDiff(diff))

      if (rowDiffs.length === 0) {
        continue
      }

      nodeDiffs.validationRowColorizingDiffs ??= {}

      const valueRangeSideInput = resolveValueRangeSideInputFromNodeValue(crawlValue)

      const valueRangeWholeRowAction = valueRangeCrawlDiffs
        ? classifyValueRangeWholeRowAction(valueRangeSideInput, valueRangeCrawlDiffs)
        : undefined

      if (
        valueRangeCrawlDiffs
        && (valueRangeWholeRowAction === DiffAction.add || valueRangeWholeRowAction === DiffAction.remove)
      ) {
        const syntheticDiff = valueRangeWholeRowAction === DiffAction.add
          ? this.mergeDiffActionFragment(rowDiffs, DiffAction.add) as DiffAdd
          : this.mergeDiffActionFragment(rowDiffs, DiffAction.remove) as DiffRemove
        const syntheticRowDiff = this.buildChangedPropertyMetaDataFromDiff(syntheticDiff)
        nodeDiffs.validationRowDiffs ??= {}
        nodeDiffs.validationRowDiffs[validationRowKey] = syntheticRowDiff
        nodeDiffs.validationRowColorizingDiffs[validationRowKey] = syntheticRowDiff
        continue
      }

      if (
        valueRangeCrawlDiffs
        && isValueRangePartialBoundChange(valueRangeSideInput, valueRangeCrawlDiffs)
      ) {
        this.mergeValueRangeLabelChipDiffs(crawlValue, valueRangeCrawlDiffs, nodeDiffs, validationRowKey)
        this.applyValueRangeFormattingRowColorizingDiff(
          activeSourceKeys,
          crawlDiffs,
          nodeDiffs,
          validationRowKey,
        )
        continue
      }

      const allAdd = rowDiffs.every(isDiffAdd)
      const allRemove = rowDiffs.every(isDiffRemove)

      if (allAdd) {
        const syntheticRowDiff = this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
          rowDiffs,
          DiffAction.add,
        ) as DiffAdd)
        nodeDiffs.validationRowDiffs ??= {}
        nodeDiffs.validationRowDiffs[validationRowKey] = syntheticRowDiff
        nodeDiffs.validationRowColorizingDiffs[validationRowKey] = syntheticRowDiff
        continue
      }

      if (allRemove) {
        const syntheticRowDiff = this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
          rowDiffs,
          DiffAction.remove,
        ) as DiffRemove)
        nodeDiffs.validationRowDiffs ??= {}
        nodeDiffs.validationRowDiffs[validationRowKey] = syntheticRowDiff
        nodeDiffs.validationRowColorizingDiffs[validationRowKey] = syntheticRowDiff
        continue
      }

      if (semanticKeys.length === 0) {
        if (valueRangeCrawlDiffs) {
          this.mergeValueRangeLabelChipDiffs(crawlValue, valueRangeCrawlDiffs, nodeDiffs, validationRowKey)
          this.applyValueRangeFormattingRowColorizingDiff(
            activeSourceKeys,
            crawlDiffs,
            nodeDiffs,
            validationRowKey,
          )
        }
        continue
      }

      const metadatas = semanticKeys
        .map((sourceKey) => crawlDiffs[sourceKey])
        .filter((diff): diff is Diff<DiffType> => AbstractNodeDiffsAggregator.isDiff(diff))
        .map((diff) => this.buildChangedPropertyMetaDataFromDiff(diff))
      const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
        ...metadatas,
      )
      if (!representativeDiff) {
        continue
      }

      const valueDiffs = this.buildValidationRowValueDiffs(
        validationRowKey,
        semanticKeys,
        crawlDiffs,
      )

      nodeDiffs.validationRowValueDiffs ??= {}
      nodeDiffs.validationRowValueDiffs[validationRowKey] = valueDiffs
      nodeDiffs.validationRowColorizingDiffs[validationRowKey] =
        this.asReplaceRowColorizingDiff(representativeDiff)

      if (valueRangeCrawlDiffs) {
        this.mergeValueRangeLabelChipDiffs(crawlValue, valueRangeCrawlDiffs, nodeDiffs, validationRowKey)
      }
    }
  }

  private mergeValueRangeLabelChipDiffs(
    crawlValue: object,
    valueRangeCrawlDiffs: NonNullable<JsonSchemaKindPropertyNodeDiffs["valueRangeCrawlDiffs"]>,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
    validationRowKey: JsonSchemaValidationRowKey,
  ): void {
    const chipStringDiffs = buildValueRangeChipStringDiffs(
      resolveValueRangeSideInputFromNodeValue(crawlValue),
      valueRangeCrawlDiffs,
    )
    const chipDiffKeys = [VALUE_RANGE_LOWER_CHIP_DIFF_KEY, VALUE_RANGE_UPPER_CHIP_DIFF_KEY] as const
    const hasChipStringDiffs = chipDiffKeys.some((key) => chipStringDiffs[key])
    if (!hasChipStringDiffs) {
      return
    }

    nodeDiffs.validationRowValueDiffs ??= {}
    const existingValueDiffs = nodeDiffs.validationRowValueDiffs[validationRowKey] ?? {}
    const mergedValueDiffs: JsonSchemaListValueDiffs = { ...existingValueDiffs }

    for (const chipDiffKey of chipDiffKeys) {
      const chipDiff = chipStringDiffs[chipDiffKey]
      if (!chipDiff || mergedValueDiffs[chipDiffKey]) {
        continue
      }
      const slot = chipDiffKey === VALUE_RANGE_LOWER_CHIP_DIFF_KEY ? "lower" : "upper"
      const chipDiffWithPaths = this.attachValueRangeChipDiffPaths(chipDiff, slot, valueRangeCrawlDiffs)
      mergedValueDiffs[chipDiffKey] = this.buildValueRangeLabelChipDiffMetadata(chipDiffWithPaths)
    }

    nodeDiffs.validationRowValueDiffs[validationRowKey] = mergedValueDiffs
  }

  private applyValueRangeFormattingRowColorizingDiff(
    activeSourceKeys: readonly string[],
    crawlDiffs: Partial<Record<string, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaKindPropertyNodeDiffs,
    validationRowKey: JsonSchemaValidationRowKey,
  ): void {
    const chipValueDiffs = nodeDiffs.validationRowValueDiffs?.[validationRowKey]
    if (!chipValueDiffs || !Object.values(chipValueDiffs).some((diff) => diff !== undefined)) {
      return
    }

    const crawlDiffList = activeSourceKeys
      .map((sourceKey) => crawlDiffs[sourceKey])
      .filter((diff): diff is Diff<DiffType> => AbstractNodeDiffsAggregator.isDiff(diff))
    if (crawlDiffList.length === 0) {
      return
    }

    const metadatas = crawlDiffList.map((diff) => this.buildChangedPropertyMetaDataFromDiff(diff))
    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...metadatas,
    )
    if (!representativeDiff) {
      return
    }

    nodeDiffs.validationRowColorizingDiffs![validationRowKey] =
      this.asReplaceRowColorizingDiff(representativeDiff)
  }

  private attachValueRangeChipDiffPaths(
    chipDiff: DiffAdd | DiffRemove | DiffReplace,
    slot: "lower" | "upper",
    valueRangeCrawlDiffs: NonNullable<JsonSchemaKindPropertyNodeDiffs["valueRangeCrawlDiffs"]>,
  ): DiffAdd | DiffRemove | DiffReplace {
    const sourceDiffs = slot === "lower"
      ? [valueRangeCrawlDiffs.minimum, valueRangeCrawlDiffs.exclusiveMinimum]
      : [valueRangeCrawlDiffs.maximum, valueRangeCrawlDiffs.exclusiveMaximum]

    const beforeDeclarationPaths: DiffRemove["beforeDeclarationPaths"] = []
    const afterDeclarationPaths: DiffAdd["afterDeclarationPaths"] = []

    for (const sourceDiff of sourceDiffs) {
      if (!sourceDiff) {
        continue
      }
      if ("beforeDeclarationPaths" in sourceDiff && sourceDiff.beforeDeclarationPaths) {
        beforeDeclarationPaths.push(...sourceDiff.beforeDeclarationPaths)
      }
      if ("afterDeclarationPaths" in sourceDiff && sourceDiff.afterDeclarationPaths) {
        afterDeclarationPaths.push(...sourceDiff.afterDeclarationPaths)
      }
    }

    return {
      ...chipDiff,
      ...(beforeDeclarationPaths.length > 0 ? { beforeDeclarationPaths } : {}),
      ...(afterDeclarationPaths.length > 0 ? { afterDeclarationPaths } : {}),
    }
  }

  private buildValueRangeLabelChipDiffMetadata(
    diff: DiffAdd | DiffRemove | DiffReplace,
  ): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }
    return this.buildChipAddRemoveDiffMetadata(diff, {
      addAfter: { borderShadowColor: HighlightVariant.Green },
      removeBefore: { borderShadowColor: HighlightVariant.Red, isFontMuted: true },
    })
  }

  private buildValidationRowValueDiffs(
    rowKey: JsonSchemaValidationRowKey,
    activeSourceKeys: readonly string[],
    crawlDiffs: Partial<Record<string, Diff<DiffType>>>,
  ): JsonSchemaListValueDiffs {
    const chipIndexBySourceKey = JSON_SCHEMA_VALIDATION_SOURCE_KEY_CHIP_INDEX[rowKey]
    const itemDiffs: JsonSchemaListValueDiffs = {}

    for (const sourceKey of activeSourceKeys) {
      const diff = crawlDiffs[sourceKey]
      if (!AbstractNodeDiffsAggregator.isDiff(diff)) {
        continue
      }
      const chipIndex = chipIndexBySourceKey[sourceKey]
      if (chipIndex === undefined) {
        continue
      }
      const metadata = this.buildListValueDiffMetadata(diff)
      itemDiffs[sourceKey] = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
        itemDiffs[sourceKey],
        metadata,
      ) ?? metadata
    }

    return itemDiffs
  }

  private mergeDiffActionFragment(
    rowDiffs: Diff<DiffType>[],
    action: typeof DiffAction.add | typeof DiffAction.remove,
  ): DiffAdd | DiffRemove {
    const representative = rowDiffs[0]
    const beforeDeclarationPaths = rowDiffs.flatMap((diff) => (
      isDiffRemove(diff) || isDiffReplace(diff) ? diff.beforeDeclarationPaths : []
    ))
    const afterDeclarationPaths = rowDiffs.flatMap((diff) => (
      isDiffAdd(diff) || isDiffReplace(diff) ? diff.afterDeclarationPaths : []
    ))

    if (action === DiffAction.add) {
      return {
        type: representative.type,
        scope: representative.scope,
        description: representative.description,
        action: DiffAction.add,
        afterValue: null,
        afterDeclarationPaths,
      }
    }

    return {
      type: representative.type,
      scope: representative.scope,
      description: representative.description,
      action: DiffAction.remove,
      beforeValue: null,
      beforeDeclarationPaths,
    }
  }
}
