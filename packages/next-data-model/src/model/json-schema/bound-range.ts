export type JsonSchemaBoundRangeLabel = Partial<{
  lower: string
  upper: string
}>

export type JsonSchemaBoundRangeResult = {
  data: JsonSchemaBoundRangeLabel
  visible: boolean
}

export type JsonSchemaBoundRangeInput = {
  min?: number
  max?: number
  exclusiveMin?: number | boolean
  exclusiveMax?: number | boolean
}

const DEFAULT_CHARACTER = "?"
const VALUE_MASK = "{value}"
const EXCLUSIVE_VALUE_MASK = "{exclusive_value}"
const GREATER_THAN = ">"
const GREATER_THAN_OR_EQUALS = ">="
const LESS_THAN = "<"
const LESS_THAN_OR_EQUALS = "<="

const BITWISE_MINIMUM = 1 << 0
const BITWISE_EXCLUSIVE_MINIMUM = 1 << 1
const BITWISE_MAXIMUM = 1 << 2
const BITWISE_EXCLUSIVE_MAXIMUM = 1 << 3

const MINIMAX_CHAINS_MAPPING: Record<number, JsonSchemaBoundRangeLabel> = {
  0: { lower: undefined, upper: undefined },
  [BITWISE_MINIMUM]: { lower: `${GREATER_THAN_OR_EQUALS} ${VALUE_MASK}`, upper: undefined },
  [BITWISE_EXCLUSIVE_MINIMUM]: { lower: `${GREATER_THAN} ${EXCLUSIVE_VALUE_MASK}`, upper: undefined },
  [BITWISE_MAXIMUM]: { lower: undefined, upper: `${LESS_THAN_OR_EQUALS} ${VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MAXIMUM]: { lower: undefined, upper: `${LESS_THAN} ${EXCLUSIVE_VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MINIMUM]:
    { lower: `${GREATER_THAN} ${VALUE_MASK}`, upper: undefined },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${EXCLUSIVE_VALUE_MASK}`, upper: `${LESS_THAN_OR_EQUALS} ${VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_EXCLUSIVE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${EXCLUSIVE_VALUE_MASK}`, upper: `${LESS_THAN} ${EXCLUSIVE_VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MAXIMUM | BITWISE_MINIMUM]:
    { lower: `${GREATER_THAN_OR_EQUALS} ${VALUE_MASK}`, upper: `${LESS_THAN} ${EXCLUSIVE_VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MAXIMUM | BITWISE_MAXIMUM]:
    { lower: undefined, upper: `${LESS_THAN} ${VALUE_MASK}` },
  [BITWISE_MAXIMUM | BITWISE_MINIMUM]:
    { lower: `${GREATER_THAN_OR_EQUALS} ${VALUE_MASK}`, upper: `${LESS_THAN_OR_EQUALS} ${VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MINIMUM | BITWISE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${VALUE_MASK}`, upper: `${LESS_THAN_OR_EQUALS} ${VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MINIMUM | BITWISE_EXCLUSIVE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${VALUE_MASK}`, upper: `${LESS_THAN} ${EXCLUSIVE_VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MAXIMUM | BITWISE_EXCLUSIVE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${EXCLUSIVE_VALUE_MASK}`, upper: `${LESS_THAN} ${VALUE_MASK}` },
  [BITWISE_EXCLUSIVE_MAXIMUM | BITWISE_MINIMUM | BITWISE_MAXIMUM]:
    { lower: `${GREATER_THAN_OR_EQUALS} ${VALUE_MASK}`, upper: `${LESS_THAN} ${VALUE_MASK}` },
  [BITWISE_MINIMUM | BITWISE_EXCLUSIVE_MINIMUM | BITWISE_MAXIMUM | BITWISE_EXCLUSIVE_MAXIMUM]:
    { lower: `${GREATER_THAN} ${VALUE_MASK}`, upper: `${LESS_THAN} ${VALUE_MASK}` },
}

function isDefined(value: unknown): value is NonNullable<unknown> {
  return value !== undefined && value !== null
}

function isExclusiveActive(value: number | boolean | undefined): boolean {
  return value !== undefined && value !== false
}

function resolveEffectiveLowerBitwiseKey(key: number, minValue: unknown, exclMinValue: number | undefined): number {
  if ((key & (BITWISE_MINIMUM | BITWISE_EXCLUSIVE_MINIMUM)) !== (BITWISE_MINIMUM | BITWISE_EXCLUSIVE_MINIMUM)) {
    return key
  }
  if (exclMinValue === undefined || typeof minValue !== "number") {
    return key
  }
  return exclMinValue >= minValue
    ? key & ~BITWISE_MINIMUM
    : key & ~BITWISE_EXCLUSIVE_MINIMUM
}

function resolveEffectiveUpperBitwiseKey(key: number, maxValue: unknown, exclMaxValue: number | undefined): number {
  if ((key & (BITWISE_MAXIMUM | BITWISE_EXCLUSIVE_MAXIMUM)) !== (BITWISE_MAXIMUM | BITWISE_EXCLUSIVE_MAXIMUM)) {
    return key
  }
  if (exclMaxValue === undefined || typeof maxValue !== "number") {
    return key
  }
  return exclMaxValue <= maxValue
    ? key & ~BITWISE_MAXIMUM
    : key & ~BITWISE_EXCLUSIVE_MAXIMUM
}

function substituteValues(
  template: string,
  regularValue: unknown,
  exclusiveValue: number | undefined,
): string {
  return template
    .replace(VALUE_MASK, `${regularValue}`)
    .replace(EXCLUSIVE_VALUE_MASK, isDefined(exclusiveValue) ? `${exclusiveValue}` : DEFAULT_CHARACTER)
}

function isVisible(lower?: string, upper?: string): boolean {
  return isDefined(lower) || isDefined(upper)
}

export function resolveBoundRangeLabel(input: JsonSchemaBoundRangeInput): JsonSchemaBoundRangeResult {
  const result: JsonSchemaBoundRangeResult = {
    data: {},
    visible: false,
  }

  const { min, max, exclusiveMin, exclusiveMax } = input
  const exclusiveLowerValue = typeof exclusiveMin === "number" ? exclusiveMin : undefined
  const exclusiveUpperValue = typeof exclusiveMax === "number" ? exclusiveMax : undefined

  let bitwiseKey = 0

  if (min !== undefined) {
    bitwiseKey |= BITWISE_MINIMUM
  }
  if (isExclusiveActive(exclusiveMin)) {
    bitwiseKey |= BITWISE_EXCLUSIVE_MINIMUM
  }
  if (max !== undefined) {
    bitwiseKey |= BITWISE_MAXIMUM
  }
  if (isExclusiveActive(exclusiveMax)) {
    bitwiseKey |= BITWISE_EXCLUSIVE_MAXIMUM
  }

  if (typeof exclusiveMin !== "number" && !(bitwiseKey & BITWISE_MINIMUM)) {
    bitwiseKey &= ~BITWISE_EXCLUSIVE_MINIMUM
  }
  if (typeof exclusiveMax !== "number" && !(bitwiseKey & BITWISE_MAXIMUM)) {
    bitwiseKey &= ~BITWISE_EXCLUSIVE_MAXIMUM
  }

  bitwiseKey = resolveEffectiveLowerBitwiseKey(bitwiseKey, min, exclusiveLowerValue)
  bitwiseKey = resolveEffectiveUpperBitwiseKey(bitwiseKey, max, exclusiveUpperValue)

  const mapping = bitwiseKey in MINIMAX_CHAINS_MAPPING
    ? { ...MINIMAX_CHAINS_MAPPING[bitwiseKey] }
    : undefined

  if (mapping?.lower) {
    result.data.lower = substituteValues(mapping.lower, min, exclusiveLowerValue)
  }
  if (mapping?.upper) {
    result.data.upper = substituteValues(mapping.upper, max, exclusiveUpperValue)
  }

  result.visible = isVisible(result.data.lower, result.data.upper)
  return result
}
