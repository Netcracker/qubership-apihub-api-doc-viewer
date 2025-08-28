import { GraphApiAnyUsage, isGraphApiEnumDefinition, isGraphApiInputObjectDefinition, isGraphApiInterfaceDefinition, isGraphApiListDefinition, isGraphApiObjectDefinition, isGraphApiScalarDefinition, isGraphApiUnionDefinition } from "@netcracker/qubership-apihub-graphapi";
import { InputOutputContext } from "../../../abstract/types/builder";
import { ADV, TOptions } from "../../../abstract/types/model";
import { buildEnum } from "../node/enum";
import { buildList } from "../node/list";
import { buildInputObject, buildObject } from "../node/object";
import { buildScalar } from "../node/scalar";
import { buildUnion } from "../node/union";
import { DEFAULT_MAX_LEVEL } from "../../../constants";

/*
  Take into account 2 cases:
  - output section in Operation
    1. Header Row (title "Output" and asterisk of mandatory only)
    2. List of output fields (with no "Children Header Row" before them)
  - output section in Methods
    1. Children Header Row (title "output<EntityName>" only)
    2. List of output fields
*/

export function buildOutput(
  schema: GraphApiAnyUsage,
  placement: InputOutputContext,
  options: TOptions
): ADV.Row[] {
  const rows: ADV.Row[] = []

  switch (placement) {
    case InputOutputContext.Operation:
      rows.push(...buildOperationOutput(schema, options))
      break
    case InputOutputContext.Method:
      rows.push(...buildMethodOutput(schema, options))
      break
  }

  return rows
}

function buildOperationOutput(schema: GraphApiAnyUsage, options: TOptions): ADV.Row[] {
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

  const rows: ADV.Row[] = []

  const { typeDef, nullable, default: _default } = schema

  rows.push({
    type: ADV.RowType.GRAPHQL_OPERATION_OUTPUT_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
      },
      ...(
        nullable === false ? [
          {
            kind: ADV.ElementKind.NODE_ASTERISK,
            beforeValue: undefined,
            afterValue: true,
          }
        ] : []
      )
    ],
  })

  if (isGraphApiScalarDefinition(typeDef)) {
    rows.push(...buildScalar(typeDef, options))
  } else if (isGraphApiEnumDefinition(typeDef)) {
    rows.push(...buildEnum(typeDef, options))
  } else if (isGraphApiObjectDefinition(typeDef) || isGraphApiInterfaceDefinition(typeDef)) {
    rows.push(...buildObject(typeDef, options))
  } else if (isGraphApiInputObjectDefinition(typeDef)) {
    rows.push(...buildInputObject(typeDef, options))
  } else if (isGraphApiListDefinition(typeDef)) {
    rows.push(...buildList(typeDef, options))
  } else if (isGraphApiUnionDefinition(typeDef)) {
    rows.push(...buildUnion(typeDef, options))
  }

  return rows
}

function buildMethodOutput(schema: GraphApiAnyUsage, options: TOptions): ADV.Row[] {
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

  const rows: ADV.Row[] = []

  const { typeDef, nullable, default: _default } = schema

  rows.push({
    type: ADV.RowType.GRAPHQL_METHOD_OUTPUT_HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
      },
      ...(
        nullable === false ? [
          {
            kind: ADV.ElementKind.NODE_ASTERISK,
            beforeValue: undefined,
            afterValue: true,
          }
        ] : []
      )
    ],
  })

  if (isGraphApiScalarDefinition(typeDef)) {
    rows.push(...buildScalar(typeDef, options))
  } else if (isGraphApiEnumDefinition(typeDef)) {
    rows.push(...buildEnum(typeDef, options))
  } else if (isGraphApiObjectDefinition(typeDef) || isGraphApiInterfaceDefinition(typeDef)) {
    rows.push(...buildObject(typeDef, options))
  } else if (isGraphApiInputObjectDefinition(typeDef)) {
    rows.push(...buildInputObject(typeDef, options))
  } else if (isGraphApiListDefinition(typeDef)) {
    rows.push(...buildList(typeDef, options))
  } else if (isGraphApiUnionDefinition(typeDef)) {
    rows.push(...buildUnion(typeDef, options))
  }

  return rows
}