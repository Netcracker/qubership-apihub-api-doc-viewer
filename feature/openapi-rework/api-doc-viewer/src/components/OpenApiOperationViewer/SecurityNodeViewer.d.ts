import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { OpenApiSectionTail } from './section-preceded-by';
export declare const SECURITY_SECTION_TITLE = "Security";
type SecurityNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>;
    /** What the row after the section assumes about its end (see `OpenApiSectionEntry`). */
    closing: OpenApiSectionTail;
};
/**
 * "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND).
 * Title and toolbar form one block; the "No authentication" text and every card are blocks of their
 * own (a card keeps the outer half-gaps inside its first / last row, frame.css).
 */
export declare const SecurityNodeViewer: FC<SecurityNodeViewerProps>;
export {};
