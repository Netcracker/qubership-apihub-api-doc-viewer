import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from '../WithPrecededByProps';
export declare const EXTERNAL_DOCS_LINK_TEXT = "View external documentation";
export type ExternalDocsSide = {
    url: string;
    description?: string;
};
export type ExternalDocsRowProps = WithPrecededByProps & {
    /** URL and description shown on a side; `null` = nothing on that side. */
    resolveSide: (layoutSide: LayoutSide) => ExternalDocsSide | null;
    diff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
/**
 * One link with a static text and an up-right arrow; the description is a hover tooltip.
 * Design: docs/design/openapi/entities/operation.md -> "External docs row".
 */
export declare const ExternalDocsRow: FC<ExternalDocsRowProps>;
