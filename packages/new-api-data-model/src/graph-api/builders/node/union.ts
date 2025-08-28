import { GraphApiUnionDefinition, isGraphApiEnumDefinition, isGraphApiInputObjectDefinition, isGraphApiInterfaceDefinition, isGraphApiListDefinition, isGraphApiObjectDefinition, isGraphApiScalarDefinition, isGraphApiUnionDefinition, isObject } from "@netcracker/qubership-apihub-graphapi"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"
import { GraphApiCacheService } from "../../cache-service/graph-api"
import { buildEnum } from "./enum"
import { buildList } from "./list"
import { buildInputObject, buildObject } from "./object"
import { buildScalar } from "./scalar"

export function buildUnion(schema: GraphApiUnionDefinition, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nextLevel = 0,
    visible = true,
    path = [],
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  const rows: ADV.Row[] = []

  const { type } = schema
  const { oneOf } = type

  const combinerName = 'union'

  const combinerItemPlainRows: ADV.Row[] = []
  const combinerItemChildrenRows: ADV.Row[] = []
  const combinerRows: ADV.Row[] = [
    {
      type: ADV.RowType.COMBINER_HEADER_ROW,
      level: nextLevel,
      visible: visible,
      path: [...path, combinerName],
      elements: [
        {
          kind: ADV.ElementKind.NODE_TITLE,
          afterValue: combinerName,
        },
      ]
    },
    {
      type: ADV.RowType.COMBINER_SELECTOR_ROW,
      level: nextLevel + 1,
      visible: visible,
      path: [...path, combinerName],
      elements: [],
      combinedEntities: {},
    }
  ]

  for (let i = 0; i < oneOf.length; i++) {
    const combinerItem = oneOf[i]
    const combinerItemRows: ADV.Row[] = []

    if (combinerRows[1].combinedEntities) {
      combinerRows[1].combinedEntities[i] = combinerItem
    }
    combinerRows[1].elements.push(...mineCombinerItemType(combinerItem, i))

    const options: TOptions = {
      nodeTitle,
      nextLevel: nextLevel,
      combinerKey: combinerName,
      path: [...path, combinerName, i],
      visible: visible && i === 0,
      cacheService: new GraphApiCacheService(cacheService),
    }

    if (isGraphApiScalarDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildScalar, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isGraphApiEnumDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildEnum, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isGraphApiObjectDefinition(combinerItem) || isGraphApiInterfaceDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObject, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isGraphApiInputObjectDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildInputObject, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isGraphApiUnionDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildUnion, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isGraphApiListDefinition(combinerItem)) {
      // @ts-expect-error // TODO 07.08.25 // Fix types in cache service
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildList, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    }

    for (const row of combinerItemRows) {
      if (
        row.level === nextLevel && (
          row.type === ADV.RowType.HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_ARGUMENTS_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_OUTPUT_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_ARGUMENTS_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_OUTPUT_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_DIRECTIVE_HEADER_ROW ||
          row.type === ADV.RowType.TEXT_ROW ||
          row.type === ADV.RowType.ADDITIONAL_INFO_ROW
        )
      ) {
        combinerItemPlainRows.push(row)
      }
      if (
        row.type === ADV.RowType.COMBINER_HEADER_ROW && row.level === nextLevel ||
        row.type === ADV.RowType.COMBINER_SELECTOR_ROW && row.level === nextLevel + 1
      ) {
        combinerRows.push(row)
      }
      if (
        row.level !== nextLevel && (
          row.type === ADV.RowType.HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_ARGUMENTS_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_OPERATION_OUTPUT_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_ARGUMENTS_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_METHOD_OUTPUT_HEADER_ROW ||
          row.type === ADV.RowType.GRAPHQL_DIRECTIVE_HEADER_ROW ||
          row.type === ADV.RowType.TEXT_ROW ||
          row.type === ADV.RowType.ADDITIONAL_INFO_ROW
        ) ||
        row.type === ADV.RowType.CHILDREN_HEADER_ROW ||
        row.type === ADV.RowType.COMBINER_HEADER_ROW && row.level > nextLevel ||
        row.type === ADV.RowType.COMBINER_SELECTOR_ROW && row.level > nextLevel + 1
      ) {
        combinerItemChildrenRows.push(row)
      }
    }
  }

  rows.push(...combinerItemPlainRows)
  rows.push(...combinerRows)
  rows.push(...combinerItemChildrenRows)

  return rows
}

function mineCombinerItemType(combinerItem: unknown, group?: number, combinerKey?: string): ADV.Elements {
  if (!isObject(combinerItem)) {
    return []
  }

  const { type, title, oneOf } = combinerItem

  const elements: ADV.Elements = []

  if (Array.isArray(oneOf)) {
    elements.push(...mineCombinerItemType(oneOf[0], group, 'union'))
  }

  const multipleElement: ADV.MultipleElement = {
    kind: ADV.MultipleElementKind.COMBINER_SELECTOR_BUTTON,
    elements: [],
  }
  if (type) {
    multipleElement.elements.push({
      kind: ADV.ElementKind.NODE_TYPE,
      // @ts-expect-error // TODO 07.08.25 // Fix types
      afterValue: type.kind,
      group: group,
    })
  }
  if (title) {
    multipleElement.elements.push({
      kind: ADV.ElementKind.NODE_TYPE_NAME,
      afterValue: title,
      group: group,
    })
  }
  if (combinerKey) {
    multipleElement.elements.push({
      kind: ADV.ElementKind.NODE_TYPE_COMBINER_KEY,
      afterValue: combinerKey,
      group: group,
    })
  }

  if (multipleElement.elements.length > 0) {
    elements.push(multipleElement)
  }

  return elements
}