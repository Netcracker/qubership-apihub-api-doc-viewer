import { GraphApiDiffTreeNode, GraphApiTreeNode } from '../../../../../api-data-model/src';
import { FC } from '../../../../../../node_modules/react';
import { IModelStateNode } from '../../../../../api-state-model/src';
import { GraphSchemaNestingIndicatorTitleData } from '../../../types/internal/NestingIndicatorTitleData';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type GraphPropNodeChildrenProps = PropsWithoutChangesSummary<{
    items: IModelStateNode<GraphApiDiffTreeNode>[] | IModelStateNode<GraphApiTreeNode>[];
    onGlobalSelectNestedNode: (nodeId: string) => void;
} & PropsWithChanges & {
    nestingIndicatorTitleData?: GraphSchemaNestingIndicatorTitleData;
}>;
export declare const GraphPropNodeChildren: FC<GraphPropNodeChildrenProps>;
