import { LayoutSide } from '../../types/internal/LayoutSide';
import { OpenApiLayoutBlock, OpenApiSpacingConfig } from '../../../../next-data-model/src/model/openapi/layout';
import { FC, ReactElement } from '../../../../../node_modules/react';
import { FramePosition } from '../shared-components/Frame/types';
/** A block of OpenAPI rows: its edges (from next-data-model `OpenApiBlockEdges`) and how to render it. */
export type OpenApiBlock = OpenApiLayoutBlock<() => ReactElement>;
type OpenApiLayoutProps = {
    blocks: readonly OpenApiBlock[];
    spacing: OpenApiSpacingConfig;
    /** Frame segment of the separators (inside a card: `middle` on the sides where the card exists). */
    separatorFramePosition?: (layoutSide: LayoutSide) => FramePosition | undefined;
};
/**
 * One container level: the blocks in the given order with the separator rows the planner puts
 * between them. All colours and heights come from the plan; nothing is decided here.
 * Design: docs/design/openapi/features/block-separators.md -> "Viewer rendering".
 */
export declare const OpenApiLayout: FC<OpenApiLayoutProps>;
export {};
