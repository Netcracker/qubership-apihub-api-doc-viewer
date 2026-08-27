import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaTitleSubheaderProps = {
    value: JsonSchemaTreeNodeValue | null | undefined;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    isCycle: boolean;
    layoutSide: LayoutSide;
    showTypeLabel?: boolean;
};
export type JsonSchemaTitleSubheaderWithDiffsProps = {
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    node: JsonSchemaTreeNodeWithDiffs;
    isCycle: boolean;
    layoutSide: LayoutSide;
    showTypeLabel?: boolean;
};
export declare const JsonSchemaTitleSubheader: FC<JsonSchemaTitleSubheaderProps>;
export declare const JsonSchemaTitleSubheaderWithDiffs: FC<JsonSchemaTitleSubheaderWithDiffsProps>;
