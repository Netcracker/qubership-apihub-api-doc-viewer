/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta, GraphApiTreeNode, IModelTree } from '@netcracker/qubership-apihub-api-data-model';
import { GraphSchemaStateCombinaryNode, GraphSchemaStatePropNode } from '../graph-schema';
import { GraphOperationsFilter, IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../types';
export declare class GraphApiStateCombinaryNode extends GraphSchemaStateCombinaryNode<GraphApiTreeNode> {
}
export declare class GraphApiStatePropNode extends GraphSchemaStatePropNode<GraphApiTreeNode> {
    private _filter?;
    constructor(node: GraphApiTreeNode, parent: IModelStatePropNode<GraphApiTreeNode> | null, first?: boolean, _filter?: GraphOperationsFilter | undefined);
    protected buildChildrenNodes(): IModelStateNode<GraphApiTreeNode>[];
    protected createStatePropNode(node: GraphApiTreeNode, first?: boolean): IModelStatePropNode<GraphApiTreeNode>;
    protected createStateCombinaryNode(node: GraphApiTreeNode): IModelStateCombinaryNode<GraphApiTreeNode>;
}
export declare class GraphApiState {
    readonly root: IModelStatePropNode<GraphApiTreeNode> | null;
    constructor(tree: IModelTree<GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta>, operationName?: string, expandDepth?: number);
}
