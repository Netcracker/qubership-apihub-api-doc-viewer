import { OpenApiBadgeSegment } from '../../../../../next-data-model/src/model/openapi/layout';
import { FC } from '../../../../../../node_modules/react';
type BadgeStubProps = {
    /** Stacked segments from the layout data; a segment without a type leaves a gap. */
    segments: readonly OpenApiBadgeSegment[];
};
/**
 * A decorative stand-in for the diffs floating badge on a synthetic row (separator, card frame row):
 * the same 4px bar at the same place (`UxDiffFloatingBadge`), coloured like the neighbouring row's
 * badge, but not hoverable and without text. Renders nothing when no segment has a type.
 * Design: docs/design/openapi/features/block-separators.md -> §9.2.
 */
export declare const BadgeStub: FC<BadgeStubProps>;
export {};
