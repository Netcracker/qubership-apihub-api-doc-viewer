import { createContext, useContext } from "react"

export type AsyncLevelContextValue = {
  beforeLevel: number
  afterLevel: number
}

export const AsyncLevelContext = createContext<AsyncLevelContextValue>({
  beforeLevel: 0,
  afterLevel: 0,
})

export function useAsyncLevelContext(): AsyncLevelContextValue {
  return useContext(AsyncLevelContext)
}