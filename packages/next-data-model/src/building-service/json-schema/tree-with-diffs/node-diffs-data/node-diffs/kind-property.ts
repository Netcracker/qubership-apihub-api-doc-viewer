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
  JsonSchemaValidationRowKey,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import {
  JsonSchemaListValueDiffs,
  JsonSchemaPropertyRowDiffs,
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
  DiffType,
  isDiffAdd,
  isDiffRemove,
  isDiffReplace,
} from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaNodeDiffsAggregatorKindAny } from "./kind-any"

function formatListDisplayValue(value: unknown): string {
  if (typeof value === "string") {
    return value
  }
  return JSON.stringify(value)
}

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
    const enumValueDiffs = this.resolveListFieldValueDiffs(crawlValue, "enum", diffsMetaKey)
    const examplesValueDiffs = this.resolveListFieldValueDiffs(crawlValue, "examples", diffsMetaKey)
    const hasListDiffs = Object.keys(enumValueDiffs).length > 0 || Object.keys(examplesValueDiffs).length > 0

    if (!superNodeDiffs && !hasCrawlDiffs && !hasListDiffs) {
      return undefined
    }

    const nodeDiffs: JsonSchemaPropertyRowDiffs = { ...(superNodeDiffs ?? {}) }

    if (hasCrawlDiffs) {
      const defaultDiff = crawlDiffs.default
      if (AbstractNodeDiffsAggregator.isDiff(defaultDiff)) {
        nodeDiffs.default = this.buildDefaultValueDiffMetadata(defaultDiff)
      }

      this.aggregateValidationRowDiffs(crawlDiffs, nodeDiffs)
    }

    if (Object.keys(enumValueDiffs).length > 0) {
      nodeDiffs.enumValueDiffs = enumValueDiffs
    }
    if (Object.keys(examplesValueDiffs).length > 0) {
      nodeDiffs.examplesValueDiffs = examplesValueDiffs
    }

    this.aggregateEnumRowColorizingDiff(crawlValue, nodeDiffs)
    this.aggregateExamplesRowColorizingDiff(crawlValue, nodeDiffs)
    this.aggregateDefaultRowColorizingDiff(crawlValue, nodeDiffs)

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined
  }

  private buildDefaultValueDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }

    return this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  private resolveListFieldValueDiffs(
    crawlValue: object,
    fieldKey: "enum" | "examples",
    diffsMetaKey: symbol,
  ): JsonSchemaListValueDiffs {
    const listValue = Reflect.get(crawlValue, fieldKey)
    if (!Array.isArray(listValue)) {
      return {}
    }

    const arrayDiffs = Reflect.get(listValue, diffsMetaKey)
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(arrayDiffs)) {
      return {}
    }

    const keyedDiffs: JsonSchemaListValueDiffs = {}
    for (const diff of Object.values(arrayDiffs)) {
      if (!diff) {
        continue
      }

      if (isDiffAdd(diff) && diff.afterValue !== undefined) {
        keyedDiffs[formatListDisplayValue(diff.afterValue)] = this.buildListValueDiffMetadata(diff)
        continue
      }

      if (isDiffRemove(diff) && diff.beforeValue !== undefined) {
        keyedDiffs[formatListDisplayValue(diff.beforeValue)] = this.buildListValueDiffMetadata(diff)
        continue
      }

      if (isDiffReplace(diff)) {
        const beforeKey = diff.beforeValue !== undefined
          ? formatListDisplayValue(diff.beforeValue)
          : undefined
        const afterKey = diff.afterValue !== undefined
          ? formatListDisplayValue(diff.afterValue)
          : undefined
        if (beforeKey) {
          keyedDiffs[beforeKey] = this.buildListValueDiffMetadata(diff)
        }
        if (afterKey && afterKey !== beforeKey) {
          keyedDiffs[afterKey] = this.buildListValueDiffMetadata(diff)
        }
      }
    }

    return keyedDiffs
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
    nodeDiffs: JsonSchemaPropertyRowDiffs,
  ): void {
    this.aggregateListRowColorizingDiff(
      crawlValue,
      nodeDiffs,
      "enum",
      "enumValueDiffs",
      "enumRowColorizingDiff",
    )
  }

  private aggregateExamplesRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaPropertyRowDiffs,
  ): void {
    this.aggregateListRowColorizingDiff(
      crawlValue,
      nodeDiffs,
      "examples",
      "examplesValueDiffs",
      "examplesRowColorizingDiff",
    )
  }

  private aggregateListRowColorizingDiff(
    crawlValue: object,
    nodeDiffs: JsonSchemaPropertyRowDiffs,
    listFieldKey: "enum" | "examples",
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
    nodeDiffs: JsonSchemaPropertyRowDiffs,
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
    crawlDiffs: Partial<Record<string, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaPropertyRowDiffs,
  ): void {
    for (const [rowKey, sourceKeys] of Object.entries(JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS)) {
      const activeSourceKeys = sourceKeys.filter((sourceKey) => crawlDiffs[sourceKey])
      const rowDiffs = activeSourceKeys
        .map((sourceKey) => crawlDiffs[sourceKey])
        .filter((diff): diff is Diff<DiffType> => AbstractNodeDiffsAggregator.isDiff(diff))

      if (rowDiffs.length === 0) {
        continue
      }

      const syntheticRowDiff = this.buildSyntheticValidationRowDiff(rowDiffs)
      if (!syntheticRowDiff) {
        continue
      }

      nodeDiffs.validationRowDiffs ??= {}
      nodeDiffs.validationRowColorizingDiffs ??= {}
      nodeDiffs.validationRowDiffs[rowKey as JsonSchemaValidationRowKey] = syntheticRowDiff
      nodeDiffs.validationRowColorizingDiffs[rowKey as JsonSchemaValidationRowKey] =
        this.buildValidationRowColorizingDiff(syntheticRowDiff)
    }
  }

  private buildSyntheticValidationRowDiff(
    rowDiffs: Diff<DiffType>[],
  ): ChangedPropertyMetaData | undefined {
    if (rowDiffs.length === 0) {
      return undefined
    }

    const metadatas = rowDiffs.map((diff) => this.buildChangedPropertyMetaDataFromDiff(diff))
    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...metadatas,
    )
    if (!representativeDiff) {
      return undefined
    }

    const allAdd = rowDiffs.every(isDiffAdd)
    const allRemove = rowDiffs.every(isDiffRemove)

    if (allAdd) {
      return this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
        rowDiffs,
        DiffAction.add,
      ) as DiffAdd)
    }

    if (allRemove) {
      return this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
        rowDiffs,
        DiffAction.remove,
      ) as DiffRemove)
    }

    return this.asReplaceRowColorizingDiff(representativeDiff)
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

  private buildValidationRowColorizingDiff(
    rowDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = rowDiff
    if (isDiffAdd(data) || isDiffRemove(data)) {
      return rowDiff
    }
    return this.asReplaceRowColorizingDiff(rowDiff)
  }
}
