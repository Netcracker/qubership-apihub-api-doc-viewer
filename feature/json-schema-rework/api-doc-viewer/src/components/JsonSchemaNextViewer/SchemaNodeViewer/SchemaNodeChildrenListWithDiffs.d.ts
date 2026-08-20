import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodeChildrenListWithDiffsProps = WithPrecededByProps & {
    children: readonly JsonSchemaTreeNodeWithDiffs[];
};
export declare const SchemaNodeChildrenListWithDiffs: FC<SchemaNodeChildrenListWithDiffsProps>;
