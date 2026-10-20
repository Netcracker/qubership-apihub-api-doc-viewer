import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
/** Severities of a Security section node in a with-diffs tree (any API type); `undefined` in a plain tree. */
export declare function takeSecuritySeverities(node: ITreeNode | null | undefined): NodeDiffsSeverities | undefined;
