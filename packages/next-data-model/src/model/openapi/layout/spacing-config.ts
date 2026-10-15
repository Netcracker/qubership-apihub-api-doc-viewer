import { OpenApiBand, OpenApiBlockEdge, OpenApiSideTone } from "./types"

/**
 * Every adjustable number and rule of the OpenAPI vertical layout, in one object. Change the look by
 * editing `DEFAULT_OPENAPI_SPACING_CONFIG` (or merging an override over it); the planner and the
 * viewer read only this. Design: docs/design/openapi/features/block-separators.md -> "Config".
 */
export type OpenApiSpacingConfig = {
  /** Padding of every row, top and bottom (px). */
  readonly rowPadding: number
  /** Gap between two blocks (px): row padding + separator + row padding. */
  readonly blockGap: number
  /** Height of a card opening / closing row (px). */
  readonly frameRowHeight: number
  /** Offset of the card border from the top of a frame row (px): the middle by default. */
  readonly frameBorderOffset: number
  /** Whether two neighbouring block edges get a separator row between them. */
  readonly needsSeparator: (above: OpenApiBlockEdge, below: OpenApiBlockEdge) => boolean
  /** The bands of one side of a separator of `height`, between rows of tones `above` and `below`. */
  readonly splitBands: (above: OpenApiSideTone, below: OpenApiSideTone, height: number) => OpenApiBand[]
}

export const DEFAULT_OPENAPI_SPACING_CONFIG: OpenApiSpacingConfig = {
  rowPadding: 4,
  blockGap: 20,
  frameRowHeight: 24,
  frameBorderOffset: 12,
  // A frame row already holds the space outside the card.
  needsSeparator: (above, below) => above.kind !== 'frame' && below.kind !== 'frame',
  // One band when both neighbours look the same, else each half takes its neighbour's tone.
  splitBands: (above, below, height) => above === below
    ? [{ height, tone: above }]
    : [{ height: height / 2, tone: above }, { height: height / 2, tone: below }],
}

export class OpenApiSpacing {
  /** Height of a separator row: the block gap minus the padding of the two rows around it. */
  public static separatorHeight(config: OpenApiSpacingConfig): number {
    return config.blockGap - 2 * config.rowPadding
  }

  /** The default config with some entries replaced. */
  public static withOverrides(overrides: Partial<OpenApiSpacingConfig>): OpenApiSpacingConfig {
    return { ...DEFAULT_OPENAPI_SPACING_CONFIG, ...overrides }
  }
}
