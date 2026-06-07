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

import { isDiff } from '@netcracker/qubership-apihub-api-data-model'
import { DiffAction } from '@netcracker/qubership-apihub-api-diff'
import type { FC, ReactNode } from 'react'
import { DEFAULT_STRIKETHROUGH_VALUE_CLASS, INLINE_CONTENT_DIFF_COLOR_SCHEMAS } from '../../consts/changes'
import { NULLABLE_TYPE_SUFFIX_TEXT, UNKNOWN_TYPE_TEXT } from '../../consts/types'
import { useChangeSeverityFilters } from '../../contexts/ChangeSeverityFiltersContext'
import { useItemChangedFlags } from '../../hooks/changes'
import { NodeTypeData } from '../../types/NodeTypeData'
import { PropsWithoutChangesSummary } from '../../types/PropsWithoutChangesSummary'
import { LayoutSide } from '../../types/internal/LayoutSide'
import { PropsWithChanges } from '../../types/internal/PropsWithChanges'
import {
  diffReplace,
  getLayoutModeFlags,
  getLayoutSideFlags,
  isDiffTypeIncluded
} from '../../utils/common/changes'
import { WarningIcon } from '../kit/icons/WarningIcon'

export type NodeTypeProps = PropsWithoutChangesSummary<
  NodeTypeData &
  Partial<{
    layoutSide: LayoutSide
    contentChangesColorizing: boolean
    contentChangesStrikethrough: boolean
    showNullable: boolean
  }> &
  PropsWithChanges
>

const SEPARATOR = ' '

/* FIXME 30.08.24 //
    There are a lot of places in NodeType when we use hardcoded action, not calculated from real data.
    So it may sweep a bug under the rug.
    But it's not so simple as seems to use real data because of remapping.
    Possibly, it must be fixed in refactoring AMT.
 */

