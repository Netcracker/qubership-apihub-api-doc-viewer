import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { TextValueVariant } from '../shared-components/TextValue/types';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
type OpenApiExtensionsNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
    variant: TextValueVariant;
    testId: string;
};
/** Operation (h2), Response (h3) and Responses Object (h3) extensions. */
export declare const OpenApiExtensionsNodeViewer: FC<OpenApiExtensionsNodeViewerProps>;
export {};
