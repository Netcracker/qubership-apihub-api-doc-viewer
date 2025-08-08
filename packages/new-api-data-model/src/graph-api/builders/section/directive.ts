import { GraphApiDirective, GraphApiDirectives, isGraphApiRef } from "@netcracker/qubership-apihub-graphapi"
import { InputOutputContext } from "../../../abstract/types/builder"
import { ADV, TOptions } from "../../../abstract/types/model"
import { buildArguments } from "./argument"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { DEFAULT_MAX_LEVEL } from "../../../constants"

export function buildDirectives(schema: GraphApiDirectives, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nodeKind,
    nextLevel = 0,
    combinerKey,
    path = [],
    visible = true,
    maxLevel = DEFAULT_MAX_LEVEL,
  } = options

  const directives = Object.entries(schema)

  if (directives.length === 0) {
    return []
  }

  const rows: ADV.Row[] = []

  rows.push({
    type: ADV.RowType.CHILDREN_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: 'directives',
        assignedDiff: undefined,
      }
    ]
  })

  for (const [directiveName, directive] of directives) {
    const nextOptions: TOptions = {
      ...options,
      nodeTitle: directiveName,
      path: [...path, directiveName],
      nextLevel: nextLevel + 1,
    }
    rows.push(...buildDirective(directive, nextOptions))
  }

  return rows
}

export function buildDirective(schema: GraphApiDirective, options: TOptions): ADV.Row[] {
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

  const { definition, meta } = schema

  if (isGraphApiRef(definition)) {
    return []
  }

  const { title, description, locations, args = {}, repeatable } = definition

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

  const rows: ADV.Row[] = []

  rows.push({
    type: ADV.RowType.GRAPHQL_DIRECTIVE_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: title,
        assignedDiff: undefined,
      },
      ...(argumentsInHeader.elements.length > 0 ? [argumentsInHeader] : []),
      {
        kind: ADV.MultipleElementKind.GRAPHQL_DIRECTIVE_LOCATIONS,
        elements: locations.map(location => ({
          kind: ADV.ElementKind.GRAPHQL_DIRECTIVE_NODE_LOCATION,
          beforeValue: undefined,
          afterValue: location,
          assignedDiff: undefined,
        }))
      },
    ]
  })

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

  rows.push(...buildArguments(args, InputOutputContext.Directive, {
    nodeTitle: 'arguments',
    nodeKind: ADV.ElementKind.NODE_TITLE,
    path: [...path, 'arguments'],
    visible,
    maxLevel,
    combinerKey,
    nextLevel: nextLevel,
    cacheService: new GraphApiCacheService(cacheService),
  }))

  return rows
}