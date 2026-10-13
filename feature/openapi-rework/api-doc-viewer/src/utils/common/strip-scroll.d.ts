/** Horizontal extent of one option inside a scrolling strip (relative to the strip's content). */
export type StripItemBox = {
    readonly left: number;
    readonly width: number;
};
/** Whether the strip can scroll further left / right. */
export declare function resolveStripScrollState(scrollLeft: number, clientWidth: number, scrollWidth: number): {
    canScrollLeft: boolean;
    canScrollRight: boolean;
};
/**
 * Scroll position that reveals exactly one more option in a direction: the first option (not)
 * fully visible past the right edge is aligned to the right edge; the last option cut by the left
 * edge is aligned to the left edge. `undefined` when nothing is hidden in that direction.
 */
export declare function resolveStripScrollTarget(items: readonly StripItemBox[], scrollLeft: number, clientWidth: number, direction: 'left' | 'right'): number | undefined;
