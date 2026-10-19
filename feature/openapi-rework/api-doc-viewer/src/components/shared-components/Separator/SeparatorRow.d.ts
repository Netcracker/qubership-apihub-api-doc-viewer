import { OpenApiSeparatorRow } from '../../../../../next-data-model/src/model/openapi/layout';
import { FC } from '../../../../../../node_modules/react';
import { FramePosition } from '../Frame/types';
/** Frame segment of a separator per side (inside a card: `middle` where the card exists). */
export type SeparatorFramePositions = {
    readonly before?: FramePosition;
    readonly after?: FramePosition;
};
type SeparatorRowProps = {
    separator: OpenApiSeparatorRow;
    framePositions?: SeparatorFramePositions;
};
/**
 * A content-less row: per side a stack of bands whose heights and tones come from the layout data
 * (next-data-model `OpenApiLayoutPlanner`), and in diffs mode a decorative badge stub continuing the
 * neighbouring rows' floating badges. No padding, no margin, no text. Memoised on the interned
 * separator and the frame positions; `renderSeparatorRow` (render-separator-row.tsx) also reuses the
 * rendered element.
 * Design: docs/design/openapi/features/vertical-gaps.md
 */
export declare const SeparatorRow: FC<SeparatorRowProps>;
export {};
