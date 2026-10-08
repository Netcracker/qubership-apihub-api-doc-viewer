import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC, ReactElement } from '../../../../../node_modules/react';
import { PrecededBy } from '../shared-components/WithPrecededByProps';
export type MediaTypeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>;
export declare const BODY_SECTION_TITLE = "Body";
/** Root property name of a wrapped body schema (AsyncAPI parity). */
export declare const WRAPPED_BODY_SCHEMA_TITLE = "Type";
type MediaTypeContentSectionProps = {
    precededBy: PrecededBy;
    testId: string;
    mediaTypes: readonly MediaTypeNode[];
    /** Selected media-type node id; `undefined` = the first option. */
    selectedId: string | undefined;
    onSelect: (mediaTypeNodeId: string) => void;
    headerDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
    /** Request body only: the side-exclusive `*` after the title. */
    isRequiredOnSide?: (layoutSide: LayoutSide) => boolean;
    /** Request body only: the `required` tag of a required change. */
    requiredTagDiff?: ChangedPropertyMetaData;
    /** Rows between the header and the schema (the body description). */
    renderBeforeSchema?: () => ReactElement | null;
};
/**
 * "Body" (h3) with the media-type selector in its subheader, then the selected media type's schema
 * wrapped under a `Type` root. Request body and response body share it.
 * Design: entities/request-body.md, entities/responses.md -> "Body".
 */
export declare const MediaTypeContentSection: FC<MediaTypeContentSectionProps>;
export {};