export const NodeType: FC<NodeTypeProps> = (props) => {
  const {
    brokenRef,
    type,
    nullable,
    title,
    qualifier,
    combiner,
    // diffs
    layoutMode,
    layoutSide,
    contentChangesColorizing = true,
    contentChangesStrikethrough = true,
    showNullable = false,
    $changes,
  } = props

  const filters = useChangeSeverityFilters()

  const entityString = buildEntityString(title, qualifier)
  const wrappedEntity = entityString ? wrapAsEntity(entityString) : null
  const resolvedNullableText = nullable ? NULLABLE_TYPE_SUFFIX_TEXT : null

  const $typeChange = isDiff($changes?.type) ? $changes?.type : undefined
  const $nullableChange = isDiff($changes?.nullable) ? $changes?.nullable : undefined
  const $formatChange = isDiff($changes?.format) ? $changes?.format : undefined
  const $titleChange = isDiff($changes?.title) ? $changes?.title : undefined

  const diffTypeForType = $typeChange?.type
  const diffTypeForNullable = $nullableChange?.type
  const diffTypeForFormat = $formatChange?.type
  const diffTypeForTitle = $titleChange?.type

  const diffTypeForTypeIncluded = isDiffTypeIncluded(diffTypeForType, filters)
  const diffTypeForNullableIncluded = isDiffTypeIncluded(diffTypeForNullable, filters)
  const diffTypeForFormatIncluded = isDiffTypeIncluded(diffTypeForFormat, filters)
  const diffTypeForTitleIncluded = isDiffTypeIncluded(diffTypeForTitle, filters)

  const {
    isDocumentLayoutMode,
    isInlineDiffsLayoutMode,
    isSideBySideDiffsLayoutMode,
  } = getLayoutModeFlags(layoutMode)

  const {
    itemAdded: typeAdded,
    itemRemoved: typeRemoved,
    itemReplaced: typeReplaced,
  } = useItemChangedFlags($typeChange?.action)
  const {
    itemAdded: nullableAdded,
    itemRemoved: nullableRemoved,
  } = useItemChangedFlags($nullableChange?.action, {
    [DiffAction.add]: {
      actualReplacedValue: diffReplace($nullableChange) ? $nullableChange.beforeValue : undefined,
      expectedReplacedValue: false
    },
    [DiffAction.remove]: {
      actualReplacedValue: diffReplace($nullableChange) ? $nullableChange.beforeValue : undefined,
      expectedReplacedValue: true
    },
  })
  const {
    itemAdded: formatAdded,
    itemRemoved: formatRemoved,
    itemReplaced: formatReplaced,
  } = useItemChangedFlags($formatChange?.action)
  const {
    itemAdded: titleAdded,
    itemRemoved: titleRemoved,
    itemReplaced: titleReplaced,
  } = useItemChangedFlags($titleChange?.action)

  const { originSide, changedSide } = getLayoutSideFlags(layoutSide)

  // Calculate rendering for diffs

  let actualType: string | ReactNode = type
  let actualNullable: string | ReactNode = resolvedNullableText
  let actualEntity: ReactNode | null = wrappedEntity
  if (!isDocumentLayoutMode) {
    // Node Type
    if (isSideBySideDiffsLayoutMode) {
      let diffStyles: unknown = null
      if (typeRemoved) {
        if (originSide) {
          diffStyles = classes(
            getIf(
              diffTypeForTypeIncluded && contentChangesStrikethrough,
              DEFAULT_STRIKETHROUGH_VALUE_CLASS
            ),
            getIf(
              diffTypeForTypeIncluded && contentChangesColorizing,
              $typeChange?.action ? INLINE_CONTENT_DIFF_COLOR_SCHEMAS[$typeChange.action] : ''
            )
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {type}
            </div>
        }
        if (changedSide) {
          diffStyles = getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {UNKNOWN_TYPE_TEXT}
            </div>
        }
      }
      if (typeAdded) {
        if (originSide) {
          diffStyles = classes(
            getIf(
              diffTypeForTypeIncluded && contentChangesStrikethrough,
              DEFAULT_STRIKETHROUGH_VALUE_CLASS
            ),
            getIf(
              diffTypeForTypeIncluded && contentChangesColorizing,
              INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
            )
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {UNKNOWN_TYPE_TEXT}
            </div>
        }
        if (changedSide) {
          diffStyles = getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            $typeChange?.action ? INLINE_CONTENT_DIFF_COLOR_SCHEMAS[$typeChange.action] : ''
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {type}
            </div>
        }
      }
      if (typeReplaced) {
        if (originSide) {
          diffStyles = classes(
            getIf(
              diffTypeForTypeIncluded && contentChangesStrikethrough,
              DEFAULT_STRIKETHROUGH_VALUE_CLASS
            ),
            getIf(
              diffTypeForTypeIncluded && contentChangesColorizing,
              INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
            )
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {diffReplace($typeChange) ? `${$typeChange.beforeValue}` : null}
            </div>
        }
        if (changedSide) {
          diffStyles = getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
          )
          actualType =
            <div className={`inline ${diffStyles}`}>
              {type}
            </div>
        }
      }
    }

    if (isInlineDiffsLayoutMode) {
      let diffStylesBefore: unknown = null
      let diffStylesAfter: unknown = null
      if (typeRemoved) {
        diffStylesBefore = classes(
          getIf(
            diffTypeForTypeIncluded && contentChangesStrikethrough,
            DEFAULT_STRIKETHROUGH_VALUE_CLASS
          ),
          getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
          )
        )
        diffStylesAfter = getIf(
          diffTypeForTypeIncluded && contentChangesColorizing,
          INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
        )
        actualType = <>
          <div className={`inline ${diffStylesBefore}`}>
            {type}
          </div>
          <div className={`inline ${diffStylesAfter}`}>
            {UNKNOWN_TYPE_TEXT}
          </div>
        </>
      }
      if (typeAdded) {
        diffStylesBefore = classes(
          getIf(
            diffTypeForTypeIncluded && contentChangesStrikethrough,
            DEFAULT_STRIKETHROUGH_VALUE_CLASS
          ),
          getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
          )
        )
        diffStylesAfter = getIf(
          diffTypeForTypeIncluded && contentChangesColorizing,
          $typeChange?.action ? INLINE_CONTENT_DIFF_COLOR_SCHEMAS[$typeChange.action] : ''
        )
        actualType = <>
          <div className={`inline ${diffStylesBefore}`}>
            {UNKNOWN_TYPE_TEXT}
          </div>
          <div className={`inline ${diffStylesAfter}`}>
            {type}
          </div>
        </>
      }
      if (typeReplaced) {
        diffStylesBefore = classes(
          getIf(
            diffTypeForTypeIncluded && contentChangesStrikethrough,
            DEFAULT_STRIKETHROUGH_VALUE_CLASS
          ),
          getIf(
            diffTypeForTypeIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
          )
        )
        diffStylesAfter = getIf(
          diffTypeForTypeIncluded && contentChangesColorizing,
          INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
        )
        actualType = <>
          <div className={`inline ${diffStylesBefore}`}>
            {diffReplace($typeChange) ? `${$typeChange.beforeValue}` : null}
          </div>
          <div className={`inline ${diffStylesAfter}`}>
            {type}
          </div>
        </>
      }
    }

    // Nullable
    if (showNullable) {
      if (isSideBySideDiffsLayoutMode) {
        if (nullableRemoved) {
          if (originSide) {
            const diffStyles = classes(
              getIf(
                diffTypeForNullableIncluded && contentChangesStrikethrough,
                DEFAULT_STRIKETHROUGH_VALUE_CLASS
              ),
              getIf(
                diffTypeForNullableIncluded && contentChangesColorizing,
                INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
              )
            )
            actualNullable =
              <div className={`inline ${diffStyles}`}>
                {NULLABLE_TYPE_SUFFIX_TEXT}
              </div>
          }
          if (changedSide) {
            actualNullable = null
          }
        }
        if (nullableAdded) {
          if (originSide) {
            actualNullable = null
          }
          if (changedSide) {
            const diffStyles = getIf(
              diffTypeForNullableIncluded && contentChangesColorizing,
              INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
            )
            actualNullable =
              <div className={`inline ${diffStyles}`}>
                {NULLABLE_TYPE_SUFFIX_TEXT}
              </div>
          }
        }
      }

      if (isInlineDiffsLayoutMode) {
        if (nullableRemoved) {
          const diffStylesBefore = classes(
            getIf(
              diffTypeForNullableIncluded && contentChangesStrikethrough,
              DEFAULT_STRIKETHROUGH_VALUE_CLASS
            ),
            getIf(
              diffTypeForNullableIncluded && contentChangesColorizing,
              INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]
            )
          )
          actualNullable =
            <div className={`inline ${diffStylesBefore}`}>
              {NULLABLE_TYPE_SUFFIX_TEXT}
            </div>
        }
        if (nullableAdded) {
          const diffStylesAfter = getIf(
            diffTypeForNullableIncluded && contentChangesColorizing,
            INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]
          )
          actualNullable =
            <div className={`inline ${diffStylesAfter}`}>
              {NULLABLE_TYPE_SUFFIX_TEXT}
            </div>
        }
      }
    }

    // Entity (title + format qualifier) — rendered with per-part diff coloring:
    // only the changed sub-part (title or format) is colorized; when BOTH change,
    // the whole bracketed string is colorized.
    const titleChanged = titleAdded || titleRemoved || titleReplaced
    const formatChanged = formatAdded || formatRemoved || formatReplaced
    const bothChangedIncluded =
      titleChanged && diffTypeForTitleIncluded &&
      formatChanged && diffTypeForFormatIncluded

    const titleInput: QualifierPartInput = {
      value: title,
      beforeValue: beforeValueOf($titleChange),
      added: titleAdded,
      removed: titleRemoved,
      replaced: titleReplaced,
      included: diffTypeForTitleIncluded,
    }
    const formatInput: QualifierPartInput = {
      value: qualifier,
      beforeValue: beforeValueOf($formatChange),
      added: formatAdded,
      removed: formatRemoved,
      replaced: formatReplaced,
      included: diffTypeForFormatIncluded,
    }

    actualEntity = renderQualifierDiff({
      titleInput,
      formatInput,
      bothChanged: bothChangedIncluded,
      isSideBySide: isSideBySideDiffsLayoutMode,
      isInline: isInlineDiffsLayoutMode,
      originSide,
      changedSide,
      colorizing: contentChangesColorizing,
      strikethrough: contentChangesStrikethrough,
    })
  }

  return (
    <div className="inline-flex flex-row gap-1 items-center">
      {brokenRef && <WarningIcon />}
      {actualType && <div className="inline">{actualType}{actualEntity} {showNullable ? actualNullable : null}</div>}
      {combiner && <div className="inline">({combiner})</div>}
    </div>
  )
}

