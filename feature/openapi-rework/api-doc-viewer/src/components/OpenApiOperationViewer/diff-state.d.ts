import { NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
/** Severities of a node in a with-diffs tree; `undefined` in a plain tree. */
export declare function takeOpenApiSeverities(node: OpenApiTreeNode | null | undefined): NodeDiffsSeverities | undefined;
