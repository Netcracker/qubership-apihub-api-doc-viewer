import { GraphApiScalarDefinition } from "@netcracker/qubership-apihub-graphapi"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { buildDirectives } from "../section/directive"
import { GraphApiCacheService } from "../../cache-service/graph-api"

export function buildScalar(schema: GraphApiScalarDefinition, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nodeKind,
    nextLevel = 0,
    combinerKey,
    path = [],
    visible = true,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  const rows: ADV.Row[] = []

  const { type, title, description, directives = {} } = schema
  const { kind } = type

  if (description) {
    rows.push({
      type: ADV.RowType.TEXT_ROW,
      level: nextLevel,
      visible,
      path,
      elements: [
        {
          kind: ADV.ElementKind.NODE_DESCRIPTION,
          beforeValue: undefined,
          afterValue: description,
          assignedDiff: undefined,
        }
      ]
    })
  }

  rows.push(...buildDirectives(directives, {
    nodeTitle: 'Directives',
    nodeKind: ADV.ElementKind.NODE_TITLE,
    path: [...path, 'directives'],
    visible,
    maxLevel,
    combinerKey,
    nextLevel: nextLevel + 1,
    cacheService: new GraphApiCacheService(cacheService),
  }))

  return rows
}
