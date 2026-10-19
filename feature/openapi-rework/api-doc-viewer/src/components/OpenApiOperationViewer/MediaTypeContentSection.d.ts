import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { OpenApiBlockEdge } from '../../../../next-data-model/src/model/openapi/layout';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC, ReactElement } from '../../../../../node_modules/react';
export type MediaTypeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>;
export declare const BODY_SECTION_TITLE = "Body";
/** Root property name of a wrapped body schema (AsyncAPI parity). */
export declare const WRAPPED_BODY_SCHEMA_TITLE = "Type";
type MediaTypeContentSectionProps = {
    testId: string;
    /** Prefix of the option test ids (`request-media-type` / `response-media-type`): bodies can share media types. */
    optionTestIdPrefix: string;
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
    /** Layout edge of the title row (next-data-model `OpenApiBlockEdges.requestBodyTitleRow` / `responseBodyTitleRow`). */
    titleEdge: OpenApiBlockEdge;
    /** The row between the header and the schema (the body description) and its edge; omitted when hidden. */
    description?: {
        readonly edge: OpenApiBlockEdge;
        readonly render: () => ReactElement;
    };
};
/**
 * "Body" (h3) with the media-type selector in its subheader, the optional description, then the
 * selected media type's schema wrapped under a `Type` root - each an element of its own layout.
 * Request body and response body share it; the builders compute the same outer edges with
 * `OpenApiBlockEdges.body`. Design: entities/request-body.md, entities/responses.md -> "Body".
 */
export declare const MediaTypeContentSection: FC<MediaTypeContentSectionProps>;
export {};
