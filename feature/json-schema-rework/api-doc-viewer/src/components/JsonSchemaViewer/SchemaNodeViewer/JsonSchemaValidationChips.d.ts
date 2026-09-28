import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ListSideItem } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/list-side-display';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaValidationChipsProps = {
    layoutSide: LayoutSide;
    sideItems: readonly ListSideItem[];
};
export declare const JsonSchemaValidationChips: FC<JsonSchemaValidationChipsProps>;
