import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaViewerTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeStoredValue, JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { FC, ReactElement } from '../../../../../../node_modules/react';
import { TitleRowProps } from "../../shared-components/TitleRow/types";
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type SchemaNodeTitleRowBaseProps = WithPrecededByProps & {
    ownerNode: JsonSchemaViewerTreeNode;
    displayNode: JsonSchemaViewerTreeNode;
    displayValue?: JsonSchemaTreeNodeStoredValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList?: boolean;
    expandable?: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    titleRowDiffProps?: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">;
    requiredDiff?: Diff;
    withRequiredDiffIndicator?: boolean;
    renderSubheader: (context: {
        layoutSide: LayoutSide;
        displayValueResolved: JsonSchemaTreeNodeValue | null | undefined;
        displayMeta: ReturnType<JsonSchemaViewerTreeNode["meta"]>;
        displayNode: JsonSchemaViewerTreeNode;
        showTypeSubheader: boolean;
    }) => ReactElement;
};
export declare const SchemaNodeTitleRowBase: FC<SchemaNodeTitleRowBaseProps>;
