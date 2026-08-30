import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
type TableNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.TABLE>;
    noHeading?: boolean;
};
export declare const TableNodeViewerWithDiffs: FC<TableNodeViewerWithDiffsProps>;
export {};
