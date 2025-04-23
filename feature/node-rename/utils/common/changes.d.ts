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
import { DiffRecord, NodeChange, NodeChangesSummary } from '@netcracker/qubership-apihub-api-data-model';
import { Diff, DiffAdd, DiffRemove, DiffRename, DiffReplace, DiffType } from '@netcracker/qubership-apihub-api-diff';
import { IModelStateNode } from '../../api-model-state';
import { LayoutMode } from '../../types/LayoutMode';
import { LayoutSide } from '../../types/internal/LayoutSide';
export declare function diffAdd(diff?: Diff): diff is DiffAdd;
export declare function diffRemove(diff?: Diff): diff is DiffRemove;
export declare function diffReplace(diff?: Diff): diff is DiffReplace;
export declare function diffRename(diff?: Diff): diff is DiffRename;
export declare function buildOpenApiDiffCause(diff: Diff | undefined): string | undefined;
export declare function maxDiffType(...changes: Array<Diff | undefined>): [DiffType | undefined, string | undefined];
export declare function maxDiffTypeFromNodeSummary(summary?: NodeChangesSummary): DiffType | undefined;
export declare function maxDiffTypeFromNestedNodesSummary(summaries?: Record<string, NodeChangesSummary>): DiffType | undefined;
export declare function compareDiffTypes(a: DiffType | undefined, b: DiffType | undefined): number;
export declare const DEFAULT_DIFF_TYPE_AND_CAUSE_PAIR: [DiffType | undefined, string | undefined];
export declare function getLayoutModeFlags(mode?: LayoutMode): {
    isDocumentLayoutMode: boolean;
    isInlineDiffsLayoutMode: boolean;
    isSideBySideDiffsLayoutMode: boolean;
};
export declare function getLayoutSideFlags(side?: LayoutSide): {
    originSide: boolean;
    changedSide: boolean;
};
export declare const API_TYPE_REST = "rest";
export declare const API_TYPE_GRAPHQL = "graphql";
export type ApiType = typeof API_TYPE_REST | typeof API_TYPE_GRAPHQL;
export declare function toChangesList($changes: DiffRecord | undefined, $metaChanges: DiffRecord | undefined, apiType: ApiType): Diff[];
export declare function takeNodeChangeIfAllChildrenChanged(children: IModelStateNode<any>[]): NodeChange | undefined;
export declare function inferRowChange(itemsCount: number, $rowChanges: Diff | DiffRecord | undefined): Diff | undefined;
export declare function isDiffTypeIncluded(diffType: DiffType | undefined, filters: readonly DiffType[]): boolean;
export declare function filterChangesList(changesList: Diff[], filters: readonly DiffType[]): Diff[];
export declare function getDiffTypesFromSummary(summary: NodeChangesSummary | undefined): DiffType[] | undefined;
export declare function hasBeforeDeclarationPaths(diff: Diff | undefined): diff is DiffRemove | DiffReplace | DiffRename;
export declare function hasAfterDeclarationPaths(diff: Diff | undefined): diff is DiffAdd | DiffReplace | DiffRename;
export declare function filterChangeKeys(data: Record<PropertyKey, unknown> | undefined, originalChangeKeys: string[]): string[];
