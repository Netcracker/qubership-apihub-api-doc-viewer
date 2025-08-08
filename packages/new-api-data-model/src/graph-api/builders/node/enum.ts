import { GraphApiEnumDefinition } from "@netcracker/qubership-apihub-graphapi"
import { ADV, TOptions } from "../../../abstract/types/model"
import { DEFAULT_MAX_LEVEL } from "../../../constants"

export function buildEnum(schema: GraphApiEnumDefinition, options: TOptions): ADV.Row[] {
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

  const { type, title, description, directives = {} } = schema
  const { values = {} } = type

  rows.push({
    type: ADV.RowType.TEXT_ROW,
    level: 0,
    visible: true,
    path: [...path, 'deprecationReason'],
    elements: [
      {
        kind: ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON,
        beforeValue: undefined,
        afterValue: 'Temporary test deprecation reason (enum type)',
        assignedDiff: undefined,
      },
    ],
  })

  if (description) {
    rows.push({
      type: ADV.RowType.TEXT_ROW,
      level: nextLevel,
      visible: true,
      path: [...path, 'description'],
      elements: [
        {
          kind: ADV.ElementKind.NODE_DESCRIPTION,
          beforeValue: undefined,
          afterValue: description,
          assignedDiff: undefined,
        },
      ],
    })
  }

  rows.push({
    type: ADV.RowType.MULTILINE_ADDITIONAL_INFO_ROW_TITLE,
    level: nextLevel,
    visible: true,
    path: [...path, 'allowedValues'],
    elements: [
      {
        kind: ADV.ElementKind.ADDITIONAL_INFO_TITLE,
        beforeValue: undefined,
        afterValue: 'Allowed values',
        assignedDiff: undefined,
      }
    ]
  })

  for (const [value, additionalData] of Object.entries(values)) {
    rows.push({
      type: ADV.RowType.MULTILINE_ADDITIONAL_INFO_ROW_VALUE,
      level: nextLevel,
      visible: true,
      path: [...path, 'allowedValues', value],
      elements: [
        {
          kind: ADV.ElementKind.ADDITIONAL_INFO_VALUE,
          beforeValue: undefined,
          afterValue: value,
          assignedDiff: undefined,
        },
        {
          kind: ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON,
          beforeValue: undefined,
          afterValue: 'Temporary test deprecation reason (enum value)',
          assignedDiff: undefined,
        },
        ...(
          additionalData.description ? [
            {
              kind: ADV.ElementKind.NODE_DESCRIPTION,
              beforeValue: undefined,
              afterValue: additionalData.description,
              assignedDiff: undefined,
            }
          ] : []
        )
      ]
    })
  }

  return rows
}
