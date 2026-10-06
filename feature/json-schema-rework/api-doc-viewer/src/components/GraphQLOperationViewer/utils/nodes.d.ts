import { IModelTreeNode } from '../../../../../api-data-model/src';
export declare function isOperationNode(node?: IModelTreeNode<any, any, any> | null): boolean;
export declare function isPropertyNode(node?: IModelTreeNode<any, any, any> | null): boolean;
export declare function matchNodeKind(kind: string, node?: IModelTreeNode<any, any, any> | null): boolean;
