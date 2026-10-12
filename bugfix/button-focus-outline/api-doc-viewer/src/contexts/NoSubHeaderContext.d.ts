import { FC, PropsWithChildren } from '../../../../node_modules/react';
import { LayoutSide } from '../types/internal/LayoutSide';
import { IModelTreeNode } from '../../../api-data-model/src';
type Value = LayoutSide | undefined;
type SetValue = ((stateNode?: IModelTreeNode<any, any, any>) => void) | undefined;
type NoSubHeaderContextProviderProps = PropsWithChildren & {
    value: LayoutSide | undefined;
    setValue: (stateNode?: IModelTreeNode<any, any, any>) => void;
};
export declare function useNoSubHeaderSide(): Value;
export declare function useSetNoSubHeaderSide(): SetValue;
export declare const NoSubHeaderSideProvider: FC<NoSubHeaderContextProviderProps>;
export {};
