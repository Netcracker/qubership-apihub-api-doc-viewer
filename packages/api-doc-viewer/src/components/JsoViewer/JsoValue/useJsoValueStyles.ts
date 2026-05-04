type UseJsoValueStylesInput = {
  isPredefinedValueSet: boolean
}

type UseJsoValueStylesResult = {
  valueClasses: string[]
}

export function useJsoValueStyles(input: UseJsoValueStylesInput): UseJsoValueStylesResult {
  const { isPredefinedValueSet } = input
  return {
    valueClasses: isPredefinedValueSet ? ["bg-gray-100", "px-2", "rounded-md"] : [],
  }
}
