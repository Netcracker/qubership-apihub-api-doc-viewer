import { JsonSchemaCacheService } from "../../cache-service/json-schema";
import { DEFAULT_MAX_LEVEL } from "../../../constants";
import { isObject } from "../../../utilities";
import { buildBooleanSchema } from "./boolean";
import { buildCombinerSchema } from "./combiner";
import { buildNumberOrIntegerSchema } from "./number";
import { buildObjectSchema } from "./object";
import { buildStringSchema } from "./string";
import { ADV, TObject, TOptions } from "../../../abstract/types/model";
import { isArraySchema, isBooleanSchema, isCombinerSchema, isNumberSchema, isObjectSchema, isStringSchema } from "../type-guards";

export function buildArraySchema(source: TObject, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nextLevel = 0,
    combinerKey,
    path = [],
    visible = true,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  if (!(cacheService instanceof JsonSchemaCacheService)) {
    throw new Error('cacheService must be an instance of JsonSchemaCacheService')
  }

  const {
    type,
    title,
    format,
    description,
    default: _default,
    readOnly,
    writeOnly,
    deprecated,
    examples,
    items = {} as any,
    additionalItems = {} as any,
    minItems,
    maxItems,
    uniqueItems,
  } = source

  const rows: ADV.Row[] = []

  rows.push({
    type: ADV.RowType.HEADER_ROW,
    level: nextLevel,
    visible: visible,
    entity: combinerKey ? source : undefined,
    path: path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        afterValue: nextLevel === 0 ? 'Type:' : nodeTitle,
      },
      {
        kind: ADV.ElementKind.NODE_ASTERISK,
        beforeValue: false,
        afterValue: true,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE,
        afterValue: type,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE_NAME,
        afterValue: title ?? format,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE_COMBINER_KEY,
        afterValue: combinerKey,
      },
      {
        kind: ADV.ElementKind.NODE_BADGE,
        afterValue: readOnly ? 'readOnly' : undefined,
      },
      {
        kind: ADV.ElementKind.NODE_BADGE,
        afterValue: writeOnly ? 'writeOnly' : undefined,
      },
      {
        kind: ADV.ElementKind.NODE_BADGE,
        afterValue: deprecated ? 'deprecated' : undefined,
      },
    ]
  })

  if (description) {
    rows.push({
      type: ADV.RowType.TEXT_ROW,
      level: nextLevel,
      visible: visible,
      entity: combinerKey ? source : undefined,
      path: path,
      elements: [
        {
          kind: ADV.ElementKind.NODE_DESCRIPTION,
          afterValue: description,
        },
      ]
    })
  }

  if (minItems !== undefined || maxItems !== undefined) {
    const elements: ADV.Element[] = [
      {
        kind: ADV.ElementKind.ADDITIONAL_INFO_TITLE,
        afterValue: 'Items count',
      }
    ]
    if (minItems !== undefined) {
      elements.push({
        kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
        afterValue: `>= ${minItems}`,
      })
    }
    if (maxItems !== undefined) {
      elements.push({
        kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
        afterValue: `<= ${maxItems}`,
      })
    }
    rows.push({
      type: ADV.RowType.ADDITIONAL_INFO_ROW,
      level: nextLevel,
      visible: visible,
      entity: combinerKey ? source : undefined,
      path: path,
      elements,
    })
  }

  if (uniqueItems !== undefined) {
    rows.push({
      type: ADV.RowType.ADDITIONAL_INFO_ROW,
      level: nextLevel,
      visible: visible,
      entity: combinerKey ? source : undefined,
      path: path,
      elements: [
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_TITLE,
          afterValue: 'Unique items',
        },
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
          afterValue: uniqueItems,
        }
      ]
    })
  }

  let addedChildrenHeaderRow = false

  if (Array.isArray(items)) {
    if (!addedChildrenHeaderRow) {
      addedChildrenHeaderRow = true
      rows.push({
        type: ADV.RowType.CHILDREN_HEADER_ROW,
        level: nextLevel,
        visible: visible,
        entity: combinerKey ? source : undefined,
        path: path,
        elements: [
          {
            kind: ADV.ElementKind.NODE_TITLE,
            afterValue: 'array',
          },
          {
            kind: ADV.ElementKind.NODE_TYPE,
            afterValue: type,
          },
          {
            kind: ADV.ElementKind.NODE_TYPE_NAME,
            afterValue: title ?? format,
          },
        ]
      })
    }

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      const item = items[itemIndex]
      const itemKey = `[${itemIndex}]`
      const options: TOptions = {
        nodeKind: ADV.ElementKind.NODE_TITLE,
        nodeTitle: itemKey,
        nextLevel: nextLevel + 1,
        path: [...path, itemKey],
        visible: visible,
        cacheService: new JsonSchemaCacheService(cacheService),
      }
      if (isStringSchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, item, options)
        rows.push(...schemaRows)
      } else if (isNumberSchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, item, options)
        rows.push(...schemaRows)
      } else if (isBooleanSchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, item, options)
        rows.push(...schemaRows)
      } else if (isObjectSchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, item, options)
        rows.push(...schemaRows)
      } else if (isArraySchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, item, options)
        rows.push(...schemaRows)
      } else if (isCombinerSchema(item)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, item, options)
        rows.push(...schemaRows)
      }
    }
  } else if (isObject(items)) {
    if (!addedChildrenHeaderRow) {
      addedChildrenHeaderRow = true
      rows.push({
        type: ADV.RowType.CHILDREN_HEADER_ROW,
        level: nextLevel,
        visible: visible,
        entity: combinerKey ? source : undefined,
        path: path,
        elements: [
          {
            kind: ADV.ElementKind.NODE_TITLE,
            afterValue: 'array',
          },
          {
            kind: ADV.ElementKind.NODE_TYPE,
            afterValue: type,
          },
          {
            kind: ADV.ElementKind.NODE_TYPE_NAME,
            afterValue: title ?? format,
          },
        ]
      })
    }

    const options: TOptions = {
      nodeKind: ADV.ElementKind.NODE_TITLE_BADGE,
      nodeTitle: 'item',
      nextLevel: nextLevel + 1,
      path: [...path, 'items'],
      visible: visible,
      cacheService: new JsonSchemaCacheService(cacheService),
    }
    if (isStringSchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, items, options)
      rows.push(...schemaRows)
    } else if (isNumberSchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, items, options)
      rows.push(...schemaRows)
    } else if (isBooleanSchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, items, options)
      rows.push(...schemaRows)
    } else if (isObjectSchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, items, options)
      rows.push(...schemaRows)
    } else if (isArraySchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, items, options)
      rows.push(...schemaRows)
    } else if (isCombinerSchema(items)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, items, options)
      rows.push(...schemaRows)
    }
  }

  if (isObject(additionalItems)) {
    if (!addedChildrenHeaderRow) {
      addedChildrenHeaderRow = true
      rows.push({
        type: ADV.RowType.CHILDREN_HEADER_ROW,
        level: nextLevel,
        visible: visible,
        entity: combinerKey ? source : undefined,
        path: path,
        elements: [
          {
            kind: ADV.ElementKind.NODE_TYPE,
            afterValue: type,
          },
          {
            kind: ADV.ElementKind.NODE_TYPE_NAME,
            afterValue: title ?? format,
          },
        ]
      })
    }

    const options: TOptions = {
      nodeKind: ADV.ElementKind.NODE_BADGE,
      nodeTitle: 'additionalItems',
      nextLevel: nextLevel + 1,
      path: [...path, 'additionalItems'],
      visible: visible,
      cacheService: new JsonSchemaCacheService(cacheService),
    }
    if (isStringSchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, additionalItems, options)
      rows.push(...schemaRows)
    } else if (isNumberSchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, additionalItems, options)
      rows.push(...schemaRows)
    } else if (isBooleanSchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, additionalItems, options)
      rows.push(...schemaRows)
    } else if (isObjectSchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, additionalItems, options)
      rows.push(...schemaRows)
    } else if (isArraySchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, additionalItems, options)
      rows.push(...schemaRows)
    } else if (isCombinerSchema(additionalItems)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, additionalItems, options)
      rows.push(...schemaRows)
    }
  }

  return rows
}