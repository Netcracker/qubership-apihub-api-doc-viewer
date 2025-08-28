
export function isObject(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === 'object' && value !== null
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function printJso(source: unknown, indent: string = '') {
  if (isObject(source)) {
    for (const key in source) {
      if (!isObject(source[key])) {
        console.log(`${indent}${key}: ${source[key]}`)
      } else {
        console.log(`${indent}${key}:`)
        printJso(source[key], `${indent}  `)
      }
    }
  } else {
    console.log(source)
  }
}

export function printJson(source: unknown) {
  console.log(JSON.stringify(source, null, 2))
}

export function groupBy<T>(array: T[], key: PropertyKey): Record<PropertyKey, T[]> {
  const accumulator: Record<PropertyKey, T[]> = {}
  if (array.length === 0) {
    return accumulator
  }
  for (const item of array) {
    if (!isObject(item)) {
      return accumulator
    }
    const group: unknown = item[key]
    const isStringOrNumber = (
      typeof group === 'string' ||
      typeof group === 'number' ||
      typeof group === 'symbol'
    )
    if (!isStringOrNumber) {
      continue
    }
    let groupArray: T[]
    if (!(group in accumulator)) {
      groupArray = []
      accumulator[group] = groupArray
    } else {
      groupArray = Array.isArray(accumulator[group]) ? accumulator[group] : []
    }
    groupArray.push(item)
  }
  return accumulator
}
