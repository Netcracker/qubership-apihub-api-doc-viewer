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
import { modelStateNodeType } from '../consts';
import { NodesChangesSummary } from '../../types/aliases/changes';
export type ModelStateNodeType = keyof typeof modelStateNodeType;
export type IModelStateNode<T extends IModelTreeNode<any, any, any>> = IModelStateCombinaryNode<T> | IModelStatePropNode<T>;
export interface IModelStatePropNode<T extends IModelTreeNode<any, any, any>> {
    readonly type: Exclude<ModelStateNodeType, 'combinary'>;
    readonly parent: IModelStatePropNode<T> | null;
    readonly node: T;
    readonly selected: string | undefined;
    readonly meta: T['meta'];
    readonly value: ReturnType<T['value']> | null;
    readonly nestedNode: T | null;
    readonly children: IModelStateNode<T>[];
    readonly first: boolean;
    readonly expanded: boolean;
    readonly allChildren: IModelStateNode<T>[];
    readonly allChildrenCount: number;
    readonly sorted: number;
    sort(dir?: number): void;
    expand(value?: number): void;
    collapse(value?: number): void;
    setSelected(id: string): void;
}
export interface IModelStateCombinaryNode<T extends IModelTreeNode<any, any, any>> {
    readonly type: Exclude<ModelStateNodeType, 'basic' | 'expandable'>;
    readonly parent: IModelStateNode<T> | null;
    readonly node: T;
    readonly nested: IModelTreeNode<any, any, any>[];
    readonly $nestedChangesSummary: NodesChangesSummary;
    readonly selected: string | undefined;
    select(id: string): void;
}
export type GraphOperationsFilter = (node: GraphApiTreeNode) => boolean;
