import { Page } from 'puppeteer';
import { ViewComponent } from './view-component';
/**
 * Screenshot steps for an `ArrowScrollStrip` (design: docs/design/shared/features/arrow-scroll-strip.md
 * -> "Tests"). Arrows are clicked in the DOM, not with the mouse, so no hover background is captured.
 */
export type ArrowScrollStripTarget = {
    /** The strip's test-id prefix: `security-toolbar`, `response-codes`. */
    readonly testIdPrefix: string;
    /** Which strip with that prefix, in document order: `0` = the only one / the origin side, `1` = the changed side. */
    readonly index?: number;
};
/** Whether each arrow is enabled. */
export type ArrowScrollStripArrows = {
    readonly left: boolean;
    readonly right: boolean;
};
/** Enabled state of both arrows of the strip. */
export declare function readArrowScrollStripArrows(page: Page, target: ArrowScrollStripTarget): Promise<ArrowScrollStripArrows>;
/**
 * Captures an overflowing strip in its three states, asserting the arrows of each: left edge
 * (initial), middle (the median option scrolled to the strip's centre), right edge (the right arrow disabled).
 */
export declare function expectArrowScrollStripStates(page: Page, component: ViewComponent, target: ArrowScrollStripTarget): Promise<void>;
