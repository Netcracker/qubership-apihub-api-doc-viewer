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
import { GraphApiTreeNode, IModelTreeNode } from '@netcracker/qubership-apihub-api-data-model';
import { JsonSchemaState, JsonSchemaStateCombinaryNode, JsonSchemaStatePropNode } from '../json-schema';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../types';
export declare class GraphSchemaStateCombinaryNode<T extends IModelTreeNode<any, any, any> = GraphApiTreeNode> extends JsonSchemaStateCombinaryNode<T> {
}
export declare class GraphSchemaStatePropNode<T extends IModelTreeNode<any, any, any> = GraphApiTreeNode> extends JsonSchemaStatePropNode<T> {
    private _argNodes;
    private _directiveUsageNodes;
    private _outputNodes;
    get args(): IModelStatePropNode<T>[];
    get output(): IModelStatePropNode<T>[];
    get value(): any;
    get meta(): any;
    sort(sort?: number): void;
    setSelected(value: string | undefined): void;
    private buildDirectiveUsageNodes;
    private buildArgNodes;
    protected buildCombinaryNodes(): IModelStateCombinaryNode<T>[];
    protected buildChildrenNodes(sort: number): IModelStateNode<T>[];
    protected buildChildren(): IModelStateNode<T>[];
    protected createStatePropNode(node: T, first?: boolean): IModelStatePropNode<T>;
    protected createStateCombinaryNode(node: T): IModelStateCombinaryNode<T>;
}
export declare class GraphSchemaState<T extends IModelTreeNode<any, any, any> = GraphApiTreeNode> extends JsonSchemaState<T> {
    protected createStatePropNode(node: T): IModelStatePropNode<T>;
}
