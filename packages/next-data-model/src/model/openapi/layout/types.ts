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

/** A content-less row between two blocks: per side a stack of bands, both summing to one height. */
export type OpenApiSeparatorRow = {
  readonly id: string
  readonly before: readonly OpenApiBand[]
  readonly after: readonly OpenApiBand[]
}

/** A card opening / closing row: its height, the border's offset from the row top, its tones. */
export type OpenApiFrameRow = {
  readonly height: number
  readonly borderOffset: number
  readonly tones: OpenApiEdgeTones
}

export type OpenApiLayoutItem<TPayload> =
  | { readonly type: 'block', readonly block: OpenApiLayoutBlock<TPayload> }
  | { readonly type: 'separator', readonly separator: OpenApiSeparatorRow }
