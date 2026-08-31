import { JsoTreeNodeWithDiffs } from '../../../../next-data-model/src/model/jso/types/aliases';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type JsoPropertyNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: JsoTreeNodeWithDiffs;
    supportJsonSchema?: boolean;
};
export declare const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps>;
export {};
