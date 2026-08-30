import { FC } from '../../../../../../../node_modules/react';
import { NodeTitleData } from '../../../../types/NodeTitleData';
import { NodeTypeData } from '../../../../types/NodeTypeData';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
export type HeaderRowState = {
    isExpandable?: boolean;
    expanded: boolean;
    sorted: number;
    isRoot: boolean;
    onToggleExpander: () => void;
    onToggleSort: () => void;
};
export type HeaderRowProps = {
    nodeTitleData: NodeTitleData;
    nodeTypeData: NodeTypeData | null;
    isCircularRef: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    deprecated?: boolean;
} & HeaderRowState & PropsWithChanges;
export declare const HeaderRow: FC<HeaderRowProps>;
