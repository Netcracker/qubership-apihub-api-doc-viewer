import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
import { CombinerNodeViewerProps } from "./CombinerNodeViewer";
export type CombinerNodeViewerWithDiffsProps = Omit<CombinerNodeViewerProps, "node"> & {
    node: JsonSchemaTreeNodeWithDiffs;
} & WithPrecededByProps;
export declare const CombinerNodeViewerWithDiffs: FC<CombinerNodeViewerWithDiffsProps>;
