import { DiffRecord } from '../../../../../../../api-data-model/src';
import { FC } from '../../../../../../../../node_modules/react';
import { LayoutMode } from '../../../../../types/LayoutMode';
import { LayoutSide } from '../../../../../types/internal/LayoutSide';
export type DirectivesSubtitleProps = {
    values: string[];
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    $metaChanges?: DiffRecord;
};
export declare const DirectivesSubtitle: FC<DirectivesSubtitleProps>;
