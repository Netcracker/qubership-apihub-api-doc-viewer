import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeStoredValue, JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { FC } from '../../../../../../node_modules/react';
export type SchemaNodePlainContentProps = {
    node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs;
    displayValue?: JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null;
    isLastInList?: boolean;
};
export declare const SchemaNodePlainContent: FC<SchemaNodePlainContentProps>;
