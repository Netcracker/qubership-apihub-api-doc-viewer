import { JsonSchemaCacheService } from "../../cache-service/json-schema";
import { DEFAULT_MAX_LEVEL } from "../../../constants";
import { isObject } from "../../../utilities";
import { buildArraySchema } from "./array";
import { buildBooleanSchema } from "./boolean";
import { buildNumberOrIntegerSchema } from "./number";
import { buildObjectSchema } from "./object";
import { buildStringSchema } from "./string";
import { ADV, TObject, TOptions } from "../../../abstract/types/model";
import { isArraySchema, isBooleanSchema, isCombinerSchema, isNumberSchema, isObjectSchema, isStringSchema } from "../type-guards";

export function buildCombinerSchema(source: TObject, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nextLevel = 0,
    path = [],
    visible = true,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  if (!(cacheService instanceof JsonSchemaCacheService)) {
    throw new Error('cacheService must be an instance of JsonSchemaCacheService')
  }

  const {
    oneOf,
    anyOf,
  } = source

  const rows: ADV.Row[] = []

  let combinerName = ''

  if (Array.isArray(oneOf)) {
    combinerName = 'oneOf'
  } else if (Array.isArray(anyOf)) {
    combinerName = 'anyOf'
  }

  if (!combinerName) {
    return rows
  }

  const combinerItems = Array.isArray(oneOf) ? oneOf : Array.isArray(anyOf) ? anyOf : []

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

  for (let i = 0; i < combinerItems.length; i++) {
    const combinerItem = combinerItems[i]
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
      cacheService: new JsonSchemaCacheService(cacheService),
    }

    if (isStringSchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isNumberSchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isBooleanSchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isObjectSchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isArraySchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    } else if (isCombinerSchema(combinerItem)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, combinerItem, options)
      combinerItemRows.push(...schemaRows)
    }

    for (const row of combinerItemRows) {
      if (
        row.level === nextLevel && (
          row.type === ADV.RowType.HEADER_ROW ||
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

export function mineCombinerItemType(combinerItem: unknown, group?: number, combinerKey?: string): ADV.Elements {
  if (!isObject(combinerItem)) {
    return []
  }

  const { type, title, format, oneOf, anyOf } = combinerItem

  const elements: ADV.Elements = []

  if (Array.isArray(oneOf)) {
    elements.push(...mineCombinerItemType(oneOf[0], group, 'oneOf'))
  } else if (Array.isArray(anyOf)) {
    elements.push(...mineCombinerItemType(anyOf[0], group, 'anyOf'))
  }

  const multipleElement: ADV.MultipleElement = {
    kind: ADV.MultipleElementKind.COMBINER_SELECTOR_BUTTON,
    elements: [],
  }
  if (type) {
    multipleElement.elements.push({
      kind: ADV.ElementKind.NODE_TYPE,
      afterValue: type,
      group: group,
    })
  }
  if (title || format) {
    multipleElement.elements.push({
      kind: ADV.ElementKind.NODE_TYPE_NAME,
      afterValue: title ?? format,
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