function buildEntityString(title: string | undefined, qualifier: string | undefined): string | undefined {
  const parts = [title, qualifier].filter(Boolean) as string[]
  return parts.length > 0 ? parts.join(', ') : undefined
}

function wrapAsEntity(entity: unknown): ReactNode {
  return <>{'<'}{entity}{'>'}</>
}

type QualifierPartInput = {
  value: string | undefined        // after-state value of this part
  beforeValue: string | undefined  // before-state value (for remove/replace)
  added: boolean
  removed: boolean
  replaced: boolean
  included: boolean                // is this part's change included by the active filters
}

type QualifierPart = {
  originNode: ReactNode | null   // side-by-side origin side (before state)
  changedNode: ReactNode | null  // side-by-side changed side (after state)
  inlineSeq: ReactNode[]         // inline fragments in order (before, then after)
}

function beforeValueOf(change: unknown): string | undefined {
  if (change && typeof change === 'object' && 'beforeValue' in change) {
    const value = (change as { beforeValue?: unknown }).beforeValue
    return typeof value === 'string' ? value : undefined
  }
  return undefined
}

function partStyles(
  included: boolean,
  colorizing: boolean,
  strikethrough: boolean,
): { removeCls: string; addCls: string } {
  const removeCls = classes(
    getIf(included && strikethrough, DEFAULT_STRIKETHROUGH_VALUE_CLASS),
    getIf(included && colorizing, INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.remove]),
  )
  const addCls = getIf(included && colorizing, INLINE_CONTENT_DIFF_COLOR_SCHEMAS[DiffAction.add]) ?? ''
  return { removeCls, addCls }
}

