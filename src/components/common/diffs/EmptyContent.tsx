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

import type { FC } from 'react'
import { NestingIndicator } from '../NestingIndicator'
import { DEFAULT_ROW_PADDING_LEFT } from '../../../consts/configuration'

export type EmptyContentProps = {
  level: number
}

export const EmptyContent: FC<EmptyContentProps> = (props) => {
  const { level } = props

  return (
    <div className={`flex flex-row w-1/2 ${DEFAULT_ROW_PADDING_LEFT} bg-gray-100`}>
      {/* FIXME 04.07.24 Problem with empty DOM elements */}
      <NestingIndicator level={level}/>
    </div>
  )
}
