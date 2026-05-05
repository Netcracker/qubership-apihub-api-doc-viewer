import { useMemo } from "react"

export type JsoValueAppearance = 'text' | 'block'

export type UseJsoValueStylesInput = {
  appearance: JsoValueAppearance
  textClassName?: string
  blockClassName?: string
}

export function useJsoValueStyles(input: UseJsoValueStylesInput): string {
  const {
    appearance,
    textClassName = 'text-slate-500',
    blockClassName = 'border border-slate-300 bg-gray-100 px-2 rounded-md',
  } = input

  return useMemo(() => {
    return [
      'jso-value',
      'subheader',
      appearance === 'text' ? textClassName : blockClassName,
    ].filter(Boolean).join(' ')
  }, [appearance, blockClassName, textClassName])
}
