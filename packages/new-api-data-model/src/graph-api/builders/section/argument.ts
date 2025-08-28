import { GraphApiArgs, GraphApiArgument, isGraphApiEnumDefinition, isGraphApiInputObjectDefinition, isGraphApiInterfaceDefinition, isGraphApiListDefinition, isGraphApiObjectDefinition, isGraphApiRef, isGraphApiScalarDefinition, isGraphApiUnionDefinition } from "@netcracker/qubership-apihub-graphapi"
import { InputOutputContext } from "../../../abstract/types/builder"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { buildEnum } from "../node/enum"
import { buildList } from "../node/list"
import { buildInputObject, buildObject } from "../node/object"
import { buildScalar } from "../node/scalar"
import { buildUnion } from "../node/union"
import { buildDirectives } from "./directive"

/*
  Take into account 2 cases:
  - arguments section in Operation
    1. Header Row (title "Arguments" only)
    2. List of arguments (with no "Children Header Row" before them)
  - arguments section in Methods
    1. Children Header Row (title "arguments" only)
    2. List of arguments
*/

export function buildArguments(schema: GraphApiArgs, ctx: InputOutputContext, options: TOptions): ADV.Row[] {
  const rows: ADV.Row[] = []

  switch (ctx) {
    case InputOutputContext.Operation:
      rows.push(...buildOperationArguments(schema, options))
      break
    case InputOutputContext.Method:
      rows.push(...buildMethodArguments(schema, options))
      break
    case InputOutputContext.Directive:
      rows.push(...buildDirectiveArguments(schema, options))
      break
  }

  return rows
}

function buildOperationArguments(schema: GraphApiArgs, options: TOptions): ADV.Row[] {
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

  const args = Object.entries(schema)

  if (args.length === 0) {
    return []
  }

  rows.push({
    type: ADV.RowType.GRAPHQL_OPERATION_ARGUMENTS_HEADER_ROW,
    level: nextLevel,
    visible,
    path: [...path, 'arguments'],
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
        assignedDiff: undefined,
      }
    ]
  })

  for (const [argName, arg] of args) {
    const nextOptions = {
      ...options,
      nextLevel: nextLevel + 1,
      nodeTitle: argName,
      path: [...path, 'arguments', argName],
    }
    rows.push(...buildArgument(arg, nextOptions))
  }

  return rows
}

function buildMethodArguments(schema: GraphApiArgs, options: TOptions): ADV.Row[] {
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

  const args = Object.entries(schema)

  if (args.length === 0) {
    return []
  }

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    visible,
    path: [...path],
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
        assignedDiff: undefined,
      }
    ]
  })

  for (const [argName, arg] of args) {
    const nextOptions = {
      ...options,
      nextLevel: nextLevel + 1,
      nodeTitle: argName,
      path: [...path, argName],
    }
    rows.push(...buildArgument(arg, nextOptions))
  }

  return rows
}

function buildDirectiveArguments(schema: GraphApiArgs, options: TOptions): ADV.Row[] {
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

  const args = Object.entries(schema)

  if (args.length === 0) {
    return []
  }

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    visible,
    path: [...path, 'arguments'],
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
        assignedDiff: undefined,
      }
    ]
  })

  for (const [argName, arg] of args) {
    const nextOptions = {
      ...options,
      nextLevel: nextLevel + 1,
      nodeTitle: argName,
      path: [...path, 'arguments', argName],
    }
    rows.push(...buildArgument(arg, nextOptions))
  }

  return rows
}

function buildArgument(schema: GraphApiArgument, options: TOptions): ADV.Row[] {
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

  const {
    typeDef,
    nullable,
    default: _default,
    description,
    directives = {}
  } = schema

  if (isGraphApiRef(typeDef)) {
    return []
  }

  const rows: ADV.Row[] = []

  rows.push({
    type: ADV.RowType.HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
        assignedDiff: undefined,
      },
      ...(
        nullable === false ? [
          {
            kind: ADV.ElementKind.NODE_ASTERISK,
            beforeValue: undefined,
            afterValue: true,
            assignedDiff: undefined,
          }
        ] : []
      ),
      {
        kind: ADV.ElementKind.NODE_TYPE,
        beforeValue: undefined,
        afterValue: typeDef.type.kind,
        assignedDiff: undefined,
      },
      ...(
        typeDef.title ? [
          {
            kind: ADV.ElementKind.NODE_TYPE_NAME,
            beforeValue: undefined,
            afterValue: typeDef.title,
            assignedDiff: undefined,
          }
        ] : []
      )
    ]
  })

  if (description) {
    rows.push({
      type: ADV.RowType.TEXT_ROW,
      level: nextLevel,
      visible: true,
      path: [...path, 'description'],
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

  if (isGraphApiScalarDefinition(typeDef)) {
    rows.push(...buildScalar(typeDef, {
      nodeTitle: 'Scalar',
      nodeKind: ADV.ElementKind.NODE_TITLE,
      path: [...path, 'scalar'],
      visible,
      maxLevel,
      combinerKey,
      nextLevel: nextLevel + 1,
      cacheService: new GraphApiCacheService(cacheService),
    }))
  } else if (isGraphApiEnumDefinition(typeDef)) {
    rows.push(...buildEnum(typeDef, options))
  } else if (isGraphApiObjectDefinition(typeDef) || isGraphApiInterfaceDefinition(typeDef)) {
    rows.push(...buildObject(typeDef, options))
  } else if (isGraphApiInputObjectDefinition(typeDef)) {
    rows.push(...buildInputObject(typeDef, options))
  } else if (isGraphApiListDefinition(typeDef)) {
    rows.push(...buildList(typeDef, options))
  } else if (isGraphApiUnionDefinition(typeDef)) {
    rows.push(...buildUnion(typeDef, options))
  }

  return rows
}