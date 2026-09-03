import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyKey,
  ChangedPropertyMetaData,
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  DiffStyles,
  HighlightVariant,
  ITreeNodeWithDiffs,
  NODE_LEVEL_DIFF_KEY,
  NodeDescendantDiffs,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS,
  JsonSchemaKindAnyNodeDiffs,
  JsonSchemaListValueDiffs,
  JsonSchemaMetaFlagDiffKey,
  JsonSchemaSharedRowDiffs,
  JsonSchemaTypeLabelFieldDiffKey,
  JsonSchemaTypeLabelFieldDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import {
  JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS,
  JSON_SCHEMA_VALIDATION_SOURCE_KEY_CHIP_INDEX,
  JsonSchemaValidationRowKey,
  JsonSchemaValidationRowKeys,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeStoredValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import {
  buildValueRangeChipStringDiffs,
  classifyValueRangeWholeRowAction,
  filterValueRangeSemanticSourceKeys,
  isValueRangePartialBoundChange,
  resolveValueRangeSideInputFromNodeValue,
  VALUE_RANGE_LOWER_CHIP_DIFF_KEY,
  VALUE_RANGE_UPPER_CHIP_DIFF_KEY,
} from "@apihub/next-data-model/model/json-schema/value-range-diff-side-display"
import { formatJsonSchemaValidationRowChipDisplay } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-chip-display"
import { isJsonSchemaPrimitiveValueType } from "@apihub/next-data-model/shared/json-schema/guards/schema-value"
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
  isDiffRename,
  isDiffReplace,
} from "@netcracker/qubership-apihub-api-diff"

