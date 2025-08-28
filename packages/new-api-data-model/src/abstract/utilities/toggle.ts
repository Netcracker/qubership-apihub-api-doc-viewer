import { ADV } from "../types/model"

function findIdx<T, R>(array: T[], from: number, predicate: (item: T) => boolean): [number, number] {
  if (from < 0 || from >= array.length) {
    return [-1, -1]
  }
  let start = from
  let end = from
  for (let i = from; i < array.length; i++) {
    if (predicate(array[i])) {
      start = i
      break
    }
  }
  for (let i = array.length - 1; i > from; i--) {
    if (predicate(array[i])) {
      end = i
      break
    }
  }
  return [start, end]
}

export function expand(model: ADV.Row[], expandingRow: ADV.Row): ADV.Row[] {
  const { level } = expandingRow
  const nextLevel = level + 1

  const index = model.findIndex(row => row === expandingRow)
  // wrong input, "expandingRow" is not in "model"
  if (index === -1) {
    return model
  }
  // rows in range [startIdx, finishIdx] are related to "expandingRow"
  const [startIdx, finishIdx] = findIdx(model, index + 1, (row: ADV.Row) => row.level >= nextLevel)
  // set row as expanded
  expandingRow.expanded = true
  // set rows in range [startIdx, finishIdx] as visible
  return model.map((row, rowIndex) => {
    if (rowIndex < startIdx || rowIndex > finishIdx) {
      return row
    }
    if (row.level === nextLevel) {
      row.visible = true
    }
    return row
  })
}

export function collapse(model: ADV.Row[], collapsingRow: ADV.Row): ADV.Row[] {
  const { level } = collapsingRow
  const nextLevel = level + 1

  const index = model.findIndex(row => row === collapsingRow)
  // wrong input, "collapsingRow" is not in "model"
  if (index === -1) {
    return model
  }
  // rows in range [startIdx, finishIdx] are related to "collapsingRow"
  const [startIdx, finishIdx] = findIdx(model, index + 1, (row: ADV.Row) => row.level >= nextLevel)
  // set row as collapsed
  collapsingRow.expanded = false
  // set rows in range [startIdx, finishIdx] as invisible
  return model.map((row, rowIndex) => {
    if (rowIndex < startIdx || rowIndex > finishIdx) {
      return row
    }
    row.visible = false
    return row
  })
}
