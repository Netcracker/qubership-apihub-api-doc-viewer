import { ChangedPropertyMetaData, NODE_LEVEL_DIFF_KEY } from "../../abstract/tree-with-diffs/tree-node.interface"
import { DdlApiColumnRowValue, DdlApiIndexRowValue } from "../tree/node-value"

/** Synthetic diff slot: resolved title-row background diff for column/index property rows. */
export const DDL_PROPERTY_TITLE_ROW_DIFF_KEY = "titleRow" as const

export const DDL_COLUMN_FLAG_DIFF_KEYS = [
  "isPrimaryKey",
  "isUnique",
  "isNotNull",
  "isGenerated",
  "isForeignKey",
] as const satisfies ReadonlyArray<keyof DdlApiColumnRowValue>

export const DDL_INDEX_FLAG_DIFF_KEYS = [
  "isUnique",
] as const satisfies ReadonlyArray<keyof DdlApiIndexRowValue>

export type DdlApiColumnFlagDiffKey = (typeof DDL_COLUMN_FLAG_DIFF_KEYS)[number]
export type DdlApiIndexFlagDiffKey = (typeof DDL_INDEX_FLAG_DIFF_KEYS)[number]

export type DdlApiPropertyRowValue = DdlApiColumnRowValue | DdlApiIndexRowValue

export type DdlApiColumnPropertyRowDiffs = Partial<
  Record<
    | typeof NODE_LEVEL_DIFF_KEY
    | typeof DDL_PROPERTY_TITLE_ROW_DIFF_KEY
    | keyof DdlApiColumnRowValue,
    ChangedPropertyMetaData
  >
>

export type DdlApiIndexPropertyRowDiffs = Partial<
  Record<
    | typeof NODE_LEVEL_DIFF_KEY
    | typeof DDL_PROPERTY_TITLE_ROW_DIFF_KEY
    | keyof DdlApiIndexRowValue,
    ChangedPropertyMetaData
  >
>

export const DDL_COLUMN_CHANGED_PROPERTY_KEYS = [
  NODE_LEVEL_DIFF_KEY,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  "columnName",
  "description",
  "generatedExpression",
  ...DDL_COLUMN_FLAG_DIFF_KEYS,
] as const satisfies ReadonlyArray<keyof DdlApiColumnPropertyRowDiffs>

export const DDL_INDEX_CHANGED_PROPERTY_KEYS = [
  NODE_LEVEL_DIFF_KEY,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  "indexName",
  ...DDL_INDEX_FLAG_DIFF_KEYS,
] as const satisfies ReadonlyArray<keyof DdlApiIndexPropertyRowDiffs>
