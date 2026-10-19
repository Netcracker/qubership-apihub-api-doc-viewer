import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant } from "../../abstract/tree-with-diffs/tree-node.interface"

/**
 * Types of the OpenAPI layout plan: elements (rows, cards, nested viewers) grouped into blocks, the
 * separator rows between them, and the card frame rows.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */

/** Background of a row on one side: green / red / yellow / gray, or `undefined` = unchanged. */
export type OpenApiSideTone = HighlightVariant | undefined

export type OpenApiEdgeTones = {
  readonly before: OpenApiSideTone
  readonly after: OpenApiSideTone
}

/**
 * What the OpenAPI layer stacks: an OpenAPI row, a security card (seen from outside its border), or
 * a nested JSON Schema / JSO viewer. The kind decides the element's own half-gap (config `halfGap`).
 */
export type OpenApiElementKind = 'row' | 'card' | 'nested'

/** The top or bottom edge of a block: the element there, its own tones and floating badge. */
export type OpenApiBlockEdge = {
  readonly kind: OpenApiElementKind
  readonly tones: OpenApiEdgeTones
  /** Diff type of the floating badge the edge element shows (one per row, both sides); absent = none. */
  readonly badge?: DiffType
}

/** The edges of a block, as the planner sees it. */
export type OpenApiBlockEdgePair = {
  readonly head: OpenApiBlockEdge
  readonly tail: OpenApiBlockEdge
}

/** A block to plan (one element, or a container of planned children); `payload` is what the consumer renders it from. */
export type OpenApiLayoutBlock<TPayload> = OpenApiBlockEdgePair & {
  readonly id: string
  readonly payload: TPayload
}

/**
 * A container level the planner works on; each has its own level gap (config `levelGap`).
 * `operation`: the top-level blocks; `section`: the rows inside a parameter group, Body, Extensions,
 * response description block.
 */
export type OpenApiLayoutLevel = 'operation' | 'operationHeader' | 'security' | 'request' | 'responses' | 'section' | 'card'

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
 * A content-less row: per side a stack of bands, both summing to `height`, plus one badge stub stack
 * for the whole row (the floating badge is per row, not per side). Interned by `signature`: equal
 * separators are the same object, so consumers can memoise on identity or on the signature.
 */
export type OpenApiSeparatorRow = {
  readonly height: number
  readonly before: readonly OpenApiBand[]
  readonly after: readonly OpenApiBand[]
  readonly badge: readonly OpenApiBadgeSegment[]
  readonly signature: string
}

/** A card opening / closing row (inside the border): its height, tones and badge stub. */
export type OpenApiFrameRow = {
  readonly height: number
  readonly tones: OpenApiEdgeTones
  /** A full-height badge stub: the whole card's badge when it is wholly added / removed. */
  readonly badge?: DiffType
}

/** Planning options of one level. */
export type OpenApiPlanOptions = {
  /** Also emit the first element's upper half and the last element's lower half (viewer edges, inside a card). */
  readonly outerHalves?: boolean
}

export type OpenApiLayoutItem<TPayload> =
  | { readonly type: 'block', readonly block: OpenApiLayoutBlock<TPayload> }
  | { readonly type: 'separator', readonly id: string, readonly separator: OpenApiSeparatorRow }
