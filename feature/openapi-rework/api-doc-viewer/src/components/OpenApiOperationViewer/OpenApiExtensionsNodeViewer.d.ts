import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { TextValueVariant } from '../shared-components/TextValue/types';
import { OpenApiBlock } from './OpenApiLayout';
type OpenApiExtensionsNodeViewerProps = {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
    variant: TextValueVariant;
    testId: string;
};
/** An Extensions section as a layout block (title row + JSO viewer). */
export declare function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps): OpenApiBlock;
/** Operation (h2), Response (h3) and Responses Object (h3) extensions; always ends with the JSO viewer. */
export declare const OpenApiExtensionsNodeViewer: FC<OpenApiExtensionsNodeViewerProps>;
export {};
