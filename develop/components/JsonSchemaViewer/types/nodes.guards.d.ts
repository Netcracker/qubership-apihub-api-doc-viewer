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
import { IModelTreeNode, JsonSchemaTreeNode } from '@netcracker/qubership-apihub-api-data-model';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../../../api-model-state';
export declare function isPropNodeState<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode>(state: IModelStateNode<T> | null): state is IModelStatePropNode<T>;
export declare function isCombinerNodeState<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode>(state: IModelStateNode<T> | null): state is IModelStateCombinaryNode<T>;
