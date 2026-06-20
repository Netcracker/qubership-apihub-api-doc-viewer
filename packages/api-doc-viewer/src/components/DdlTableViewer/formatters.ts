import { DdlApiForeignKeyTarget } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree/node-value"

export function formatForeignKeyTarget(target: DdlApiForeignKeyTarget): string {
  return `${target.schemaName}.${target.tableName}.${target.columnName}`
}

export function formatIndexPartNames(partNames: readonly string[]): string {
  return partNames.join(', ')
}
