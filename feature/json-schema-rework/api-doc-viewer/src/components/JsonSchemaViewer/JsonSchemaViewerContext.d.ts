import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../next-data-model/src/model/json-schema/types/aliases';
export type JsonSchemaViewerContextValue = {
    expandedDepth: number;
    materializeChildren: (node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs) => void;
    /** Bumped after lazy materialization so viewers re-read `childrenNodes()`. */
    treeRevision: number;
};
export declare const JsonSchemaViewerContext: import('../../../../../node_modules/react').Context<JsonSchemaViewerContextValue | null>;
export declare function useJsonSchemaViewerContext(): JsonSchemaViewerContextValue;
