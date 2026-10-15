import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { OpenApiBadgeSegment, OpenApiBand, OpenApiBlockEdge, OpenApiSideTone } from "./types"

/** Row padding (px, top and bottom alike) per row kind; `default` for every other row. */
export type OpenApiRowPadding = {
  readonly default: number
  /** The operation ID row (small grey text between the title and the address row). */
  readonly operationId: number
}

/**
 * Every adjustable number and rule of the OpenAPI vertical layout, in one object. Change the look by
 * editing `DEFAULT_OPENAPI_SPACING_CONFIG` (or merging an override over it); the planner and the
 * viewer read only this. Design: docs/design/openapi/features/block-separators.md -> "Config".
 */
export type OpenApiSpacingConfig = {
  /** Padding of the rows, top and bottom (px). */
  readonly rowPadding: OpenApiRowPadding
  /** Gap between two blocks (px): row padding + separator + row padding. */
  readonly blockGap: number
  /** Height of a card opening / closing row (px). */
  readonly frameRowHeight: number
  /** Offset of the card border from the top of a frame row (px): the middle by default. */
  readonly frameBorderOffset: number
  /** Whether card frame rows show the whole card's badge stub when it is wholly added / removed. */
  readonly frameRowBadge: boolean
  /** Whether two neighbouring block edges get a separator row between them. */
  readonly needsSeparator: (above: OpenApiBlockEdge, below: OpenApiBlockEdge) => boolean
  /** The bands of one side of a separator of `height`, between rows of tones `above` and `below`. */
  readonly splitBands: (above: OpenApiSideTone, below: OpenApiSideTone, height: number) => OpenApiBand[]
  /** The badge stub of a separator of `height`, between rows with badges `above` and `below`. */
  readonly splitBadge: (above: DiffType | undefined, below: DiffType | undefined, height: number) => OpenApiBadgeSegment[]
}

/** One piece if both neighbours look the same, else each half takes its neighbour's look. */
function splitInHalves<T>(above: T, below: T, height: number): { height: number, value: T }[] {
  return above === below
    ? [{ height, value: above }]
    : [{ height: height / 2, value: above }, { height: height / 2, value: below }]
}

export const DEFAULT_OPENAPI_SPACING_CONFIG: OpenApiSpacingConfig = {
  rowPadding: { default: 4, operationId: 12 },
  blockGap: 20,
  frameRowHeight: 24,
  frameBorderOffset: 12,
  frameRowBadge: true,
  // A frame row already holds the space outside the card.
  needsSeparator: (above, below) => above.kind !== 'frame' && below.kind !== 'frame',
  splitBands: (above, below, height) => splitInHalves(above, below, height).map(({ height, value }) => ({ height, tone: value })),
  splitBadge: (above, below, height) => splitInHalves(above, below, height).map(({ height, value }) => ({ height, type: value })),
}

export class OpenApiSpacing {
  /** Height of a separator row: the block gap minus the (default) padding of the two rows around it. */
  public static separatorHeight(config: OpenApiSpacingConfig): number {
    return config.blockGap - 2 * config.rowPadding.default
  }

  /** The default config with some entries replaced. */
  public static withOverrides(overrides: Partial<OpenApiSpacingConfig>): OpenApiSpacingConfig {
    return { ...DEFAULT_OPENAPI_SPACING_CONFIG, ...overrides }
  }
}
