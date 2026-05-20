import { JsoTreeNodeWithDiffs } from '../../../../next-data-model/src/model/jso/types/aliases';
import { FC } from '../../../../../node_modules/react';
type JsoPropertyNodeViewerWithDiffsProps = {
    node: JsoTreeNodeWithDiffs;
    supportJsonSchema?: boolean;
};
export declare const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps>;
export {};
