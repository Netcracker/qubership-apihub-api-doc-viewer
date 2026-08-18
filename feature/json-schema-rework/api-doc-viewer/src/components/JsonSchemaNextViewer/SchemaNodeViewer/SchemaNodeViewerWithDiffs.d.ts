import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { SchemaNodeViewerProps } from "./SchemaNodeViewer";
export type SchemaNodeViewerWithDiffsProps = Omit<SchemaNodeViewerProps, "node"> & {
    node: JsonSchemaTreeNodeWithDiffs;
};
export declare const SchemaNodeViewerWithDiffs: FC<SchemaNodeViewerWithDiffsProps>;
