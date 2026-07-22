import { NODE_LEVEL_DIFF_KEY } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiColumnRowValue, DdlApiColumnTypeValue, DdlApiIndexRowValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { TableKey } from "@apihub/next-data-model/shared/ddlapi/types/table-key";
import { isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { aggregateDiffsWithRollup, Diff, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import {
  AttrKind,
  Column,
  findAttr,
  Index,
  PgAttrKind,
  Schema,
  Table,
} from "@netcracker/qubership-apihub-ddlapi";
import { BuildingServiceLogger } from "../../../loggers";
import { DiffMetaKeys } from "../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import {
  DdlApiSpecTransformer,
  DdlApiTableOrientedSpec,
  DdlApiTableOrientedSpecColumnsSection,
  DdlApiTableOrientedSpecIndexesSection,
} from "./ddlapi-spec-transformer";

type DiffsRecord = Partial<Record<string, Diff>>;

type GeneratedColumnAttrKind = typeof AttrKind.GeneratedExpr | typeof PgAttrKind.Identity

interface GeneratedColumnAttrRef {
  kind: GeneratedColumnAttrKind
  attr: object
  attrIndex: number
}

type GeneratedColumnDiffResult = {
  isGenerated?: Diff
  generatedExpression?: Diff
}

export type DdlApiColumnTypeValueWithDiffs = DdlApiColumnTypeValue & {
  [key: symbol]: unknown;
};

export type DdlApiColumnRowValueWithDiffs = Omit<DdlApiColumnRowValue, 'columnType'> & {
  readonly columnType: DdlApiColumnTypeValueWithDiffs;
  [key: symbol]: unknown;
};

export interface DdlApiIndexRowValueWithDiffs extends DdlApiIndexRowValue {
  [key: symbol]: unknown;
}

export type DdlApiTableOrientedSpecColumnsSectionWithDiffs = Omit<
  DdlApiTableOrientedSpecColumnsSection,
  'items'
> & {
  readonly items: readonly DdlApiColumnRowValueWithDiffs[];
  [key: symbol]: unknown;
};

export type DdlApiTableOrientedSpecIndexesSectionWithDiffs = Omit<
  DdlApiTableOrientedSpecIndexesSection,
  'items'
> & {
  readonly items: readonly DdlApiIndexRowValueWithDiffs[];
  [key: symbol]: unknown;
};

export type DdlApiTableOrientedSpecWithDiffs = Omit<DdlApiTableOrientedSpec, 'columns' | 'indexes'> & {
  readonly columns: DdlApiTableOrientedSpecColumnsSectionWithDiffs;
  readonly indexes: DdlApiTableOrientedSpecIndexesSectionWithDiffs;
  [key: symbol]: unknown;
};

export class DdlApiSpecWithDiffsTransformer extends DdlApiSpecTransformer {
  constructor(
    logger: BuildingServiceLogger,
    private readonly diffMetaKeys: DiffMetaKeys,
  ) {
    super(logger)
  }

  public transformSourceToTableOrientedSpecWithDiffs(
    source: unknown,
    tableKey: TableKey,
  ): DdlApiTableOrientedSpecWithDiffs | null {
    if (this.isDdlApiTableOrientedSpecWithDiffs(source)) {
      return source
    }

    const realm = this.extractRealm(source)
    const table = realm ? this.findTableInRealm(realm, tableKey) : undefined
    const transformed = realm && table
      ? this.buildTableOrientedSpecFromRealm(realm, table, tableKey)
      : this.transformSourceToTableOrientedSpec(source, tableKey)

    if (!transformed) {
      return null
    }

    if (!realm || !table) {
      return this.createTableOrientedSpecWithDiffs(transformed)
    }

    const schema = realm.schemas.find(currentSchema => currentSchema.name === tableKey.schemaName)
    return this.attachDiffMetadataToTableOrientedSpec(transformed, schema, table, tableKey)
  }

  protected attachDiffMetadataToTableOrientedSpec(
    spec: DdlApiTableOrientedSpec,
    schema: Schema | undefined,
    sourceTable: Table,
    tableKey: TableKey,
  ): DdlApiTableOrientedSpecWithDiffs {
    const transformedWithDiffs = this.createTableOrientedSpecWithDiffs(spec)
    const { diffsMetaKey, aggregatedDiffsMetaKey } = this.diffMetaKeys

    this.attachTableLevelDiffs(transformedWithDiffs, schema, sourceTable, tableKey)
    this.attachColumnsSectionDiffs(transformedWithDiffs.columns, sourceTable)
    this.attachIndexesSectionDiffs(transformedWithDiffs.indexes, sourceTable)

    aggregateDiffsWithRollup(transformedWithDiffs, diffsMetaKey, aggregatedDiffsMetaKey)

    return transformedWithDiffs
  }

  protected createTableOrientedSpecWithDiffs(
    spec: DdlApiTableOrientedSpec,
  ): DdlApiTableOrientedSpecWithDiffs {
    return {
      ...spec,
      columns: {
        ...spec.columns,
        items: spec.columns.items.map((column): DdlApiColumnRowValueWithDiffs => ({
          ...column,
          columnType: { ...column.columnType },
        })),
      },
      indexes: {
        ...spec.indexes,
        items: spec.indexes.items.map((index): DdlApiIndexRowValueWithDiffs => ({ ...index })),
      },
    }
  }

  private attachTableLevelDiffs(
    spec: DdlApiTableOrientedSpecWithDiffs,
    schema: Schema | undefined,
    sourceTable: Table,
    tableKey: TableKey,
  ): void {
    const tableDiffs: DiffsRecord = {}

    const wholeTableDiff = this.resolveWholeTableDiff(schema, sourceTable)
    if (wholeTableDiff) {
      tableDiffs[NODE_LEVEL_DIFF_KEY] = wholeTableDiff
    }

    const tableCommentDiff = this.resolveCommentDescriptionDiff(sourceTable.attrs)
    if (tableCommentDiff) {
      tableDiffs.description = tableCommentDiff
    }

    if (tableKey.schemaName !== 'public') {
      const schemaNameDiff = this.resolveSchemaNameDiff(schema)
      if (schemaNameDiff) {
        tableDiffs.schemaName = schemaNameDiff
      }
    }

    this.mergeDiffsIntoTarget(spec, tableDiffs)
  }

  private attachColumnsSectionDiffs(
    columnsSection: DdlApiTableOrientedSpecColumnsSectionWithDiffs,
    sourceTable: Table,
  ): void {
    const sourceColumns = sourceTable.columns ?? []
    const columnsArrayDiffs = this.getDiffsRecord(sourceColumns)
    const tableFieldDiffs = this.getDiffsRecord(sourceTable)
    const primaryKeyDiff = tableFieldDiffs?.primaryKey

    columnsSection.items.forEach((columnRow, rowIndex) => {
      const sourceColumn = sourceColumns.find(column => column.name === columnRow.columnName)
        ?? sourceColumns[rowIndex]

      if (!sourceColumn) {
        return
      }

      const sourceColumnIndex = sourceColumns.indexOf(sourceColumn)
      const columnDiffs: DiffsRecord = {}

      const wholeColumnDiff = this.resolveArrayElementDiff(columnsArrayDiffs, sourceColumnIndex)
      if (wholeColumnDiff) {
        columnDiffs[NODE_LEVEL_DIFF_KEY] = wholeColumnDiff
      }

      const descriptionDiff = this.resolveCommentDescriptionDiff(sourceColumn.attrs)
      if (descriptionDiff) {
        columnDiffs.description = descriptionDiff
      }

      const columnFieldDiffs = this.getDiffsRecord(sourceColumn)
      const defaultDiff = columnFieldDiffs?.default
        ?? this.getDiffsRecord(sourceColumn.default)?.value
      if (defaultDiff) {
        columnDiffs.defaultValue = defaultDiff
      }

      const nullabilityDiff = this.getDiffsRecord(sourceColumn.type)?.null
      if (nullabilityDiff) {
        columnDiffs.isNotNull = nullabilityDiff
      }

      if (primaryKeyDiff && this.isColumnInPrimaryKey(sourceTable, sourceColumn.name)) {
        columnDiffs.isPrimaryKey = primaryKeyDiff
      }

      const foreignKeyDiff = this.resolveForeignKeyDiffForColumn(sourceTable, sourceColumn.name)
      if (foreignKeyDiff) {
        columnDiffs.isForeignKey = foreignKeyDiff
      }

      const uniqueDiff = this.resolveUniqueIndexDiffForColumn(sourceTable, sourceColumn.name)
      if (uniqueDiff) {
        columnDiffs.isUnique = uniqueDiff
      }

      const generatedDiff = this.resolveGeneratedColumnDiff(sourceColumn)
      if (generatedDiff) {
        columnDiffs.isGenerated = generatedDiff.isGenerated
        if (generatedDiff.generatedExpression) {
          columnDiffs.generatedExpression = generatedDiff.generatedExpression
        }
      }

      this.mergeDiffsIntoTarget(columnRow, columnDiffs)
      this.attachColumnTypeDiffs(columnRow.columnType, sourceColumn)
    })

    this.attachSectionArrayDiffs(columnsSection, columnsArrayDiffs, (arrayIndex) =>
      sourceColumns[arrayIndex]?.name
      ?? columnsSection.items[arrayIndex]?.columnName,
    )
  }

  private attachIndexesSectionDiffs(
    indexesSection: DdlApiTableOrientedSpecIndexesSectionWithDiffs,
    sourceTable: Table,
  ): void {
    const sourceIndexes = sourceTable.indexes ?? []
    const indexesArrayDiffs = this.getDiffsRecord(sourceIndexes)

    indexesSection.items.forEach((indexRow, rowIndex) => {
      const sourceIndex = this.findSourceIndexForRow(sourceIndexes, indexRow, rowIndex)
      if (!sourceIndex) {
        return
      }

      const sourceIndexIndex = sourceIndexes.indexOf(sourceIndex)
      const indexDiffs: DiffsRecord = {}

      const wholeIndexDiff = this.resolveArrayElementDiff(indexesArrayDiffs, sourceIndexIndex)
      if (wholeIndexDiff) {
        indexDiffs[NODE_LEVEL_DIFF_KEY] = wholeIndexDiff
      }

      const indexFieldDiffs = this.getDiffsRecord(sourceIndex)
      const indexNameDiff = indexFieldDiffs?.name
      if (indexNameDiff) {
        indexDiffs.indexName = indexNameDiff
      }

      const uniqueDiff = indexFieldDiffs?.unique
      if (uniqueDiff) {
        indexDiffs.isUnique = uniqueDiff
      }

      const descriptionDiff = this.resolveCommentDescriptionDiff(sourceIndex.attrs)
      if (descriptionDiff) {
        indexDiffs.description = descriptionDiff
      }

      this.mergeDiffsIntoTarget(indexRow, indexDiffs)
    })

    this.attachSectionArrayDiffs(indexesSection, indexesArrayDiffs, (arrayIndex) => {
      const sourceIndex = sourceIndexes[arrayIndex]
      const indexRow = indexesSection.items[arrayIndex]
      if (sourceIndex?.name) {
        return sourceIndex.name
      }
      if (indexRow?.indexName) {
        return indexRow.indexName
      }
      if (indexRow?.partNames.length) {
        return indexRow.partNames.join(', ')
      }
      return String(arrayIndex)
    })
  }

  private attachSectionArrayDiffs(
    section: object,
    arrayDiffs: DiffsRecord | undefined,
    resolveDescendantKey: (arrayIndex: number) => string | undefined,
  ): void {
    if (!arrayDiffs) {
      return
    }

    const sectionDiffs: DiffsRecord = {}
    for (const [arrayKey, diff] of Object.entries(arrayDiffs)) {
      if (!diff) {
        continue
      }

      const arrayIndex = Number(arrayKey)
      if (Number.isNaN(arrayIndex)) {
        continue
      }

      const descendantKey = resolveDescendantKey(arrayIndex)
      if (descendantKey) {
        sectionDiffs[descendantKey] = diff
      }
    }

    this.mergeDiffsIntoTarget(section, sectionDiffs)
  }

  private attachColumnTypeDiffs(
    columnType: DdlApiColumnTypeValueWithDiffs,
    sourceColumn: Column,
  ): void {
    const schemaType = sourceColumn.type?.type
    if (!schemaType || !isObject(schemaType)) {
      return
    }

    const schemaTypeDiffs = this.getDiffsRecord(schemaType)
    const labelDiff = schemaTypeDiffs?.type
      ?? schemaTypeDiffs?.size
      ?? schemaTypeDiffs?.precision
      ?? schemaTypeDiffs?.scale

    if (labelDiff) {
      this.mergeDiffsIntoTarget(columnType, { label: labelDiff })
    }
  }

  private resolveWholeTableDiff(schema: Schema | undefined, sourceTable: Table): Diff | undefined {
    if (!schema?.tables) {
      return undefined
    }

    const tablesArrayDiffs = this.getDiffsRecord(schema.tables)
    const tableIndex = schema.tables.findIndex(table => table === sourceTable || table.name === sourceTable.name)
    if (tableIndex < 0) {
      return undefined
    }

    return this.resolveArrayElementDiff(tablesArrayDiffs, tableIndex)
  }

  private resolveSchemaNameDiff(schema: Schema | undefined): Diff | undefined {
    if (!schema) {
      return undefined
    }

    return this.getDiffsRecord(schema)?.name
  }

  private resolveCommentDescriptionDiff(attrs: Column['attrs'] | Table['attrs'] | Index['attrs']): Diff | undefined {
    const commentAttr = findAttr(attrs, AttrKind.Comment)
    if (!commentAttr) {
      const attrsArrayDiffs = this.getDiffsRecord(attrs)
      if (!attrsArrayDiffs) {
        return undefined
      }

      for (const diff of Object.values(attrsArrayDiffs)) {
        if (!diff) {
          continue
        }
        const afterValue = 'afterValue' in diff ? diff.afterValue : undefined
        const beforeValue = 'beforeValue' in diff ? diff.beforeValue : undefined
        const candidate = afterValue ?? beforeValue
        if (isObject(candidate) && candidate.kind === AttrKind.Comment) {
          return diff
        }
      }

      return undefined
    }

    return this.getDiffsRecord(commentAttr)?.text
      ?? this.resolveArrayElementDiff(this.getDiffsRecord(attrs), this.findCommentAttrIndex(attrs))
  }

  private findCommentAttrIndex(attrs: Column['attrs'] | Table['attrs'] | Index['attrs']): number {
    return (attrs ?? []).findIndex(attr => attr.kind === AttrKind.Comment)
  }

  private resolveForeignKeyDiffForColumn(sourceTable: Table, columnName: string): Diff | undefined {
    const foreignKeys = sourceTable.foreignKeys ?? []
    const foreignKeysArrayDiffs = this.getDiffsRecord(foreignKeys)

    for (let index = 0; index < foreignKeys.length; index += 1) {
      const foreignKey = foreignKeys[index]
      const referencesColumn = foreignKey.columns?.some(column => column.name === columnName) ?? false
      if (!referencesColumn) {
        continue
      }

      const wholeForeignKeyDiff = this.resolveArrayElementDiff(foreignKeysArrayDiffs, index)
      if (wholeForeignKeyDiff) {
        return wholeForeignKeyDiff
      }
    }

    return undefined
  }

  private resolveUniqueIndexDiffForColumn(sourceTable: Table, columnName: string): Diff | undefined {
    const indexes = sourceTable.indexes ?? []
    const indexesArrayDiffs = this.getDiffsRecord(indexes)

    for (let index = 0; index < indexes.length; index += 1) {
      const sourceIndex = indexes[index]
      if (sourceIndex.unique !== true) {
        continue
      }

      const parts = sourceIndex.parts ?? []
      if (parts.length !== 1 || parts[0]?.column?.name !== columnName) {
        continue
      }

      const wholeIndexDiff = this.resolveArrayElementDiff(indexesArrayDiffs, index)
      if (wholeIndexDiff) {
        return wholeIndexDiff
      }

      return this.getDiffsRecord(sourceIndex)?.unique
    }

    return undefined
  }

  private resolveGeneratedColumnDiff(sourceColumn: Column): GeneratedColumnDiffResult | undefined {
    const attrGeneratedColumn = this.findGeneratedColumnAttr(sourceColumn.attrs)
    // case of removed generated column
    if (!attrGeneratedColumn) {
      return this.resolveGeneratedColumnDiffFromAttrsArray(sourceColumn.attrs)
    }

    // case of added generated column
    const diffAttr = this.resolveGeneratedColumnAttrDiff(sourceColumn.attrs, attrGeneratedColumn)
    if (diffAttr) {
      return this.buildGeneratedColumnDiffResult(attrGeneratedColumn.kind, diffAttr)
    }

    return undefined
  }

  private findGeneratedColumnAttr(attrs: Column['attrs']): GeneratedColumnAttrRef | undefined {
    const columnAttrs = attrs ?? []

    const attrIdentity = findAttr(columnAttrs, PgAttrKind.Identity)
    if (attrIdentity) {
      return {
        kind: PgAttrKind.Identity,
        attr: attrIdentity,
        attrIndex: columnAttrs.indexOf(attrIdentity),
      }
    }

    const attrGeneratedExpr = findAttr(columnAttrs, AttrKind.GeneratedExpr)
    if (attrGeneratedExpr) {
      return {
        kind: AttrKind.GeneratedExpr,
        attr: attrGeneratedExpr,
        attrIndex: columnAttrs.indexOf(attrGeneratedExpr),
      }
    }

    return undefined
  }

  private resolveGeneratedColumnDiffFromAttrsArray(
    attrs: Column['attrs'],
  ): GeneratedColumnDiffResult | undefined {
    const attrsArrayDiffs = this.getDiffsRecord(attrs)
    if (!attrsArrayDiffs) {
      return undefined
    }

    for (const diff of Object.values(attrsArrayDiffs)) {
      if (!diff) {
        continue
      }

      const candidate = this.resolveDiffSideValue(diff)
      if (!isObject(candidate) || !this.isGeneratedColumnAttr(candidate)) {
        continue
      }

      return this.buildGeneratedColumnDiffResult(candidate.kind, diff)
    }

    return undefined
  }

  private resolveGeneratedColumnAttrDiff(
    attrs: Column['attrs'],
    generatedColumnAttr: GeneratedColumnAttrRef,
  ): Diff | undefined {
    const attrsArrayDiffs = this.getDiffsRecord(attrs)


    let attrFieldDiffKeys = undefined
    if (generatedColumnAttr.kind === AttrKind.GeneratedExpr) {
      attrFieldDiffKeys = ['expr'] as const
    }
    if (generatedColumnAttr.kind === PgAttrKind.Identity) {
      attrFieldDiffKeys = ['generation', 'seqStart', 'seqIncrement'] as const
    }

    if (!attrFieldDiffKeys) {
      return undefined
    }

    const attrFieldDiff = this.resolveFirstAttrFieldDiff(generatedColumnAttr.attr, attrFieldDiffKeys)
    if (attrFieldDiff) {
      return attrFieldDiff
    }

    return this.resolveArrayElementDiff(attrsArrayDiffs, generatedColumnAttr.attrIndex)
  }

  private resolveFirstAttrFieldDiff(
    attr: object,
    fieldKeys: readonly string[],
  ): Diff | undefined {
    const attrDiffs = this.getDiffsRecord(attr)
    if (!attrDiffs) {
      return undefined
    }

    for (const fieldKey of fieldKeys) {
      const fieldDiff = attrDiffs[fieldKey]
      if (fieldDiff) {
        return fieldDiff
      }
    }

    return undefined
  }

  private buildGeneratedColumnDiffResult(
    attrKind: GeneratedColumnAttrKind,
    diff: Diff,
  ): GeneratedColumnDiffResult {
    if (attrKind === AttrKind.GeneratedExpr) {
      return {
        isGenerated: diff,
        generatedExpression: diff,
      }
    }

    return { isGenerated: diff }
  }

  private resolveDiffSideValue(diff: Diff): unknown {
    if (isDiffAdd(diff)) {
      return diff.afterValue
    }
    if (isDiffRemove(diff)) {
      return diff.beforeValue
    }
    if (isDiffReplace(diff)) {
      return diff.afterValue ?? diff.beforeValue
    }

    return undefined
  }

  private isGeneratedColumnAttr(value: object): value is { kind: GeneratedColumnAttrKind } {
    return 'kind' in value && (
      value.kind === AttrKind.GeneratedExpr ||
      value.kind === PgAttrKind.Identity
    )
  }

  private findSourceIndexForRow(
    sourceIndexes: readonly Index[],
    indexRow: DdlApiIndexRowValueWithDiffs,
    rowIndex: number,
  ): Index | undefined {
    if (indexRow.indexName) {
      const namedIndex = sourceIndexes.find(index => index.name === indexRow.indexName)
      if (namedIndex) {
        return namedIndex
      }
    }

    return sourceIndexes[rowIndex]
  }

  private resolveArrayElementDiff(
    arrayDiffs: DiffsRecord | undefined,
    elementIndex: number,
  ): Diff | undefined {
    if (!arrayDiffs || elementIndex < 0) {
      return undefined
    }

    return arrayDiffs[String(elementIndex)]
      ?? arrayDiffs[elementIndex]
  }

  private getDiffsRecord(owner: unknown): DiffsRecord | undefined {
    if (typeof owner !== 'object' || owner === null) {
      return undefined
    }

    const { diffsMetaKey } = this.diffMetaKeys
    return takeIfDiffsRecord(Reflect.get(owner, diffsMetaKey))
  }

  private mergeDiffsIntoTarget(target: object, diffs: DiffsRecord): void {
    const entries = Object.entries(diffs).filter((entry): entry is [string, Diff] => entry[1] !== undefined)
    if (entries.length === 0) {
      return
    }

    const { diffsMetaKey } = this.diffMetaKeys
    const existingDiffs = takeIfDiffsRecord(Reflect.get(target, diffsMetaKey)) ?? {}
    Reflect.set(target, diffsMetaKey, {
      ...existingDiffs,
      ...Object.fromEntries(entries),
    })
  }

  private isColumnInPrimaryKey(sourceTable: Table, columnName: string): boolean {
    return (sourceTable.primaryKey?.parts ?? []).some(part => part.column?.name === columnName)
  }

  private isDdlApiTableOrientedSpecWithDiffs(value: unknown): value is DdlApiTableOrientedSpecWithDiffs {
    if (!this.isDdlApiTableOrientedSpec(value)) {
      return false
    }

    const { diffsMetaKey, aggregatedDiffsMetaKey } = this.diffMetaKeys
    return diffsMetaKey in value || aggregatedDiffsMetaKey in value
  }
}
