import { JsoTreeNode } from '../../../../next-data-model/src/model/jso/types/aliases';
import { JsoTreeNodeKinds } from '../../../../next-data-model/src/model/jso/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { TitleVariant } from "../AsyncApiOperationViewer/TitleRow";
type JsoPropertyNodeViewerProps = {
    node: JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>;
    expandable: boolean;
    expanded?: boolean;
    titleVariant?: TitleVariant;
};
export declare const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps>;
export {};
