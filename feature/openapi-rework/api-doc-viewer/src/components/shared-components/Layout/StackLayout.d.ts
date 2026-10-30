import { LayoutBlock } from '../../../../../next-data-model/src/model/abstract/layout';
import { FC, ReactElement } from '../../../../../../node_modules/react';
import { SeparatorFramePositions } from '../Separator/SeparatorRow';
/** A block of layout elements: its edges (from next-data-model `BlockEdges` and its subclasses) and how to render it. */
export type StackBlock = LayoutBlock<() => ReactElement>;
type StackLayoutProps = {
    blocks: readonly StackBlock[];
    /** The container level (a shared `SharedLayoutLevel` or one of the API type's own): its level gap (config `levelGap`). */
    level: string;
    /** Also the first element's upper half and the last element's lower half (viewer edges, inside a card). */
    outerHalves?: boolean;
    /** Frame segment of the separators per side (inside a card: `middle` where the card exists). */
    separatorFramePositions?: SeparatorFramePositions;
};
/**
 * One container level: the blocks in the given order with the separator rows the planner puts
 * between them. All colours and heights come from the plan; nothing is decided here. Spacing comes
 * from `LayoutSpacingContext`. Separator elements are shared (`renderSeparatorRow`), so equal
 * separators are drawn from one element.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */
export declare const StackLayout: FC<StackLayoutProps>;
export {};
