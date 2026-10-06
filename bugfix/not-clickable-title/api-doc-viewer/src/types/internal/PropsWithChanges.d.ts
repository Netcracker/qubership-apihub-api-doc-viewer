import { DiffNodeMeta, DiffNodeValue } from '../../../../api-data-model/src';
import { LayoutMode } from '../LayoutMode';
export type PropsWithChanges = Partial<{
    layoutMode: LayoutMode;
    level: number;
}> & DiffNodeValue & DiffNodeMeta;
