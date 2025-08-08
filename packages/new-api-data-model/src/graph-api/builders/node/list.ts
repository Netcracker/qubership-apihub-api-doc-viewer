import { GraphApiAnyUsage, GraphApiListDefinition, isGraphApiEnumDefinition, isGraphApiInputObjectDefinition, isGraphApiInterfaceDefinition, isGraphApiListDefinition, isGraphApiObjectDefinition, isGraphApiRef, isGraphApiScalarDefinition, isGraphApiUnionDefinition } from "@netcracker/qubership-apihub-graphapi"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { buildEnum } from "./enum"
import { buildInputObject, buildObject } from "./object"
import { buildScalar } from "./scalar"
import { buildUnion } from "./union"

export function buildList(schema: GraphApiListDefinition, options: TOptions): ADV.Row[] {
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
  const { items } = type

  rows.push({
    type: ADV.RowType.TEXT_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON,
        beforeValue: undefined,
        afterValue: 'Temporary test deprecation reason (list)',
      },
    ],
  })

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
        },
      ],
    })
  }

  const nextOptions: TOptions = {
    path: [...path, 'items'],
    visible,
    maxLevel,
    cacheService,
    nextLevel: nextLevel,
  }

  items && rows.push(...buildListItem(items, nextOptions))

  return rows
}

function buildListItem(schema: GraphApiAnyUsage, options: TOptions): ADV.Row[] {
  const {
    nextLevel = 0,
    path = [],
    visible = true,
    cacheService,
  } = options

  const rows: ADV.Row[] = []

  const { typeDef, nullable, default: _default } = schema

  if (isGraphApiRef(typeDef)) {
    return []
  }

  const { type, title, description, directives = {} } = typeDef

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: 'list',
        assignedDiff: undefined,
      }
    ]
  })

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
        },
      ],
    })
  }

  rows.push({
    type: ADV.RowType.HEADER_ROW,
    level: nextLevel + 1,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE_BADGE,
        beforeValue: undefined,
        afterValue: 'item',
        assignedDiff: undefined,
      },
      ...(nullable === false ? [
        {
          kind: ADV.ElementKind.NODE_ASTERISK,
          beforeValue: undefined,
          afterValue: true,
        }
      ] : []),
      {
        kind: ADV.ElementKind.NODE_TYPE,
        beforeValue: undefined,
        afterValue: type.kind,
        assignedDiff: undefined,
      },
      ...(
        title ? [
          {
            kind: ADV.ElementKind.NODE_TYPE_NAME,
            beforeValue: undefined,
            afterValue: title,
            assignedDiff: undefined,
          }
        ] : []
      ),
      // TODO: not nullable case
    ]
  })

  const nextOptions: TOptions = {
    nodeTitle: 'item',
    path: [...path, 'items', 'item'],
    visible,
    maxLevel: DEFAULT_MAX_LEVEL,
    cacheService: new GraphApiCacheService(cacheService),
    nextLevel: nextLevel + 1,
  }

  if (isGraphApiScalarDefinition(typeDef)) {
    rows.push(...buildScalar(typeDef, nextOptions))
  } else if (isGraphApiEnumDefinition(typeDef)) {
    rows.push(...buildEnum(typeDef, nextOptions))
  } else if (isGraphApiObjectDefinition(typeDef) || isGraphApiInterfaceDefinition(typeDef)) {
    rows.push(...buildObject(typeDef, nextOptions))
  } else if (isGraphApiInputObjectDefinition(typeDef)) {
    rows.push(...buildInputObject(typeDef, nextOptions))
  } else if (isGraphApiListDefinition(typeDef)) {
    rows.push(...buildList(typeDef, nextOptions))
  } else if (isGraphApiUnionDefinition(typeDef)) {
    rows.push(...buildUnion(typeDef, nextOptions))
  }

  return rows
}