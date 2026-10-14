/** Horizontal extent of one option inside a scrolling strip (relative to the strip's content). */
export type StripItemBox = {
  readonly left: number
  readonly width: number
}

/** Tolerance for sub-pixel layout: an item within 1px of the viewport edge counts as visible. */
const EDGE_TOLERANCE = 1

/** Whether the strip can scroll further left / right. */
export function resolveStripScrollState(scrollLeft: number, clientWidth: number, scrollWidth: number): { canScrollLeft: boolean, canScrollRight: boolean } {
  return {
    canScrollLeft: scrollLeft > EDGE_TOLERANCE,
    canScrollRight: scrollLeft + clientWidth < scrollWidth - EDGE_TOLERANCE,
  }
}

/**
 * Scroll position that reveals exactly one more option in a direction: the first option (not)
 * fully visible past the right edge is aligned to the right edge; the last option cut by the left
 * edge is aligned to the left edge. `undefined` when nothing is hidden in that direction.
 */
export function resolveStripScrollTarget(
  items: readonly StripItemBox[],
  scrollLeft: number,
  clientWidth: number,
  direction: 'left' | 'right',
  /** Room kept between a revealed option and the strip edge (option markers / border shadows). */
  edgeInset = 0,
): number | undefined {
  if (direction === 'right') {
    const viewportRight = scrollLeft + clientWidth
    const next = items.find(item => item.left + item.width + edgeInset > viewportRight + EDGE_TOLERANCE)
    if (!next) {
      return undefined
    }
    // An option wider than the strip (cropped by its max-width anyway) is aligned to its start.
    return next.width + 2 * edgeInset >= clientWidth
      ? Math.max(0, next.left - edgeInset)
      : Math.max(0, next.left + next.width + edgeInset - clientWidth)
  }
  const previous = [...items].reverse().find(item => item.left - edgeInset < scrollLeft - EDGE_TOLERANCE)
  return previous ? Math.max(0, previous.left - edgeInset) : undefined
}
