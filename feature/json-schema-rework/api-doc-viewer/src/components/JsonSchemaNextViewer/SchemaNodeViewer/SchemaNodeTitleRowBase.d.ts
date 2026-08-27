import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { FC, ReactElement } from '../../../../../../node_modules/react';
import { TitleRowProps } from "../../shared-components/TitleRow/types";
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
export type SchemaNodeTitleRowBaseProps = WithPrecededByProps & {
    ownerNode: JsonSchemaTreeNode;
    displayNode: JsonSchemaTreeNode;
    displayValue?: JsonSchemaTreeNodeValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList?: boolean;
    expandable?: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    titleRowDiffProps?: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">;
    renderSubheader: (context: {
        layoutSide: LayoutSide;
        displayValueResolved: JsonSchemaTreeNodeValue | null | undefined;
        displayMeta: ReturnType<JsonSchemaTreeNode["meta"]>;
        displayNode: JsonSchemaTreeNode;
        showTypeSubheader: boolean;
    }) => ReactElement;
};
export declare const SchemaNodeTitleRowBase: FC<SchemaNodeTitleRowBaseProps>;
