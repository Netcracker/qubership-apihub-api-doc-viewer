import { LayoutSide } from '../../types/internal/LayoutSide';
import { FC, ReactElement } from '../../../../../node_modules/react';
export type RenderFunction = (layoutSide: LayoutSide) => ReactElement | null;
type ServerAddressRowProps = {
    renderAddress: RenderFunction;
};
export declare const ServerAddressRow: FC<ServerAddressRowProps>;
export {};
