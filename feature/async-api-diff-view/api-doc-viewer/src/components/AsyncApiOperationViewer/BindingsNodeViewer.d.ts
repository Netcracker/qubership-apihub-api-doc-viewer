import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { SizeVariant } from "./types/SizeVariant";
type BindingsNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>;
    variant?: SizeVariant;
};
export declare const BindingsNodeViewer: FC<BindingsNodeViewerProps>;
export {};
