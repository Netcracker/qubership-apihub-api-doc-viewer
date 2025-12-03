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

import { NODE_DIFF_COLOR_MAP } from '@apihub/constants/changes';
import { useChangeSeverityFilters } from '@apihub/contexts/ChangeSeverityFiltersContext';
import { NodeChange } from '@netcracker/qubership-apihub-api-data-model';
import { isDiffAdd, isDiffRemove } from '@netcracker/qubership-apihub-api-diff';
import { useCallback, type FC } from 'react';
import { SHIFTED_ROW_PADDING_LEFT } from "../../consts/configuration";
import { LayoutMode } from '../../types/LayoutMode';
import { buildOpenApiDiffCause, getLayoutModeFlags, isDiffTypeIncluded } from '../../utils/common/changes';
import { EmptyContent } from '../common/diffs/EmptyContent';
import { UxDiffFloatingBadge } from '../kit/ux/UxFloatingBadge/UxDiffFloatingBadge';

export type CustomDirectivesSectionRowProps = {
  layoutMode: LayoutMode
  $nodeChange?: NodeChange
}

export const CustomDirectivesSectionRow: FC<CustomDirectivesSectionRowProps> = (props) => {
  const { layoutMode, $nodeChange } = props

  const { isSideBySideDiffsLayoutMode } = getLayoutModeFlags(layoutMode)

  if (isSideBySideDiffsLayoutMode) {
    return (
      <CustomDirectiveSectionValue
        layoutMode={layoutMode}
        $nodeChange={$nodeChange}
      />
    )
  }

  return <CustomDirectiveSectionValue layoutMode={layoutMode} />
}

type CustomDirectiveSectionValueProps = {
  layoutMode: LayoutMode
  $nodeChange?: NodeChange
}

const CustomDirectiveSectionValue: FC<CustomDirectiveSectionValueProps> = ({ layoutMode, $nodeChange }) => {
  const filters = useChangeSeverityFilters()

  const { isSideBySideDiffsLayoutMode } = getLayoutModeFlags(layoutMode)
  const width = isSideBySideDiffsLayoutMode ? 'w-1/2' : 'w-full'

  const whollyAdded = !!$nodeChange && isDiffAdd($nodeChange)
  const whollyRemoved = !!$nodeChange && isDiffRemove($nodeChange)
  const nodeChanged = whollyAdded || whollyRemoved

  const diffType = nodeChanged ? $nodeChange!.type : undefined
  const diffTypeCause = buildOpenApiDiffCause($nodeChange)
  const diffTypeIncluded = isDiffTypeIncluded(diffType, filters)

  const diffBackground = nodeChanged ? NODE_DIFF_COLOR_MAP[$nodeChange!.action] : ''

  const Content: FC = useCallback(() => {
    return (
      <div className={`flex flex-row ${SHIFTED_ROW_PADDING_LEFT} ${width}`}>
        <div className="text-base text-slate-700 font-Inter-Medium my-2">
          Custom Directives
        </div>
      </div>
    )
  }, [])

  if (isSideBySideDiffsLayoutMode) {
    if (!$nodeChange) {
      return (
        <div className="flex flex-row">
          <Content />
          <Content />
        </div>
      )
    }

    return (
      <div className={`flex flex-row relative ${diffTypeIncluded ? diffBackground : ''}`}>
        {diffTypeIncluded && <UxDiffFloatingBadge variant={diffType!} message={diffTypeCause} />}
        {!nodeChanged || whollyRemoved
          ? <Content />
          : <EmptyContent level={$nodeChange.depth} />}
        {!nodeChanged || whollyAdded
          ? <Content />
          : <EmptyContent level={$nodeChange.depth} />}
      </div>
    )
  }

  return (
    <div className="flex flex-row">
      <Content />
    </div>
  )
}
