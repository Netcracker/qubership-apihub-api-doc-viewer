import { JsonSchemaTreeNode } from '../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
export type JsonSchemaNodeViewerProps = WithPrecededByProps & {
    node: JsonSchemaTreeNode;
    isLastInList?: boolean;
};
export declare const JsonSchemaNodeViewer: FC<JsonSchemaNodeViewerProps>;
