import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { PrecededBy } from '../../shared-components/WithPrecededByProps';
export type SchemaNodeChildrenListWithDiffsProps = {
    children: readonly JsonSchemaTreeNodeWithDiffs[];
    /** `data-precededby` of the first visible node row (see `JsonSchemaDiffsViewerProps.firstRowPrecededBy`). */
    firstRowPrecededBy?: PrecededBy;
};
export declare const SchemaNodeChildrenListWithDiffs: FC<SchemaNodeChildrenListWithDiffsProps>;
