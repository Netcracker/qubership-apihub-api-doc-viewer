import { JsoTreeNode } from '../../../../next-data-model/src/model/jso/types/aliases';
import { JsoTreeNodeKinds } from '../../../../next-data-model/src/model/jso/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type JsoPropertyNodeViewerProps = {
    node: JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>;
    expandable: boolean;
    expanded?: boolean;
    supportJsonSchema?: boolean;
};
export declare const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps>;
export {};
