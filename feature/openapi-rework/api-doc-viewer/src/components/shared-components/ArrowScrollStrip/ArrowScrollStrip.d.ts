import { ReactElement } from '../../../../../../node_modules/react';
type ArrowScrollStripProps = {
    /** One element whose direct children are the options (e.g. a `Selector` with `noWrap`). */
    children: ReactElement;
    /** Test ids `<prefix>-strip`, `<prefix>-arrow-left`, `<prefix>-arrow-right`. */
    testIdPrefix: string;
    /** Px kept around the options: diff round markers and border shadows overhang an option by up to 5px. */
    decorationInset?: number;
    /**
     * The vertical inset overhangs the row instead of growing it (negative block margins): a strip in a
     * title row's subheader keeps the row's height. Omitted = the inset is part of the row (toolbar row).
     */
    overhangVertically?: boolean;
};
/**
 * `‹ [option] [option] … ›`: a line of options in a horizontally scrolling strip with a hidden
 * scrollbar. Each arrow scrolls by exactly one option and is disabled at its edge; both arrows are
 * always shown, so the row never jumps. It takes the rest of the row it is placed in. Knows nothing
 * about selectors or API types (security toolbar, response codes, …).
 * Design: docs/design/shared/features/arrow-scroll-strip.md
 */
export declare function ArrowScrollStrip(props: ArrowScrollStripProps): ReactElement;
export {};
