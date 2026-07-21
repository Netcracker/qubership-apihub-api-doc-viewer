import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type IndexNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>;
    isLastInList?: boolean;
};
export declare const IndexNodeViewerWithDiffs: FC<IndexNodeViewerWithDiffsProps>;
export {};
