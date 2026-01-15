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
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import type { Dispatch, FC, SetStateAction } from '../../../../../../../node_modules/react';
import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../../types/internal/PropsWithShift';
import { LayoutMode } from '../../../../types/LayoutMode';
import { PropsWithoutChangesSummary } from "../../../../types/PropsWithoutChangesSummary";
export type DescriptionRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    value: string;
    fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
} & PropsWithChanges>;
export declare const DescriptionRow: FC<DescriptionRowProps>;
type ValueProps = {
    value: string;
    fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    expanded?: boolean;
    setIsExpandable?: Dispatch<SetStateAction<boolean>>;
    enableDiffs: boolean;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    $changes?: Diff;
};
export declare const DescriptionValue: FC<ValueProps>;
export type DescriptionExpanderProps = Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}>;
export declare const DescriptionExpander: FC<Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}>>;
export {};
