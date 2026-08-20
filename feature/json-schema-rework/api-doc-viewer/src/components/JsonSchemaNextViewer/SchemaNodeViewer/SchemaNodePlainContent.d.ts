import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodePlainContentProps = WithPrecededByProps & {
    node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs;
    displayValue?: JsonSchemaTreeNodeValue | null;
    isLastInList?: boolean;
};
export declare const SchemaNodePlainContent: FC<SchemaNodePlainContentProps>;
