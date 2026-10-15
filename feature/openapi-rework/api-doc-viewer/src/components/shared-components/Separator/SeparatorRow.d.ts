import { OpenApiSeparatorRow } from '../../../../../next-data-model/src/model/openapi/layout';
import { FC } from '../../../../../../node_modules/react';
import { WithFramePositionProps } from '../Frame/types';
type SeparatorRowProps = WithFramePositionProps & {
    separator: OpenApiSeparatorRow;
};
/**
 * A content-less row between two blocks: per side a stack of bands whose heights and tones come
 * from the layout data (next-data-model `OpenApiLayoutPlanner`), and in diffs mode a decorative badge
 * stub continuing the neighbouring rows' floating badges. No padding, no margin, no text.
 * Design: docs/design/openapi/features/block-separators.md
 */
export declare const SeparatorRow: FC<SeparatorRowProps>;
export {};
