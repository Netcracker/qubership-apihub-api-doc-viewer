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
import { IModelTreeNode, JsonSchemaModelTree, JsonSchemaNode, JsonSchemaTreeNode } from '@netcracker/qubership-apihub-api-data-model';
import { NodesChangesSummary } from '../../types/aliases/changes';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode, ModelStateNodeType } from '../types';
export declare class JsonSchemaStateCombinaryNode<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode> implements IModelStateCombinaryNode<T> {
    readonly node: T;
    readonly parent: IModelStatePropNode<T>;
    readonly type: "combinary";
    protected _selected: string | undefined;
    private $nestedChangesSummaryValue?;
    constructor(node: T, parent: IModelStatePropNode<T>, selected?: string);
    get nested(): IModelTreeNode<any, any, any>[];
    get selected(): string | undefined;
    get $nestedChangesSummary(): NodesChangesSummary;
    select(id: string): void;
}
export declare class JsonSchemaStatePropNode<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode> implements IModelStatePropNode<T> {
    readonly node: T;
    readonly parent: IModelStatePropNode<T> | null;
    first: boolean;
    protected _combinaryNodes: IModelStateCombinaryNode<T>[];
    protected _childrenNodes: IModelStatePropNode<T>[];
    protected _expanded: boolean;
    protected _selected: string | undefined;
    protected _children: IModelStateNode<T>[] | null;
    protected _sort: number;
    readonly type: Exclude<ModelStateNodeType, 'combinary'>;
    constructor(node: T, parent?: IModelStatePropNode<T> | null, first?: boolean);
    get sorted(): number;
    get expanded(): boolean;
    set expanded(value: boolean);
    get children(): IModelStateNode<T>[];
    get allChildrenCount(): number;
    get allChildren(): IModelStateNode<T>[];
    expand(value?: number): void;
    collapse(value?: number): void;
    get selected(): string | undefined;
    setSelected(value: string | undefined): void;
    get value(): any;
    get meta(): any;
    get nestedNode(): T | null;
    sort(sort?: number): void;
    protected buildCombinaryNodes(): IModelStateCombinaryNode<T>[];
    protected buildChildrenNodes(sort: number): IModelStateNode<T>[];
    protected buildChildren(): IModelStateNode<T>[];
    protected createStatePropNode(node: T, first?: boolean): IModelStatePropNode<T>;
    protected createStateCombinaryNode(node: T): IModelStateCombinaryNode<T>;
}
export declare class JsonSchemaState<T extends IModelTreeNode<any, any, any> = JsonSchemaNode> {
    tree: JsonSchemaModelTree<ReturnType<T['value']>, T['kind'], T['meta']>;
    readonly root: IModelStatePropNode<T> | null;
    protected createStatePropNode(node: T): IModelStatePropNode<T>;
    constructor(tree: JsonSchemaModelTree<ReturnType<T['value']>, T['kind'], T['meta']>, expandDepth?: number);
    modelStateNodes(): IModelStateNode<T>[];
}
