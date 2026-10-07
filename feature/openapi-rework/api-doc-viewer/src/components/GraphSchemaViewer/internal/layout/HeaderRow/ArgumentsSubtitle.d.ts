import { GraphApiDiffTreeNode, GraphApiTreeNode } from '../../../../../../../api-data-model/src';
import { IModelStatePropNode } from '../../../../../../../api-state-model/src';
import { FC } from '../../../../../../../../node_modules/react';
import { LayoutMode } from '../../../../../types/LayoutMode';
import { LayoutSide } from '../../../../../types/internal/LayoutSide';
type ArgumentsSubTitleProps = {
    values: IModelStatePropNode<GraphApiDiffTreeNode>[] | IModelStatePropNode<GraphApiTreeNode>[];
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    disableChanges: boolean;
};
export declare const ArgumentsSubTitle: FC<ArgumentsSubTitleProps>;
export {};
