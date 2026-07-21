import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type ColumnNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>;
    additionalInfoPrecededBy?: PrecededBy;
    isLastInList?: boolean;
};
export declare const ColumnNodeViewerWithDiffs: FC<ColumnNodeViewerWithDiffsProps>;
export {};
