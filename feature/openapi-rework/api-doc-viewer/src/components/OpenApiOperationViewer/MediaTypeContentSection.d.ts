import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { OpenApiBodyElements } from '../../../../next-data-model/src/model/openapi/layout';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC, ReactElement } from '../../../../../node_modules/react';
export type MediaTypeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>;
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
    /**
     * The Body's elements, decided by the block builder (next-data-model `OpenApiBlockEdges.bodyElements`:
     * title, description?, schema? of the selected media type; collapsed = title). Rendered as given.
     */
    elements: OpenApiBodyElements;
    /** Request body only: the description row, rendered for the `description` element (the builder adds that element only with one). */
    renderDescription?: () => ReactElement;
    /** Node id the section's collapsed state is kept under (view state); expanded by default. */
    sectionNodeId: string;
};
/**
 * "Body" (h3) with the expander and the media-type selector in its title row, then - while expanded -
 * the optional description and the selected media type's schema wrapped under a `Type` root, each an
 * element of its own layout. Request body and response body share it. Which elements exist is decided
 * once by the block builder (`elements`, whose outer edges the parent level plans with
 * `OpenApiBlockEdges.body`); this component only renders them. Design: entities/request-body.md,
 * entities/responses.md -> "Body", features/collapsible-sections.md.
 */
export declare const MediaTypeContentSection: FC<MediaTypeContentSectionProps>;
export {};
