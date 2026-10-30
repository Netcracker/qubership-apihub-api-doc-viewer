import { LayoutSeparatorRow } from "@netcracker/qubership-apihub-next-data-model/model/abstract/layout"
import { ReactElement } from "react"
import { SeparatorFramePositions, SeparatorRow } from "./SeparatorRow"

/** Rendered separator elements, shared by every viewer: one element per look. Bounded. */
const ELEMENT_CACHE = new Map<string, ReactElement>()
const ELEMENT_CACHE_LIMIT = 1000

/**
 * The separator row element for `separator` with these frame positions - the same element object
 * every time, so React skips it on re-render. Context (layout mode) still reaches it: the memoised
 * component re-renders only when the context it reads changes.
 */
export function renderSeparatorRow(separator: LayoutSeparatorRow, framePositions?: SeparatorFramePositions): ReactElement {
  const key = `${separator.signature}#${framePositions?.before ?? ''}#${framePositions?.after ?? ''}`
  const cached = ELEMENT_CACHE.get(key)
  if (cached) {
    return cached
  }
  if (ELEMENT_CACHE.size >= ELEMENT_CACHE_LIMIT) {
    ELEMENT_CACHE.clear()
  }
  const element = <SeparatorRow separator={separator} framePositions={framePositions} />
  ELEMENT_CACHE.set(key, element)
  return element
}
