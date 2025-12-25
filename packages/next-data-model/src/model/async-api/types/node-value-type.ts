export const AsyncApiNodeJsoPropertyValueTypes = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  OBJECT: 'object',
  ARRAY: 'array',
  JSON_SCHEMA: 'jsonSchema',
  MULTI_SCHEMA: 'multiSchema',
} as const

export type AsyncApiNodeJsoPropertyValueType = typeof AsyncApiNodeJsoPropertyValueTypes[keyof typeof AsyncApiNodeJsoPropertyValueTypes]

export const AsyncApiNodeJsoPropertyValueTypesList = Object.values(AsyncApiNodeJsoPropertyValueTypes)
