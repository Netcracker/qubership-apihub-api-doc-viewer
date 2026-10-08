import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
export declare const RESPONSE_HEADERS_SECTION_TITLE = "Headers";
type ResponseNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>;
    selectedMediaTypeId: string | undefined;
    onSelectMediaType: (mediaTypeId: string) => void;
};
/** The selected response: description, Headers, Extensions, Body - in config order. Design: entities/responses.md. */
export declare const ResponseNodeViewer: FC<ResponseNodeViewerProps>;
export {};
