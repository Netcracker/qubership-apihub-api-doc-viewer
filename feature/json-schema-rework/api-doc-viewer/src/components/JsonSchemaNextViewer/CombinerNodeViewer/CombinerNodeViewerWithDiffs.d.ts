import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type CombinerNodeViewerWithDiffsProps = WithPrecededByProps & {
    node: JsonSchemaTreeNodeWithDiffs;
};
export declare const CombinerNodeViewerWithDiffs: FC<CombinerNodeViewerWithDiffsProps>;
