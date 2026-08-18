import { JsonSchemaTreeNodeWithDiffs } from '../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
export type JsonSchemaNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: JsonSchemaTreeNodeWithDiffs;
    isLastInList?: boolean;
};
export declare const JsonSchemaNodeViewerWithDiffs: FC<JsonSchemaNodeViewerWithDiffsProps>;
