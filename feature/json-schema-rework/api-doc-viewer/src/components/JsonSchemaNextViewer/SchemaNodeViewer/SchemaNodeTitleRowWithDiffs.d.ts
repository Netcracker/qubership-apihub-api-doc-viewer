import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeStoredValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { FC } from '../../../../../../node_modules/react';
import { TitleRowProps } from "../../shared-components/TitleRow/types";
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodeTitleRowWithDiffsProps = WithPrecededByProps & {
    ownerNode: JsonSchemaTreeNodeWithDiffs;
    displayNode?: JsonSchemaTreeNodeWithDiffs;
    displayValue?: JsonSchemaTreeNodeStoredValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList?: boolean;
    expandable?: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    titleRowDiffProps?: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">;
};
export declare const SchemaNodeTitleRowWithDiffs: FC<SchemaNodeTitleRowWithDiffsProps>;
