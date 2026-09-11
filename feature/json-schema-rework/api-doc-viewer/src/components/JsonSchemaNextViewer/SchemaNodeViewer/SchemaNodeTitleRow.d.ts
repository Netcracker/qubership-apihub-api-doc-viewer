import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodeTitleRowProps = WithPrecededByProps & {
    ownerNode: JsonSchemaTreeNode;
    displayNode?: JsonSchemaTreeNode;
    displayValue?: JsonSchemaTreeNodeValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList?: boolean;
    expandable?: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    /** See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this. */
    typeValueSuffix?: string;
};
export declare const SchemaNodeTitleRow: FC<SchemaNodeTitleRowProps>;
