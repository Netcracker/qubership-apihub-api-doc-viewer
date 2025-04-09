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
import type { FC } from '../../../../../node_modules/react';
import { NodeTitleData } from '../../../../types/NodeTitleData';
import { NodeTypeData } from '../../../../types/NodeTypeData';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
export type HeaderRowState = {
    isExpandable?: boolean;
    expanded: boolean;
    sorted: number;
    isRoot: boolean;
    onToggleExpander: () => void;
    onToggleSort: () => void;
};
export type HeaderRowProps = {
    nodeTitleData: NodeTitleData;
    nodeTypeData: NodeTypeData | null;
    isCircularRef: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    deprecated?: boolean;
} & HeaderRowState & PropsWithChanges;
export declare const HeaderRow: FC<HeaderRowProps>;
