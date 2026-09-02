import { LayoutSide } from '../../../types/internal/LayoutSide';
import { SideListDisplay } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/list-side-display';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { FC } from '../../../../../../node_modules/react';
type JsonSchemaTypeLabelWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    layoutSide: LayoutSide;
};
export type JsonSchemaTypeLabelSideDisplayProps = {
    display: SideListDisplay;
    layoutSide: LayoutSide;
};
/**
 * Renders an already-resolved {@link SideListDisplay} (type/format/title segments with
 * per-side diff highlighting). Extracted so other rows - e.g. the nesting-indicator row -
 * can render type/format/title in exactly the same format as the title row subheader.
 */
export declare const JsonSchemaTypeLabelSideDisplay: FC<JsonSchemaTypeLabelSideDisplayProps>;
export declare const JsonSchemaTypeLabelWithDiffs: FC<JsonSchemaTypeLabelWithDiffsProps>;
export {};
