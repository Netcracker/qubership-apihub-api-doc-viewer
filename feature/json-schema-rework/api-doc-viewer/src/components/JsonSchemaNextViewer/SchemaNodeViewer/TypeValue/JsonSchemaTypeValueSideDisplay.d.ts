import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { SideListDisplay } from '../../../../../../next-data-model/src/model/abstract/tree-with-diffs/list-side-display';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTypeValueSideDisplayProps = {
    display: SideListDisplay;
    layoutSide: LayoutSide;
    color?: string;
};
/**
 * Local SideListDisplay renderer for JSON Schema type-value text, independent of
 * SubheaderValue/CommaSeparatedListWithDiffs (see JsonSchemaTitleSubheader.tsx note). Shared
 * by both with-diffs orchestrators (title row and nesting-indicator row).
 */
export declare const JsonSchemaTypeValueSideDisplay: FC<JsonSchemaTypeValueSideDisplayProps>;
