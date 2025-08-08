import { DEFAULT_MAX_LEVEL } from "../../../constants";
import { ADV, TObject, TOptions } from "../../../abstract/types/model";

export function buildBooleanSchema(source: TObject, options: TOptions): ADV.Row[] {
  const {
    nodeTitle,
    nextLevel = 0,
    combinerKey,
    path = [],
    visible = true,
    maxLevel = DEFAULT_MAX_LEVEL,
  } = options

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
          afterValue: value,
        })) : []),
      ]
    })
  }

  return rows
}