import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../next-data-model/src/model/json-schema/types/aliases';
import { TopLevelPropsMediaTypesMap } from './utils/top-level-props-media-types';
export type JsonSchemaViewerContextValue = {
    expandedDepth: number;
    materializeChildren: (node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs) => void;
    /** Bumped after lazy materialization so viewers re-read `childrenNodes()`. */
    treeRevision: number;
    /** Plain viewer only - see docs/design/json-schema/features/top-level-props-media-types.md */
    topLevelPropsMediaTypes?: TopLevelPropsMediaTypesMap;
};
export declare const JsonSchemaViewerContext: import('../../../../../node_modules/react').Context<JsonSchemaViewerContextValue | null>;
export declare function useJsonSchemaViewerContext(): JsonSchemaViewerContextValue;
