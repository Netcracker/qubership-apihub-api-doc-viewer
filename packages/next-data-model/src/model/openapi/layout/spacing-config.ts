import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { OpenApiBadgeSegment, OpenApiBand, OpenApiElementKind, OpenApiLayoutLevel, OpenApiSideTone } from "./types"

/**
 * Every adjustable number and rule of the OpenAPI vertical layout, in one object. OpenAPI rows have
 * no vertical padding: every gap is a separator row = the upper element's half-gap + the level gap
 * of the container + the lower element's half-gap. Change the look by editing
 * `DEFAULT_OPENAPI_SPACING_CONFIG` (or merging an override over it); the planner and the viewer read
 * only this. Design: docs/design/openapi/features/vertical-gaps.md -> "Configuration".
 */
export type OpenApiSpacingConfig = {
  /** Half-gap each element owns above and below (px), per element kind. */
  readonly halfGap: Readonly<Record<OpenApiElementKind, number>>
  /** Extra gap between two siblings of a level (px), split into halves that continue the neighbours. */
  readonly levelGap: Readonly<Record<OpenApiLayoutLevel, number>>
  /** Height of a card's opening / closing row, between the border and the first / last row's half (px). */
  readonly cardInnerInset: number
  /** Inset of a nested JSON Schema viewer's first row under an OpenAPI row (px; its own row padding). */
  readonly nestedViewerInset: number
  /** Keep the first element's upper half and the last element's lower half at the viewer's top / bottom. */
  readonly viewerEdges: boolean
  /** Whether card frame rows show the whole card's badge stub when it is wholly added / removed. */
  readonly frameRowBadge: boolean
  /** The bands of one side of a level gap of `height`, between elements of tones `above` and `below`. */
  readonly splitBands: (above: OpenApiSideTone, below: OpenApiSideTone, height: number) => OpenApiBand[]
  /** The badge stub of a level gap of `height`, between elements with badges `above` and `below`. */
  readonly splitBadge: (above: DiffType | undefined, below: DiffType | undefined, height: number) => OpenApiBadgeSegment[]
}

/** One piece if both neighbours look the same, else each half takes its neighbour's look. */
function splitInHalves<T>(above: T, below: T, height: number): { height: number, value: T }[] {
  return above === below
    ? [{ height, value: above }]
    : [{ height: height / 2, value: above }, { height: height / 2, value: below }]
}

export const DEFAULT_OPENAPI_SPACING_CONFIG: OpenApiSpacingConfig = {
  // A nested viewer's first / last row already insets its text (JSON Schema row body, JSO centring).
  halfGap: { row: 4, card: 4, nested: 0 },
  // 4 + 4 + 4 = 12 between the top-level blocks; 4 + 4 = 8 everywhere else.
  levelGap: { operation: 4, operationHeader: 0, security: 0, request: 0, responses: 0, section: 0, card: 0 },
  // Border -> content 8 + the row's own 4 = 12.
  cardInnerInset: 8,
  nestedViewerInset: 4,
  viewerEdges: true,
  frameRowBadge: true,
  splitBands: (above, below, height) => splitInHalves(above, below, height).map(({ height, value }) => ({ height, tone: value })),
  splitBadge: (above, below, height) => splitInHalves(above, below, height).map(({ height, value }) => ({ height, type: value })),
}

export class OpenApiSpacing {
  /** The default config with some entries replaced. */
  public static withOverrides(overrides: Partial<OpenApiSpacingConfig>): OpenApiSpacingConfig {
    return { ...DEFAULT_OPENAPI_SPACING_CONFIG, ...overrides }
  }
}
