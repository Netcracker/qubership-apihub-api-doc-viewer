import { GraphApiInputObjectDefinition, GraphApiObjectDefinition, GraphApiObjectKind } from "@netcracker/qubership-apihub-graphapi"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { buildMethod } from "../section/operation"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { buildProperty } from "../section/property"

export function buildObject(
  schema: (GraphApiObjectDefinition<GraphApiObjectKind> | GraphApiObjectDefinition<GraphApiObjectKind>),
  options: TOptions,
): ADV.Row[] {
  const {
    nodeTitle,
    nodeKind,
    path = [],
    visible = true,
    nextLevel = 0,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  const rows: ADV.Row[] = []

  const { type, title } = schema
  const { methods = {}, interfaces = [] } = type

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TYPE,
        beforeValue: undefined,
        afterValue: type.kind,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE_NAME,
        beforeValue: undefined,
        afterValue: title,
      },
    ],
  })

  for (const [methodName, method] of Object.entries(methods)) {
    const options: TOptions = {
      nodeTitle: methodName,
      nodeKind: ADV.ElementKind.NODE_TITLE,
      path: [...path, methodName],
      visible,
      nextLevel: nextLevel + 1,
      maxLevel,
      cacheService: new GraphApiCacheService(cacheService),
    }
    rows.push(...buildMethod(method, options))
  }

  return rows
}

export function buildInputObject(schema: GraphApiInputObjectDefinition, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nodeKind,
    path = [],
    visible = true,
    nextLevel = 0,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  const rows: ADV.Row[] = []

  const { type, title } = schema
  const { properties = {} } = type

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TYPE,
        beforeValue: undefined,
        afterValue: type.kind,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE_NAME,
        beforeValue: undefined,
        afterValue: title,
      },
    ],
    visible,
    path,
  })

  for (const [propertyName, property] of Object.entries(properties)) {
    const options: TOptions = {
      nodeTitle: propertyName,
      nodeKind: ADV.ElementKind.NODE_TITLE,
      path: [...path, propertyName],
      visible,
      nextLevel: nextLevel + 1,
      maxLevel,
      cacheService: new GraphApiCacheService(cacheService),
    }
    rows.push(...buildProperty(property, options))
  }

  return rows
}
