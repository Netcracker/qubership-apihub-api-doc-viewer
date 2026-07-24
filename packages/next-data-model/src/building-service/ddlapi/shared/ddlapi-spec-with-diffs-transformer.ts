import { NODE_LEVEL_DIFF_KEY } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiColumnRowValue, DdlApiColumnTypeValue, DdlApiIndexRowValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { TableKey } from "@apihub/next-data-model/shared/ddlapi/types/table-key";
import { isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { aggregateDiffsWithRollup, Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import {
  AttrKind,
  Column,
  findAttr,
  Index,
  PgAttrKind,
  Realm,
  Schema,
  Table,
} from "@netcracker/qubership-apihub-ddlapi";
import { formatForeignKeyTargetKey } from "@apihub/next-data-model/shared/ddlapi/foreign-key-target-key";
import { BuildingServiceLogger } from "../../../loggers";
import { DiffMetaKeys } from "../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import {
  DdlApiSpecTransformer,
  DdlApiTableOrientedSpec,
  DdlApiTableOrientedSpecColumnsSection,
  DdlApiTableOrientedSpecIndexesSection,
} from "./ddlapi-spec-transformer";

type DiffsRecord = Partial<Record<string, Diff>>;

type ForeignKeyTargetCrawlDiffs = Partial<Record<string, Diff>>

type ColumnCrawlDiffsRecord = Omit<Partial<Record<string, Diff>>, 'foreignKeyTargets'> & {
  foreignKeyTargets?: ForeignKeyTargetCrawlDiffs
}

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
    return this.attachDiffMetadataToTableOrientedSpec(transformed, realm, schema, table, tableKey)
  }

  protected attachDiffMetadataToTableOrientedSpec(
    spec: DdlApiTableOrientedSpec,
    realm: Realm,
    schema: Schema | undefined,
    sourceTable: Table,
    tableKey: TableKey,
  ): DdlApiTableOrientedSpecWithDiffs {
    const transformedWithDiffs = this.createTableOrientedSpecWithDiffs(spec)
    const { diffsMetaKey, aggregatedDiffsMetaKey } = this.diffMetaKeys
    const owningSchemaName = tableKey.schemaName ?? schema?.name ?? 'public'

    this.attachTableLevelDiffs(transformedWithDiffs, schema, sourceTable, tableKey)
    this.attachColumnsSectionDiffs(transformedWithDiffs.columns, realm, sourceTable, owningSchemaName)
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
    realm: Realm,
    sourceTable: Table,
    owningSchemaName: string,
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
      const columnDiffs: ColumnCrawlDiffsRecord = {}

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
        columnDiffs.isNotNull = this.invertBooleanDiffValues(nullabilityDiff)
      }

      if (primaryKeyDiff && this.isColumnInPrimaryKey(sourceTable, sourceColumn.name)) {
        columnDiffs.isPrimaryKey = primaryKeyDiff
      }

      const foreignKeyTargetDiffs = this.resolveForeignKeyTargetDiffsForColumn(
        realm,
        sourceTable,
        sourceColumn,
        owningSchemaName,
      )
      if (Object.keys(foreignKeyTargetDiffs).length > 0) {
        columnDiffs.foreignKeyTargets = foreignKeyTargetDiffs
      }

      const uniqueDiff = this.resolveUniqueIndexDiffForColumn(sourceTable, sourceColumn.name)
      if (uniqueDiff) {
        columnDiffs.isUnique = uniqueDiff
      }

      const generatedDiff = this.resolveGeneratedColumnDiff(sourceColumn)
      if (generatedDiff) {
        if (generatedDiff.isGenerated) {
          columnDiffs.isGenerated = generatedDiff.isGenerated
        }
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

  private invertBooleanDiffValues(diff: Diff): Diff {
    if (isDiffAdd(diff) && typeof diff.afterValue === 'boolean') {
      return {
        ...diff,
        afterValue: !diff.afterValue,
      }
    }
    if (isDiffRemove(diff) && typeof diff.beforeValue === 'boolean') {
      return {
        ...diff,
        beforeValue: !diff.beforeValue,
      }
    }
    if (
      isDiffReplace(diff) &&
      typeof diff.beforeValue === 'boolean' &&
      typeof diff.afterValue === 'boolean'
    ) {
      return {
        ...diff,
        beforeValue: !diff.beforeValue,
        afterValue: !diff.afterValue,
      }
    }
    return diff
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

  private resolveForeignKeyTargetDiffsForColumn(
    realm: Realm,
    sourceTable: Table,
    sourceColumn: Column,
    owningSchemaName: string,
  ): ForeignKeyTargetCrawlDiffs {
    const foreignKeys = sourceTable.foreignKeys ?? []
    const foreignKeysArrayDiffs = this.getDiffsRecord(foreignKeys)
    const targetDiffs: ForeignKeyTargetCrawlDiffs = {}

    for (let index = 0; index < foreignKeys.length; index += 1) {
      const foreignKey = foreignKeys[index]
      const referencesColumn = foreignKey.columns?.some(foreignKeyColumn =>
        this.isSameForeignKeyColumn(foreignKeyColumn, sourceColumn),
      ) ?? false
      if (!referencesColumn) {
        continue
      }

      const wholeForeignKeyDiff = this.resolveArrayElementDiff(foreignKeysArrayDiffs, index)
      if (!wholeForeignKeyDiff) {
        continue
      }

      const target = this.buildForeignKeyTarget(realm, foreignKey, sourceColumn, owningSchemaName)
      if (!target) {
        continue
      }

      targetDiffs[formatForeignKeyTargetKey(target)] = wholeForeignKeyDiff
    }

    return targetDiffs
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
    const attrsArrayDiff = this.resolveGeneratedColumnDiffFromAttrsArray(sourceColumn.attrs)
    if (attrsArrayDiff?.generatedExpression) {
      return this.finalizeGeneratedColumnDiff(sourceColumn, attrsArrayDiff)
    }

    const attrGeneratedColumn = this.findGeneratedColumnAttr(sourceColumn.attrs)
    if (!attrGeneratedColumn) {
      return this.finalizeGeneratedColumnDiff(sourceColumn, attrsArrayDiff)
    }

    const attrDiff = this.resolveGeneratedColumnAttrDiff(sourceColumn.attrs, attrGeneratedColumn)
    if (attrDiff) {
      return this.finalizeGeneratedColumnDiff(sourceColumn, attrDiff)
    }

    return this.finalizeGeneratedColumnDiff(sourceColumn, attrsArrayDiff)
  }

  private finalizeGeneratedColumnDiff(
    sourceColumn: Column,
    result: GeneratedColumnDiffResult | undefined,
  ): GeneratedColumnDiffResult | undefined {
    if (!result?.isGenerated || !this.shouldOmitIsGeneratedFlagDiff(sourceColumn, result)) {
      return result
    }

    const { isGenerated: _isGenerated, ...rest } = result
    return Object.keys(rest).length > 0 ? rest : undefined
  }

  private shouldOmitIsGeneratedFlagDiff(
    sourceColumn: Column,
    result: GeneratedColumnDiffResult,
  ): boolean {
    if (!result.generatedExpression || !result.isGenerated) {
      return false
    }

    if (this.isGeneratedAttrKindSwitch(result.isGenerated)) {
      return true
    }

    if (!isDiffRemove(result.isGenerated)) {
      return false
    }

    return this.hasIncomingGeneratedColumnAttrDiff(sourceColumn.attrs)
  }

  private hasIncomingGeneratedColumnAttrDiff(attrs: Column['attrs']): boolean {
    const attrsArrayDiffs = this.getDiffsRecord(attrs)
    if (!attrsArrayDiffs) {
      return false
    }

    for (const diff of Object.values(attrsArrayDiffs)) {
      if (!diff) {
        continue
      }

      if (isDiffReplace(diff) && this.isGeneratedAttrKindSwitch(diff)) {
        return true
      }

      if (!isDiffAdd(diff)) {
        continue
      }

      const afterValue = this.resolveDiffSideValue(diff)
      if (isObject(afterValue) && this.isGeneratedColumnAttr(afterValue)) {
        return true
      }
    }

    return false
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

    let result: GeneratedColumnDiffResult | undefined
    for (const diff of Object.values(attrsArrayDiffs)) {
      if (!diff) {
        continue
      }

      const candidate = this.resolveDiffSideValue(diff)
      if (!isObject(candidate) || !this.isGeneratedColumnAttr(candidate)) {
        continue
      }

      const currentResult = this.buildGeneratedColumnDiffResult(candidate.kind, diff)
      result = {
        isGenerated: result?.isGenerated ?? currentResult.isGenerated,
        generatedExpression: result?.generatedExpression ?? currentResult.generatedExpression,
      }
    }

    return result
  }

  private resolveGeneratedColumnAttrDiff(
    attrs: Column['attrs'],
    generatedColumnAttr: GeneratedColumnAttrRef,
  ): GeneratedColumnDiffResult | undefined {
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
      if (generatedColumnAttr.kind === AttrKind.GeneratedExpr) {
        return {
          generatedExpression: this.normalizeGeneratedExpressionDiffValues(attrFieldDiff),
        }
      }
      return this.buildGeneratedColumnDiffResult(generatedColumnAttr.kind, attrFieldDiff)
    }

    const arrayElementDiff = this.resolveArrayElementDiff(attrsArrayDiffs, generatedColumnAttr.attrIndex)
    if (arrayElementDiff) {
      return this.buildGeneratedColumnDiffResult(generatedColumnAttr.kind, arrayElementDiff)
    }

    return undefined
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
    const generatedExpression = this.resolveGeneratedExpressionDiff(attrKind, diff)
    const omitIsGenerated = this.isGeneratedAttrKindSwitch(diff)

    return {
      ...(!omitIsGenerated && { isGenerated: diff }),
      ...(generatedExpression && { generatedExpression }),
    }
  }

  private resolveGeneratedExpressionDiff(
    attrKind: GeneratedColumnAttrKind,
    diff: Diff,
  ): Diff | undefined {
    if (isDiffReplace(diff)) {
      const beforeKind = this.takeGeneratedColumnAttrKind(diff.beforeValue)
      const afterKind = this.takeGeneratedColumnAttrKind(diff.afterValue)

      if (beforeKind === AttrKind.GeneratedExpr && afterKind === PgAttrKind.Identity) {
        return {
          type: diff.type,
          scope: diff.scope,
          description: diff.description,
          action: DiffAction.remove,
          beforeValue: this.takeGeneratedExpressionValue(diff.beforeValue),
          beforeDeclarationPaths: diff.beforeDeclarationPaths,
        }
      }

      if (beforeKind === PgAttrKind.Identity && afterKind === AttrKind.GeneratedExpr) {
        return {
          type: diff.type,
          scope: diff.scope,
          description: diff.description,
          action: DiffAction.add,
          afterValue: this.takeGeneratedExpressionValue(diff.afterValue),
          afterDeclarationPaths: diff.afterDeclarationPaths,
        }
      }
    }

    return attrKind === AttrKind.GeneratedExpr
      ? this.normalizeGeneratedExpressionDiffValues(diff)
      : undefined
  }

  private normalizeGeneratedExpressionDiffValues(diff: Diff): Diff {
    if (isDiffAdd(diff)) {
      return {
        ...diff,
        afterValue: this.takeGeneratedExpressionValue(diff.afterValue),
      }
    }
    if (isDiffRemove(diff)) {
      return {
        ...diff,
        beforeValue: this.takeGeneratedExpressionValue(diff.beforeValue),
      }
    }
    if (isDiffReplace(diff)) {
      return {
        ...diff,
        beforeValue: this.takeGeneratedExpressionValue(diff.beforeValue),
        afterValue: this.takeGeneratedExpressionValue(diff.afterValue),
      }
    }
    return diff
  }

  private takeGeneratedExpressionValue(value: unknown): unknown {
    if (!isObject(value) || !this.isGeneratedColumnAttr(value) || value.kind !== AttrKind.GeneratedExpr) {
      return value
    }
    return Reflect.get(value, 'expr')
  }

  private takeGeneratedColumnAttrKind(value: unknown): GeneratedColumnAttrKind | undefined {
    return isObject(value) && this.isGeneratedColumnAttr(value)
      ? value.kind
      : undefined
  }

  private isGeneratedAttrKindSwitch(diff: Diff): boolean {
    if (!isDiffReplace(diff)) {
      return false
    }

    const beforeKind = this.takeGeneratedColumnAttrKind(diff.beforeValue)
    const afterKind = this.takeGeneratedColumnAttrKind(diff.afterValue)

    return (
      (beforeKind === AttrKind.GeneratedExpr && afterKind === PgAttrKind.Identity) ||
      (beforeKind === PgAttrKind.Identity && afterKind === AttrKind.GeneratedExpr)
    )
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

  private mergeDiffsIntoTarget(target: object, diffs: DiffsRecord | ColumnCrawlDiffsRecord): void {
    const entries = Object.entries(diffs).filter(
      (entry): entry is [string, Diff | ForeignKeyTargetCrawlDiffs] => entry[1] !== undefined,
    )
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
