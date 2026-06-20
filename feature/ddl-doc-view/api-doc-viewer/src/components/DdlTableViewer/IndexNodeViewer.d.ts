import { DdlApiTreeNode } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type IndexNodeViewerProps = WithPrecededByProps & {
    node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>;
};
export declare const IndexNodeViewer: FC<IndexNodeViewerProps>;
export {};
