import { MouseEvent } from '../../../../../node_modules/react';
import { ToggleContextMenuHandler } from '../../components/kit/ux/UxContextMenu/types/ToggleContextMenuHandler';
export declare function defaultOnContextMenu(isExpandable: boolean | undefined, onToggleContextMenu: ToggleContextMenuHandler): ((e: MouseEvent<HTMLDivElement>) => void) | undefined;
