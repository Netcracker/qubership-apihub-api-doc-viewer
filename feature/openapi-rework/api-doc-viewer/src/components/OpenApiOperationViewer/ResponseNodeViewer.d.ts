import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { OpenApiSectionEntry, OpenApiSectionTail } from './section-preceded-by';
export declare const RESPONSE_HEADERS_SECTION_TITLE = "Headers";
type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>;
type ResponseSectionsParams = {
    node: ResponseNode;
    selectedMediaTypeId: string | undefined;
    onSelectMediaType: (mediaTypeId: string) => void;
};
/** The sections of one response (description, Headers, Extensions, Body) in config order. */
export declare function buildResponseSections(params: ResponseSectionsParams): OpenApiSectionEntry[];
type ResponseNodeViewerProps = WithPrecededByProps & ResponseSectionsParams & {
    /** What the row after the response assumes about its end (see `OpenApiSectionEntry`). */
    closing: OpenApiSectionTail;
};
/** The selected response: description, Headers, Extensions, Body - in config order. Design: entities/responses.md. */
export declare const ResponseNodeViewer: FC<ResponseNodeViewerProps>;
export {};
