import { JsonSchemaCacheService } from "../../cache-service/json-schema";
import { DEFAULT_MAX_LEVEL } from "../../../constants";
import { isObject } from "../../../utilities";
import { buildArraySchema } from "./array";
import { buildBooleanSchema } from "./boolean";
import { buildCombinerSchema } from "./combiner";
import { buildNumberOrIntegerSchema } from "./number";
import { buildStringSchema } from "./string";
import { ADV, TObject, TOptions } from "../../../abstract/types/model";
import { isArraySchema, isBooleanSchema, isCombinerSchema, isNumberSchema, isObjectSchema, isStringSchema } from "../type-guards";

export function buildObjectSchema(source: TObject, options: TOptions): ADV.Row[] {
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
    properties = {} as any,
    additionalProperties = {} as any,
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

  if (_default !== undefined) {
    rows.push({
      type: ADV.RowType.ADDITIONAL_INFO_ROW,
      level: nextLevel,
      visible: visible,
      entity: combinerKey ? source : undefined,
      path: path,
      elements: [
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_TITLE,
          afterValue: 'Default',
        },
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
          afterValue: _default,
        },
      ]
    })
  }

  if (examples !== undefined) {
    rows.push({
      type: ADV.RowType.ADDITIONAL_INFO_ROW,
      level: nextLevel,
      visible: visible,
      entity: combinerKey ? source : undefined,
      path: path,
      elements: [
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_TITLE,
          afterValue: 'Examples',
        },
        ...(Array.isArray(examples) ? examples.map(value => ({
          kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
          afterValue: JSON.stringify(value, null, 2),
        })) : []),
      ]
    })
  }

  let addedChildrenHeaderRow = false

  const propertiesKeys = Object.keys(properties)
  if (propertiesKeys.length > 0) {
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

    for (const propertyKey of propertiesKeys) {
      const property = properties[propertyKey]
      const options: TOptions = {
        nodeTitle: propertyKey,
        nextLevel: nextLevel + 1,
        path: [...path, propertyKey],
        visible: visible,
        cacheService: new JsonSchemaCacheService(cacheService),
      }

      if (isStringSchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, property, options)
        rows.push(...schemaRows)
      } else if (isNumberSchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, property, options)
        rows.push(...schemaRows)
      } else if (isBooleanSchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, property, options)
        rows.push(...schemaRows)
      } else if (isObjectSchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, property, options)
        console.log('[OBJECT]', propertyKey, property, schemaRows)
        rows.push(...schemaRows)
      } else if (isArraySchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, property, options)
        rows.push(...schemaRows)
      } else if (isCombinerSchema(property)) {
        const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, property, options)
        rows.push(...schemaRows)
      }
    }
  }

  if (isObject(additionalProperties)) {
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
      nodeTitle: 'additionalProperties',
      nextLevel: nextLevel + 1,
      path: [...path, 'additionalProperties'],
      visible: visible,
      cacheService: new JsonSchemaCacheService(cacheService),
    }
    if (isStringSchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildStringSchema, additionalProperties, options)
      rows.push(...schemaRows)
    } else if (isNumberSchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, additionalProperties, options)
      rows.push(...schemaRows)
    } else if (isBooleanSchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildBooleanSchema, additionalProperties, options)
      rows.push(...schemaRows)
    } else if (isObjectSchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildObjectSchema, additionalProperties, options)
      rows.push(...schemaRows)
    } else if (isArraySchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildArraySchema, additionalProperties, options)
      rows.push(...schemaRows)
    } else if (isCombinerSchema(additionalProperties)) {
      const [schemaRows, isCache] = cacheService.evaluateRowsBySchema(buildCombinerSchema, additionalProperties, options)
      rows.push(...schemaRows)
    }
  }

  return rows
}
