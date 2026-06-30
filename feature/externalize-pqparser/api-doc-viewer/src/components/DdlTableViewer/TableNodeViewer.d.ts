import { DdlApiTreeNode } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type TableNodeViewerProps = WithPrecededByProps & {
    node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.TABLE>;
    noHeading?: boolean;
};
export declare const TableNodeViewer: FC<TableNodeViewerProps>;
export {};
