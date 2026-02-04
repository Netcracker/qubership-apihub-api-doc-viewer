import { createContext, useContext } from "react"

export const CustomizationOptionsContext = createContext<CutomizationOptions | undefined>(undefined)

export function useCustomizationOptions(): CutomizationOptions | undefined {
  return useContext(CustomizationOptionsContext)
}

export type CutomizationOptions = {
  headerRowTitle?: string
  headerRowFontSize?: 'default' | 'body' | 'h1' | 'h2' | 'h3'
}
