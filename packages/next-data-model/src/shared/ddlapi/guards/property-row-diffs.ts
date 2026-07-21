import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import {
  ChangedPropertyMetaData,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import {
  DDL_COLUMN_CHANGED_PROPERTY_KEYS,
  DDL_INDEX_CHANGED_PROPERTY_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  DdlApiColumnPropertyRowDiffs,
  DdlApiIndexPropertyRowDiffs,
} from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { isObject } from "@apihub/next-data-model/utilities";

export function isChangedPropertyMetaData(value: unknown): value is ChangedPropertyMetaData {
  if (!isObject(value)) {
    return false
  }

  if (!("data" in value) || !("styles" in value) || !("flags" in value) || !("highlightingMode" in value)) {
    return false
  }

  const { data, styles } = value
  if (!isObject(styles) || !("before" in styles) || !("after" in styles)) {
    return false
  }

  return AbstractNodeDiffsAggregator.isDiff(data)
}

export function isDdlColumnChangedPropertyKey(
  key: string,
): key is keyof DdlApiColumnPropertyRowDiffs {
  return (DDL_COLUMN_CHANGED_PROPERTY_KEYS as readonly string[]).includes(key)
}

export function isDdlIndexChangedPropertyKey(
  key: string,
): key is keyof DdlApiIndexPropertyRowDiffs {
  return (DDL_INDEX_CHANGED_PROPERTY_KEYS as readonly string[]).includes(key)
}

function assignColumnPropertyRowDiff(
  nodeDiffs: DdlApiColumnPropertyRowDiffs,
  key: keyof DdlApiColumnPropertyRowDiffs,
  diff: ChangedPropertyMetaData,
): void {
  nodeDiffs[key] = diff
}

function assignIndexPropertyRowDiff(
  nodeDiffs: DdlApiIndexPropertyRowDiffs,
  key: keyof DdlApiIndexPropertyRowDiffs,
  diff: ChangedPropertyMetaData,
): void {
  nodeDiffs[key] = diff
}

export function adoptDdlColumnPropertyRowDiffs(
  source: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined,
): DdlApiColumnPropertyRowDiffs | undefined {
  if (!source) {
    return undefined
  }

  const nodeDiffs: DdlApiColumnPropertyRowDiffs = {}
  for (const [key, diff] of Object.entries(source)) {
    if (!isDdlColumnChangedPropertyKey(key) || !isChangedPropertyMetaData(diff)) {
      continue
    }
    assignColumnPropertyRowDiff(nodeDiffs, key, diff)
  }

  return nodeDiffs
}

export function adoptDdlIndexPropertyRowDiffs(
  source: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined,
): DdlApiIndexPropertyRowDiffs | undefined {
  if (!source) {
    return undefined
  }

  const nodeDiffs: DdlApiIndexPropertyRowDiffs = {}
  for (const [key, diff] of Object.entries(source)) {
    if (!isDdlIndexChangedPropertyKey(key) || !isChangedPropertyMetaData(diff)) {
      continue
    }
    assignIndexPropertyRowDiff(nodeDiffs, key, diff)
  }

  return nodeDiffs
}

export function hasDdlPropertyTitleRowDiff(
  nodeDiffs: Partial<Record<string, ChangedPropertyMetaData>>,
): nodeDiffs is Partial<Record<string, ChangedPropertyMetaData>> &
  Record<typeof DDL_PROPERTY_TITLE_ROW_DIFF_KEY, ChangedPropertyMetaData> {
  return isChangedPropertyMetaData(nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY])
}
