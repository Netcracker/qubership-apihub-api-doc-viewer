import { FC } from '../../../../../../../node_modules/react';
import { MenuItem } from './types/MenuItem';
export type UxContextMenuProps = {
    visible: boolean;
    onClickAway: () => void;
    menuItems: MenuItem[];
};
export declare const UxContextMenu: FC<UxContextMenuProps>;
