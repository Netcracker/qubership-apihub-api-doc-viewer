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
import { GraphApiDiffTreeNode } from '../../../../../../../api-data-model/src';
import { IModelStatePropNode } from '../../../../../../../api-state-model/src';
import type { FC } from '../../../../../../../../node_modules/react';
import { NodeTitleData } from '../../../../../types/NodeTitleData';
import { NodeTypeData } from '../../../../../types/NodeTypeData';
import { PropsWithChanges } from '../../../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../../../types/internal/PropsWithShift';
export type HeaderRowState = PropsWithShift & {
    isExpandable?: boolean;
    expanded: boolean;
    sorted: number;
    isRoot: boolean;
    isOperation: boolean;
    onToggleExpander: () => void;
    onToggleSort: () => void;
};
export type HeaderRowProps = {
    nodeTitleData: NodeTitleData;
    nodeTypeData: NodeTypeData | null;
    isCircularRef: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    deprecationReason?: string;
} & OperationSpecificProps & GraphSpecificProps & HeaderRowState & PropsWithChanges;
export declare const NULLABILITY_POSITION_NODE = "node";
export declare const NULLABILITY_POSITION_TYPE = "type";
export type NullabilityPosition = typeof NULLABILITY_POSITION_NODE | typeof NULLABILITY_POSITION_TYPE;
export type OperationSpecificProps = {
    method?: string;
    nullable?: boolean;
    nullabilityPosition?: NullabilityPosition;
};
export type GraphSpecificProps = {
    isDirective: boolean;
    isArgument: boolean;
    usedDirectives: string[];
    directiveLocations: string[];
    args: IModelStatePropNode<GraphApiDiffTreeNode>[];
};
export declare const HeaderRow: FC<HeaderRowProps>;
