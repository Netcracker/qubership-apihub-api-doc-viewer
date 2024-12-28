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

import { DiffRecord, isDiff } from '@netcracker/qubership-apihub-api-data-model'
import { Diff, DiffAction } from '@netcracker/qubership-apihub-api-diff'
import { FC, ReactNode } from 'react'
import { LayoutSide } from '../../types/internal/LayoutSide'
import { LayoutMode } from '../../types/LayoutMode'
import { getLayoutModeFlags, getLayoutSideFlags } from '../../utils/common/changes'
import { isDefined } from '../../utils/common/checkers'

type NullableAsteriskProps = Partial<{
  value: boolean
  valueChange: Diff | DiffRecord
  layoutMode: LayoutMode
  layoutSide: LayoutSide
}>

export const NullableAsterisk: FC<NullableAsteriskProps> = (props) => {
  const {
    value, valueChange,
    layoutMode, layoutSide,
  } = props

  const { isSideBySideDiffsLayoutMode } = getLayoutModeFlags(layoutMode)
  const { originSide, changedSide } = getLayoutSideFlags(layoutSide)

  let notNullableNode: ReactNode | null = null
  const shouldDisplayInSideBySide = value === false && !isDefined(valueChange) || isDiff(valueChange) && (
    valueChange.action === DiffAction.replace && (
      valueChange.beforeValue === false && originSide ||
      valueChange.afterValue === false && changedSide
    )
  )
  if (
    isSideBySideDiffsLayoutMode && shouldDisplayInSideBySide ||
    !isSideBySideDiffsLayoutMode && value === false
  ) {
    notNullableNode = <sup className="ml-0.5 text-red-500">*</sup>
  }
  return notNullableNode
}