import { TObject } from "../../abstract/types/model";

export function isTypeSchema(schema: TObject, type: string): boolean {
  return schema.type === type
}

export function isStringSchema(schema: TObject): boolean {
  return isTypeSchema(schema, 'string')
}

export function isNumberSchema(schema: TObject): boolean {
  return isTypeSchema(schema, 'number') || isTypeSchema(schema, 'integer')
}

export function isBooleanSchema(schema: TObject): boolean {
  return isTypeSchema(schema, 'boolean')
}

export function isArraySchema(schema: TObject): boolean {
  return isTypeSchema(schema, 'array')
}

export function isObjectSchema(schema: TObject): boolean {
  return isTypeSchema(schema, 'object')
}

export function isCombinerSchema(schema: TObject): boolean {
  return 'oneOf' in schema || 'anyOf' in schema
}