export class JsonSchemaNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    JsonSchemaTreeNodeStoredValue | null,
    JsonSchemaTreeNodeKind,
    JsonSchemaTreeNodeMeta,
    JsonSchemaTreeNodeStoredValue | null
  > {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
    isHeaderVisible: true,
  }

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
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue) && !Array.isArray(crawlValue)) {
      return undefined
    }

    const diffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    const nodeDiffs: JsonSchemaKindAnyNodeDiffs = {}

    if (containerNode) {
      const containerNodeDiff = containerNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (containerNodeDiff && (isDiffAdd(containerNodeDiff.data) || isDiffRemove(containerNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...containerNodeDiff, inherited: true }
        this.aggregateWholeNodeInheritedValidationRowDiffs(crawlValue, nodeDiffs)
        return nodeDiffs
      }
      const maybeNodeDiffs = containerNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        this.aggregateWholeNodeInheritedValidationRowDiffs(crawlValue, nodeDiffs)
        return nodeDiffs
      }
    } else if (parentNode) {
      const parentNodeDiff = parentNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (parentNodeDiff && (isDiffAdd(parentNodeDiff.data) || isDiffRemove(parentNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...parentNodeDiff, inherited: true }
        this.aggregateWholeNodeInheritedValidationRowDiffs(crawlValue, nodeDiffs)
        return nodeDiffs
      }
      const maybeNodeDiffs = parentNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        this.aggregateWholeNodeInheritedValidationRowDiffs(crawlValue, nodeDiffs)
        return nodeDiffs
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

    const wholeNodeDiff = diffs[NODE_LEVEL_DIFF_KEY]
    wholeNodeDiff && this.aggregateTextDiff(wholeNodeDiff, NODE_LEVEL_DIFF_KEY, nodeDiffs)

    const titleDiff = diffs["title"]
    const formatDiff = diffs["format"]
    const typeDiff = diffs["type"]

    this.aggregateTypeLabelFieldDiffs(
      { type: typeDiff, format: formatDiff, title: titleDiff },
      nodeDiffs,
    )

    const descriptionDiff = diffs["description"]
    descriptionDiff && this.aggregateTextDiff(descriptionDiff, "description", nodeDiffs)

    const suppressMetaFlagDiffs = this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)
    if (!suppressMetaFlagDiffs) {
      for (const metaFlagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
        const metaFlagDiff = diffs[metaFlagKey]
        if (AbstractNodeDiffsAggregator.isDiff(metaFlagDiff)) {
          this.aggregateMetaFlagDiff(metaFlagDiff, metaFlagKey, nodeDiffs)
        }
      }
    }

    if (isObject(crawlValue)) {
      this.aggregateValidationRowDiffs(crawlValue, diffs, nodeDiffs)
    }

    this.stripMetaFlagDiffsWhenWholeNode(nodeDiffs)
    this.aggregateTitleRowDiff(nodeDiffs)

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined
  }

  public aggregateByDescendantDiffs(
    crawlValue: object | boolean | null,
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
    nodeDescendantDiffs: NodeDescendantDiffs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffMetaKeys: DiffMetaKeys,
  ): NodeDiffs<JsonSchemaTreeNodeStoredValue | null> | undefined {
    this.aggregateNestingIndicatorRowColorizingDiff(
      crawlValue,
      nodeDiffs as JsonSchemaKindAnyNodeDiffs,
      nodeDescendantDiffs,
    )
    return nodeDiffs
  }

  /**
   * Background for the nesting-indicator header row above a node's children list:
   * - node itself (or an inherited parent/container) was wholly added/removed -> reuse that
   *   whole-node diff, single-side only (green add-only / red remove-only);
   * - otherwise, every visible child was uniformly added, or uniformly removed -> synthesize
   *   the same single-side-only styling from that uniform child diff.
   * Mixed or partially-unchanged children leave the row uncolored.
   */
  protected aggregateNestingIndicatorRowColorizingDiff(
    crawlValue: object | boolean | null,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
    nodeDescendantDiffs: NodeDescendantDiffs,
  ): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs.nestingIndicatorRowColorizingDiff = this.withNestingLevelFlags(
        this.buildWholeNodeInheritedRowColorizingDiff(nodeLevelDiff),
      )
      return
    }

    const typeLabelFieldDiffs = nodeDiffs.typeLabelFieldDiffs
    if (typeLabelFieldDiffs && Object.keys(typeLabelFieldDiffs).length > 0) {
      const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
        ...Object.values(typeLabelFieldDiffs),
      )
      if (representativeDiff) {
        nodeDiffs.nestingIndicatorRowColorizingDiff = {
          ...this.asReplaceRowColorizingDiff(representativeDiff),
          flags: this.resolveTypeLabelNestingLevelFlags(typeLabelFieldDiffs),
        }
        return
      }
    }

    if (!isObject(crawlValue)) {
      return
    }

    const childKeys = this.collectJsonSchemaChildKeys(crawlValue)
    if (childKeys.length === 0) {
      return
    }

    const childDiffs = childKeys.map((key) => nodeDescendantDiffs[key])
    if (childDiffs.some((diff) => !diff)) {
      // Some child has no diff of its own (unchanged) - children are not uniformly changed.
      return
    }

    const [firstDiff, ...restDiffs] = childDiffs as ChangedPropertyMetaData[]
    if (!isDiffAdd(firstDiff.data) && !isDiffRemove(firstDiff.data)) {
      return
    }

    const firstAction = firstDiff.data.action
    const isUniform = restDiffs.every((diff) => (
      diff.data.action === firstAction && (isDiffAdd(diff.data) || isDiffRemove(diff.data))
    ))
    if (!isUniform) {
      return
    }

    nodeDiffs.nestingIndicatorRowColorizingDiff = this.withNestingLevelFlags(
      this.buildChangedPropertyMetaDataFromDiff(firstDiff.data),
    )
  }

  /**
   * Sets `flags.before/after.increaseLevel` on a nesting-indicator-row colorizing diff so the view
   * layer can decide, per side, whether to increment nesting depth or stay flat when providing
   * `AsyncLevelContext` to a node's children/nesting-indicator-row - mirrors JSO's
   * `JsoNodeDiffsAggregatorKindAny` use of the same field for the same purpose. Add: content absent
   * on origin -> freeze origin (`increaseLevel: false`), increment changed normally. Remove: mirror.
   * Replace or anything else: increment both sides normally - today's default depth behaviour,
   * unaffected. Not used for the type/format/title-replace branch - see
   * {@link resolveTypeLabelNestingLevelFlags} for that one, which additionally accounts for a
   * primitive<->complex `type` transition.
   */
  private withNestingLevelFlags(diff: ChangedPropertyMetaData): ChangedPropertyMetaData {
    const { data } = diff
    if (isDiffAdd(data)) {
      return { ...diff, flags: { before: { increaseLevel: false }, after: { increaseLevel: true } } }
    }
    if (isDiffRemove(data)) {
      return { ...diff, flags: { before: { increaseLevel: true }, after: { increaseLevel: false } } }
    }
    return { ...diff, flags: { before: { increaseLevel: true }, after: { increaseLevel: true } } }
  }

  /**
   * `flags.before/after.increaseLevel` for the type/format/title-replace nesting-indicator branch.
   * Normally both sides increment (a metadata-only rename never changes what children exist). But
   * when the `type` keyword itself flips between a primitive (string/number/integer/boolean) and a
   * complex type (object/array), the primitive side has no real children while the complex side's
   * children only exist because of the type change - treat that exactly like Case 1's add/remove
   * freeze: pin the primitive side, increment the complex side. A primitive<->primitive or
   * complex<->complex change (e.g. object->array) leaves both sides incrementing normally, since
   * both genuinely have their own nested content.
   */
  private resolveTypeLabelNestingLevelFlags(
    typeLabelFieldDiffs: JsonSchemaTypeLabelFieldDiffs,
  ): { before: { increaseLevel: boolean }; after: { increaseLevel: boolean } } {
    const typeDiff = typeLabelFieldDiffs.type?.data
    if (typeDiff && isDiffReplace(typeDiff)) {
      const beforeType = typeof typeDiff.beforeValue === "string" ? typeDiff.beforeValue : undefined
      const afterType = typeof typeDiff.afterValue === "string" ? typeDiff.afterValue : undefined
      const beforeIsPrimitive = isJsonSchemaPrimitiveValueType(beforeType)
      const afterIsPrimitive = isJsonSchemaPrimitiveValueType(afterType)
      if (beforeIsPrimitive !== afterIsPrimitive) {
        return {
          before: { increaseLevel: !beforeIsPrimitive },
          after: { increaseLevel: !afterIsPrimitive },
        }
      }
    }
    return { before: { increaseLevel: true }, after: { increaseLevel: true } }
  }

  /** Raw-source keys that become this node's visible `childrenNodes()` (not `nestedNodes()`). */
  private collectJsonSchemaChildKeys(crawlValue: object): string[] {
    const keys: string[] = []

    const properties = Reflect.get(crawlValue, "properties")
    if (isObject(properties)) {
      keys.push(...Object.keys(properties))
    }

    const patternProperties = Reflect.get(crawlValue, "patternProperties")
    if (isObject(patternProperties)) {
      keys.push(...Object.keys(patternProperties))
    }

    const items = Reflect.get(crawlValue, "items")
    if (Array.isArray(items)) {
      items.forEach((_, index) => keys.push(String(index)))
    } else if (items !== undefined && items !== null) {
      keys.push("items")
    }

    const additionalProperties = Reflect.get(crawlValue, "additionalProperties")
    if (additionalProperties !== undefined && additionalProperties !== null) {
      keys.push("additionalProperties")
    }

    const additionalItems = Reflect.get(crawlValue, "additionalItems")
    if (additionalItems !== undefined && additionalItems !== null) {
      keys.push("additionalItems")
    }

    return keys
  }

  protected aggregateTextDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<JsonSchemaTreeNodeStoredValue | null>,
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
  ): void {
    nodeDiffs[key] = this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  protected aggregateMetaFlagDiff(
    diff: Diff<DiffType>,
    key: JsonSchemaMetaFlagDiffKey,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
  ): void {
    nodeDiffs[key] = this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  private aggregateTypeLabelFieldDiffs(
    crawlDiffs: Partial<Record<JsonSchemaTypeLabelFieldDiffKey, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaSharedRowDiffs,
  ): void {
    const typeLabelFieldDiffs: JsonSchemaTypeLabelFieldDiffs = {}

    for (const fieldKey of JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS) {
      const diff = crawlDiffs[fieldKey]
      if (!AbstractNodeDiffsAggregator.isDiff(diff)) {
        continue
      }
      typeLabelFieldDiffs[fieldKey] = this.buildTypeLabelFieldDiffMetadata(diff)
    }

    if (Object.keys(typeLabelFieldDiffs).length > 0) {
      nodeDiffs.typeLabelFieldDiffs = typeLabelFieldDiffs
    }
  }

  protected aggregateTitleRowDiff(nodeDiffs: JsonSchemaKindAnyNodeDiffs): void {
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

    this.aggregateTypeLabelTitleRowDiff(nodeDiffs)
  }

  protected aggregateTypeLabelTitleRowDiff(nodeDiffs: JsonSchemaSharedRowDiffs): void {
    const typeLabelFieldDiffs = nodeDiffs.typeLabelFieldDiffs
    if (!typeLabelFieldDiffs || Object.keys(typeLabelFieldDiffs).length === 0) {
      return
    }

    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...Object.values(typeLabelFieldDiffs),
    )
    if (!representativeDiff) {
      return
    }

    nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = this.asReplaceRowColorizingDiff(representativeDiff)
  }

  private buildTypeLabelFieldDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }

    return this.buildChipAddRemoveDiffMetadata(diff, {
      addAfter: { textHighlighterColor: HighlightVariant.Green },
      removeBefore: { textHighlighterColor: HighlightVariant.Red },
    })
  }

  protected buildChangedPropertyMetaDataFromDiff(diff: Diff<DiffType>): ChangedPropertyMetaData {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    if (isDiffAdd(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Green,
      }
    }
    if (isDiffRemove(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Red,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
    }
    if (isDiffRename(diff) || isDiffReplace(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
    }
    return {
      data: diff,
      styles: {
        before: beforeStyles,
        after: afterStyles,
      },
      flags: {
        before: {
          increaseLevel: false,
        },
        after: {
          increaseLevel: false,
        },
      },
      highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
    }
  }

  protected readonly ROW_PARTIAL_CHANGE_STYLES: { before: DiffStyles; after: DiffStyles } = {
    before: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
    after: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
  }

  protected asReplaceRowColorizingDiff(
    sourceDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = sourceDiff

    if (isDiffReplace(data)) {
      return {
        ...sourceDiff,
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    if (isDiffAdd(data)) {
      return {
        ...sourceDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: "replace" as const,
          beforeValue: false,
          afterValue: data.afterValue ?? true,
          beforeDeclarationPaths: [],
          afterDeclarationPaths: data.afterDeclarationPaths,
        },
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    if (isDiffRemove(data)) {
      return {
        ...sourceDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: "replace" as const,
          beforeValue: data.beforeValue ?? true,
          afterValue: false,
          beforeDeclarationPaths: data.beforeDeclarationPaths,
          afterDeclarationPaths: [],
        },
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    return sourceDiff
  }

  protected buildChipAddRemoveDiffMetadata(
    diff: Diff<DiffType>,
    chipHighlight?: {
      addAfter?: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor" | "isFontMuted">
      removeBefore?: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor" | "isFontMuted">
    },
  ): ChangedPropertyMetaData {
    if (isDiffAdd(diff)) {
      return {
        data: diff,
        styles: {
          before: {
            isContentVisible: false,
            isHeaderVisible: true,
          },
          after: {
            isContentVisible: true,
            isHeaderVisible: true,
            ...chipHighlight?.addAfter,
          },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: false },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
      }
    }

    if (isDiffRemove(diff)) {
      return {
        data: diff,
        styles: {
          before: {
            isContentVisible: true,
            isHeaderVisible: true,
            ...chipHighlight?.removeBefore,
          },
          after: {
            isContentVisible: false,
            isHeaderVisible: true,
          },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: false },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
      }
    }

    return this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  protected buildChipReplaceDiffMetadata(
    diff: Diff<DiffType>,
    chipHighlight: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor">,
  ): ChangedPropertyMetaData {
    const metadata = this.buildChangedPropertyMetaDataFromDiff(diff)
    return {
      ...metadata,
      styles: {
        before: {
          ...metadata.styles.before,
          backgroundColor: undefined,
          textHighlighterColor: chipHighlight.textHighlighterColor,
          borderShadowColor: chipHighlight.borderShadowColor,
        },
        after: {
          ...metadata.styles.after,
          backgroundColor: undefined,
          textHighlighterColor: chipHighlight.textHighlighterColor,
          borderShadowColor: chipHighlight.borderShadowColor,
        },
      },
    }
  }

  protected buildWholeNodeInheritedRowColorizingDiff(
    nodeLevelDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = nodeLevelDiff

    if (isDiffAdd(data)) {
      return this.buildChangedPropertyMetaDataFromDiff({
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.add,
        afterValue: true,
        afterDeclarationPaths: data.afterDeclarationPaths ?? [],
      })
    }

    if (isDiffRemove(data)) {
      return this.buildChangedPropertyMetaDataFromDiff({
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.remove,
        beforeValue: true,
        beforeDeclarationPaths: data.beforeDeclarationPaths ?? [],
      })
    }

    return nodeLevelDiff
  }

  protected hasWholeNodeAddOrRemoveDiff(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
  ): boolean {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    return !!nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))
  }

  protected stripMetaFlagDiffsWhenWholeNode(nodeDiffs: JsonSchemaKindAnyNodeDiffs): void {
    if (!this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
      return
    }

    for (const metaFlagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
      delete nodeDiffs[metaFlagKey]
    }
  }

  protected readonly TITLE_ROW_FLAG_AS_REPLACE_STYLES: { before: DiffStyles; after: DiffStyles } = {
    before: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
    after: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
  }

  protected asReplaceFlagDiffForTitleRow(
    flagDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = flagDiff

    if (isDiffReplace(data)) {
      return {
        ...flagDiff,
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    if (isDiffAdd(data)) {
      return {
        ...flagDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: DiffAction.replace,
          beforeValue: false,
          afterValue: data.afterValue ?? true,
          beforeDeclarationPaths: [],
          afterDeclarationPaths: data.afterDeclarationPaths,
        },
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    if (isDiffRemove(data)) {
      return {
        ...flagDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: DiffAction.replace,
          beforeValue: data.beforeValue ?? true,
          afterValue: false,
          beforeDeclarationPaths: data.beforeDeclarationPaths,
          afterDeclarationPaths: [],
        },
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    return flagDiff
  }

  /**
   * Background for validation-constraint rows (`Value range`, `Value length`, `Properties count`,
   * `Items count`, `Unique items`, ...) when the whole node is inherited-added/removed from an
   * ancestor container/parent - the node's own crawl fragment carries no per-field diffs in that
   * case, so paint every row whose source keys are present with the single whole-node diff color.
   */
  private aggregateWholeNodeInheritedValidationRowDiffs(
    crawlValue: JsonSchemaTreeNodeStoredValue | null,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
  ): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (!nodeLevelDiff || !(isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      return
    }
    if (!isObject(crawlValue)) {
      return
    }

    for (const [rowKey, sourceKeys] of Object.entries(JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS)) {
      const validationRowKey = rowKey as JsonSchemaValidationRowKey
      const hasRowContent = sourceKeys.some((sourceKey) => Reflect.get(crawlValue, sourceKey) !== undefined)
      if (!hasRowContent) {
        continue
      }

      nodeDiffs.validationRowColorizingDiffs ??= {}

      if (!nodeDiffs.validationRowColorizingDiffs[validationRowKey]) {
        nodeDiffs.validationRowColorizingDiffs[validationRowKey] =
          this.buildWholeNodeInheritedRowColorizingDiff(nodeLevelDiff)
      }
    }
  }

  private aggregateValidationRowDiffs(
    crawlValue: object,
    crawlDiffs: Partial<Record<string, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
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
          ? this.mergeDiffActionFragment(
            rowDiffs,
            DiffAction.add,
            this.resolveWholeRowDisplayValues(validationRowKey, activeSourceKeys, rowDiffs, DiffAction.add),
          ) as DiffAdd
          : this.mergeDiffActionFragment(
            rowDiffs,
            DiffAction.remove,
            this.resolveWholeRowDisplayValues(validationRowKey, activeSourceKeys, rowDiffs, DiffAction.remove),
          ) as DiffRemove
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
        const displayValues = this.resolveWholeRowDisplayValues(
          validationRowKey,
          activeSourceKeys,
          rowDiffs,
          DiffAction.add,
        )
        const syntheticRowDiff = this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
          rowDiffs,
          DiffAction.add,
          displayValues,
        ) as DiffAdd)
        nodeDiffs.validationRowDiffs ??= {}
        nodeDiffs.validationRowDiffs[validationRowKey] = syntheticRowDiff
        nodeDiffs.validationRowColorizingDiffs[validationRowKey] = syntheticRowDiff
        continue
      }

      if (allRemove) {
        const displayValues = this.resolveWholeRowDisplayValues(
          validationRowKey,
          activeSourceKeys,
          rowDiffs,
          DiffAction.remove,
        )
        const syntheticRowDiff = this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(
          rowDiffs,
          DiffAction.remove,
          displayValues,
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
    valueRangeCrawlDiffs: NonNullable<JsonSchemaKindAnyNodeDiffs["valueRangeCrawlDiffs"]>,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
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
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
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
    valueRangeCrawlDiffs: NonNullable<JsonSchemaKindAnyNodeDiffs["valueRangeCrawlDiffs"]>,
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

  /** Formats the row's chip texts for the transitioning side, so the whole-row entry keeps the actual before/after values instead of losing them to a null placeholder. */
  private resolveWholeRowDisplayValues(
    rowKey: JsonSchemaValidationRowKey,
    activeSourceKeys: readonly string[],
    rowDiffs: readonly Diff<DiffType>[],
    action: typeof DiffAction.add | typeof DiffAction.remove,
  ): string[] {
    const displayValues: string[] = []
    activeSourceKeys.forEach((sourceKey, index) => {
      const diff = rowDiffs[index]
      const rawValue = action === DiffAction.add
        ? (isDiffAdd(diff) ? diff.afterValue : undefined)
        : (isDiffRemove(diff) ? diff.beforeValue : undefined)
      if (rawValue === undefined) {
        return
      }
      displayValues.push(formatJsonSchemaValidationRowChipDisplay(rowKey, sourceKey, rawValue))
    })
    return displayValues
  }

  private mergeDiffActionFragment(
    rowDiffs: Diff<DiffType>[],
    action: typeof DiffAction.add | typeof DiffAction.remove,
    displayValues: string[],
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
        afterValue: displayValues,
        afterDeclarationPaths,
      }
    }

    return {
      type: representative.type,
      scope: representative.scope,
      description: representative.description,
      action: DiffAction.remove,
      beforeValue: displayValues,
      beforeDeclarationPaths,
    }
  }

  /** Shared by validation-row and enum/examples list-item chip diffing (kind-property). */
  protected buildListValueDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
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
}
