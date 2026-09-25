import {
  ASYNCAPI_PROPERTY_EXTERNAL_DOCS,
  JSON_SCHEMA_PROPERTY_ADDITIONAL_ITEMS,
  JSON_SCHEMA_PROPERTY_ADDITIONAL_PROPERTIES,
  JSON_SCHEMA_PROPERTY_DEFAULT,
  JSON_SCHEMA_PROPERTY_DEPRECATED,
  JSON_SCHEMA_PROPERTY_DESCRIPTION,
  JSON_SCHEMA_PROPERTY_ENUM,
  JSON_SCHEMA_PROPERTY_EXAMPLES,
  JSON_SCHEMA_PROPERTY_EXCLUSIVE_MAXIMUM,
  JSON_SCHEMA_PROPERTY_EXCLUSIVE_MINIMUM,
  JSON_SCHEMA_PROPERTY_FORMAT,
  JSON_SCHEMA_PROPERTY_ITEMS,
  JSON_SCHEMA_PROPERTY_MAXIMUM,
  JSON_SCHEMA_PROPERTY_MAX_ITEMS,
  JSON_SCHEMA_PROPERTY_MAX_LENGTH,
  JSON_SCHEMA_PROPERTY_MAX_PROPERTIES,
  JSON_SCHEMA_PROPERTY_MINIMUM,
  JSON_SCHEMA_PROPERTY_MIN_ITEMS,
  JSON_SCHEMA_PROPERTY_MIN_LENGTH,
  JSON_SCHEMA_PROPERTY_MIN_PROPERTIES,
  JSON_SCHEMA_PROPERTY_MULTIPLE_OF,
  JSON_SCHEMA_PROPERTY_NULLABLE,
  JSON_SCHEMA_PROPERTY_PATTERN,
  JSON_SCHEMA_PROPERTY_PATTERN_PROPERTIES,
  JSON_SCHEMA_PROPERTY_PROPERTIES,
  JSON_SCHEMA_PROPERTY_PROPERTY_NAMES,
  JSON_SCHEMA_PROPERTY_READ_ONLY,
  JSON_SCHEMA_PROPERTY_REQUIRED,
  JSON_SCHEMA_PROPERTY_TITLE,
  JSON_SCHEMA_PROPERTY_TYPE,
  JSON_SCHEMA_PROPERTY_UNIQUE_ITEMS,
  JSON_SCHEMA_PROPERTY_WRITE_ONLY,
} from "@netcracker/qubership-apihub-api-unifier"
import type { JsonSchemaNodeValueType } from "@apihub/next-data-model/model/json-schema/types/node-value-type"
import { JsonSchemaNodeValueTypesList } from "@apihub/next-data-model/model/json-schema/types/node-value-type"
import type { JsonSchemaNodeMetaProps } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaNodeValueTypes } from "@apihub/next-data-model/model/json-schema/types/node-value-type"
import {
  JSON_SCHEMA_NODE_VALUE_PROPERTY_EXTENSIONS,
  JSON_SCHEMA_NODE_VALUE_PROPERTY_LOCATION,
} from "@apihub/next-data-model/shared/json-schema/types/node-value-property-key"

export const jsonSchemaNodeKind = {
  root: JsonSchemaTreeNodeKinds.ROOT,
  definition: JsonSchemaTreeNodeKinds.DEFINITION,
  property: JsonSchemaTreeNodeKinds.PROPERTY,
  additionalProperties: JsonSchemaTreeNodeKinds.ADDITIONAL_PROPERTIES,
  patternProperty: JsonSchemaTreeNodeKinds.PATTERN_PROPERTY,
  items: JsonSchemaTreeNodeKinds.ITEMS,
  item: JsonSchemaTreeNodeKinds.ITEM,
  additionalItems: JsonSchemaTreeNodeKinds.ADDITIONAL_ITEMS,
  allOf: JsonSchemaTreeNodeKinds.ALL_OF,
  anyOf: JsonSchemaTreeNodeKinds.ANY_OF,
  oneOf: JsonSchemaTreeNodeKinds.ONE_OF,
} as const

export const jsonSchemaNodeKinds = Object.keys(jsonSchemaNodeKind)

export const jsonSchemaNodeTypes = JsonSchemaNodeValueTypesList

export const jsonSchemaNodeMetaProps: (keyof JsonSchemaNodeMetaProps)[] = [
  JSON_SCHEMA_PROPERTY_DEPRECATED,
  JSON_SCHEMA_PROPERTY_READ_ONLY,
  JSON_SCHEMA_PROPERTY_WRITE_ONLY,
  ASYNCAPI_PROPERTY_EXTERNAL_DOCS,
]

