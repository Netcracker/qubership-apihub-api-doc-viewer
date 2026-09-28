import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { JsonSchemaPropertyRowVisibility } from '../../../../../next-data-model/src/building-service/json-schema/tree/node-visibility-data/types';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsonSchemaViewerTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeStoredValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
export type SchemaNodeTitleRowSharedInput = {
    ownerNode: JsonSchemaViewerTreeNode;
    displayNode: JsonSchemaViewerTreeNode;
    displayValue?: JsonSchemaTreeNodeStoredValue | null;
    contentVisibility: JsonSchemaPropertyRowVisibility;
    isLastInList: boolean;
    requiredDiff?: Diff;
    withRequiredDiffIndicator?: boolean;
    titleRowDiff?: ChangedPropertyMetaData;
};
export declare function useSchemaNodeTitleRowShared(input: SchemaNodeTitleRowSharedInput): {
    displayValueResolved: import('../../../../../next-data-model/src/model/json-schema/types/node-value').JsonSchemaTreeNodeValue | null | undefined;
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
