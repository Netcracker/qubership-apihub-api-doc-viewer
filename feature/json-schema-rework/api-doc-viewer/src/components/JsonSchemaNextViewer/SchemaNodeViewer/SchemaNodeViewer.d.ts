import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodeViewerProps = WithPrecededByProps & {
    node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs;
    isLastInList?: boolean;
};
export declare const SchemaNodeViewer: FC<SchemaNodeViewerProps>;
