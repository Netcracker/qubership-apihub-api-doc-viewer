import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ChangedPropertyKey, ChangedPropertyMetaData, DIFF_HIGHLIGHTING_MODES_DEFAULT, DiffStyles, HighlightVariant, ITreeNodeWithDiffs, NODE_LEVEL_DIFF_KEY, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { isChangedPropertyMetaData } from "@apihub/next-data-model/shared/ddlapi/guards/property-row-diffs";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, DiffAction, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";

export class DdlApiNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null,
    DdlApiTreeNodeKind,
    DdlApiTreeNodeMeta,
    DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null
  > {
  protected readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
    isHeaderVisible: true,
  }

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null,
      DdlApiTreeNodeKind,
      DdlApiTreeNodeMeta,
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null,
      DdlApiTreeNodeKind,
      DdlApiTreeNodeMeta,
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null
    >,
  ): NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue) && !Array.isArray(crawlValue)) {
      return undefined
    }

    const diffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    const nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> = {}

    if (containerNode) {
      const containerNodeDiff = containerNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (containerNodeDiff && (isDiffAdd(containerNodeDiff.data) || isDiffRemove(containerNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...containerNodeDiff, inherited: true }
        return nodeDiffs
      }
      const maybeNodeDiffs = containerNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        return nodeDiffs
      }
    } else if (parentNode) {
      const parentNodeDiff = parentNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (parentNodeDiff && (isDiffAdd(parentNodeDiff.data) || isDiffRemove(parentNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...parentNodeDiff, inherited: true }
        return nodeDiffs
      }
      const maybeNodeDiffs = parentNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        return nodeDiffs
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

    const descriptionDiff = diffs['description']
    descriptionDiff && this.aggregateTextDiff(descriptionDiff, 'description', nodeDiffs)

    const tableNameDiff = diffs['tableName']
    tableNameDiff && this.aggregateTextDiff(tableNameDiff, 'tableName', nodeDiffs)

    const schemaNameDiff = diffs['schemaName']
    schemaNameDiff && this.aggregateTextDiff(schemaNameDiff, 'schemaName', nodeDiffs)

    const titleDiff = diffs['title']
    titleDiff && this.aggregateTextDiff(titleDiff, 'title', nodeDiffs)

    const columnNameDiff = diffs['columnName']
    columnNameDiff && this.aggregateTextDiff(columnNameDiff, 'columnName', nodeDiffs)

    const indexNameDiff = diffs['indexName']
    indexNameDiff && this.aggregateTextDiff(indexNameDiff, 'indexName', nodeDiffs)

    return nodeDiffs
  }

  protected aggregateTextDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
  ) {
    nodeDiffs[key] = this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  protected buildChangedPropertyMetaDataFromDiff(diff: Diff<DiffType>): ChangedPropertyMetaData {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    if (isDiffAdd(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Green,
        textHighlighterColor: HighlightVariant.Green,
      }
    }
    if (isDiffRemove(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Red,
        textHighlighterColor: HighlightVariant.Red,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: false,
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

  protected readonly TITLE_ROW_FLAG_AS_REPLACE_STYLES: { before: DiffStyles; after: DiffStyles } = {
    before: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
      textHighlighterColor: HighlightVariant.Yellow,
    },
    after: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
      textHighlighterColor: HighlightVariant.Yellow,
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

  protected adoptNodeLevelDiffFromCrawlIfAbsent(
    diffs: Partial<Record<string, Diff<DiffType>>>,
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
  ): void {
    if (nodeDiffs[NODE_LEVEL_DIFF_KEY]) {
      return
    }

    const wholeNodeDiff = diffs[NODE_LEVEL_DIFF_KEY]
    if (wholeNodeDiff) {
      this.aggregateTextDiff(wholeNodeDiff, NODE_LEVEL_DIFF_KEY, nodeDiffs)
    }
  }

  protected hasWholeNodeAddOrRemoveDiff(
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
  ): boolean {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    return !!nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))
  }

  protected adoptPropertyRowDiffs<K extends string>(
    source: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined,
    allowedKeys: readonly K[],
  ): Partial<Record<K, ChangedPropertyMetaData>> {
    if (!source) {
      return {}
    }

    const nodeDiffs: Partial<Record<K, ChangedPropertyMetaData>> = {}
    for (const [key, diff] of Object.entries(source)) {
      if (!(allowedKeys as readonly string[]).includes(key) || !isChangedPropertyMetaData(diff)) {
        continue
      }
      nodeDiffs[key as K] = diff
    }

    return nodeDiffs
  }

  protected aggregateFlagDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
    currentValue?: boolean,
  ) {
    const normalizedDiff = this.normalizeFlagDiffReplace(diff, currentValue)
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    if (isDiffAdd(normalizedDiff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: false,
        backgroundColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
      }
    }
    if (isDiffRemove(normalizedDiff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: false,
        backgroundColor: HighlightVariant.Yellow,
      }
    }
    nodeDiffs[key] = {
      data: normalizedDiff,
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

  protected takeBooleanFlagValue(owner: object, key: PropertyKey): boolean | undefined {
    const value = Reflect.get(owner, key)
    return typeof value === "boolean" ? value : undefined
  }

  private normalizeFlagDiffReplace(
    diff: Diff<DiffType>,
    currentValue: boolean | undefined,
  ): Diff<DiffType> {
    if (!isDiffReplace(diff)) {
      return diff
    }

    const resolvedCurrentValue = typeof diff.afterValue === "boolean"
      ? diff.afterValue
      : currentValue
    if (resolvedCurrentValue === undefined) {
      return diff
    }

    if (resolvedCurrentValue) {
      return {
        type: diff.type,
        scope: diff.scope,
        description: diff.description,
        action: DiffAction.add,
        afterValue: true,
        afterDeclarationPaths: diff.afterDeclarationPaths,
      }
    }

    return {
      type: diff.type,
      scope: diff.scope,
      description: diff.description,
      action: DiffAction.remove,
      beforeValue: true,
      beforeDeclarationPaths: diff.beforeDeclarationPaths,
    }
  }
}
