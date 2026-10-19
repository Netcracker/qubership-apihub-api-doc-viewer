import { OpenApiLayoutBlock, OpenApiLayoutLevel } from '../../../../next-data-model/src/model/openapi/layout';
import { FC, ReactElement } from '../../../../../node_modules/react';
import { SeparatorFramePositions } from '../shared-components/Separator/SeparatorRow';
/** A block of OpenAPI elements: its edges (from next-data-model `OpenApiBlockEdges`) and how to render it. */
export type OpenApiBlock = OpenApiLayoutBlock<() => ReactElement>;
type OpenApiLayoutProps = {
    blocks: readonly OpenApiBlock[];
    /** The container level: its level gap (config `levelGap`). */
    level: OpenApiLayoutLevel;
    /** Also the first element's upper half and the last element's lower half (viewer edges, inside a card). */
    outerHalves?: boolean;
    /** Frame segment of the separators per side (inside a card: `middle` where the card exists). */
    separatorFramePositions?: SeparatorFramePositions;
};
/**
 * One container level: the blocks in the given order with the separator rows the planner puts
 * between them. All colours and heights come from the plan; nothing is decided here. Separator
 * elements are shared (`renderSeparatorRow`), so equal separators are drawn from one element.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */
export declare const OpenApiLayout: FC<OpenApiLayoutProps>;
export {};
