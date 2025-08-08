import { GraphApiArgument, isGraphApiRef } from "@netcracker/qubership-apihub-graphapi";
import { ADV, TOptions } from "../../../abstract/types/model";
import { DEFAULT_MAX_LEVEL } from "../../../constants";

export function buildProperty(schema: GraphApiArgument, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nodeKind,
    path = [],
    visible = true,
    nextLevel = 0,
    maxLevel = DEFAULT_MAX_LEVEL,
    cacheService,
  } = options

  const { typeDef, nullable, default: _default } = schema

  if (isGraphApiRef(typeDef)) {
    return []
  }

  const { type, title } = typeDef

  const rows: ADV.Row[] = []

  rows.push({
    type: ADV.RowType.HEADER_ROW,
    level: nextLevel,
    visible,
    path,
    elements: [
      {
        kind: ADV.ElementKind.NODE_TITLE,
        beforeValue: undefined,
        afterValue: nodeTitle,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE,
        beforeValue: undefined,
        afterValue: type.kind,
      },
      {
        kind: ADV.ElementKind.NODE_TYPE_NAME,
        beforeValue: undefined,
        afterValue: title,
      },
      ...(
        !nullable && _default === undefined ? [
          {
            kind: ADV.ElementKind.NODE_ASTERISK,
            beforeValue: undefined,
            afterValue: true,
          }
        ] : []
      )
    ],
  })

  return rows
}