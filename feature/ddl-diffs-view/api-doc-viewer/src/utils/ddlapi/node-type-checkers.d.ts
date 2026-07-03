import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { DdlApiTreeNode, DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
export declare function isDdlApiTreeNode(node: ITreeNode): node is DdlApiTreeNode;
export declare function getDdlApiChildNodes(parent: {
    childrenNodes(): ITreeNode[];
}): DdlApiTreeNode[];
export declare function isTableNode(node: ITreeNode): node is DdlApiTreeNode<typeof DdlApiTreeNodeKinds.TABLE>;
export declare function isColumnsNode(node: ITreeNode): node is DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>;
export declare function isColumnNode(node: ITreeNode): node is DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMN>;
export declare function isColumnNodeWithDiffs(node: ITreeNode): node is DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>;
export declare function isIndexesNode(node: ITreeNode): node is DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>;
export declare function isIndexNode(node: ITreeNode): node is DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>;
export declare function isIndexNodeWithDiffs(node: ITreeNode): node is DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>;
export declare function getColumnChildNodes(nodes: readonly ITreeNode[]): DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMN>[];
export declare function getIndexChildNodes(nodes: readonly ITreeNode[]): DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>[];
