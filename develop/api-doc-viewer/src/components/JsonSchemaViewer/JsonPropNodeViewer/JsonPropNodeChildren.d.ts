import { FC } from '../../../../../../node_modules/react';
import { JsonSchemaDiffTreeNode } from '../../../../../api-data-model/src';
import { IModelStateNode } from '../../../../../api-state-model/src';
import { PropsWithDisabledNestingIndicatorTitle } from '../../../types/internal/PropsWithState';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { NestingIndicatorTitleData } from '../../../types/internal/NestingIndicatorTitleData';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type JsonPropNodeChildrenProps = PropsWithoutChangesSummary<PropsWithDisabledNestingIndicatorTitle & {
    items: IModelStateNode<JsonSchemaDiffTreeNode>[];
    onGlobalSelectNestedNode: (nodeId?: string) => void;
} & PropsWithChanges & {
    nestingIndicatorTitleData?: NestingIndicatorTitleData;
}>;
export declare const JsonPropNodeChildren: FC<JsonPropNodeChildrenProps>;
