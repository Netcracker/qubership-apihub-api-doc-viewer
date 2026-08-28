import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { Diff } from "@netcracker/qubership-apihub-api-diff";
export type SchemaNodeTitleRowSharedInput = {
    ownerNode: JsonSchemaTreeNode;
    displayNode: JsonSchemaTreeNode;
    displayValue?: JsonSchemaTreeNodeValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList: boolean;
    requiredDiff?: Diff;
    withRequiredDiffIndicator?: boolean;
    titleRowDiff?: ChangedPropertyMetaData;
};
export declare function useSchemaNodeTitleRowShared(input: SchemaNodeTitleRowSharedInput): {
    displayValueResolved: import('../../../../../next-data-model/src/model/json-schema/types/node-value').JsonSchemaTreeNodeValueBase | null;
    displayMeta: Partial<{
        readonly required: boolean;
        readonly deprecated: boolean;
        readonly readOnly: boolean;
        readonly writeOnly: boolean;
        readonly externalDocs: unknown;
        readonly brokenRef: string;
        readonly _fragment: unknown;
        readonly isCycle: boolean;
    }>;
    listLastRowFlags: import('../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types').JsonSchemaPropertyListLastRowFlags;
    titleContent: (layoutSide: LayoutSide) => import('../../../../../../node_modules/react/jsx-runtime').JSX.Element | null;
    showTypeSubheader: boolean;
};
