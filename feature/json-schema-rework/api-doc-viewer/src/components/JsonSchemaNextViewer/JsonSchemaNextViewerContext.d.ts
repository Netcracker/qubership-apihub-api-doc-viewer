import { JsonSchemaTreeNode } from '../../../../next-data-model/src/model/json-schema/types/aliases';
export type JsonSchemaNextViewerContextValue = {
    expandedDepth: number;
    materializeChildren: (node: JsonSchemaTreeNode) => void;
    /** Bumped after lazy materialization so viewers re-read `childrenNodes()`. */
    treeRevision: number;
};
export declare const JsonSchemaNextViewerContext: import('../../../../../node_modules/react').Context<JsonSchemaNextViewerContextValue | null>;
export declare function useJsonSchemaNextViewerContext(): JsonSchemaNextViewerContextValue;
