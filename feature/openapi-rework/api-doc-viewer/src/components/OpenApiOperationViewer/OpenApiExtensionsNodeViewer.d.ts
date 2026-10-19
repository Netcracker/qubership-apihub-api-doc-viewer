import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { TextValueVariant } from '../shared-components/TextValue/types';
import { OpenApiBlock } from './OpenApiLayout';
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
type OpenApiExtensionsNodeViewerProps = {
    node: ExtensionsNode;
    variant: TextValueVariant;
    testId: string;
};
/** An Extensions section as a layout block: its title row and its JSO viewer, two elements. */
export declare function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps): OpenApiBlock;
export {};
