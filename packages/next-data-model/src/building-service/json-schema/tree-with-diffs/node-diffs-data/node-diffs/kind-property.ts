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
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JsonSchemaKindPropertyNodeDiffs,
  JsonSchemaListValueDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeStoredValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isObject } from "@apihub/next-data-model/utilities"
import { NodeKey } from "@apihub/next-data-model/utility-types"
import {
  Diff,
  DiffType,
  isDiffAdd,
  isDiffRemove,
  isDiffReplace,
} from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaNodeDiffsAggregatorKindAny } from "./kind-any"

export class JsonSchemaNodeDiffsAggregatorKindProperty
  extends JsonSchemaNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: JsonSchemaTreeNodeStoredValue | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeStoredValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeStoredValue | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeStoredValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeStoredValue | null
    >,
  ): NodeDiffs<JsonSchemaTreeNodeStoredValue | null> | undefined {
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
      JsonSchemaTreeNodeStoredValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeStoredValue | null
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
      nodeDiffs[colorizingDiffKey] = this.buildWholeNodeInheritedRowColorizingDiff(nodeLevelDiff)
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
        nodeDiffs.defaultRowColorizingDiff = this.buildWholeNodeInheritedRowColorizingDiff(nodeLevelDiff)
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

}
