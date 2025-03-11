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
import type { FC } from '../../../../node_modules/react';
import { JsonSchemaDiffTreeNode } from '@netcracker/qubership-apihub-api-data-model';
import { IModelStateNode } from '../../../api-model-state';
import { PropsWithDisabledNestingIndicatorTitle } from '../../../types/internal/PropsWithState';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { NestingIndicatorTitleData } from '../../../types/internal/NestingIndicatorTitleData';
import { PropsWithoutChangesSummary } from "../../../types/PropsWithoutChangesSummary";
export type JsonPropNodeChildrenProps = PropsWithoutChangesSummary<PropsWithDisabledNestingIndicatorTitle & {
    items: IModelStateNode<JsonSchemaDiffTreeNode>[];
    onGlobalSelectNestedNode: (nodeId?: string) => void;
} & PropsWithChanges & {
    nestingIndicatorTitleData?: NestingIndicatorTitleData;
}>;
export declare const JsonPropNodeChildren: FC<JsonPropNodeChildrenProps>;
