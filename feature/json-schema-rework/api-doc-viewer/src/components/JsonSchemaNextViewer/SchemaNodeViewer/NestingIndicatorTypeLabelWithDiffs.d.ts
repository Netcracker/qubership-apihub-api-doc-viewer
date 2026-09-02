import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { FC } from '../../../../../../node_modules/react';
export type NestingIndicatorTypeLabelWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    layoutSide: LayoutSide;
};
/**
 * Nesting-indicator row content for a node's children header, rendered in the exact same
 * format as the title row subheader (type/format/title, per-side diff resolution and
 * highlighting) - invisible on a side whose resolved type is primitive, since a primitive
 * type never has children to introduce.
 */
export declare const NestingIndicatorTypeLabelWithDiffs: FC<NestingIndicatorTypeLabelWithDiffsProps>;
