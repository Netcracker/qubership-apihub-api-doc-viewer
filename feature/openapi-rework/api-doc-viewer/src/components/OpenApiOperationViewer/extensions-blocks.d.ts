import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { TextValueVariant } from '../shared-components/TextValue/types';
import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
type OpenApiExtensionsNodeViewerProps = {
    node: ExtensionsNode;
    variant: TextValueVariant;
    testId: string;
};
/**
 * An Extensions section as a layout block: its title row and its JSO viewer, two elements. Given the
 * view state it is a collapsible 2nd-level section (response, Responses Object extensions); the
 * operation's own (h2) Extensions are not collapsible.
 */
export declare function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps, collapsibleIn?: OpenApiViewState): StackBlock;
export {};
