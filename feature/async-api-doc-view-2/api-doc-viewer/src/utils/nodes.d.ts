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
import { DiffNodeValue, GraphApiNodeData, GraphSchemaNodeValue, IModelTreeNode, JsonSchemaDiffNodeMeta, JsonSchemaDiffNodeValue, JsonSchemaNodeKind, JsonSchemaNodeValue } from '../../../api-data-model/src';
import { Dispatch, SetStateAction } from '../../../../node_modules/react';
import { IModelStatePropNode } from '../../../api-state-model/src';
import { AnyTreeNode } from '../types/aliases/nodes';
import { ExpandingMode } from '../types/internal/ExpandingMode';
import { LayoutSide } from '../types/internal/LayoutSide';
export declare function isExpandableStateNode(state: IModelStatePropNode<AnyTreeNode>): boolean;
export declare function isRootNode(node?: AnyTreeNode | null): boolean;
export declare function isArgumentsNode(node?: AnyTreeNode | null): boolean;
export declare function isArgumentNode(node?: AnyTreeNode | null): boolean;
export declare function isUsedDirectivesNode(node?: AnyTreeNode | null): boolean;
export declare function isDirectiveUsageNode(node?: AnyTreeNode | null): boolean;
export declare function isOutputNode(node?: AnyTreeNode | null): boolean;
export declare function isPropertyNode(node?: AnyTreeNode | null): boolean;
export declare function isAdditionalPropertyNode(node?: AnyTreeNode | null): boolean;
export declare function isPatternPropertyNode(node?: AnyTreeNode | null): boolean;
export declare function isItemNode(node?: AnyTreeNode | null): boolean;
export declare function isItemsNode(node?: AnyTreeNode | null): boolean;
export declare function isAdditionalItemsNode(node?: AnyTreeNode | null): boolean;
export declare function isOneOfItemNode(node?: AnyTreeNode | null): boolean;
export declare function isAnyOfItemNode(node?: AnyTreeNode | null): boolean;
export declare function isAllOfItemNode(node?: AnyTreeNode | null): boolean;
export declare function isCombinerNode(node?: AnyTreeNode | null): boolean;
export declare function isCombinerItemNode(node?: AnyTreeNode | null): boolean;
export declare function isOneOfCombinerNode(node?: AnyTreeNode | null): boolean;
export declare function isAnyOfCombinerNode(node?: AnyTreeNode | null): boolean;
export declare function isAllOfCombinerNode(node?: AnyTreeNode | null): boolean;
export declare function isPrimitiveValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | null): boolean;
export declare function isStringValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | null): boolean;
export declare function isNumberValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | DiffNodeValue | null): boolean;
export declare function isBooleanValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | null): boolean;
export declare function isObjectValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | null): boolean;
export declare function isArrayValue(value?: JsonSchemaNodeValue | GraphSchemaNodeValue | GraphApiNodeData | null): boolean;
export declare function hasNoContent(node?: AnyTreeNode | null): boolean;
export declare function hasNoValidationsAndAnnotations(node?: AnyTreeNode | null): boolean;
export declare function onToggleExpander(state: IModelStatePropNode<AnyTreeNode>, reactStateCallback: Dispatch<SetStateAction<boolean>>, mode?: ExpandingMode): void;
export declare function onToggleSort(state: IModelStatePropNode<AnyTreeNode>, reactStateCallback: Dispatch<SetStateAction<number>>): void;
export declare function matchNodeKind(kind: string, node?: AnyTreeNode | null): boolean;
export declare function findNoSubHeaderSide(node: IModelTreeNode<JsonSchemaDiffNodeValue, JsonSchemaNodeKind, JsonSchemaDiffNodeMeta>): LayoutSide | undefined;