export const jsonSchemaCommonProps = [
  JSON_SCHEMA_PROPERTY_TYPE,
  JSON_SCHEMA_PROPERTY_DESCRIPTION,
  JSON_SCHEMA_PROPERTY_TITLE,
  JSON_SCHEMA_PROPERTY_ENUM,
  JSON_SCHEMA_PROPERTY_DEFAULT,
  JSON_SCHEMA_PROPERTY_EXAMPLES,
  JSON_SCHEMA_PROPERTY_NULLABLE,
  JSON_SCHEMA_NODE_VALUE_PROPERTY_EXTENSIONS,
] as const

export const jsonSchemaNodeValueProps: Record<JsonSchemaNodeValueType, readonly string[]> = {
  [JsonSchemaNodeValueTypes.UNKNOWN]: [...jsonSchemaCommonProps],
  [JsonSchemaNodeValueTypes.ANY]: [...jsonSchemaCommonProps],
  [JsonSchemaNodeValueTypes.NOTHING]: [...jsonSchemaCommonProps],
  [JsonSchemaNodeValueTypes.BOOLEAN]: [...jsonSchemaCommonProps],
  [JsonSchemaNodeValueTypes.NULL]: [...jsonSchemaCommonProps],
  [JsonSchemaNodeValueTypes.STRING]: [
    ...jsonSchemaCommonProps,
    JSON_SCHEMA_PROPERTY_FORMAT,
    JSON_SCHEMA_PROPERTY_MIN_LENGTH,
    JSON_SCHEMA_PROPERTY_MAX_LENGTH,
    JSON_SCHEMA_PROPERTY_PATTERN,
    JSON_SCHEMA_NODE_VALUE_PROPERTY_LOCATION,
  ],
  [JsonSchemaNodeValueTypes.NUMBER]: [
    ...jsonSchemaCommonProps,
    JSON_SCHEMA_PROPERTY_FORMAT,
    JSON_SCHEMA_PROPERTY_MULTIPLE_OF,
    JSON_SCHEMA_PROPERTY_MINIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MINIMUM,
    JSON_SCHEMA_PROPERTY_MAXIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MAXIMUM,
  ],
  [JsonSchemaNodeValueTypes.INTEGER]: [
    ...jsonSchemaCommonProps,
    JSON_SCHEMA_PROPERTY_FORMAT,
    JSON_SCHEMA_PROPERTY_MULTIPLE_OF,
    JSON_SCHEMA_PROPERTY_MINIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MINIMUM,
    JSON_SCHEMA_PROPERTY_MAXIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MAXIMUM,
  ],
  [JsonSchemaNodeValueTypes.OBJECT]: [
    ...jsonSchemaCommonProps,
    JSON_SCHEMA_PROPERTY_REQUIRED,
    JSON_SCHEMA_PROPERTY_MIN_PROPERTIES,
    JSON_SCHEMA_PROPERTY_MAX_PROPERTIES,
    JSON_SCHEMA_PROPERTY_PROPERTY_NAMES,
  ],
  [JsonSchemaNodeValueTypes.ARRAY]: [
    ...jsonSchemaCommonProps,
    JSON_SCHEMA_PROPERTY_MIN_ITEMS,
    JSON_SCHEMA_PROPERTY_MAX_ITEMS,
    JSON_SCHEMA_PROPERTY_UNIQUE_ITEMS,
  ],
}

export const jsonSchemaTypeProps: Record<JsonSchemaNodeValueType, readonly string[]> = {
  [JsonSchemaNodeValueTypes.UNKNOWN]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.ANY], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.ANY]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.ANY], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.NOTHING]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.NOTHING], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.BOOLEAN]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.BOOLEAN], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.NULL]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.NULL], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.STRING]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.STRING], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.NUMBER]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.NUMBER], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.INTEGER]: [...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.INTEGER], ...jsonSchemaNodeMetaProps],
  [JsonSchemaNodeValueTypes.OBJECT]: [
    ...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.OBJECT],
    ...jsonSchemaNodeMetaProps,
    JSON_SCHEMA_PROPERTY_PROPERTIES,
    JSON_SCHEMA_PROPERTY_PATTERN_PROPERTIES,
    JSON_SCHEMA_PROPERTY_ADDITIONAL_PROPERTIES,
  ],
  [JsonSchemaNodeValueTypes.ARRAY]: [
    ...jsonSchemaNodeValueProps[JsonSchemaNodeValueTypes.ARRAY],
    ...jsonSchemaNodeMetaProps,
    JSON_SCHEMA_PROPERTY_ITEMS,
    JSON_SCHEMA_PROPERTY_ADDITIONAL_ITEMS,
  ],
}
