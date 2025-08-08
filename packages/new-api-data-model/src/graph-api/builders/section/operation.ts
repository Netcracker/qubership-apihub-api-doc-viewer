import { GraphApiOperation, isGraphApiRef } from "@netcracker/qubership-apihub-graphapi"
import { InputOutputContext } from "../../../abstract/types/builder"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { buildArguments } from "./argument"
import { buildDirectives } from "./directive"
import { buildOutput } from "./output"

export function buildOperation(
  schema: GraphApiOperation,
  operationType: 'query' | 'mutation' | 'subscription' | 'method',
  options: TOptions
): ADV.Row[] {
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

  const isMethod = operationType === 'method'

  const { args = {}, output, description, directives = {} } = schema

  const rows: ADV.Row[] = []

  const argumentsInHeader: ADV.MultipleElement = {
    kind: ADV.MultipleElementKind.GRAPHQL_OPERATION_ARGUMENTS,
    elements: [],
  }
  for (const [name, arg] of Object.entries(args)) {
    const argument: ADV.MultipleElement = {
      kind: ADV.MultipleElementKind.GRAPHQL_OPERATION_ARGUMENT,
      elements: [],
    }
    const argName: ADV.Element = {
      kind: ADV.ElementKind.NODE_TITLE,
      beforeValue: undefined,
      afterValue: name,
      assignedDiff: undefined,
    }
    argument.elements.push(argName)
    const { nullable, default: _default } = arg
    if (nullable === false) {
      const argRequired: ADV.Element = {
        kind: ADV.ElementKind.NODE_ASTERISK,
        beforeValue: undefined,
        afterValue: true,
        assignedDiff: undefined,
      }
      argument.elements.push(argRequired)
    }
    argumentsInHeader.elements.push(argument)
  }

  const directivesInHeader: ADV.Element[] = []
  for (const name of Object.keys(directives)) {
    const directive: ADV.Element = {
      kind: ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE,
      beforeValue: undefined,
      afterValue: name,
      assignedDiff: undefined,
    }
    directivesInHeader.push(directive)
  }

  const outputInHeader: ADV.MultipleElement = {
    kind: ADV.MultipleElementKind.GRAPHQL_OPERATION_OUTPUT,
    elements: [],
  }
  const { typeDef } = output
  if (!isGraphApiRef(typeDef)) {
    const element: ADV.Element = {
      kind: ADV.ElementKind.OPERATION_NODE_OUTPUT_TYPE_NAME,
      beforeValue: undefined,
      afterValue: typeDef.title ?? typeDef.type.kind,
      assignedDiff: undefined,
    }
    outputInHeader.elements.push(element)
    if (output.nullable === false) {
      const asterisk: ADV.Element = {
        kind: ADV.ElementKind.NODE_ASTERISK,
        beforeValue: undefined,
        afterValue: true,
        assignedDiff: undefined,
      }
      outputInHeader.elements.push(asterisk)
    }
  }

  rows.push({
    type: !isMethod
      ? ADV.RowType.GRAPHQL_OPERATION_HEADER_ROW
      : ADV.RowType.GRAPHQL_METHOD_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      ...(
        !isMethod ? [
          {
            kind: ADV.ElementKind.OPERATION_NODE_TITLE_BADGE,
            beforeValue: undefined,
            afterValue: operationType,
          },
        ] : []
      ),
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
      },
      argumentsInHeader,
      outputInHeader,
      ...directivesInHeader,
    ]
  })

  rows.push({
    type: ADV.RowType.TEXT_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON,
        beforeValue: undefined,
        afterValue: 'Temporary test deprecation reason (operation)',
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
          assignedDiff: undefined,
        },
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
    nextLevel: nextLevel,
    cacheService: new GraphApiCacheService(cacheService),
  }))

  rows.push(...buildArguments(
    args,
    !isMethod
      ? InputOutputContext.Operation
      : InputOutputContext.Method,
    {
      nodeTitle: !isMethod ? 'Arguments' : 'arguments',
      nodeKind: ADV.ElementKind.NODE_TITLE,
      path: [...path, 'arguments'],
      visible,
      maxLevel,
      combinerKey,
      nextLevel: nextLevel,
      cacheService: new GraphApiCacheService(cacheService),
    },
  ))

  rows.push(...buildOutput(
    output,
    !isMethod
      ? InputOutputContext.Operation
      : InputOutputContext.Method,
    {
      nodeTitle: !isMethod ? 'Output' : 'output',
      nodeKind: ADV.ElementKind.NODE_TITLE,
      path: [...path, 'output'],
      visible,
      maxLevel,
      combinerKey,
      nextLevel: nextLevel,
      cacheService: new GraphApiCacheService(cacheService),
    }
  ))

  return rows
}

export function buildMethod(schema: GraphApiOperation, options: TOptions): ADV.Row[] {
  return buildOperation(schema, 'method', options)
}