function styledText(text: string, cls: string): ReactNode {
  return <span className={`inline ${cls}`.trimEnd()}>{text}</span>
}

function buildQualifierPart(
  input: QualifierPartInput,
  colorizing: boolean,
  strikethrough: boolean,
): QualifierPart {
  const { value, beforeValue, added, removed, replaced, included } = input
  const { removeCls, addCls } = partStyles(included, colorizing, strikethrough)

  if (added) {
    const after = value != null ? styledText(value, addCls) : null
    return { originNode: null, changedNode: after, inlineSeq: after ? [after] : [] }
  }
  if (removed) {
    const removedValue = beforeValue ?? value
    const before = removedValue != null ? styledText(removedValue, removeCls) : null
    return { originNode: before, changedNode: null, inlineSeq: before ? [before] : [] }
  }
  if (replaced) {
    const before = beforeValue != null ? styledText(beforeValue, removeCls) : null
    const after = value != null ? styledText(value, addCls) : null
    return {
      originNode: before,
      changedNode: after,
      inlineSeq: [before, after].filter(Boolean) as ReactNode[],
    }
  }
  // unchanged
  const neutral = value != null ? styledText(value, '') : null
  return { originNode: neutral, changedNode: neutral, inlineSeq: neutral ? [neutral] : [] }
}

function joinNodes(nodes: ReactNode[], separator: string): ReactNode[] {
  const out: ReactNode[] = []
  nodes.forEach((node, index) => {
    if (index > 0) {
      out.push(<span key={`sep-${index}`} className="inline">{separator}</span>)
    }
    out.push(<span key={`seg-${index}`} className="inline">{node}</span>)
  })
  return out
}

function joinInlineFragments(fragments: ReactNode[]): ReactNode {
  const out: ReactNode[] = []
  fragments.forEach((fragment, index) => {
    if (index > 0) {
      out.push(<span key={`gap-${index}`} className="inline">{' '}</span>)
    }
    out.push(<span key={`frag-${index}`} className="inline">{fragment}</span>)
  })
  return <span className="inline">{out}</span>
}

function bracketize(inner: ReactNode[], wrapperCls: string): ReactNode | null {
  if (inner.length === 0) {
    return null
  }
  return <span className={`inline ${wrapperCls}`.trimEnd()}>{'<'}{inner}{'>'}</span>
}

function renderQualifierDiff(params: {
  titleInput: QualifierPartInput
  formatInput: QualifierPartInput
  bothChanged: boolean
  isSideBySide: boolean
  isInline: boolean
  originSide: boolean
  changedSide: boolean
  colorizing: boolean
  strikethrough: boolean
}): ReactNode | null {
  const {
    titleInput, formatInput, bothChanged,
    isSideBySide, isInline, originSide,
    colorizing, strikethrough,
  } = params

  const titlePart = buildQualifierPart(titleInput, colorizing, strikethrough)
  const formatPart = buildQualifierPart(formatInput, colorizing, strikethrough)

  // styling for the bracket wrapper when BOTH parts changed (colorize the whole string)
  const bothIncluded = titleInput.included && formatInput.included
  const { removeCls, addCls } = partStyles(bothIncluded, colorizing, strikethrough)

  if (isSideBySide) {
    if (originSide) {
      const segments = joinNodes(
        [titlePart.originNode, formatPart.originNode].filter(Boolean) as ReactNode[],
        ', ',
      )
      return bracketize(segments, bothChanged ? removeCls : '')
    }
    // changed side
    const segments = joinNodes(
      [titlePart.changedNode, formatPart.changedNode].filter(Boolean) as ReactNode[],
      ', ',
    )
    return bracketize(segments, bothChanged ? addCls : '')
  }

  if (isInline) {
    const partNodes: ReactNode[] = []
    if (titlePart.inlineSeq.length) {
      partNodes.push(joinInlineFragments(titlePart.inlineSeq))
    }
    if (formatPart.inlineSeq.length) {
      partNodes.push(joinInlineFragments(formatPart.inlineSeq))
    }
    return bracketize(joinNodes(partNodes, ', '), '')
  }

  return null
}

function getIf<T>(condition: boolean, value: T | undefined): T | null {
  return condition ? value ?? null : null
}

function classes(...classes: (string | null)[]): string {
  return classes.filter(clazz => !!clazz).join(SEPARATOR)
}
