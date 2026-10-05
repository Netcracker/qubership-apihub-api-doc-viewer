import { FC, PropsWithChildren, ReactNode } from '../../../../../node_modules/react';
type WrapperProps = {
    wrapper?: FC<PropsWithChildren>;
    children?: ReactNode[];
};
export declare const Wrapper: FC<WrapperProps>;
export declare class DefaultWrappers {
    static readonly DivGap2: FC<PropsWithChildren>;
}
export {};
