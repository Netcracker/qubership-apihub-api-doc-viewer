import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { TitleVariant } from "./TitleRow";
type JsoPropertyNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>;
    expandable: boolean;
    expanded?: boolean;
    titleVariant?: TitleVariant;
};
export declare const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps>;
export {};
