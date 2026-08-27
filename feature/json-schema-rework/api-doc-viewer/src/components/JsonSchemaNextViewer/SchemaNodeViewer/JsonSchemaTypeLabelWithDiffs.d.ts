import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { FC } from '../../../../../../node_modules/react';
type JsonSchemaTypeLabelWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    layoutSide: LayoutSide;
};
export declare const JsonSchemaTypeLabelWithDiffs: FC<JsonSchemaTypeLabelWithDiffsProps>;
export {};
