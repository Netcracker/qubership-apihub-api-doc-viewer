import { JsoTreeNode } from '../../../../next-data-model/src/model/jso/types/aliases';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type JsoPropertyNodeViewerProps = WithPrecededByProps & {
    node: JsoTreeNode;
    supportJsonSchema?: boolean;
};
export declare const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps>;
export {};
