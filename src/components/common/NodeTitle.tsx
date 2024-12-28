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

import { DiffRecord } from '@netcracker/qubership-apihub-api-data-model'
import { Diff } from '@netcracker/qubership-apihub-api-diff'
import type { FC } from 'react'
import { LayoutSide } from '../../types/internal/LayoutSide'
import { LayoutMode } from '../../types/LayoutMode'
import { NodeTitleData } from '../../types/NodeTitleData'
import { BADGE_KIND_INFO } from "../kit/ux/types"
import { UxBadge } from '../kit/ux/UxBadge'
import { NullableAsterisk } from './NullableAsterisk'
import { RequiredStar } from './RequiredStar'

export type NodeTitleProps = NodeTitleData & {
  // control flags
  showRequired?: boolean
  showNullable?: boolean
  // diffs
  layoutMode?: LayoutMode
  layoutSide?: LayoutSide
  requiredChange?: Diff | DiffRecord
  nullableChange?: Diff | DiffRecord
}

export const NodeTitle: FC<NodeTitleProps> = (props) => {
  const {
    title,
    required,
    nullable,
    isBadge,
    badgeKind = BADGE_KIND_INFO,
    isIndex,
    isDirective,
    // control flags
    showRequired = false,
    showNullable = false,
    // diffs
    layoutMode,
    layoutSide,
    requiredChange,
    nullableChange,
  } = props

  let titleNode
  if (isBadge) {
    titleNode = <UxBadge kind={badgeKind} text={title} inline={true} />
  } else if (isIndex) {
    titleNode = <>{`[${title}]`}</>
  } else if (isDirective) {
    titleNode = <>{`@${title}`}</>
  } else {
    titleNode = <>{title}</>
  }

  return (
    <div className="inline">
      {titleNode}
      {showRequired && (
        <RequiredStar
          value={required ?? false}
          valueChange={requiredChange}
          layoutMode={layoutMode}
          layoutSide={layoutSide}
        />
      )}
      {showNullable && (
        <NullableAsterisk
          value={nullable ?? true}
          valueChange={nullableChange}
          layoutMode={layoutMode}
          layoutSide={layoutSide}
        />
      )}
    </div>
  )
}
