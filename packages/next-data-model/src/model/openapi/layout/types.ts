import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant } from "../../abstract/tree-with-diffs/tree-node.interface"

/**
 * Types of the OpenAPI layout plan: blocks of rows, the separator rows between them, and the card
 * frame rows. Design: docs/design/openapi/features/block-separators.md -> "Algorithm".
 */

/** Background of a row on one side: green / red / yellow / gray, or `undefined` = unchanged. */
export type OpenApiSideTone = HighlightVariant | undefined

export type OpenApiEdgeTones = {
  readonly before: OpenApiSideTone
  readonly after: OpenApiSideTone
}

/**
 * The top or bottom edge of a block: a plain row, or a card frame row (which already holds the
 * space outside the card, so no separator is added next to it by default).
 */
export type OpenApiBlockEdge = {
  readonly kind: 'row' | 'frame'
  readonly tones: OpenApiEdgeTones
  /** Diff type of the floating badge the edge row shows (one per row, both sides); absent = none. */
  readonly badge?: DiffType
}

/** The edges of a block, as the planner sees it. */
export type OpenApiBlockEdgePair = {
  readonly head: OpenApiBlockEdge
  readonly tail: OpenApiBlockEdge
}

/** A block of rows to plan; `payload` is whatever the consumer renders it from. */
export type OpenApiLayoutBlock<TPayload> = OpenApiBlockEdgePair & {
  readonly id: string
  readonly payload: TPayload
}

/** One coloured band of a separator side. */
export type OpenApiBand = {
  readonly height: number
  readonly tone: OpenApiSideTone
}

/** One segment of a decorative badge stub (no hover, no text); no `type` = no bar there. */
export type OpenApiBadgeSegment = {
  readonly height: number
  readonly type?: DiffType
}

/**
 * A content-less row between two blocks: per side a stack of bands, both summing to one height,
 * plus one badge stub stack for the whole row (the floating badge is per row, not per side).
 */
export type OpenApiSeparatorRow = {
  readonly id: string
  readonly before: readonly OpenApiBand[]
  readonly after: readonly OpenApiBand[]
  readonly badge: readonly OpenApiBadgeSegment[]
}

/** A card opening / closing row: its height, the border's offset from the row top, its tones and badge stub. */
export type OpenApiFrameRow = {
  readonly height: number
  readonly borderOffset: number
  readonly tones: OpenApiEdgeTones
  /** A full-height badge stub: the whole card's badge when it is wholly added / removed. */
  readonly badge?: DiffType
}

export type OpenApiLayoutItem<TPayload> =
  | { readonly type: 'block', readonly block: OpenApiLayoutBlock<TPayload> }
  | { readonly type: 'separator', readonly separator: OpenApiSeparatorRow }
