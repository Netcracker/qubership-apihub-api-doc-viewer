import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaTitleSubheaderProps = {
    value: JsonSchemaTreeNodeValue | null | undefined;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    isCycle: boolean;
    layoutSide: LayoutSide;
};
export declare const JsonSchemaTitleSubheader: FC<JsonSchemaTitleSubheaderProps>;
