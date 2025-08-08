import { ICacheService } from "./cache-service"

export type TObject = Record<PropertyKey, unknown>

export namespace ADV {
  export type PathItem = string | number
  export type Path = PathItem[]
  export interface Row {
    type: RowType
    level: number
    elements: Elements
    entity?: unknown
    combinedEntities?: Record<number, unknown>
    visible: boolean
    expanded?: boolean // only header rows
    path: Path
  }

  export enum RowType {
    HEADER_ROW = 'header-row',
    TEXT_ROW = 'text-row',
    ADDITIONAL_INFO_ROW = 'additional-info-row',
    COMBINER_HEADER_ROW = 'combiner-header-row',
    COMBINER_SELECTOR_ROW = 'combiner-selector-row',
    CHILDREN_HEADER_ROW = 'children-header-row',
    // GraphQL specific
    GRAPHQL_OPERATION_HEADER_ROW = 'graphql-operation-header-row',
    GRAPHQL_METHOD_HEADER_ROW = 'graphql-method-header-row',
    GRAPHQL_OPERATION_ARGUMENTS_HEADER_ROW = 'graphql-operation-arguments-header-row',
    GRAPHQL_OPERATION_OUTPUT_HEADER_ROW = 'graphql-operation-output-header-row',
    GRAPHQL_METHOD_ARGUMENTS_HEADER_ROW = 'graphql-method-arguments-header-row',
    GRAPHQL_METHOD_OUTPUT_HEADER_ROW = 'graphql-method-output-header-row',
    GRAPHQL_DIRECTIVE_HEADER_ROW = 'graphql-directive-header-row',
    MULTILINE_ADDITIONAL_INFO_ROW_TITLE = 'multiline-additional-info-row-title',
    MULTILINE_ADDITIONAL_INFO_ROW_VALUE = 'multiline-additional-info-row-value',
  }

  export enum ElementKind {
    OPERATION_NODE_TITLE_BADGE = 'operation-node-title-badge',
    OPERATION_NODE_OUTPUT_TYPE_NAME = 'operation-node-output-type-name',
    NODE_TITLE_BADGE = 'node-title-badge',
    NODE_TITLE = 'node-title',
    NODE_ASTERISK = 'node-asterisk',
    NODE_TYPE = 'node-type',
    NODE_TYPE_NAME = 'node-type-name',
    NODE_TYPE_COMBINER_KEY = 'node-type-combiner-key',
    NODE_BADGE = 'node-badge',
    NODE_DESCRIPTION = 'node-description',
    ADDITIONAL_INFO_TITLE = 'additional-info-title',
    ADDITIONAL_INFO_VALUE = 'additional-info-value',
    // GraphQL specific
    GRAPHQL_NODE_DEPRECATION_REASON = 'graphql-node-deprecation-reason',
    GRAPHQL_NODE_APPLIED_DIRECTIVE = 'graphql-node-applied-directive',
    GRAPHQL_DIRECTIVE_NODE_LOCATION = 'graphql-directive-node-location',
  }

  export enum MultipleElementKind {
    COMBINER_SELECTOR_BUTTON = 'combiner-selector-button',
    // GraphQL specific
    GRAPHQL_OPERATION_ARGUMENTS = 'graphql-operation-arguments',
    GRAPHQL_OPERATION_ARGUMENT = 'graphql-operation-argument',
    GRAPHQL_OPERATION_OUTPUT = 'graphql-operation-output',
    GRAPHQL_DIRECTIVE_LOCATIONS = 'graphql-directive-locations',
  }

  export interface Element {
    kind: ElementKind
    beforeValue?: unknown
    afterValue?: unknown
    assignedDiff?: unknown // Diff
    group?: number
  }

  export type MultipleElement = {
    kind: MultipleElementKind,
    elements: Elements
  }

  export type Elements = (Element | MultipleElement)[]
}

export type TOptions = Partial<{
  nodeTitle: string
  nodeKind: ADV.ElementKind
  nextLevel: number
  combinerKey: string
  path: ADV.Path
  visible: boolean
  maxLevel?: number
}> & {
  cacheService: ICacheService
}

export function isMultipleElement(element: ADV.Element | ADV.MultipleElement): element is ADV.MultipleElement {
  return 'elements' in element && Array.isArray(element.elements)
}

export function isSingleElement(element: ADV.Element | ADV.MultipleElement): element is ADV.Element {
  return !isMultipleElement(element)
}
